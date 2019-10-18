import { Injectable } from '@angular/core';
import { Device } from '../model/devices';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class DispositivosService {

  private listadoDispositivos: Device[];
  //public dispositivo: Device;

  
  constructor(private http: HttpClient) {}

  async getDevices(){
    return await this.http.get<Device[]>('http://localhost:3500/devices').toPromise();
  }
  async getDevice(id: number) {
    return await this.http.get<Device>('http://localhost:3500/devices/' + id).toPromise();
  }
}


  /*
   get(id): Device {
    return this.listadoAlumnos.find(alumno => alumno.id == id);
  }

  guardar(alumno:Alumno){
    console.log("Guardo alumno");
  }

  public eliminar(alumno:Alumno){
    this.listadoAlumnos.splice(this.listadoAlumnos.indexOf(alumno),1);
    console.log(this.listadoAlumnos.length);
  }
*/
