<template>
  <input
    class="edit-input"
    type="text"
    :value="value"
    @input="changeValue($event.target.value)"
  />
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import { useStore } from "@/store";

export default defineComponent({
  name: "edit-input",
  setup() {
    const store = useStore();

    const value = computed(() => store.state.edit.value);

    const changeValue = (value: string) => {
      store.commit("edit/CHANGE_VALUE", { value });
    };

    return {
      value,
      changeValue,
    };
  },
});
</script>

<style lang="scss" scoped>
.edit-input {
  width: 100%;
  height: fit-content;

  border: none;
  border-radius: 0.1rem;
}
</style>
