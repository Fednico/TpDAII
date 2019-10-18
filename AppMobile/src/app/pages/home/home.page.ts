import { Component } from '@angular/core';
import { DispositivosService } from '../../services/dispositivos.service';
import { Device } from '../../model/devices';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listadoDispositivos: Device[];

  constructor( public deviceServ: DispositivosService, private _router:Router) {
    this.deviceServ.getDevices().then((listado)=>{
      this.listadoDispositivos = listado as Device[];
  });
  }


  detalleSensor(idDevice: number){
    this._router.navigate(['detallesensor', idDevice]);
  }
}
