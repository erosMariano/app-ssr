import { Component, Input } from '@angular/core';
import { Aparelho } from '../../../models/aparelho.model';

@Component({
  selector: 'app-carrossel-cards-aparelhos',
  imports: [],
  templateUrl: './carrossel-cards-aparelhos.html',
  styleUrl: './carrossel-cards-aparelhos.scss',
})
export class CarrosselCardsAparelhos {
  @Input() aparelhos: Aparelho[] = [
    {
      codProduto: '000000000000019166',
      fabricante: 'Samsung',
      nome: 'GALAXY A06 5G 128GB',
      imagem:
        'https://planoscelular.claro.com.br/medias/515Wx515H-productMain-19070-zero.png?context=bWFzdGVyfGltYWdlc3wyODU2NTh8aW1hZ2UvcG5nfGFHUmtMMmd6TlM4eE1ESTBPRFEzTlRZd056QTNNQzgxTVRWWGVEVXhOVWhmY0hKdlpIVmpkRTFoYVc1Zk1Ua3dOekJmZW1WeWJ5NXdibWN8ZTg1NDViOGZlOWVmODg5OTAyZjc3YjJmZmVlOTJjOWQ1MTU5MTkxZjRiZWZkMmExY2U2NTYyMmU4MmExYWE3NQ',
      planoPrincipal: 'Controle 35GB',
      precoDe: '1.514,00',
      precoInteiro: '549',
      precoDecimal: '00',
      precoParcelado: '26,86',
      parcelas: 21,
      link: '/celulares/samsung-galaxy-a06-5g-128gb-preto/p/000000000000019166',
    },
    {
      codProduto: '000000000000019200',
      fabricante: 'Samsung',
      nome: 'GALAXY A16 5G 128GB',
      imagem:
        'https://planoscelular.claro.com.br/medias/515Wx515H-productMain-19070-zero.png?context=bWFzdGVyfGltYWdlc3wyODU2NTh8aW1hZ2UvcG5nfGFHUmtMMmd6TlM4eE1ESTBPRFEzTlRZd056QTNNQzgxTVRWWGVEVXhOVWhmY0hKdlpIVmpkRTFoYVc1Zk1Ua3dOekJmZW1WeWJ5NXdibWN8ZTg1NDViOGZlOWVmODg5OTAyZjc3YjJmZmVlOTJjOWQ1MTU5MTkxZjRiZWZkMmExY2U2NTYyMmU4MmExYWE3NQ',
      planoPrincipal: 'Controle 50GB',
      precoDe: '1.899,00',
      precoInteiro: '799',
      precoDecimal: '00',
      precoParcelado: '38,05',
      parcelas: 21,
      link: '/celulares/samsung-galaxy-a16-5g-128gb/p/000000000000019200',
    },
    {
      codProduto: '000000000000019350',
      fabricante: 'Samsung',
      nome: 'GALAXY A35 5G 128GB',
      imagem:
        'https://planoscelular.claro.com.br/medias/515Wx515H-productMain-19070-zero.png?context=bWFzdGVyfGltYWdlc3wyODU2NTh8aW1hZ2UvcG5nfGFHUmtMMmd6TlM4eE1ESTBPRFEzTlRZd056QTNNQzgxTVRWWGVEVXhOVWhmY0hKdlpIVmpkRTFoYVc1Zk1Ua3dOekJmZW1WeWJ5NXdibWN8ZTg1NDViOGZlOWVmODg5OTAyZjc3YjJmZmVlOTJjOWQ1MTU5MTkxZjRiZWZkMmExY2U2NTYyMmU4MmExYWE3NQ',
      planoPrincipal: 'Pós 60GB',
      precoDe: '2.299,00',
      precoInteiro: '1.099',
      precoDecimal: '00',
      precoParcelado: '52,33',
      parcelas: 21,
      link: '/celulares/samsung-galaxy-a35-5g-128gb/p/000000000000019350',
    },
    {
      codProduto: '000000000000019500',
      fabricante: 'Samsung',
      nome: 'GALAXY S24 FE 128GB',
      imagem:
        'https://planoscelular.claro.com.br/medias/515Wx515H-productMain-19070-zero.png?context=bWFzdGVyfGltYWdlc3wyODU2NTh8aW1hZ2UvcG5nfGFHUmtMMmd6TlM4eE1ESTBPRFEzTlRZd056QTNNQzgxTVRWWGVEVXhOVWhmY0hKdlpIVmpkRTFoYVc1Zk1Ua3dOekJmZW1WeWJ5NXdibWN8ZTg1NDViOGZlOWVmODg5OTAyZjc3YjJmZmVlOTJjOWQ1MTU5MTkxZjRiZWZkMmExY2U2NTYyMmU4MmExYWE3NQ',
      planoPrincipal: 'Pós 80GB',
      precoDe: '3.999,00',
      precoInteiro: '1.899',
      precoDecimal: '00',
      precoParcelado: '90,43',
      parcelas: 21,
      link: '/celulares/samsung-galaxy-s24-fe-128gb/p/000000000000019500',
    },
    {
      codProduto: '000000000000019600',
      fabricante: 'Samsung',
      nome: 'GALAXY S24 128GB',
      imagem:
        'https://planoscelular.claro.com.br/medias/515Wx515H-productMain-19070-zero.png?context=bWFzdGVyfGltYWdlc3wyODU2NTh8aW1hZ2UvcG5nfGFHUmtMMmd6TlM4eE1ESTBPRFEzTlRZd056QTNNQzgxTVRWWGVEVXhOVWhmY0hKdlpIVmpkRTFoYVc1Zk1Ua3dOekJmZW1WeWJ5NXdibWN8ZTg1NDViOGZlOWVmODg5OTAyZjc3YjJmZmVlOTJjOWQ1MTU5MTkxZjRiZWZkMmExY2U2NTYyMmU4MmExYWE3NQ',
      planoPrincipal: 'Pós 80GB',
      precoDe: '5.299,00',
      precoInteiro: '2.499',
      precoDecimal: '00',
      precoParcelado: '119,00',
      parcelas: 21,
      link: '/celulares/samsung-galaxy-s24-128gb/p/000000000000019600',
    },
  ];
}
