import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

import nodes from "./modules/nodes";
import edit from "./modules/edit";
import bin from "./modules/bin";

import { IState as NodesTreeState } from "./modules/nodes/interfaces";
import { IState as EditState } from "./modules/edit/interfaces";
import { IState as BinState } from "./modules/bin/interfaces";

export interface IRootState {
  nodes: NodesTreeState;
  edit: EditState;
  bin: BinState;
}

export const key: InjectionKey<Store<IRootState>> = Symbol();

export function useStore() {
  return baseUseStore(key);
}

export const store = createStore<IRootState>({
  modules: {
    nodes,
    edit,
    bin,
  },
  strict: true,
});
