import { HttpClient, HttpHandler } from '@angular/common/http';

import { WikiService } from './wiki.service';

jest.mock('./wiki.service'); // mock class WikiService

let handler: HttpHandler;
let XHR: HttpClient;
let service: WikiService;

beforeAll(async () => {
  XHR = new HttpClient(handler /* abstract class HttpHandler*/);
  service = new WikiService(XHR);
});

describe('WikiService', () => {
  it('number of instances', () => {
    expect(WikiService).toHaveBeenCalledTimes(1);
  });

  it('methods are defined', () => {
    expect(service.search).toBeDefined;
  });
});
