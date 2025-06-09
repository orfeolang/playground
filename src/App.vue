<script setup lang="ts">
  import type { ExampleType } from './helpers/type'
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
    <div id="editor">
      <div id="orfeo" contenteditable="true"></div>
      <div id="musicline"></div>
    </div>
  </main>
</template>

<style scoped>
  #editor {
    display: flex;
    white-space:pre-wrap;

    div {
      background: #121212;
      width: 50%;
      height: 100vh;
      color: #ffffff;
      padding: 5px;
      font-size: 18px;
    }

    #musicline {
      background: #222222;
    }
  }
</style>
