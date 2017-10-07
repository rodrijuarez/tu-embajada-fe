import { CommonModule } from '@angular/common';
import { EmbajadoresComponent } from './embajadores.component';
import { EmbajadoresRoutes } from './embajadores.routing';
import { EmbajadoresService } from './embajadores.service';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, EmbajadoresRoutes, HttpModule],
  declarations: [EmbajadoresComponent],
  providers: [EmbajadoresService]
})
export default class EmbajadoresModule {}
