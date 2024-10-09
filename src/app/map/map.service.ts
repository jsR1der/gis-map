import {Injectable} from '@angular/core';
import * as Leaflet from "leaflet";

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private leafletMap: Leaflet.Map

  get map(): Leaflet.Map {
    return this.leafletMap;
  }

  constructor() {
  }

  public initializeMap(): Leaflet.Map {
    return Leaflet.map('map', {
      center: [49.8397, 24.0297],
      zoom: 10
    });
  }

  public initializeTiles(): any {
    return Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
  }

  public initMap(): void {
    this.leafletMap = this.initializeMap();
    const tiles = this.initializeTiles();
    tiles.addTo(this.leafletMap);
  }
}
