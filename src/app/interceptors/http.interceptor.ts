import { Injectable } from '@angular/core';
import {
  ConnectionBackend,
  RequestOptions,
  Request,
  RequestOptionsArgs,
  Response,
  Http,
  Headers,
} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ɵgetDOM as getDOM } from '@angular/platform-browser';

@Injectable()
export class InterceptedHttp extends Http {

  constructor(
    backend: ConnectionBackend,
    defaultOptions: RequestOptions,
  ) {
    super(backend, defaultOptions);
  }

  request(
    url: string | Request,
    options?: RequestOptionsArgs
  ): Observable<Response> {
    return super.request(url, options);
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.get(url, this.getRequestOptionArgs(options));
  }

  post(
    url: string,
    body: string,
    options?: RequestOptionsArgs
  ): Observable<Response> {
    return super.post(url, body, this.getRequestOptionArgs(options));
  }

  put(
    url: string,
    body: string,
    options?: RequestOptionsArgs
  ): Observable<Response> {
    return super.put(url, body, this.getRequestOptionArgs(options));
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.delete(url, this.getRequestOptionArgs(options));
  }

  private getRequestOptionArgs(
    options?: RequestOptionsArgs
  ): RequestOptionsArgs {
    if (options == null) {
      options = new RequestOptions();
    }
    if (options.headers == null) {
      options.headers = new Headers();
    }
    options.headers.append('Content-Type', 'application/json');
    options.headers.append('Accept', 'application/json');
    options.headers.append('Access-Control-Allow-Headers', 'Content-Type, X-XSRF-TOKEN');

    // const xsrfToken = getDOM().getCookie('XSRF-TOKEN');
    // if (!!xsrfToken) {
    //   options.headers.append('X-XSRF-TOKEN', xsrfToken);
    //   console.log('TOKEN ', xsrfToken);
    // }
    // const jsessionid = getDOM().getCookie('JSESSIONID');
    // if (!!jsessionid) {
    //   options.headers.append('JSESSIONID', jsessionid);
    //   console.log('JSESSION ', jsessionid);
    // }
    options.withCredentials = true;
    console.log('OPTIONS ', options);
    // this.setApiKeys(options.headers);
    // this.setParamsSign(options.headers);
    return options;
  }

  // private setApiKeys(headers: Headers): Headers {
  //   let requestedApi = headers.get(AppConstants.REQUESTED_API);
  //   switch (requestedApi) {
  //     case AppConstants.API_ARTICLE: {
  //       // headers.append(
  //         // AppConstants.X_API_KEY,
  //         // this.apiKeysJson.ARTICLE_API_KEY
  //       // );
  //       break;
  //     }
  //     case AppConstants.API_BOARD:
  //       // headers.append(AppConstants.X_API_KEY, this.apiKeysJson.BOARD_API_KEY);
  //       break;
  //   }
  //   return headers;
  // }

  private setParamsSign(headers: Headers): Headers {
    // let queryParams = this.route.snapshot.queryParamMap;
    // console.log('QUERY PARAMS', queryParams);
    // let sign = '';
    // for (let key of queryParams.keys) {
    //   if (key === 'sign' || key === 'hash' || key === 'api_result') {
    //     continue;
    //   }
    //   sign += queryParams.get(key);
    // }
    // headers.append(AppConstants.SIGN_REQUEST, sign);
    // headers.append(AppConstants.SIGN, queryParams.get(AppConstants.SIGN));
    return headers;
  }
}
