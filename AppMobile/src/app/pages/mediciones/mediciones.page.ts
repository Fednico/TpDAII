import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MeasurementsService } from '../../services/measurements.service';
import { Measurement } from '../../model/measurement';

@Component({
  selector: 'app-mediciones',
  templateUrl: './mediciones.page.html',
  styleUrls: ['./mediciones.page.scss'],
})
export class MedicionesPage implements OnInit {

  public idDispositivo: number;
  public listadoMediciones:Measurement[];
  constructor(private route: ActivatedRoute, public measureServ: MeasurementsService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.idDispositivo= params['idDevice'];
      this.measureServ.getAllMeasurementsById(this.idDispositivo).then((valores)=>{
        this.listadoMediciones= <Measurement[]> valores;
      });
      });
  }
  }


