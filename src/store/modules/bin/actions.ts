import { ActionContext, ActionTree } from "vuex";

import { IRootState } from "@/store";
import { IActions, IState } from "./interfaces";
import { INode } from "@/interfaces/INode";

export const actions: ActionTree<IState, IRootState> & IActions = {
  setBin: (
    { rootState, commit }: ActionContext<IState, IRootState>,
    payload: { nodesList: INode[] }
  ) => {
    commit("SET_BIN", { nodesList: payload.nodesList });
    // commit("SET_BIN", { nodesList: rootState.nodes.nodesList });
  },

  cancelAction: ({ state, commit }: ActionContext<IState, IRootState>) => {
    console.log("canceled action");

    commit("nodes/SET_NODES", { list: state.nodesList }, { root: true });
  },
};
