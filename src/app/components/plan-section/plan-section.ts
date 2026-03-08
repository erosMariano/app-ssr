import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SuccessLight } from '../mondrian6/alert/success-light/success-light';

@Component({
  selector: 'app-plan-section',
  imports: [RouterLink, SuccessLight],
  templateUrl: './plan-section.html',
  styleUrl: './plan-section.scss',
})
export class PlanSection {
  @Input() titulo = '';
  @Input() subtitulo = '';
  @Input() link = '';
  @Input() linkTexto = '';
  @Input() fundo: 'cinza' | 'branco' = 'cinza';
}
