<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <div>
      <img src="/favicon.svg" alt="orfeo" height="30px" />
      <button>compile</button>
      <select name="compiler-version" id="compiler-version">
        <option value="0.2.0">v0.2.0</option>
        <!-- <option value="0.1.1">v0.1.1</option> -->
      </select>
      <select name="examples" id="examples">
        <option value="example 1">example 1</option>
        <option value="example 2">example 2</option>
      </select>
      <button>save/share</button>
    </div>
    <div>
      <a href="https://orfeolang.com">Orfeo's website</a>
    </div>
  </header>
  <main>
    <div id="code-windows">
      <div id="editor" contenteditable="true">editor</div>
      <div id="monitor"></div>
    </div>
  </main>
</template>

<style scoped>

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    padding-inline: 5px;

    div {
      display: flex;
      align-items: center;
    }
  }

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
