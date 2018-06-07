<template>
    <div id="todo-container">
        <div id="todo-create-btn-container" class="level">
            <div class="level-left">
                <button id="add-row-button" class="button is-primary" v-on:click="navigateToAddTodo()">+ Add todo
                </button>
            </div>
            <div class="level-right">
                <button class="button" v-bind:class="{ 'is-info': filter==='ikkeaktiv'}" v-on:click="visIkkeAktive()">
                    ikke-aktive
                </button>
                <button class="button" v-bind:class="{ 'is-info': filter==='aktiv'}" v-on:click="visAktive()">Aktive
                </button>
                <button class="button" v-bind:class="{ 'is-info': filter==='alle'}" v-on:click="visAlleTodo()">Alle
                </button>
            </div>
        </div>

        <TodoRad v-for="todo in todoList" v-bind:todoen="todo"/>
    </div>
</template>

<script>
    import TodoRad from '../components/TodoRad.vue';
    import store from 'vuex';

    export default {
        name: 'home',
        computed: {
            todoList() {
                if (this.filter === 'ikkeaktiv') {
                    return this.$store.state.todoer.filter(todo => !todo.aktiv);
                }
                if (this.filter === 'aktiv') {
                    return this.$store.state.todoer.filter(todo => todo.aktiv);
                }
                return this.$store.state.todoer;
            }
        },
        data: function () {
            return {
                filter: 'alle'
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
                this.filter = 'aktiv';
            },
            visAlleTodo() {
                this.filter = 'alle';
            },
            visIkkeAktive() {
                this.filter = 'ikkeaktiv';
            },

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
