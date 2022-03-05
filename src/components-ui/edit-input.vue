<template>
  <input
    class="edit-input"
    type="text"
    :value="value"
    @input="changeValue($event.target.value)"
    ref="input"
  />
</template>

<script lang="ts">
import { computed, defineComponent, Ref, ref, watch } from "vue";

import { useStore } from "@/store";

export default defineComponent({
  name: "edit-input",
  setup() {
    const store = useStore();

    const input: Ref = ref(null);

    const activeNode = computed(() => store.state.nodes.activeNode);

    watch(activeNode, () => {
      input.value.focus();
    });

    const value = computed(() => store.state.edit.value);

    const changeValue = (value: string) => {
      store.commit("edit/CHANGE_VALUE", { value });
      store.dispatch("nodes/editLabel");
    };

    return {
      value,
      changeValue,
      input,
    };
  },
});
</script>

<style lang="scss" scoped>
.edit-input {
  width: 9rem;
  height: fit-content;
  font-size: 1.2rem;

  padding: 0.5rem;

  border: 1px solid gray;
  border-radius: 0.5rem;
}
</style>
