import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

let fixture: ComponentFixture<HomeComponent>,
  home: HomeComponent,
  DOM: HTMLElement;

beforeEach(async () => {
  // compile Component

  await TestBed.configureTestingModule({
    imports: [],
    declarations: [HomeComponent],
  }).compileComponents();

  // create Instance

  fixture = TestBed.createComponent(HomeComponent); // simulate Class
  home = fixture.componentInstance; // AppComponent TS
  DOM = fixture.nativeElement; // AppComponent HTML
});

xdescribe('class HomeComponent{}', () => {
  // 1. instance
  it('should create app-home', () => {
    expect(home).toBeTruthy();
  });

  it(`'h1' and 'p' are assigned before ChangeDetection`, () => {
    expect(home.h1).toEqual('title');
    expect(home.p).toEqual('paragraph');
  });

  it(`mutates 'h1' and 'p' tags after OnInit()`, () => {
    home.ngOnInit(); // <-- hooks

    expect(home.h1).toContain('Home');
    expect(home.p).toContain('home');
  });

  // 2. DOM
  it(`HTML renders 'h1' and 'p' after OnInit()`, () => {
    fixture.detectChanges();
    // changeDetectionStrategy doesn't matter but is only testable when View ready

    home.ngOnInit(); // <-- hooks

    expect(DOM.querySelector('h1')?.textContent).toEqual('This is Home, Babe!');
    expect(DOM.querySelector('p')?.textContent).toEqual('home works!');
  });
});
