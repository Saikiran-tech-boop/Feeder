import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { LoginComponent } from './login.component';

declare const google: any;

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {

    const mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        { provide: Router, useValue: mockRouter }, 
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;

  
    (window as any).google = {
      accounts: {
        id: {
          initialize: jasmine.createSpy('initialize'),
          renderButton: jasmine.createSpy('renderButton'),
        },
      },
    };
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize Google sign-in button on ngOnInit', () => {
    fixture.detectChanges(); 
    expect(google.accounts.id.initialize).toHaveBeenCalled();
    expect(google.accounts.id.renderButton).toHaveBeenCalledWith(
      document.getElementById('google-btn'),
      {
        theme: 'filled_blue',
        size: 'large',
        shape: 'rectangle',
        width: 250,
      }
    );
  });

  it('should handle login and navigate to home', () => {
    const mockToken = btoa(JSON.stringify({ sub: '123', name: 'John Doe' }));
    const response = { credential: `header.${mockToken}.signature` };

    spyOn(sessionStorage, 'setItem');

    component.handleLogin(response);

    expect(sessionStorage.setItem).toHaveBeenCalledWith(
      'loggerInUser',
      JSON.stringify({ sub: '123', name: 'John Doe' })
    );
    expect(routerSpy.navigate).toHaveBeenCalledWith(['home']);
  });
});
