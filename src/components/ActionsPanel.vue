<template>
  <div class="actions-panel">
    <edit-input />
    <add-button />
    <delete-button />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

import AddButton from "@/components-ui/add-button.vue";
import DeleteButton from "@/components-ui/delete-button.vue";
import EditInput from "@/components-ui/edit-input.vue";

export default defineComponent({
  name: "actions-panel",
  components: {
    AddButton,
    DeleteButton,
    EditInput,
  },
});
</script>

<style lang="scss" scoped>
.actions-panel {
  display: flex;
  align-items: center;

  position: fixed;
  top: 3vh;
  right: 5vw;

  z-index: 10;
}

.edit-input {
  margin-right: 1rem;
}

.add-button {
  margin-right: 1rem;
}
</style>
