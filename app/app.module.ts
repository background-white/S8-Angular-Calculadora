import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { H1Component } from './h1/h1.component';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { MostrarDirective } from './mostrar.directive';
import { FocusDirective } from './focus.directive';
import { ColoresDirective } from './colores.directive';

@NgModule({
  declarations: [
    AppComponent,
    H1Component,
    InputComponent,
    ButtonComponent,
    MostrarDirective,
    FocusDirective,
    ColoresDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
