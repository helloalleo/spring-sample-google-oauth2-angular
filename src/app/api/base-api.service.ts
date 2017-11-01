import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/do';

@Injectable()
export class BaseApiService {

  constructor(private http: Http) {
  }

  get(url: string) {
    return this
      .http
      .get(url)
      .map((res) => this.processResponse(res));
  }

  post(url: string, data: any) {
    return this
      .http
      .post(url, data)
      .map((res) => this.processResponse(res));
  }

  private processResponse(res: Response) {
    console.log('JSON', res.json());
    return res.json();
  }
}
