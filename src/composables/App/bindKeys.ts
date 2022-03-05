import { computed } from "vue";
import tinykeys from "tinykeys";

import { useStore } from "@/store";

export const bindKeys = () => {
  const store = useStore();

  tinykeys(window, {
    "Control+p": (e) => {
      e.preventDefault();
      store.commit("nodes/ADD_NODE", {
        parentId: computed(() => store.state.nodes.activeNode.id).value,
        label: "new value",
      });
    },

    "Control+d": (e) => {
      e.preventDefault();
      if (store.state.nodes.activeNode.id === store.state.nodes.rootNode.id)
        return;
      store.commit("nodes/REMOVE_NODE", {
        id: computed(() => store.state.nodes.activeNode.id).value,
      });
    },

    "Control+ArrowUp": () => {
      store.commit("nodes/CHANGE_ACTIVE", {
        active: store.getters["nodes/siblings"](store.state.nodes.activeNode)
          .prev?.id,
      });
    },
    "Control+ArrowDown": () => {
      store.commit("nodes/CHANGE_ACTIVE", {
        active: store.getters["nodes/siblings"](store.state.nodes.activeNode)
          .next?.id,
      });
    },

    "Control+ArrowLeft": () => {
      store.commit("nodes/CHANGE_ACTIVE", {
        active: computed(() => store.state.nodes.activeNode.parent).value,
      });
    },

    "Control+ArrowRight": () => {
      store.commit("nodes/CHANGE_ACTIVE", {
        active: computed(() => store.state.nodes.activeNode.children[0]).value,
      });
    },
  });
};
