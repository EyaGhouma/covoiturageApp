// angular import
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

declare const AmCharts;

import '../../../assets/charts/amchart/amcharts.js';
import '../../../assets/charts/amchart/ammap.min.js';
import '../../../assets/charts/amchart/gauge.js';
import '../../../assets/charts/amchart/light.js';
import '../../../assets/charts/amchart/pie.min.js';
import '../../../assets/charts/amchart/radar.js';
import '../../../assets/charts/amchart/serial.js';
import '../../../assets/charts/amchart/usaLow.js';
import '../../../assets/charts/amchart/worldLow.js';

import mapColor from 'src/fake-data/map-color-data.json';
import dataJson from 'src/fake-data/map_data';
import { NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, SharedModule,NgbDatepickerModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // life cycle event
  departure: string = '';
  destination: string = '';
  travelDate: string = '';
  passengers: number = 1;
  passengerOptions = [1, 2, 3, 4, 5];
  model: NgbDateStruct;
  constructor(private router: Router){}
  search() {
    console.log('Recherche :', {
      departure: this.departure,
      destination: this.destination,
      date: this.travelDate,
      passengers: this.passengers
    });
    this.router.navigateByUrl("sample-page")
  }
  ngOnInit() {
  }

}
