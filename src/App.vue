<script setup lang="ts">
  import type { ExampleType } from './helpers/type'
  import Editor from './components/editor/Editor.vue'
  import Toolbar from './components/Toolbar.vue'
  import { ref } from 'vue'

  const versionRef = ref()

  const handleUpdateExample = (example: ExampleType) => {
    const orfeo = document.getElementById("orfeo") as HTMLDivElement
    orfeo.innerHTML = example.orfeo
    const musicline = document.getElementById("musicline") as HTMLDivElement
    musicline.innerHTML = example.musicline
    console.log('handled update example')
  }
  const handleUpdateVersion = (version: string) => {
    versionRef.value = version
    console.log('handled update version')
  }
</script>

<template>
  <Toolbar
    @update:example="handleUpdateExample"
    @update:version="handleUpdateVersion"
  />
  <main>
    <Editor />
  </main>
</template>
