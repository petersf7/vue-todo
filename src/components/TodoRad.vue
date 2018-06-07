<template>
    <div class="todo-rad box level">
        <div class="todo-checkbox">
            <label class="checkbox">
                <input type="checkbox" v-on:change="onChange()" ref="checkInput">
            </label>
        </div>
        <div class="todo-topic" v-bind:class="{ 'line': !todoen.aktiv}">
            {{ todoen.title }}
        </div>
        <div class="level-right todo-rad-buttons">
            <button v-on:click="deleteTodo()" class="button is-danger level-right ">
                Delete
            </button>
        </div>
    </div>

</template>

<script>
    import store from '../store';

    export default {
        props: {
            todoen: Object
        },
        methods: {
            deleteTodo() {
                store.dispatch('REMOVE_TODO', this.todoen.id);
            },
            onChange() {
                store.dispatch('TOGGLE_SHOW', this.todoen.id);
            }
        },
        updated(){
            if(this.$refs.checkInput) {
                this.$refs.checkInput.checked = !this.todoen.aktiv;
            }
        },
        mounted(){
            if(this.$refs.checkInput) {
                this.$refs.checkInput.checked = !this.todoen.aktiv;
            }
        }

    }

</script>

<style lang="less">
    .todo-rad {

        .todo-checkbox {
            flex-grow: 0.05;
        }

        .todo-rad-buttons {
            flex-grow: 0.4;
        }

        .todo-topic {
            flex-grow: 0.65;
        }

        .line {
            text-decoration: line-through;
        }
    }


</style>