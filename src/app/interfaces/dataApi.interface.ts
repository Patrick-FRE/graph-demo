import Edge from "../models/edge.model";
import { DataNode } from "../models/node.model";

export interface MockDataResponse {
  edges: Edge[];
  nodes: DataNode[];
}
