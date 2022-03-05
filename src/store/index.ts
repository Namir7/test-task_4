import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

import nodes from "./modules/nodes";
import edit from "./modules/edit";

import { IState as NodesTreeState } from "./modules/nodes/interfaces";
import { IState as EditState } from "./modules/edit/interfaces";

export interface IRootState {
  nodes: NodesTreeState;
  edit: EditState;
}

export const key: InjectionKey<Store<IRootState>> = Symbol();

export function useStore() {
  return baseUseStore(key);
}

export const store = createStore<IRootState>({
  modules: {
    nodes,
    edit,
  },
  strict: true,
});
