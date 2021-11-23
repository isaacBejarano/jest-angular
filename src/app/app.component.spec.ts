import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

let fixture: any, app: AppComponent, vDOM: HTMLElement;

describe('class AppComponent{}', () => {
  beforeEach(async () => {
    // compile Component
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [AppComponent],
    }).compileComponents();

    // create Instance
    fixture = TestBed.createComponent(AppComponent); // simulate Class
    app = fixture.componentInstance; // AppComponent TS
    vDOM = fixture.nativeElement; // AppComponent HTML

    // afterViewInit()
    fixture.detectChanges();
  });

  it('Should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`App have as title 'JEST running on Angular'`, () => {
    expect(app.title).toEqual('JEST running on Angular');
  });

  it('HTML renders title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'JEST running on Angular, fuck yeah!'
    );
  });
});
