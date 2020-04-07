import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { mockData } from "../mock/mockData";
import Edge from "../models/edge.model";
import { MockDataResponse } from "../interfaces/dataApi.interface";
import { DataNode } from "../models/node.model";
import { DataLink } from "../models/dataLink.model";
import { NodesMap } from "../models/nodesMap.model";

@Injectable({
  providedIn: "root",
})
export class DataService {
  nodesMap: NodesMap;
  constructor() {}
  getDataLinks() {
    return new Observable((subscriber) => {
      subscriber.next(mockData);
    }).pipe(
      map((res: MockDataResponse) => {
        // convert edges to links
        // console.log(res);
        this.nodesMap = this.generateNodesMap(res.nodes);
        return res.edges.map((edge) => {
          return this.edgeToLink(edge, this.nodesMap);
        });
      })
    );
  }

  searchDataLinksByLabel(label) {
    return new Observable((subscriber) => {
      subscriber.next(mockData);
    }).pipe(
      map((res: MockDataResponse) => {
        // convert edges to links
        // console.log(res);
        this.nodesMap = this.nodesMap
          ? this.nodesMap
          : this.generateNodesMap(res.nodes);

        return this.getDataLinksByLabel(label, res.edges, this.nodesMap).map(
          (edge) => {
            return this.edgeToLink(edge, this.nodesMap);
          }
        );
      })
    );
  }

  getDataLinksByLabel(label: string, edges: Edge[], nodesMap: NodesMap) {
    const res = [];
    const edgesCopy = [...edges];
    const id = nodesMap[label];
    console.log(label, id);

    findNextSourceNodes(res, [id], edges);
    findNextTargetNodes(res, [id], edges);

    function findNextTargetNodes(
      res: Edge[],
      curSourceIdArray: number[],
      edges: Edge[]
    ) {
      curSourceIdArray.forEach((curSourceId) => {
        const nextSourceIdArray = edges.reduce((acc, cur) => {
          if (cur.source === curSourceId) {
            res.push(cur);
            acc.push(cur.target);
          }
          return acc;
        }, []);
        console.log("nextTarget", nextSourceIdArray);
        findNextSourceNodes(res, nextSourceIdArray, edges);
      });
    }

    function findNextSourceNodes(
      res: Edge[],
      curTargetIdArray: number[],
      edges: Edge[]
    ) {
      curTargetIdArray.forEach((curTargetId) => {
        const nextTargetIdArray = edges.reduce((acc, cur) => {
          if (cur.target === curTargetId) {
            res.push(cur);
            acc.push(cur.source);
          }
          return acc;
        }, []);
        console.log("nextTarget", nextTargetIdArray);
        findNextSourceNodes(res, nextTargetIdArray, edges);
      });
    }
    return res;
  }

  generateNodesMap(nodes: DataNode[]) {
    return nodes.reduce((acc, cur) => {
      acc[cur.id] = cur.label;
      acc[cur.label] = cur.id;
      return acc;
    }, {});
  }

  getLabelById(id: number, nodesMap: NodesMap) {
    return nodesMap[id];
  }

  edgeToLink(edge: Edge, nodesMap: NodesMap): DataLink {
    const from = this.getLabelById(edge.source, nodesMap);
    const to = this.getLabelById(edge.target, nodesMap);
    return new DataLink(from, to);
  }

  // mockDataParser(edges: Edge[], nodes: DataNode[]): DataLink[] {
  //   return edges.map();
  // }
}
