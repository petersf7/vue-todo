<template>
  <div id="app">
    <div class="todo-side-container"></div>
      <div id="todo-middle-container">
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>
        <router-view/>
      </div>
    <div class="todo-side-container"></div>
  </div>
</template>

<style lang="less">

#app {
  display: flex;
  flex-direction: row;

  .todo-side-container {
    flex-grow: 0.25;
  }

  #todo-middle-container {
    text-align: left;
    flex-grow: 0.5;
  }
}
#nav {
  padding: 30px;
    text-align: center;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
