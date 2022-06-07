import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from "../environments/environment";
const {apiKey, UA} = environment;

@Injectable()
export class MainInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(this.addApiKey(request));
  }

  addApiKey(request: HttpRequest<any>) {
    return request.clone({
      url: request.url.replace('?api_key', apiKey).replace('/uk-UA', UA)

    });
  }
}
