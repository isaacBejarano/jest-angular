import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1>{{ h1 }}, Babe!</h1>
    <p>{{ p }}</p>
  `,
  styles: ['h1 { font-weight: bolder; }', 'p { color: red; }'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HomeComponent implements OnInit {
  h1 = 'title';
  p = 'paragraph';

  constructor() {}

  ngOnInit(): void {
    this.h1 = 'This is Home';
    this.p = 'home works!';
  }
}
