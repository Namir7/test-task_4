<template>
  <actions-panel />
  <node-tree />
</template>

<script lang="ts">
import NodeTree from "@/components/NodeTree.vue";
import ActionsPanel from "@/components/ActionsPanel.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    NodeTree,
    ActionsPanel,
  },
  mounted() {},
});
</script>

<style lang="scss" scoped></style>
