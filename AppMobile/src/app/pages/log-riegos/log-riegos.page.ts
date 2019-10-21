import { Component, OnInit } from '@angular/core';
import { Logs } from '../../model/logs';

@Component({
  selector: 'app-log-riegos',
  templateUrl: './log-riegos.page.html',
  styleUrls: ['./log-riegos.page.scss'],
})
export class LogRiegosPage implements OnInit {
  
  public idDispositivo: number;
  public listadoLogs: Logs[];

  constructor(private route: ActivatedRoute, public measureServ: MeasurementsService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.idDispositivo= params['idDevice'];
      this.measureServ.getAllMeasurementsById(this.idDispositivo).then((valores)=>{
        this.listadoMediciones= <Measurement[]> valores;
        console.log(this.listadoMediciones);
      });
      });
  }

}


