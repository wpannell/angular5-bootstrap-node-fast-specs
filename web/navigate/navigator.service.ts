import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class NavigatorService {
  private myPayload: any;
  constructor(private router: Router) {}

  goto(destination: Array<string>, payload: any): Promise<any> {
    this.myPayload = payload;
    return this.router.navigate(destination);
  }

  payload(): any {
    return this.myPayload;
  }
}
