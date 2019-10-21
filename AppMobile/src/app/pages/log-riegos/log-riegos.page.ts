import { Component, OnInit } from '@angular/core';
import { Logs } from '../../model/logs';
import { LogsService } from '../../services/logs.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-log-riegos',
  templateUrl: './log-riegos.page.html',
  styleUrls: ['./log-riegos.page.scss'],
})
export class LogRiegosPage implements OnInit {
  
  public idDispositivo: number;
  public listadoLogs: Logs[];

  constructor(private route: ActivatedRoute, public logServ: LogsService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.idDispositivo= params['idDevice'];
      this.logServ.getAllLogById(this.idDispositivo).then((listado:Logs[])=>{
        this.listadoLogs=listado;
      });
      });
  }

}


