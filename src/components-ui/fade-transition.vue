<template>
  <transition name="fade">
    <slot />
  </transition>
</template>

<script>
export default {
  name: "fade-transition",
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
