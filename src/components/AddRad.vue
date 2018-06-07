<template>
    <div>
        <h1 class="title">Add todo</h1>
        <div class="add-row-container">
            <div class="input-container">
                <input class="input is-primary" v-model="newTodo.text" placeholder="Add todo">
            </div>
            <button class="button is-primary" v-on:click="addTodo()">Add</button>
        </div>
    </div>
</template>

<script>
    import store from '../store';

    export default {
        data: () => {
            return {
                newTodo: {
                    text: ''
                }
            }
        },
        methods: {
            addTodo() {
                store.dispatch('ADD_TODO', { id: 11, title: this.newTodo.text, aktiv: true} );
                this.newTodo.text = '';
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
