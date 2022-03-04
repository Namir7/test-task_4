import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

import nodesTree from "./modules/nodesTree";

import { IState as NodesTreeState } from "./modules/nodesTree/interfaces";

export interface IRootState {
  map: NodesTreeState;
}

export const key: InjectionKey<Store<IRootState>> = Symbol();

export function useStore() {
  return baseUseStore(key);
}

export const store = createStore<IRootState>({
  modules: {
    nodesTree,
  },
  strict: true,
});
