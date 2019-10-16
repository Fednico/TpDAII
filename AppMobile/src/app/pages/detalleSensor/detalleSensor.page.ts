import { Component, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DispositivosService } from '../../services/dispositivos.service';
import { MeasurementsService } from '../../services/measurements.service';
import { Measurement } from '../../model/measurement';
import { ToastController } from '@ionic/angular';
import { Device } from '../../model/devices';

declare var require: any;
require('highcharts/highcharts-more')(Highcharts);
require('highcharts/modules/solid-gauge')(Highcharts);

@Component({
  selector: 'app-detalle-sensor',
  templateUrl: './detalleSensor.page.html',
  styleUrls: ['./detalleSensor.page.scss'],
})


export class DetalleSensorPage {

  public idDispositivo: number;
  private valorObtenido: number;
  public myChart;
  private chartOptions;
  public Dispositivo: Device;
  public Medicion: Measurement;

  // tslint:disable-next-line: variable-name
  constructor(private _router: Router, private route: ActivatedRoute,
              public deviceServ: DispositivosService, public measureServ: MeasurementsService, public toastController: ToastController) {
                this.route.params.subscribe((params: Params) => {
                  this.idDispositivo= params['idDevice'];
                });

  }
  ionViewWillEnter(){

      this.generarChart();
      this.measureServ.getLastMeasurementById(this.idDispositivo).then((ultimaMedicion) => {
        this.Medicion = ultimaMedicion as Measurement;
      });
  
    }
  ionViewDidEnter() {

     this.actualizarChart(this.Medicion.valor);
     
  }

  generarChart() {
    this.chartOptions={
      chart: {
          type: 'gauge',
          plotBackgroundColor: null,
          plotBackgroundImage: null,
          plotBorderWidth: 0,
          plotShadow: false
        }
        ,title: {
          text: 'Sensor N°'+ this.idDispositivo
        }

        ,credits:{enabled:false}


        ,pane: {
            startAngle: -150,
            endAngle: 150
        }
        // the value axis
      ,yAxis: {
        min: 0,
        max: 100,

        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',

        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'kPA'
        },
        plotBands: [{
            from: 0,
            to: 10,
            color: '#55BF3B' // green
        }, {
            from: 10,
            to: 30,
            color: '#DDDF0D' // yellow
        }, {
            from: 30,
            to: 100,
            color: '#DF5353' // red
        }]
    }
    ,

    series: [{
        name: 'kPA',
        data: [0],
        tooltip: {
            valueSuffix: ' kPA'
        }
    }]

    };
    this.myChart = Highcharts.chart('highcharts', this.chartOptions );
  }

  Mediciones(){
    this._router.navigate(['mediciones',this.idDispositivo]);
  }

  actualizarChart(valor: number){
    setTimeout(() => {
     // console.log("valor a actualizar: "+valor);
      this.myChart.update({series: [{
          name: 'kPA',
          data: [valor],
          tooltip: {
              valueSuffix: ' kPA'
          }
      }]});
    }, 2000);

  }

  abrirElectrovalvula(){
    this.deviceServ.getDevice(this.idDispositivo).then((dispositivo) => {
      this.Dispositivo = dispositivo as Device;
      this.ElectrovalvulaToast(this.Dispositivo.electrovalvulaId);
    });
  }

  async ElectrovalvulaToast(idElectrovalvula: number) {
    const toast = await this.toastController.create({
      header: 'Electrovalvula ' + idElectrovalvula,
      position: 'top',
      color: 'light',
      message: 'Abierta',
      duration: 2000
    });
    toast.present();
  }
}





