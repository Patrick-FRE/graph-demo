import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import { DataService } from "src/app/services/data.service";
import "../../../assets/mock/mockData.json";
import Networkgraph from "highcharts/modules/networkgraph";

Networkgraph(Highcharts);

@Component({
  selector: "app-graph",
  templateUrl: "./graph.component.html",
  styleUrls: ["./graph.component.scss"],
})
export class GraphComponent implements OnInit {
  public options: any = {
    chart: {
      type: "networkgraph",
      height: "100%",
    },
    title: {
      text: "Graph Demo",
    },
    plotOptions: {
      networkgraph: {
        keys: ["from", "to"],
        layoutAlgorithm: {
          enableSimulation: false,
          integration: "verlet",
        },
      },
    },
    series: [
      {
        marker: {
          radius: 13,
        },
        dataLabels: {
          enabled: true,
          linkFormat: "",
          allowOverlap: true,
        },
      },
    ],
  };
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe((data) => {
      this.options.series[0].data = data;
      Highcharts.chart("container", this.options);
    });
  }
}
