import { computed } from "vue";

import { useStore } from "@/store";

export const createExampleStoreStructure = () => {
  const store = useStore();

  store.commit("nodes/ADD_NODE", {
    label: "value 1",
    parentId: computed(() => store.state.nodes.rootNode).value.id,
  });

  store.commit("nodes/ADD_NODE", {
    label: "value 2",
    parentId: computed(() => store.state.nodes.rootNode).value.id,
  });

  store.commit("nodes/ADD_NODE", {
    label: "value 3",
    parentId: computed(() => store.state.nodes.lastNewNode).value.id,
  });

  store.commit("nodes/ADD_NODE", {
    label: "value 4",
    parentId: computed(() => store.state.nodes.lastNewNode.parent).value,
  });

  store.commit("nodes/ADD_NODE", {
    label: "value 5",
    parentId: computed(() => store.state.nodes.lastNewNode.parent).value,
  });
};
