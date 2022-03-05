import { MutationTree } from "vuex";

import { IMutations, IState } from "./interfaces";
import { NodesList } from "@/factories/NodesList";
import utils from "@/utils";

export const mutations: MutationTree<IState> & IMutations = {
  ADD_NODE: (state: IState, payload: { parentId: string; label: string }) => {
    state.nodesList = NodesList.adddNode__immutable({
      list: state.nodesList,
      node: { label: payload.label, parentId: payload.parentId },
    });
  },

  CHANGE_ACTIVE: (state: IState, payload: { active: string }) => {
    state.activeNode =
      state.nodesList.find((node) => node.id === payload.active) ||
      state.activeNode;
  },

  REMOVE_NODE: (state: IState, payload: { parentId: string; id: string }) => {
    state.nodesList = NodesList.removeNode__immutable({
      node: { id: payload.id, parentId: payload.parentId },
      list: state.nodesList,
    });
  },

  EDIT_LABEL: (state: IState, paylaod: { label: string; id: string }) => {
    const node = utils.findNodeById(paylaod.id, state.nodesList);

    node.editLabel(paylaod.label);
  },
};
