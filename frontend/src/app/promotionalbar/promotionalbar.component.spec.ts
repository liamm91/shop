import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionalbarComponent } from './promotionalbar.component';

describe('PromotionalbarComponent', () => {
  let component: PromotionalbarComponent;
  let fixture: ComponentFixture<PromotionalbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionalbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionalbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
