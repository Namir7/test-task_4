<template>
  <hint-panel />
  <actions-panel />
  <node-tree />
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

import NodeTree from "@/components/NodeTree.vue";
import ActionsPanel from "@/components/ActionsPanel.vue";
import HintPanel from "@/components/HintPanel.vue";

import { useStore } from "@/store";
import { bindKeys } from "@/composables/App/bindKeys";
import { createExampleStoreStructure } from "@/composables/App/createExampleStoreStructure";
import { useWatchers } from "@/composables/App/useWatchers";
import { useSubscriptions } from "@/composables/App/useSubscriptions";

export default defineComponent({
  name: "App",
  components: {
    NodeTree,
    ActionsPanel,
    HintPanel,
  },
  setup() {
    onMounted(() => {
      bindKeys();
    });

    const store = useStore();

    createExampleStoreStructure();

    useWatchers();
    useSubscriptions();

    store.commit("bin/SET_BIN", { nodesList: store.state.nodes.nodesList });

    return {
      store,
    };
  },
});
</script>

<style lang="scss" scoped></style>
