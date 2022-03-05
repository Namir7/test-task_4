<template>
  <button
    class="app-button delete-button"
    @click="removeNode"
    :disabled="isDiabled"
    title="ctrl+d"
  >
    <icon icon="ant-design:delete-outlined" width="2rem" height="2rem" />
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import { useStore } from "@/store";

export default defineComponent({
  name: "AddButton",
  setup() {
    const store = useStore();

    const isDiabled = computed(
      () => store.state.nodes.rootNode === store.state.nodes.activeNode
    );

    const removeNode = () => {
      store.commit("nodes/REMOVE_NODE", {
        id: store.state.nodes.activeNode.id,
      });
    };

    return {
      isDiabled,
      removeNode,
    };
  },
});
</script>
