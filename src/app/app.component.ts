import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ChartJS';
  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'bar', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: [
          'Alohomora',
          'Expecto Patronum',
          'Expelliarmus',
          'Lumus',
          'Obliviate',
          'Periculum',
          'Protego',
          'Prior Incantato',
          'Riddikulus',
          'Stupefy',
        ],
        datasets: [
          {
            label: 'Magics',
            data: ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
            backgroundColor: [
              'rgba(255,0,0,0.7)',
              'rgba(255,69,0,0.7)',
              'rgba(255,140,0,0.7)',
              'rgba(255,215,0,0.7)',
              'rgba(50,205,50,0.7)',
              'rgba(0,128,0,0.7)',
              'rgba(47,79,79,0.7)',
              'rgba(220,20,60,0.7)',
              'rgba(255,20,147,0.7)',
              'rgba(255,0,255,0.7)',
              'rgba(0,206,209,0.7)',
              'rgba(30,144,255,0.7)',
              'rgba(25,25,112,0.7)',
              'rgba(75,0,130,0.7)',
              'rgba(220,220,220,0.7)',
            ],
            borderColor: [
              'rgba(255,0,0)',
              'rgba(255,69,0)',
              'rgba(255,140,0)',
              'rgba(255,215,0)',
              'rgba(50,205,50)',
              'rgba(0,128,0)',
              'rgba(47,79,79)',
              'rgba(220,20,60)',
              'rgba(255,20,147)',
              'rgba(255,0,255)',
              'rgba(0,206,209)',
              'rgba(30,144,255)',
              'rgba(25,25,112)',
              'rgba(75,0,130)',
              'rgba(220,220,220)',
            ],
            borderWidth: 3,
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  }
}
