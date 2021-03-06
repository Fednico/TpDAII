import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  { path: 'detallesensor/:idDevice', loadChildren: './pages/detalleSensor/detalleSensor.module#DetalleSensorPageModule' },
  { path: 'mediciones/:idDevice', loadChildren: './pages/mediciones/mediciones.module#MedicionesPageModule' },
  { path: 'log-riegos/:idDevice', loadChildren: './pages/log-riegos/log-riegos.module#LogRiegosPageModule' },
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
