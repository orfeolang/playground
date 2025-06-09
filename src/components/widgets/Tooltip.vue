<script setup lang="ts">
  interface Props {
    hide?: boolean
    text?: string
  }

  const {
    hide = false,
    text
  } = defineProps<Props>()
</script>

<template>
  <div class="tooltip">
    <div class="text" v-if="text && ! hide">{{ text }}</div>
    <slot />
  </div>
</template>

<style scoped>
  .tooltip {
    display: flex;
    position: relative;
  }

  .tooltip:hover .text,
  .tooltip:hover .text:before,
  :slotted(*):focus + .text,
  :slotted(*):focus + .text:before {
    visibility: visible;
  }

  .text {
    background: #fff;
    border-radius: 2px;
    color: #000;
    font-size: 16px;
    left: 50%;
    padding: 3px 7px;
    position: absolute;
    text-align: center;
    top: -40px;
    transform: translateX(-50%);
    visibility: hidden;
    white-space: nowrap;
    width: auto;
    z-index: 1;
  }

  .text:before {
    border: solid;
    border-color: #fff transparent;
    border-width: 6px 6px 0 6px;
    content: '';
    left: 50%;
    top: 26px;
    transform: translateX(-50%);
    position: absolute;
    visibility: hidden;
  }
</style>
