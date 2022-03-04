<template>
  <node-tree />

  <!-- <ul class="mindmap">
    <li>
      <article>Food</article>
      <ul>
        <li>
          <article>Plant</article>
          <ul>
            <li>
              <article>Fruits</article>
              <ul>
                <li><article>Apples</article></li>
                <li><article>Mangos</article></li>
                <li><article>Oranges</article></li>
              </ul>
            </li>
            <li>
              <article>Vegetables</article>
              <ul>
                <li><article>Tomatoes</article></li>
                <li><article>Potatoes</article></li>
                <li><article>Cucumbers</article></li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <article>Animal</article>
          <ul>
            <li><article>Meat</article></li>
            <li><article>Milk</article></li>
            <li><article>Eggs</article></li>
          </ul>
        </li>
      </ul>
    </li>
  </ul> -->
</template>

<script lang="ts">
import NodeTree from "@/components/NodeTree.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    NodeTree,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
