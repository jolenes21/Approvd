import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MatcheeSignupComponent } from "./matchee-signup.component";

describe("SignupComponent", () => {
  let component: MatcheeSignupComponent;
  let fixture: ComponentFixture<MatcheeSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MatcheeSignupComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatcheeSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("form data should equal submission data", () => {
    expect(component.loginForm).toEqual(component.signUpService);
  });
});
