import { Component, NgZone, OnInit } from '@angular/core';
import { Params } from '@angular/router';
import * as OpenSeadragon from 'openseadragon';

@Component({
  selector: 'sci-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  constructor(private zone: NgZone) { }

  ngOnInit(): void {
    this.makeMap(
      'map_canvas',
      'http://stage.scimaps.org/images/maps/tiles/1996_map_of_science__30',
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


  makeMap(id: string, baseDir: string, params: Params) {
    const viewer = this.zone.runOutsideAngular(() => {
      const width = (Math.pow(params.max_viewable_zoom, 2) + 1) * params.tile_size;
      const os = OpenSeadragon({
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
      console.log(os);
    });
  }

  applyTemplate(string: string, data: Params) {
    return string.replace(/#\{(\w*)\}/g, function() {
      var value = data[ arguments[1] ];
      if (value !== null && value !== undefined) {
        return value;
      } else {
        return "";
      }
    });
  }
}
