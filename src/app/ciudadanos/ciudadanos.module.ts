import { CiudadanosComponent } from './ciudadanos.component';
import { CiudadanosRoutes } from './ciudadanos.routing';
import { CiudadanosService } from './ciudadanos.service';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, CiudadanosRoutes, HttpModule],
  declarations: [CiudadanosComponent],
  providers: [CiudadanosService]
})
export default class CiudadanosModule {}
