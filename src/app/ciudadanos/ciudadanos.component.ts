import { CiudadanosService } from './ciudadanos.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ciudadanos',
  templateUrl: './ciudadanos.component.html',
  styleUrls: ['./ciudadanos.component.css']
})
export class CiudadanosComponent {
  ciudadanos = [];

  constructor(private ciudadanosService: CiudadanosService) {
    this.ciudadanosService.getCiudadanos().subscribe(result => {
      this.ciudadanos = result.json();
      console.log('this.ciudadanos', this.ciudadanos);
    });
  }
}
