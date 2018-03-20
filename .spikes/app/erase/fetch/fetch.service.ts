import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class EraseFetchService {
  constructor(private  http: HttpClient) {}

  fetch(requestId: string): Promise<any> {
    const url = `${environment.api}/requests/${requestId}/details`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(url, {headers: headers}).toPromise<any>();
  }
}
