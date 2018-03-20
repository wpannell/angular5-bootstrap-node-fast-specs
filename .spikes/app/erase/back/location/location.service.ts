import {Injectable} from '@angular/core';
import {Location} from '@angular/common';

@Injectable()
export class LocationService {
  constructor(private locator: Location) {}

  back() {
    this.locator.back();
  }
}
