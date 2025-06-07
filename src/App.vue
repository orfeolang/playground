<script setup lang="ts">
  import Header from './components/Header.vue'
</script>

<template>
  <Header/>
  <main>
    <div id="code-windows">
      <div id="editor" contenteditable="true">editor</div>
      <div id="monitor"></div>
    </div>
  </main>
</template>

<style scoped>
  #code-windows {
    display: flex;

    div {
      background: #121212;
      width: 50%;
      height: 100vh;
      color: #ffffff;
      padding: 5px;
      font-size: 18px;
    }

    #monitor {
      background: #222222;
    }
  }
</style>
