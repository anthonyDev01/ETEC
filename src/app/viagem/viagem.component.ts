import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-viagem',
  templateUrl: './viagem.component.html',
  styleUrls: ['./viagem.component.css']
})
export class ViagemComponent {
  @Input() imagemUrl: string = '';
}
