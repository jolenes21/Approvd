import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaybesComponent } from './maybes.component';

describe('MaybesComponent', () => {
  let component: MaybesComponent;
  let fixture: ComponentFixture<MaybesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaybesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaybesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
