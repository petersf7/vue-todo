<template>
    <div class="todo-rad" v-if="todoen.show || showTagged">
        <div class="todo-checkbox">
            <label class="checkbox">
                <input type="checkbox" v-on:change="onChange()">
            </label>
        </div>
        <div class="todo-topic">
            {{ todoen.title }}
        </div>
        <div class="todo-rad-buttons">
            <div class="todo-delete">
                <button v-on:click="" class="button is-info is-rounded ">
                    Edit
                </button>
            </div>

            <div class="todo-edit">
                <button v-on:click="deleteTodo()" class="button is-danger is-rounded ">
                    Delete
                </button>
            </div>
        </div>
    </div>

    <div class="todo-rad" v-else>
        <div class="todo-checkbox">
            <label class="checkbox">
                <input type="checkbox"  v-on:change="onChange()">
            </label>
        </div>
        Denne raden vises ikke... Ish
    </div>
</template>

<script>
    import store from '../store';

    export default {
        props: {
            todoen: Object,
            showTagged: Boolean
        },
        methods: {
            deleteTodo() {
                store.dispatch('REMOVE_TODO', this.todoen.id);
            },
            onChange() {
                store.dispatch('TOGGLE_SHOW', this.todoen.id);
            }
        }
    }

</script>

<style lang="less">
    .todo-rad {
        display: flex;
        flex-direction: row;
        padding: 15px 0;

        .todo-checkbox {
            flex-grow: 0.05;
        }

        .todo-rad-buttons {
            flex-grow: 0.4;
            display: flex;
        }

        .todo-topic {
            flex-grow: 0.65;
        }

        .todo-edit {
            padding: 0 10px
        }

        .todo-delete {
            padding: 0 10px
        }
    }

</style>