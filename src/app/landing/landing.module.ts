import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { LandingRoutes } from './landing.routing';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, LandingRoutes],
  declarations: [LandingComponent],
  exports: [LandingComponent]
})
export default class LandingModule {}
