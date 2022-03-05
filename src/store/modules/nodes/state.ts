import { IState } from "./interfaces";
import rootNode from "@/data/rootNode";

export const state: IState = {
  nodesList: [rootNode],

  activeNode: rootNode,

  rootNode,

  lastNewNode: rootNode,
};
