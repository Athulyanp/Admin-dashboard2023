import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent {
  Highcharts= Highcharts
  chartOptions={}
  constructor(){
    this.chartOptions={
      chart: {
        renderTo: 'container',
        type: 'column',
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 50,
            viewDistance: 25
        }
    },
    xAxis: {
        categories: ['MEARN', '.NET', 'FLUTTER', 'BIGDATA', 'JAVASPRING', 'AI',
            'TESTING', 'DATASCIENCE', 'ML', 'PYTHON']
    },
    yAxis: {
        title: {
            enabled: false
        }
    },
    tooltip: {
        headerFormat: '<b>{point.key}</b><br>',
        pointFormat: 'Placements: {point.y}'
    },
    title: {
        text: 'Yearly Placement Analysis Of Luminar Technolab 2022-2023',
        align: 'center'
    },
    subtitle: {
        text: 'Luminar Technolab',
        align: 'center'
    },
    legend: {
        enabled: false
    },

    credits:{enabled:false},
    plotOptions: {
        column: {
            depth: 25
        }
    },
    series: [{
        data: [1318, 1073, 1060, 813, 775, 745, 537, 444, 416, 395],
        colorByPoint: true
    }]



    }
    
  }

}
