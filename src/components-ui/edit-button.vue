<template>
  <button class="app-button" @click="editNode" :disabled="isDisabled">
    <icon icon="ant-design:edit-outlined" width="2rem" height="2rem" />
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import { useStore } from "@/store";

export default defineComponent({
  name: "edit-button",
  setup() {
    const store = useStore();

    const isDisabled = computed(() => !store.state.edit.value);

    const editNode = () => {
      store.dispatch("nodes/editLabel");
    };

    return {
      isDisabled,
      editNode,
    };
  },
});
</script>
