import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class ProductFetchService {
  constructor(private http: HttpClient) {}

  fetch(url): Promise<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(
      url, {
        headers: headers
      }
    ).toPromise();
  }
}
