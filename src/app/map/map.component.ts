import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MapService} from "./map.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {

  constructor(private mapService: MapService) {
  }


  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.mapService.initMap()
  }

}
