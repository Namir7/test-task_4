import { Module } from "vuex";

import { IRootState } from "@/store";
import { IState } from "./interfaces";

import { state } from "./state";
import { mutations } from "./mutations";
import { actions } from "./actions";

export default {
  namespaced: true,
  state,
  mutations,
  actions,
} as Module<IState, IRootState>;
