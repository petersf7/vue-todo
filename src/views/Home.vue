<template>
    <div id="todo-container">
        <div id="todo-create-btn-container">
            <button class="button is-primary is-rounded" v-on:click="navigateToAddTodo()">Add row</button>
            <button class="button is-info is-rounded" v-on:click="toggle()">Toggle</button>
            <div v-if="!show">Viser ikke markert. </div>
        </div>

        <TodoRad v-for="todo in todoList" v-bind:todoen="todo" v-bind:showTagged="show"/>
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
                show: true
            }
        },
        components: {
            TodoRad
        },
        methods: {
            navigateToAddTodo() {
                this.$router.push("/add");
            },
            toggle() {
                this.show = !this.show;
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
