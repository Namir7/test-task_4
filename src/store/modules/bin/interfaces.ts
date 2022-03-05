import { ActionContext, ActionTree, MutationTree } from "vuex";

import { IRootState } from "@/store";
import { INode } from "@/interfaces/INode";

export interface IState {
  nodesList: INode[];
}

export interface IMutations extends MutationTree<IState> {
  SET_BIN: (state: IState, payload: { nodesList: INode[] }) => void;
}

export interface IActions extends ActionTree<IState, IRootState> {
  setBin: (
    context: ActionContext<IState, IRootState>,
    payload: { nodesList: INode[] }
  ) => void;

  cancelAction: (context: ActionContext<IState, IRootState>) => void;
}
