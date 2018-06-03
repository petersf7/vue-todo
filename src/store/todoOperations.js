const todoActions = {
    ADD_TODO: async ({commit}, data) => {
        commit('ADD_TODO', data)
    },
    REMOVE_TODO: async ({commit}, data) => {
        commit('REMOVE_TODO', data)
    },
    TOGGLE_SHOW: async ({commit}, data) => {
        commit('TOGGLE_SHOW', data)
    },
};

const todoMutations = {
    ADD_TODO: (state, data) => {
        state.todoer.push(data);
    },
    REMOVE_TODO: (state, inputId) => {
        for(let i =0; i < state.todoer.length; i++){
            if(state.todoer[i].id === inputId){
                state.todoer.splice(i, 1);
                break;
            }
        }
    },
    TOGGLE_SHOW: (state, inputId) => {
        for(let i =0; i < state.todoer.length; i++){
            if(state.todoer[i].id === inputId){
                state.todoer[i].aktiv = !state.todoer[i].aktiv;
                break;
            }
        }
    },
};

export const mutations = todoMutations;
export const actions = todoActions;

