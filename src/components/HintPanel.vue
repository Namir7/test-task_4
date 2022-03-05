<template>
  <div class="hint-panel">
    <icon
      class="hint-panel__icon"
      icon="codicon:info"
      width="1.5rem"
      heigth="1.5rem"
      @mousemove="show"
    />
    <fade-transition>
      <div class="hint-panel__main" v-show="isVisible" @mouseleave="not_show">
        <h2 class="hint-panel__title">Keybindings</h2>

        <div class="hint-panel__description">
          <ul>
            <li>
              <p class="hint-panel__text">Create record</p>
              <span class="hint-panel__text--code"> Ctrl + p</span>
            </li>
            <li>
              <p class="hint-panel__text">Delete record</p>
              <span class="hint-panel__text--code"> Ctrl + d</span>
            </li>
            <li>
              <p class="hint-panel__text">Move between records</p>
              <span class="hint-panel__text--code"> Ctrl + arrow</span>
            </li>
          </ul>
        </div>
      </div>
    </fade-transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import FadeTransition from "@/components-ui/fade-transition.vue";

export default defineComponent({
  name: "HintPanel",
  components: {
    FadeTransition,
  },
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    show() {
      this.isVisible = true;
    },
    not_show() {
      this.isVisible = false;
    },
  },
});
</script>

<style lang="scss" scoped>
.hint-panel {
  .hint-panel__main {
    width: 13rem;

    padding: 1.5rem;

    border-radius: 1rem;

    position: absolute;
    top: 1.5rem;
    left: 1.5rem;

    z-index: 10;

    background-color: white;
  }

  .hint-panel__title {
    margin-bottom: 3rem;

    font-weight: bold;
  }

  .hint-panel__text {
    &--code {
      font-family: "Inconsolata", monospace;
    }
  }

  .hint-panel__icon {
    position: absolute;
    top: 1.75rem;
    left: 1.75rem;

    z-index: 15;

    cursor: pointer;
  }

  li {
    width: 100%;
    & p {
      margin-bottom: 0.5rem;

      text-align: start;
    }
    & span {
      display: block;

      margin-bottom: 0.7rem;

      text-align: start;
    }
  }
}
</style>
