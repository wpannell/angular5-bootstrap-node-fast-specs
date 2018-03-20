import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import {environment} from '../../../environments/environment';

@Injectable()
export class BrowseFetchService {
  constructor(private http: HttpClient) {}

  fetch(type): Promise<any> {
    const url = `${environment.api}/requests`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('type', type);

    return this.http.get(
      url, {
        params: params,
        headers: headers
      }
    ).toPromise();
  }
}
