import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerCarrossel } from './banner-carrossel';

describe('BannerCarrossel', () => {
  let component: BannerCarrossel;
  let fixture: ComponentFixture<BannerCarrossel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerCarrossel],
    }).compileComponents();

    fixture = TestBed.createComponent(BannerCarrossel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
