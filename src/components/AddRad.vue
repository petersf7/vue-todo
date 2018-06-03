<template>
    <div>
        <h1 class="title">Add todo</h1>
        <div class="add-row-container">
            <div class="input-container">
                <input class="input is-primary" v-model="newTodo" placeholder="Add todo">
            </div>
            <button class="button is-primary" v-on:click="addTodo()">Add</button>
        </div>
    </div>
</template>

<script>
    import store from '../store';

    export default {
        data: function(){
            return {
                newTodo: ""
            }
        },
        methods: {
            addTodo() {
                store.dispatch('ADD_TODO', { id: 11, title: this.newTodo, aktiv: true} );
                this.newTodo = ""
            },
        }
    }
</script>

<style scoped lang="less">
    .add-row-container{
        display: flex;
        flex-direction: row;

        .input-container {
            flex-grow: 0.9;
            padding: 0 50px 0 0;
        }

        button {
            flex-grow: 0.1;
        }

    }
</style>
