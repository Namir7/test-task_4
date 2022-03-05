import { MutationTree } from "vuex";

import { IMutations, IState } from "./interfaces";
import { Node } from "@/factories/Node";
import { INode } from "@/interfaces/INode";
import utils from "@/utils";

export const mutations: MutationTree<IState> & IMutations = {
  SET_NODES: (state: IState, payload: { list: INode[] }) => {
    state.nodesList = payload.list;
  },

  ADD_NODE: (
    state: IState,
    payload: { parentId: string; label: string }
  ): void => {
    const node = new Node(payload.label, payload.parentId);

    state.nodesList.push(node);

    if (payload.parentId) {
      const parentNode = utils.findNodeById(payload.parentId, state.nodesList);

      parentNode.addChild(node.id);
    }

    state.lastNewNode = node;

    // mutable solution

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
    if (!payload.active) return;
    state.activeNode =
      state.nodesList.find((node) => node.id === payload.active) ||
      state.activeNode;
  },

  EDIT_LABEL: (state: IState, paylaod: { label: string; id: string }) => {
    const node = utils.findNodeById(paylaod.id, state.nodesList);

    node.editLabel(paylaod.label);
  },
};
