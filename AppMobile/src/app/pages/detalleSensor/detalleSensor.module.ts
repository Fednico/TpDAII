import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetalleSensorPage } from './detalleSensor.page';
import { DirButtonsDirective } from '../../directives/dir-buttons.directive';


const routes: Routes = [
  {
    path: '',
    component: DetalleSensorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetalleSensorPage,DirButtonsDirective]
})
export class DetalleSensorPageModule {}
