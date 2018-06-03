import Vue from 'vue';
import Vuex from 'vuex';
import {actions, mutations} from "./store/todoOperations";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        title: "My custom title",
        links: [
            'http://google.com,' +
            'http://vg.com'
        ],
        todoer: [
            {id: 1, title: "Spis opp Nugattien", show: true},
            {id: 2, title: "Spis opp M&M", show: true},
            {id: 3, title: "Spis opp Daimen", show: true},
            {id: 4, title: "Spis opp Bløtkaka", show: true}
        ]
    },
    getters: {
        countLinks: state => {
            return state.links.length
        }
    },
    mutations: mutations,
    actions: actions
});
