import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecorativeComponent } from './decorative.component';

describe('DecorativeComponent', () => {
  let component: DecorativeComponent;
  let fixture: ComponentFixture<DecorativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecorativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecorativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
