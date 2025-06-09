<script setup lang="ts">
  import Icon from './Icon.vue'
  import Tooltip from './Tooltip.vue'
  import { ref, onMounted } from 'vue'
  const emit = defineEmits(['input'])

  interface Props {
    defaultOption?: string
    isDisabled?: boolean
    options: Array<String>
    showTooltip?: boolean
    tabindex?: number
    title?: string
    tooltip?: string
    width?: string
  }

  const {
    defaultOption,
    isDisabled = false,
    options,
    showTooltip = false,
    tabindex = 0,
    title,
    tooltip,
    width = '100%'
  } = defineProps<Props>()

  const selectedRef = ref( // This not retriggering... Shoudl be computed???
    defaultOption
      ? defaultOption
      : options.length > 0
        ? options[0]
        : null
  )

  const isOpenRef = ref(false)

  onMounted(() => {
    emit('input', selectedRef.value) // This looks like it might be failing...
  })
</script>

<template>
  <div class="select" :class="{ disabled: isDisabled }">
    <Tooltip :text=tooltip :hide=" ! showTooltip">
      <div
        class="content"
        :tabindex="tabindex"
        @blur="isOpenRef = false"
        :style="{ width: width }"
      >
        <div
          class="selection-wrapper"
          :class="{ open: isOpenRef }"
          @click="isOpenRef = ! isOpenRef"
        >
          <div
            class="selection"
            :class="{ title : selectedRef === title }"
          >{{ selectedRef }}</div>
          <Icon name="caret--down" :size=22 />
        </div>
        <div class="items" :class="{ 'hide': ! isOpenRef }">
          <div
             class="item"
             :class="{ title : title && i === 0 }"
             v-for="(option, i) of options"
            :key="i"
            @click="
              isOpenRef = false;
              selectedRef = option;
              $emit('input', option);
            "
          >
            {{ option }}
          </div>
        </div>
      </div>
    </Tooltip>
  </div>
</template>

<style scoped>
  .content {
    font-size: 16px;
    height: 42px;
    line-height: 38px;
    outline: none;
    position: relative;
    text-align: left;

    .selection-wrapper {
      align-items: center;
      background: #0a0a0a;
      border: 1px solid #666666;
      color: #fff;
      cursor: pointer;
      display: flex;
      height: 38px;
      justify-content: space-between;
      padding: 0 5px 0 10px;
      user-select: none;

      &.open {
        border: 1px solid #ad8225;
      }
    }

    .items {
      background: #0a0a0a;
      border-bottom: 1px solid #ad8225;
      border-left: 1px solid #ad8225;
      border-right: 1px solid #ad8225;
      color: #fff;
      left: 0;
      overflow: hidden;
      position: absolute;
      right: 0;
      z-index: 3; /* To go over Wavesurfer. */

      &.hide {
        display: none;
      }

      .item {
        color: #fff;
        cursor: pointer;
        height: 42px;
        padding-left: 10px;
        user-select: none;

        &:hover {
          background-color: #333;
        }
      }
    }
  }

  .disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  .title {
    color: #777 !important;
  }
</style>
