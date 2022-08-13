import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadorComponent } from './contador/contador.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListadoComponent } from './heroes/listado/listado.component';



@NgModule({
  declarations: [
    ContadorComponent,
    HeroeComponent,
    ListadoComponent,
  ],
  exports: [
    ContadorComponent,
    HeroeComponent,
    ListadoComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
