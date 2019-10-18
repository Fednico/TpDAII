import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Measurement } from '../model/measurement';

@Injectable({
  providedIn: 'root'
})

export class MeasurementsService {

  public Medicion:Measurement;
  
  constructor(private http: HttpClient) { }

  async getAllMeasurementsById(id: number) {
    return await this.http.get<Measurement[]>('http://localhost:3500/measurements/all/' + id).toPromise();
  }

  async getLastMeasurementById(id: number) {
    return await this.http.get<Measurement>('http://localhost:3500/measurements/last/' + id).toPromise();
  }
}