import { AfterViewInit, Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'highcharts-sample';

  ngAfterViewInit() {
    const data = [25, 10, 34];
    Highcharts.chart('chart', {
      title: {
        text: "sample chart"
      },
      series: [{
        data: data,
        type: 'line'
      }]
    })
  }


}
