import { MutationTree } from "vuex";

import { IMutations, IState } from "./interfaces";

export const mutations: MutationTree<IState> & IMutations = {
  CHANGE_VALUE: (state: IState, payload: { value: string }) => {
    state.value = payload.value;
  },
};
