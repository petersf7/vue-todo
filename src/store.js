import Vue from 'vue';
import Vuex from 'vuex';
import {actions, mutations} from "./store/todoOperations";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todoer: [
            {id: 1, title: "Spis opp Nugattien", aktiv: true},
            {id: 2, title: "Spis opp M&M", aktiv: false},
            {id: 3, title: "Spis opp Daimen", aktiv: false},
            {id: 4, title: "Spis opp Bløtkaka", aktiv: true}
        ]
    },
    mutations: mutations,
    actions: actions
});
