import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { RoutingModule } from './routing/routing.module';
import { RouterTestingModule } from '@angular/router/testing';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NavbarModule, RoutingModule, RouterTestingModule],
      declarations: [
        AppComponent
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
