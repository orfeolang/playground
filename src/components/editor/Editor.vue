<script setup lang="ts">
  import { onMounted } from 'vue'

  onMounted(() => {
    let editorScript = document.createElement('script')
    editorScript.setAttribute('src', 'editor.bundle.js')
    document.head.appendChild(editorScript)
  })
</script>

<template>
  <div id="editor">
    <div id="orfeo" contenteditable="true"></div>
    <div id="musicline"></div>
  </div>
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
