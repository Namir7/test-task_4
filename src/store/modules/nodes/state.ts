import { IState } from "./interfaces";
import nodesList from "@/data/nodes";

export const state: IState = {
  nodesList,

  activeNode: nodesList[0],

  rootNode: nodesList[0],
};
