import { Module } from "vuex";

import { IRootState } from "@/store";
import { IState } from "./interfaces";

import { state } from "./state";
import { mutations } from "./mutations";

export default {
  namespaced: true,
  state,
  mutations,
} as Module<IState, IRootState>;
