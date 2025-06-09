<script setup lang="ts">
  import type { iconNameType } from '../../../helpers/type'

  import CaretDownPath           from './paths/CaretDown.vue'
  import DebugPath               from './paths/Debug.vue'
  import KeyboardPath            from './paths/Keyboard.vue'
  import OrfeoPath               from './paths/Orfeo.vue'
  import RedoPath                from './paths/Redo.vue'
  import SharePath               from './paths/Share.vue'
  import TrashCanPath            from './paths/TrashCan.vue'
  import UndoPath                from './paths/Undo.vue'

  interface Props {
    name: iconNameType
    size?: number
  }

  const {
    name,
    size = 32,
  } = defineProps<Props>()
</script>

<template>
  <svg
    class="icon__svg"
    :height=size
    :width=size
    aria-hidden="true"
    display="block"
    fill="currentColor"
    focusable="false"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <template      v-if="name === 'caret--down'"><CaretDownPath /></template>
    <template v-else-if="name === 'debug'"><DebugPath /></template>
    <template v-else-if="name === 'keyboard'"><KeyboardPath /></template>
    <template v-else-if="name === 'orfeo'"><OrfeoPath /></template>
    <template v-else-if="name === 'redo'"><RedoPath /></template>
    <template v-else-if="name === 'share'"><SharePath /></template>
    <template v-else-if="name === 'trash-can'"><TrashCanPath /></template>
    <template v-else-if="name === 'undo'"><UndoPath /></template>
  </svg>
</template>
