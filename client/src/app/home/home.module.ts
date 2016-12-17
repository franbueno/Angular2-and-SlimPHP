// Importar el servicio DatosService desde el fichero
import { DatosService } from './datos.service';

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Importa un componente que declara y que luego exporta */
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  providers: [
    DatosService
  ]
})
export class HomeModule { }
