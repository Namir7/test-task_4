import { ActionContext, ActionTree, MutationTree } from "vuex";

import { INode } from "@/interfaces/INode";
import { IRootState } from "@/store";

export interface IState {
  nodesList: INode[];
}

export interface IMutations extends MutationTree<IState> {
  SET_BIN: (state: IState, payload: { nodesList: INode[] }) => void;
}

export interface IActions extends ActionTree<IState, IRootState> {
  setBin: (context: ActionContext<IState, IRootState>) => void;

  cancelAction: (context: ActionContext<IState, IRootState>) => void;
}
