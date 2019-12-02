import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatcherSignupComponent } from './matcher-signup.component';

describe('MatcherSignupComponent', () => {
  let component: MatcherSignupComponent;
  let fixture: ComponentFixture<MatcherSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatcherSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatcherSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
