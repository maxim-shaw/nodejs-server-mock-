import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, Route, Router, RouterModule} from '@angular/router';
import {BackendService} from './backend.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        CommonModule,
        RouterModule
      ],
      providers: [ BackendService, HttpClient, HttpHandler, ActivatedRoute, { provide: Router, useClass: MockRouter} ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});

class MockRouter {
  navigate = jasmine.createSpy('navigate');
}
