import {
  HttpClient,
  HttpHandler,
} from '@angular/common/http';

import { WikiService } from './wiki.service';


let handler: HttpHandler;
let XHR: HttpClient;
let service: WikiService;

beforeEach(() => {
  XHR = new HttpClient(handler /* abstract class HttpHandler*/);
  service = new WikiService(XHR);
});

xdescribe('WikiService', () => {
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have method "search()"', () => {
    expect(service.search).toBeTruthy();
  });
});
