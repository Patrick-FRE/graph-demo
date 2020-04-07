import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import { DataService } from "src/app/services/data.service";
import Networkgraph from "highcharts/modules/networkgraph";

Networkgraph(Highcharts);

@Component({
  selector: "app-graph",
  templateUrl: "./graph.component.html",
  styleUrls: ["./graph.component.scss"],
})
export class GraphComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  private _networkGraphOptions: any = {
    chart: {
      type: "networkgraph",
      height: "800px",
    },
    title: {
      text: "Graph Demo",
    },
    credits: { enabled: false },
    plotOptions: {
      networkgraph: {
        keys: ["from", "to"],
        layoutAlgorithm: {
          // enableSimulation: true,
          integration: "verlet",
          // linkLength: 15,
          // friction: -0.9,
        },
        link: {
          // width: 50,
        },
      },
    },
    series: [
      {
        id: "graph-demo",
        marker: {
          radius: 10,
        },

        dataLabels: {
          enabled: true,
          // linkFormat: "Source: {point.fromNode.name}",
          linkFormatter(link) {
            // console.log(this.point.fromNode.plotX);
            if (this.point.fromNode.plotX > this.point.toNode.plotX) {
              return "\u2190";
            }
            return "\u2192";
          },
          allowOverlap: false,
        },
      },
    ],
  };
  public get networkGraphOptions() {
    return this._networkGraphOptions;
  }
  constructor(private dataService: DataService) {}

  updateNetworkGraphData(data) {
    this._networkGraphOptions.series[0].data = data;
    this._networkGraphOptions = { ...this._networkGraphOptions };
  }

  ngOnInit() {
    this.dataService.getDataLinks().subscribe((data) => {
      this.updateNetworkGraphData(data);
      // setTimeout(() => {
      //   this.updateNetworkGraphData([
      //     { from: "A", to: "B" },
      //     { from: "B", to: "C" },
      //   ]);
      // }, 2000);
    });
  }
  searchNodeByLabel(e) {
    if (e.keyCode === 13) {
      if (!e.target.value) {
        this.dataService.getDataLinks().subscribe((data) => {
          this.updateNetworkGraphData(data);
        });
      } else {
        this.dataService
          .searchDataLinksByLabel(e.target.value)
          .subscribe((data) => {
            this.updateNetworkGraphData(data);
          });
      }
    }
  }
}
