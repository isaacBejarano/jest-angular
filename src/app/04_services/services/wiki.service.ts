import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, pluck } from 'rxjs';
import { environment } from 'src/environments/environment';

import { i_Wiki, i_WikiArticle } from 'src/app/interfaces/wiki.interface';

@Injectable({
  providedIn: 'root',
})
export class WikiService {
  constructor(private HXR: HttpClient) {}

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

    return this.HXR.get<i_Wiki>(environment.wiki.api, { params }).pipe(
      pluck('query', 'search') // ~ map((o: any) => o.query.search)
    );
  }
}
