const todoActions = {
    CREATE_TODO_ITEM: async ({commit}, data) => {
        commit('ADD_TODO', data)
    },
    REMOVE_TODO: async ({commit}, data) => {
        commit('DELETE_TODO', data)
    },
    TOGGLE_SHOW: async ({commit}, data) => {
        commit('TOG_SHOW', data)
    },
};

const todoMutations = {
    ADD_TODO: (state, data) => {
        state.todoer.push(data);
    },
    DELETE_TODO: (state, inputId) => {
        for(let i =0; i < state.todoer.length; i++){
            if(state.todoer[i].id === inputId){
                state.todoer.splice(i, 1);
                break;
            }
        }
    },
    TOG_SHOW: (state, inputId) => {
        for(let i =0; i < state.todoer.length; i++){
            if(state.todoer[i].id === inputId){
                state.todoer[i].show = !state.todoer[i].show;
                break;
            }
        }
    },
};

export const mutations = todoMutations;
export const actions = todoActions;

