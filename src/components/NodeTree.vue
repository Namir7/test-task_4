<template>
  <div class="wrapper">
    <div class="mindmap">
      <node-item :node="rootNode" />
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, watch } from "vue";

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

    watch(
      computed(() => store.state.nodes.lastNewNode),
      (val) => {
        store.commit("nodes/CHANGE_ACTIVE", { active: val.id });
      },
      { deep: true }
    );

    return {
      rootNode,
    };
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 16px;
  padding-top: 35;

  align-self: center;
}
</style>
