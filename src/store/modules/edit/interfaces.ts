import { MutationTree } from "vuex";

export interface IState {
  value: string;
}

export interface IMutations extends MutationTree<IState> {
  CHANGE_VALUE: (state: IState, payload: { value: string }) => void;
}
