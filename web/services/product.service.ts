import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class ProductFetchService {
  constructor(private http: HttpClient) {}

  fetch(url): Promise<any> {
    return Promise.resolve();
  }
}
