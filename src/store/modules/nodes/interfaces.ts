import { ActionContext, ActionTree, GetterTree, MutationTree } from "vuex";

import { IRootState } from "@/store";
import { INode } from "@/interfaces/INode";

export interface IState {
  nodesList: INode[];
  activeNode: INode;
  rootNode: INode;
  lastNewNode: INode;
}

export interface IGetters extends GetterTree<IState, IRootState> {
  getNodeById: (state: IState) => (id: string) => INode | null;

  siblings: (
    state: IState
  ) => (node: INode) => { prev: INode | null; next: INode | null };
}

export interface IMutations extends MutationTree<IState> {
  SET_NODES: (state: IState, payload: { list: INode[] }) => void;

  ADD_NODE: (
    state: IState,
    payload: { parentId: string; label: string }
  ) => void;

  REMOVE_NODE: (state: IState, payload: { id: string }) => void;

  CHANGE_ACTIVE: (state: IState, payload: { active: string }) => void;

  EDIT_LABEL: (state: IState, payload: { id: string; label: string }) => void;
}

export interface IActions extends ActionTree<IState, IRootState> {
  editLabel: (context: ActionContext<IState, IRootState>) => void;
}
