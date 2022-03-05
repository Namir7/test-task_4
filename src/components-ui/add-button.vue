<template>
  <button class="app-button add-button" @click="addNode" title="ctrl+p">
    <icon icon="fluent:add-square-20-regular" width="2rem" height="2rem" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { useStore } from "@/store";

export default defineComponent({
  name: "AddButton",
  setup() {
    const store = useStore();

    const addNode = () => {
      const parentId = store.state.nodes.activeNode.id;

      store.commit("nodes/ADD_NODE", {
        parentId,
        label: "new value",
      });
    };

    return {
      store,
      addNode,
    };
  },
});
</script>
