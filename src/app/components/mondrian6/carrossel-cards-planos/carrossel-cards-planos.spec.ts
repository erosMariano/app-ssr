import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosselCardsPlanos } from './carrossel-cards-planos';

describe('CarrosselCardsPlanos', () => {
  let component: CarrosselCardsPlanos;
  let fixture: ComponentFixture<CarrosselCardsPlanos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrosselCardsPlanos],
    }).compileComponents();

    fixture = TestBed.createComponent(CarrosselCardsPlanos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
