import { GetterTree } from "vuex";

import { IRootState } from "@/store";
import { IGetters, IState } from "./interfaces";
import { INode } from "@/interfaces/INode";

export const getters: GetterTree<IState, IRootState> & IGetters = {
  getNodeById: (state: IState) => (id: string) => {
    return state.nodesList.find((node) => node.id === id) || null;
  },

  siblings: (state: IState) => (node: INode) => {
    if (!node.parent) return { prev: null, next: null };

    const parentNode = getters.getNodeById(state)(node.parent) as INode;

    for (let i = 0; i < parentNode.children.length; i++) {
      if (parentNode.children[i] === node.id)
        return {
          prev: getters.getNodeById(state)(parentNode.children[i - 1]) || null,
          next: getters.getNodeById(state)(parentNode.children[i + 1]) || null,
        };
    }

    return { prev: null, next: null };
  },
};
