<template>
    <div id="todo-container">
        <div id="todo-create-btn-container" class="level">
            <div class="level-left">
                <button id="add-row-button" class="button is-primary" v-on:click="navigateToAddTodo()">+ Add todo</button>
            </div>
            <div class="level-right">
                <button class="button" v-bind:class="{ 'is-info': !visAlle}" v-on:click="visAktive()">Vis aktive</button>
                <button class="button" v-bind:class="{ 'is-info': visAlle}" v-on:click="visAlleTodo()">Vis alle</button>
            </div>
        </div>

        <TodoRad v-for="todo in todoList" v-bind:todoen="todo" v-bind:visAlleTodo="visAlle"/>
    </div>
</template>

<script>
    import TodoRad from '../components/TodoRad.vue';
    import {mapState} from 'vuex';

    export default {
        name: 'home',
        computed: mapState({
            todoList: state => state.todoer
        }),
        data: function(){
            return {
                visAlle: true
            }
        },
        components: {
            TodoRad
        },
        methods: {
            navigateToAddTodo() {
                this.$router.push("/add");
            },
            visAktive() {
                this.visAlle = false;
            },
            visAlleTodo() {
                this.visAlle = true;
            }
        }
    };
</script>

<style lang="less" scoped>
    #todo-container {
        display: flex;
        flex-direction: column;

        #todo-create-btn-container {
            padding: 15px 0;
            display: flex;
            flex-direction: row;
        }

    }
</style>
