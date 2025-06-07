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
</style>
