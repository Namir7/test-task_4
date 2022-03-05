<template>
  <actions-panel />
  <node-tree />
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

import NodeTree from "@/components/NodeTree.vue";
import ActionsPanel from "@/components/ActionsPanel.vue";

import { useStore } from "@/store";
import { bindKeys } from "@/composables/App/bindKeys";
import { createExampleStoreStructure } from "@/composables/App/createExampleStoreStructure";
import { subscribeToNodesListChages } from "@/composables/App/subscribeToNodesListChages";

export default defineComponent({
  name: "App",
  components: {
    NodeTree,
    ActionsPanel,
  },
  setup() {
    onMounted(() => {
      bindKeys();
    });

    const store = useStore();

    createExampleStoreStructure();

    subscribeToNodesListChages();

    console.log(`
    keybindings:
    
    ctrl + p -> create node
    ctrl + d -> delete node
    ctrl + arrow -> move`);

    return {
      store,
    };
  },
});
</script>

<style lang="scss" scoped></style>
