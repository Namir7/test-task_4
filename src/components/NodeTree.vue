<template>
  <div class="wrapper">
    <div class="mindmap">
      <node-item :node="rootNode" />
    </div>
  </div>
</template>

<script>
import { computed, defineComponent } from "vue";

import NodeItem from "@/components/NodeItem.vue";

import { useStore } from "@/store";

export default defineComponent({
  name: "NodeTree",
  components: {
    NodeItem,
  },
  setup() {
    const store = useStore();

    const rootNode = computed(() => store.state.nodes.rootNode);

    return {
      rootNode,
    };
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 16px;
  padding-top: 35%;
}
</style>
