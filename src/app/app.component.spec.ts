import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WikiService } from './04_services/services/wiki.service';

import { AppComponent } from './app.component';

let fixture: ComponentFixture<AppComponent>,
  app: AppComponent,
  DOM: HTMLElement;

beforeEach(async () => {
  // compile Component

  await TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [{ provide: WikiService }],
    declarations: [AppComponent],
  }).compileComponents();

  // create Instance

  fixture = TestBed.createComponent(AppComponent); // test ready
  app = fixture.componentInstance; // instance
  DOM = fixture.nativeElement; // DOM
});

xdescribe('class AppComponent{}', () => {
  // 1. instance

  it('Should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`'title' assigned before ChangeDetection`, () => {
    app.ngOnInit(); // <-- hooks

    expect(app.title).toContain('JEST');
  });

  it(`does not mutate 'title' after OnInit()`, () => {
    app.ngOnInit(); // <-- hooks

    expect(app.title).toEqual('JEST running on Angular');
  });

  // 2. DOM

  it('HTML renders title', () => {
    fixture.detectChanges();
    // changeDetectionStrategy doesn't matter but is only testable when View ready

    expect(DOM.querySelector('.content span')?.textContent).toContain(
      'JEST running on Angular, fuck yeah!'
    );
  });
});

// fdescribe ~ describe.only()
// xdescribe ~ describe.sikp()
// fit ~ it.only()
// xit ~ it.skip()
