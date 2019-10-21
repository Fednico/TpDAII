import { Injectable } from '@angular/core';
import { Device } from '../model/devices';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class DispositivosService {

  private listadoDispositivos: Device[];
  
  constructor(private http: HttpClient) {}

  async getDevices(){
    return await this.http.get<Device[]>('http://localhost:3500/devices').toPromise();
  }
  async getDevice(id: number) {
    return await this.http.get<Device>('http://localhost:3500/devices/' + id).toPromise();
  }
}
