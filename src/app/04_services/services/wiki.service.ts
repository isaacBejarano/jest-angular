import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pluck } from 'rxjs';

import { i_Wiki, i_WikiArticle } from 'src/app/interfaces/wiki.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WikiService {
  constructor(private XHR: HttpClient) {}

  search(term: string): Observable<i_WikiArticle[]> {
    const params = {
      action: 'query',
      format: 'json',
      list: 'search',
      srsearch: term,
      // srlimit : 5,
      utf8: '1',
      origin: '*', // <- vs. CORS!
    };

    return this.XHR.get<i_Wiki>(environment.wiki.api, { params }).pipe(
      pluck('query', 'search') // ~ map((o: any) => o.query.search)
    );
  }
}
