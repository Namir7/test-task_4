<template>
  <li class="node-item">
    <p
      :class="['node-item__label', isActive ? 'node-item__label--active' : '']"
      @click="changeActive"
    >
      {{ node.label }}
    </p>
    <ul class="node-item__children" v-if="node.children.length">
      <node-item v-for="child in children" :key="child.id" :node="child" />
    </ul>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";

import { useStore } from "@/store";
import { INode } from "@/interfaces/INode";

export default defineComponent({
  name: "NodeItem",
  components: {},
  props: {
    node: {
      type: Object as PropType<INode>,
      required: true,
    },
  },

  setup(props) {
    const store = useStore();

    const children = computed(() =>
      props.node.children.map((nodeId) =>
        store.getters["nodes/getNodeById"](nodeId)
      )
    );

    const isActive = computed(
      () => store.state.nodes.activeNode.id === props.node.id
    );

    const changeActive = () => {
      store.commit("nodes/CHANGE_ACTIVE", { active: props.node.id });
      store.commit("edit/CHANGE_VALUE", { value: props.node.label });
    };

    return {
      store,
      children,
      isActive,

      changeActive,
    };
  },
});
</script>

<style lang="scss" scoped></style>
