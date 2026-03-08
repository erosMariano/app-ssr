import { Component } from '@angular/core';
import { BannerCarrossel } from "../../components/banner-carrossel/banner-carrossel";
import { RouterLink } from "@angular/router";
import { SuccessLight } from '../../components/mondrian6/alert/success-light/success-light';
import { FaqPortabilidade } from '../../components/faq-portabilidade/faq-portabilidade';
import { CarrosselCardsAparelhos } from '../../components/mondrian6/carrossel-cards-aparelhos/carrossel-cards-aparelhos';
import { CarrosselCardsPlanos } from "../../components/mondrian6/carrossel-cards-planos/carrossel-cards-planos";

@Component({
  selector: 'app-home',
  imports: [BannerCarrossel, RouterLink, SuccessLight, FaqPortabilidade, CarrosselCardsAparelhos, CarrosselCardsPlanos],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
