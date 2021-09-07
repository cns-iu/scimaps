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
  tile = 'map_of_the_internet_172';
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

  ngAfterViewInit(): void {
    this.makeMap(
      'map_canvas',
      `${this.baseURL}/${this.tile}`, {
        zoom_origin: 0,
        min_viewable_zoom: 1,
        max_viewable_zoom: 4,
        tile_size: 256,
        other: {}
      }
    );
  }


  private makeMap(id: string, baseDir: string, params: Params): void {
    this.zone.runOutsideAngular(() => {
      const width = (Math.pow(params.max_viewable_zoom, 2) + 1) * params.tile_size;
      OpenSeadragon({
        id,
        prefixUrl: 'https://cdnjs.cloudflare.com/ajax/libs/openseadragon/2.3.1/images/',
        defaultZoomLevel: params.zoom_origin,
        maxZoomLevel: params.max_viewable_zoom,
        tileSources: {
          height: width,
          width,
          tileSize: params.tile_size,
          minLevel: params.min_viewable_zoom,
          maxLevel: params.max_viewable_zoom,
          getTileUrl: (zoom, x, y) => {
            return baseDir + '/' + `${zoom}_${x}_${y}.png`;
          }
        }
      });
    });
  }

  close(): void {
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
