import { ActionContext, ActionTree, GetterTree, MutationTree } from "vuex";

import { IRootState } from "@/store";
import { INode } from "@/interfaces/INode";

export interface IState {
  tree: any;
}

export type IGetters = GetterTree<IState, IRootState>;

export type IMutations = MutationTree<IState>;

export type IActions = ActionTree<IState, IRootState>;
