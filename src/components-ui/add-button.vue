<template>
  <button class="app-button add-button" @click="addNode">
    <icon icon="fluent:add-square-20-regular" width="2rem" height="2rem" />
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import { useStore } from "@/store";

export default defineComponent({
  name: "AddButton",
  setup() {
    const store = useStore();

    const addNode = () => {
      const parentId = store.state.nodes.activeNode.id;

      const node = store.commit("nodes/ADD_NODE", {
        parentId,
        label: "new value",
      });

      // console.log("node: ");
      // console.log(node);
    };

    return {
      store,
      addNode,
    };
  },
});
</script>
