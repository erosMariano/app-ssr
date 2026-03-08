import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosselCardsAparelhos } from './carrossel-cards-aparelhos';

describe('CarrosselCardsAparelhos', () => {
  let component: CarrosselCardsAparelhos;
  let fixture: ComponentFixture<CarrosselCardsAparelhos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrosselCardsAparelhos],
    }).compileComponents();

    fixture = TestBed.createComponent(CarrosselCardsAparelhos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
