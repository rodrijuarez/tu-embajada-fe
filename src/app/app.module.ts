import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutes],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
