import { AfterViewInit, Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as OpenSeadragon from 'openseadragon';
import { drawerInOut } from '../../../constants/drawer.animations';

@Component({
  selector: 'sci-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
  animations: [drawerInOut]
})
export class TileComponent implements OnInit, AfterViewInit {

  constructor(private zone: NgZone, private route: ActivatedRoute, private router: Router) { }
  baseURL = 'https://scimaps.org/assets/map-tiles';
  tile: string = 'map_of_the_internet_172'; 
  show = false;
  ngOnInit(): void {
    this.show = true;
    const parentSnapshot = this.route.parent?.snapshot;
    const map = parentSnapshot?.data.map;
    if (map) {
      const segments = map.externalLink.split('/');
      this.tile = segments[segments.length  - 2];
    }
  }

  ngAfterViewInit() {
    this.makeMap(
      'map_canvas',
      `${this.baseURL}/${this.tile}`,
      {
        zoom_origin: 0,
        min_viewable_zoom: 1,
        max_viewable_zoom: 4,
				background_color: "#333",
				tile_file_template: "#{zoom}_#{x}_#{y}.png",
				tile_size: 256,
				info_text: 'See <a href="/mapdetail/1996_map_of_science__30">this page</a> for info, including copyright',
        other: {}
      }
    );
  }


  private makeMap(id: string, baseDir: string, params: Params) {
    this.zone.runOutsideAngular(() => {
      const width = (Math.pow(params.max_viewable_zoom, 2) + 1) * params.tile_size;
      const openSeadragon = OpenSeadragon({
        id: id,
				prefixUrl: "https://cdnjs.cloudflare.com/ajax/libs/openseadragon/2.3.1/images/",
        defaultZoomLevel: params.zoom_origin,
        maxZoomLevel: params.max_viewable_zoom,
        tileSources: {
          height: width,
          width: width,
          tileSize: params.tile_size,
          minLevel: 1,
          maxLevel: 4,
          getTileUrl: (zoom, x, y) => {
            const templateArguments = { 'zoom': zoom, 'x': x, 'y': y};
            return this.applyTemplate(baseDir + '/' + params.tile_file_template , templateArguments);
          } 
        }
      });
    });
  }

  private applyTemplate(string: string, data: Params) {
    return string.replace(/#\{(\w*)\}/g, function() {
      var value = data[ arguments[1] ];
      if (value !== null && value !== undefined) {
        return value;
      } else {
        return "";
      }
    });
  }

  close() {
    const parentSnapshot = this.route.parent?.snapshot;
    const params: Params | undefined = parentSnapshot?.params;
    this.show = false;
    setTimeout(() => {
      if (params) {
        this.router.navigate(['/', 'map', params?.iteration,  params?.sequence]);
      }
    }, 500);
  }
}
