<template>
    <div id="app">
        <div id="todo-middle-container">
            <div id="nav">
                <router-link to="/">Home</router-link>
            </div>
            <router-view/>
        </div>
    </div>
</template>

<style lang="less">
    #app {
        padding: 0 25%;

        #todo-middle-container {
            text-align: left;
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
