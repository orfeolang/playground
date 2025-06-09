<script setup lang="ts">
  import IconMake from './icons/IconMake.vue'
  import Tooltip from './Tooltip.vue'
  import type { iconNameType } from '../../helpers/type'
  import { computed } from 'vue'

  const model = defineModel()

  interface Props {
    colorActive?: boolean
    colorHover?: boolean
    containerSize?: number
    disabled?: boolean
    name: iconNameType
    nameWhenToggled?: iconNameType
    showTooltip?: boolean
    size?: number
    tooltip?: string
    tooltipWhenToggled?: string
    type?: 'button' | 'static' | 'toggle'
  }

  const {
    colorActive = true,
    colorHover = true,
    containerSize,
    disabled = false,
    name,
    nameWhenToggled,
    showTooltip = false,
    size = 24,
    tooltip,
    tooltipWhenToggled,
    type = 'static',
  } = defineProps<Props>()

  const containerSizeRef = computed(() =>
    containerSize ?? size
  )

  const nameWhenToggledRef = computed(() =>
    nameWhenToggled ?? name
  )

  const tooltipWhenNotToggledRef = computed(() =>
    tooltip ?? name
  )

  const tooltipWhenToggledRef = computed(() =>
    tooltipWhenToggled ?? tooltipWhenNotToggledRef.value
  )

  const nameRef = computed(() =>
    model.value
      ? nameWhenToggledRef.value
      : name
  )

  const tooltipRef = computed(() =>
    model.value
      ? tooltipWhenToggledRef.value
      : tooltipWhenNotToggledRef.value
  )

  const classObjectRef = computed(() => ({
    clickable: ! disabled && type !== 'static',
    disabled: disabled,
    'click-color': colorActive && ! disabled && type === 'button',
    'hover-color': colorHover && ! disabled && type !== 'static',
    'toggled-color': colorActive && type === 'toggle' && model.value,
  }))

  const click = () => {
    if (type === 'toggle' && ! disabled) {
      model.value = ! model.value
    }
  }
</script>

<template>
  <div
    class="icon"
    :class=classObjectRef
    :style="{
      'height': containerSizeRef + 'px',
      'width': containerSizeRef  + 'px'
    }"
    @click=click
  >
    <Tooltip :text=tooltipRef :hide=" ! showTooltip">
      <IconMake
        :name=nameRef
        :size=size
      />
    </Tooltip>
  </div>
</template>

<style scoped>
  .icon {
    color: #555;
    display: flex;
    justify-content: space-around;

    &.clickable {
      cursor: pointer;
    }

    &.disabled {
      opacity: 0.3;
    }

    &.hover-color:hover {
      color: #555555aa;
    }

    /* Note: Must come after &.hover-color:hover */
    &.click-color:active {
      color: #ff00ff;
    }

    &.toggled-color {
      color: #00ff00;
    }

    &.toggled-color.hover-color:hover {
      color: #00ff00aa;
    }
  }
</style>
