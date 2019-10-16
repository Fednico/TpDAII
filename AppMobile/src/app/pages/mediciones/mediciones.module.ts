import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MedicionesPage } from './mediciones.page';
import { PipeKpaPipe } from '../../pipes/pipe-kpa.pipe';


const routes: Routes = [
  {
    path: '',
    component: MedicionesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [MedicionesPage, PipeKpaPipe]
})
export class MedicionesPageModule {}
