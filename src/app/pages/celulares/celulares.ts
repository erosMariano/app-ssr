import { Component } from '@angular/core';
import { CarrosselCardsAparelhos } from "../../components/mondrian6/carrossel-cards-aparelhos/carrossel-cards-aparelhos";

@Component({
  selector: 'app-celulares',
  imports: [CarrosselCardsAparelhos],
  templateUrl: './celulares.html',
  styleUrl: './celulares.scss',
})
export class Celulares {}
