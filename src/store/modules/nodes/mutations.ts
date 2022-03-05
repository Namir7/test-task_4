import { MutationTree } from "vuex";

import { IMutations, IState } from "./interfaces";
import { Node } from "@/factories/Node";
import utils from "@/utils";

export const mutations: MutationTree<IState> & IMutations = {
  ADD_NODE: (
    state: IState,
    payload: { parentId: string; label: string }
  ): void => {
    // immutable code

    const node = new Node(payload.label, payload.parentId);

    state.nodesList.push(node);

    const parentNode = utils.findNodeById(payload.parentId, state.nodesList);

    parentNode.addChild(node.id);

    state.lastNewNode = node;

    // mutable code

    // const node = new Node(payload.label, payload.parentId);
    // state.nodesList.push(node);
    // const parentNode =
    //   state.nodesList[
    //     state.nodesList.findIndex((node) => node.id === payload.parentId)
    //   ];
    // parentNode.children.push(node.id);
    // state.lastNewNode = node;
  },

  REMOVE_NODE: (state: IState, payload: { id: string }) => {
    const newNodesList = utils.deleteNodeWithDescendants(
      payload.id,
      state.nodesList
    );

    const node = utils.findNodeById(payload.id, state.nodesList);

    if (node.parent) {
      state.activeNode = utils.findNodeById(node.parent, state.nodesList);
    }

    state.nodesList = newNodesList;
  },

  CHANGE_ACTIVE: (state: IState, payload: { active: string }) => {
    state.activeNode =
      state.nodesList.find((node) => node.id === payload.active) ||
      state.activeNode;
  },

  EDIT_LABEL: (state: IState, paylaod: { label: string; id: string }) => {
    const node = utils.findNodeById(paylaod.id, state.nodesList);

    node.editLabel(paylaod.label);
  },
};
