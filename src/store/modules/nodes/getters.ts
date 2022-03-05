import { GetterTree } from "vuex";

import { IRootState } from "@/store";
import { IGetters, IState } from "./interfaces";

export const getters: GetterTree<IState, IRootState> & IGetters = {
  getNodeById: (state: IState) => (id: string) => {
    return state.nodesList.find((node) => node.id === id) || null;
  },
};
