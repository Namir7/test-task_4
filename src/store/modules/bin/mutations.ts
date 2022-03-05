import { MutationTree } from "vuex";

import { IMutations, IState } from "./interfaces";
import { INode } from "@/interfaces/INode";

export const mutations: MutationTree<IState> & IMutations = {
  SET_BIN: (state: IState, payload: { nodesList: INode[] }) => {
    state.nodesList = payload.nodesList;
  },
};
