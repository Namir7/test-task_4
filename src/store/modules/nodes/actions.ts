import { ActionContext, ActionTree } from "vuex";

import { IRootState } from "@/store";
import { IActions, IState } from "./interfaces";

export const actions: ActionTree<IState, IRootState> & IActions = {
  editLabel: ({
    state,
    rootState,
    commit,
  }: ActionContext<IState, IRootState>) => {
    commit("EDIT_LABEL", {
      id: state.activeNode.id,
      label: rootState.edit.value,
    });
  },
};
