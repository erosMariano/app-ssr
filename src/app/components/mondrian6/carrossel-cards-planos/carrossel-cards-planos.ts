import { Component, Input } from '@angular/core';
import { Plano } from '../../../models/plano.model';

@Component({
  selector: 'app-carrossel-cards-planos',
  imports: [],
  templateUrl: './carrossel-cards-planos.html',
  styleUrl: './carrossel-cards-planos.scss',
})
export class CarrosselCardsPlanos {
  @Input() planos: Plano[] = [
    {
      tipo: 'Claro Controle',
      dados: '30GB',
      detalhes: ['15GB Livres', '+ 10GB de Bônus Livres', '+ 5GB Bônus para Redes Sociais e Apps'],
      preco: '59,90',
      linkDetalhes: '/controle',
    },
    {
      tipo: 'Claro Controle',
      dados: '50GB',
      detalhes: ['30GB Livres', '+ 15GB de Bônus Livres', '+ 5GB Bônus para Redes Sociais e Apps'],
      preco: '79,90',
      linkDetalhes: '/controle',
    },
    {
      tipo: 'Claro Controle',
      dados: '35GB',
      detalhes: ['20GB Livres', '+ 10GB de Bônus Livres', '+ 5GB Bônus para Redes Sociais e Apps'],
      preco: '69,90',
      linkDetalhes: '/controle',
    },
  ];
}
