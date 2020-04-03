import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { mockData } from "../mock/mockData";
import Edge from "../models/edge.model";
import { MockDataResponse } from "../interfaces/dataApi.interface";
import { DataNode } from "../models/node.model";
import { DataLink } from "../models/dataLink.model";
import { link } from "fs";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor() {}
  getData() {
    return new Observable((subscriber) => {
      subscriber.next(mockData);
    }).pipe(
      map((res: MockDataResponse) => {
        // convert edges to links
        return res.edges.map((edge) => {
          return this.edgeToLink(edge, res.nodes);
        });
      })
    );
  }

  getLabelById(id: number, nodes: DataNode[]) {
    return nodes.filter((node) => node.id === id)[0].label;
  }

  edgeToLink(edge: Edge, nodes: DataNode[]): DataLink {
    const from = this.getLabelById(edge.source, nodes);
    const to = this.getLabelById(edge.target, nodes);
    return new DataLink(from, to);
  }

  // mockDataParser(edges: Edge[], nodes: DataNode[]): DataLink[] {
  //   return edges.map();
  // }
}
