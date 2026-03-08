import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessLight } from './success-light';

describe('SuccessLight', () => {
  let component: SuccessLight;
  let fixture: ComponentFixture<SuccessLight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessLight],
    }).compileComponents();

    fixture = TestBed.createComponent(SuccessLight);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
