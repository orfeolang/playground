<script setup lang="ts">
  interface Props {
    label: string
    theme?: string
  }

  const {
    label,
    theme = 'dark',
  } = defineProps<Props>()
</script>

<template>
  <div class="button" :class=theme>{{ label }}</div>
</template>

<style scoped>
  .button {
    cursor: pointer;
    font-size: 18px;
    letter-spacing: 1px;
    opacity: 0.85;
    padding: 5px;
    text-align: center;
    transition: 0.4s;

    &:hover {
      opacity: 1;
    }

    &.dark {
      background: #121212;
      color: #ffffff;
    }

    &.monochrome {
      background: #000000;
      color: #fff;

      &:hover {
        color: #ff0000;
      }
    }
  }
</style>
