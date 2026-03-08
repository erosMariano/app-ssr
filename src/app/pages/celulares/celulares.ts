import { Component, computed } from '@angular/core';
import { CarrosselCardsAparelhos } from '../../components/mondrian6/carrossel-cards-aparelhos/carrossel-cards-aparelhos';
import { httpResource } from '@angular/common/http';
import { DecimalPipe } from '@angular/common';

interface Products {
  id: number;
  title: string;
  price: number;
}
interface ProductsResponse {
  products: Products[];
}
@Component({
  selector: 'app-celulares',
  imports: [CarrosselCardsAparelhos, DecimalPipe],
  templateUrl: './celulares.html',
  styleUrl: './celulares.scss',
})
export class Celulares {
  productsResponse = httpResource<ProductsResponse>(() => 'https://dummyjson.com/products/');
  products = computed(() => this.productsResponse.value()?.products || []);
}
