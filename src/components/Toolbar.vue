<script setup lang="ts">
  import type { ExampleType } from '../helpers/type'
  import Button from './widgets/Button.vue'
  import Icon from './widgets/Icon.vue'
  import Select from './widgets/Select.vue'
  import examplesJSON from '../db/json/examples.json'
  import versionsJSON from '../db/json/versions.json'
  import { ref, watch } from 'vue'

  const emit = defineEmits(['update:example', 'update:version'])

  const iconSize = 28

    // Versions
  const versions = [...versionsJSON] as Array<string>
  const selectedVersionRef = ref(versions[0])
  const selectVersion = (selected: string) => {
    selectedVersionRef.value = selected
    emit('update:version', selectedVersionRef.value)
  }

    // Example
  const examplesTitle = "Examples"
// !! Combine this with the other that is in watch.
  let examples = (examplesJSON as any)[selectedVersionRef.value] as Array<ExampleType>
  let exampleNames = examples.map(obj => obj['name'])
  exampleNames.unshift(examplesTitle)
  const isExamplesDisabledRef = ref(exampleNames.length <= 1)
  const selectedExampleNameRef = ref(exampleNames[0])
  const selectExample = (selected: string) => {
    let payload = examples.find(example => example.name === selected)
    if (!payload) {
      payload = {
        name: examplesTitle,
        orfeo: '',
        musicline: '',
      }
    }
    selectedExampleNameRef.value = selected
    console.log('here:' + selectedExampleNameRef.value)
    emit('update:example', payload)
  }

  watch(selectedVersionRef, () => {
    console.log('lll')
    examples = (examplesJSON as any)[selectedVersionRef.value] as Array<ExampleType>
    exampleNames = examples.map(obj => obj['name'])
    exampleNames.unshift(examplesTitle)
    isExamplesDisabledRef.value = exampleNames.length <= 1
    selectedExampleNameRef.value = exampleNames[0]
    selectExample(selectedExampleNameRef.value)
  })
</script>

<template>
  <header>
    <div class="left-side">
      <Icon type="static" name="orfeo"     :size=iconSize />
      <Select
        :defaultOption=selectedVersionRef
        :options=versions
        width="80px"
        @input="selectVersion"
      />
      <Icon type="button" name="undo"      :size=iconSize />
      <Icon type="button" name="redo"      :size=iconSize />
      <Icon type="button" name="trash-can" :size=iconSize />
      <Icon type="button" name="share"     :size=iconSize />
      <Icon type="button" name="keyboard"  :size=iconSize />
      <Select
        :defaultOption=selectedExampleNameRef
        :options=exampleNames
        :isDisabled=isExamplesDisabledRef
        :title=examplesTitle
        width="200px"
        @input="selectExample"
      />
    </div>
    <div class="right-side">
      <a href="https://orfeolang.com">Orfeo's documentation</a>
    </div>
  </header>
</template>

<style scoped>
  header {
    /*
    padding-top: 60px;
    padding-bottom: 60px;
    */
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    padding-inline: 5px;

    div {
      display: flex;
      align-items: center;
    }

    div.left-side > * {
      margin-right: 10px;
    }
  }
</style>
