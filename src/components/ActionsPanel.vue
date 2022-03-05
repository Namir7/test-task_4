<template>
  <div class="actions-panel">
    <edit-input />
    <div class="divider" />
    <add-button />
    <delete-button />
    <edit-button />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

import AddButton from "@/components-ui/add-button.vue";
import DeleteButton from "@/components-ui/delete-button.vue";
import EditInput from "@/components-ui/edit-input.vue";
import EditButton from "@/components-ui/edit-button.vue";

export default defineComponent({
  name: "actions-panel",
  components: {
    AddButton,
    DeleteButton,
    EditInput,
    EditButton,
  },
});
</script>

<style lang="scss" scoped>
.actions-panel {
  width: 15%;

  // background-color: rgba(92, 228, 210, 0.363);

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  position: fixed;
  top: 3vh;
  right: 5vw;

  z-index: 10;

  .edit-input {
    //
  }

  .divider {
    height: 1rem;
    width: 100%;
  }
}
</style>
