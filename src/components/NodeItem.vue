<template>
  <li>
    <article>{{ node.value }}</article>
    <ul v-if="node.children.length > 0">
      <node-item v-for="child in node.children" :key="child.id" :node="child" />
    </ul>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { INode } from "@/interfaces/INode";

export default defineComponent({
  name: "NodeItem",
  created() {
    console.log(this.$props.node.value);
  },

  props: {
    node: {
      type: Object as PropType<INode>,
      required: true,
    },
  },
});
</script>

<style lang="scss"></style>
