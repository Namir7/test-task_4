import { ActionContext, ActionTree } from "vuex";

import { IRootState } from "@/store";
import { IActions, IState } from "./interfaces";

export const actions: ActionTree<IState, IRootState> & IActions = {
  setBin: ({ rootState, commit }: ActionContext<IState, IRootState>) => {
    commit("SET_BIN", { nodesList: rootState.nodes.nodesList });
  },

  cancelAction: ({ state, commit }: ActionContext<IState, IRootState>) => {
    commit("nodes/SET_NODES", { list: state.nodesList }, { root: true });
  },
};
