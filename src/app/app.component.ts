import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { WikiService } from './04_services/services/wiki.service';
import { i_WikiArticle } from './interfaces/wiki.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'JEST running on Angular';
  wikies$!: Observable<i_WikiArticle[]>;

  constructor(private readonly Wiki: WikiService) {}

  ngOnInit(): void {
    this.wikies$ = this.Wiki.search('angular material').pipe(tap(console.dir));
  }
}
