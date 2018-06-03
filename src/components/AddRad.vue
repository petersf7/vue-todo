<template>
    <div class="add-row-container">
        <input class="input is-primary" v-model="newTodo" placeholder="Add todo">
        <button class="button is-primary is-rounded" v-on:click="addTodo()">Added</button>
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
                store.dispatch('CREATE_TODO_ITEM', { id: 11, title: this.newTodo, show: true} );
                this.newTodo = "";
            },
        }
    }
</script>

<style scoped lang="less">
    .add-row-container{
        display: flex;
        flex-direction: row;
    }
</style>
