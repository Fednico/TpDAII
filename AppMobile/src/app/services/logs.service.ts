import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Logs } from '../model/logs';

@Injectable({
  providedIn: 'root'
})
export class LogsService {


  constructor(private http: HttpClient) { }

  async getAllLogById(id: number) {
    return await this.http.get<Logs[]>('http://localhost:3500/log/' + id).toPromise();
  }

  async guardarLog(log :Logs){
    return await this.http.post('http://localhost:3500/log/insert', {log: log}).toPromise();
  }
}
