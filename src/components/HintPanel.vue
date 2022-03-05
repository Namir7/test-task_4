<template>
  <div class="hint-panel">
    <icon
      class="hint-panel__icon"
      icon="codicon:info"
      width="1.5rem"
      heigth="1.5rem"
    />
    <h2 class="hint-panel__title">Keybindings:</h2>

    <div class="">
      <!-- <ul>
        <li></li>
      </ul> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HintPanel",
});
</script>

<style lang="scss" scoped>
.hint-panel {
  position: relative;

  width: 30rem;
  height: 20rem;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  position: relative;
  z-index: 1;
  background: inherit;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    background: inherit;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
    filter: blur(10px);
    margin: -20px;
  }

  & .hint-panel__icon {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
