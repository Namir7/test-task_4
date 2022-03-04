<template>
  <ul class="mindmap">
    <node-item :node="rootNode" />
  </ul>
</template>

<script>
import { defineComponent } from "vue";

import NodeItem from "@/components/NodeItem.vue";

import rootNode from "@/data/rootNode";

export default defineComponent({
  name: "NodeTree",
  components: {
    NodeItem,
  },
  data() {
    return {
      rootNode,
    };
  },
});
</script>

<style></style>
