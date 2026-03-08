import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqPortabilidade } from './faq-portabilidade';

describe('FaqPortabilidade', () => {
  let component: FaqPortabilidade;
  let fixture: ComponentFixture<FaqPortabilidade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqPortabilidade],
    }).compileComponents();

    fixture = TestBed.createComponent(FaqPortabilidade);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
