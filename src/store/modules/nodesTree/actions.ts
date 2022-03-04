import { ActionTree } from "vuex";

import { IRootState } from "@/store";
import { IActions, IState } from "./interfaces";

export const actions: ActionTree<IState, IRootState> & IActions = {};
