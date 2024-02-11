const state = {
    isLoading: false,
}

const mutations = {
    setLoading(state, value) { // Accept 'value' to set the state
        state.isLoading = value;
    },
};
export default {
    state,
    mutations,
}