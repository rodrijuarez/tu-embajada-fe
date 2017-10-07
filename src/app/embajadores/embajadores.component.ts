import { Component } from '@angular/core';
import { EmbajadoresService } from './embajadores.service';

@Component({
  selector: 'app-embajadores',
  templateUrl: './embajadores.component.html',
  styleUrls: ['./embajadores.component.css']
})
export class EmbajadoresComponent {
  embajadores = [];

  constructor(private embajadoresService: EmbajadoresService) {
    this.embajadoresService.getEmbajadores().subscribe(result => {
      this.embajadores = result.json();
      console.log('this.embajadores', this.embajadores);
    });
  }
}
