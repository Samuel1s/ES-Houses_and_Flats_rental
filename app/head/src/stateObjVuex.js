import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

const API_URL = 'http://localhost:8000';

const getInitialStateHouse = () => {
    return {
        state0: { cidade: "", rua: "", bairro: "", uf: "", area: null, armario_emb: false,
            n_garagem: null, n_quarto: null, n_sala: null,  n_suite: null, 
            descricao: ""
        },
    }
}

const getInitialStateFlat = () => {
    return {
        state0: { cidade: "", rua: "", bairro: "", uf: "", area: null, armario_emb: false, 
            n_garagem: null, n_quarto: null, n_sala: null, n_suite: null,
            n_sala_jantar: null, portaria_24h: false, valor_cond: null, 
            descricao: ""
        },
    }
}


const store = new Vuex.Store({
    state: {
    	house : { cidade: "", rua: "", bairro: "", uf: "", area: null, armario_emb: false, 
            n_garagem: null, n_quarto: null, n_sala: null, n_suite: null,
            descricao: ""
		},

        flat : { cidade: "", rua: "", bairro: "", uf: "", area: null, armario_emb: false, 
            n_garagem: null, n_quarto: null, n_sala: null, n_suite: null,
            n_sala_jantar: null, portaria_24h: false, valor_cond: null, 
            descricao: ""
        },

        houses: [],
        flats: [],  

        neighborhoods: [],
    },

    getters: {
        houses: state => {
            return state.houses;
        },

        house: state => {
            return state.house;
        },
        
        flats: state => {
            return state.flats;
        },

        flat: state => {
            return state.flat;
        },

        neighborhoods: state => {
            return state.neighborhoods;
        }

    },

    mutations: {
        //For clean and security.
        CLEAR_Arr(state) {
            state.neighborhoods = []
        },

        SET_Houses (state, houses) {
            state.houses = houses,
            houses.forEach(h => {state.neighborhoods.push(h.bairro);}),
            //For security.
            state.house = getInitialStateHouse()
        },

        SET_Flats (state, flats) {
            state.flats = flats,
            flats.forEach(f => {state.neighborhoods.push(f.bairro);}),
            //For security.
            state.flat = getInitialStateFlat()
        },

        NEW_Houses (state, house) {
        	state.houses.unshift(house);
            //For clean and security.
            state.house = getInitialStateHouse()
        },

        NEW_Flats (state, flat) {
            state.flats.unshift(flat);
            //For clean and security.
            state.flat = getInitialStateFlat()
        },

        UPDATE_Houses (state, updatedHouse) {
        	const index = state.houses.findIndex(it => it._id == updatedHouse._id );
        	if (index !== -1) {
        		state.houses.splice(index, 1, updatedHouse);
        	}
        },

        UPDATE_Flats (state, updatedFlat) {
            const index = state.flats.findIndex(it => it._id == updatedFlat._id );
            if (index !== -1) {
                state.flats.splice(index, 1, updatedFlat);
            }
        },

        DELETE_House (state, deletedHouse) {
        	state.houses = state.houses.filter(it => it._id);
        },

        DELETE_Flat (state, deletedFlat) {
            state.flats = state.flats.filter(it => it._id);
        },

        GET_House (state, getHouse) {
            state.house = getHouse
        },

        GET_Flat (state, getFlat) {
            state.flat = getFlat
        },
    },

    actions: {
        async loadHouses ({ commit }) {
            await axios
                .get(`${API_URL}/user/houses/`)
                .then(response => {commit('SET_Houses', response.data)})
        },

        async createHouse ({ commit }, house) {
        	const url = `${API_URL}/user/create_house/`;
        	await axios
        	    .post(url,house)
                .then(response => {commit('NEW_Houses', house)})
        },

        async updateHouse ({ commit }, updatedHouse) {
        	const url = `${API_URL}/user/up_house/`;
        	await axios
        	    .put(`${url}${updatedHouse._id}`, updatedHouse)
        	    .then(response => {commit('UPDATE_Houses', response.data)})
        },

        async removeHouse ({ commit }, deletedHouse) {
        	const url = `${API_URL}/user/dl_house/`;
        	await axios
        	    .delete(`${url}${deletedHouse._id}`)
        	    .then(response => {commit('DELETE_House', response.data)})
        },

        async selectHouse ({ commit}, house) {
            const url = `${API_URL}/user/get_house/`;
            await axios 
                .get(`${url}${house._id}`)
                .then(response => {commit('GET_House', response.data)})
        },

        async loadFlats ({ commit }) {
            await axios
                .get(`${API_URL}/user/flats/`)
                .then(response => {commit('SET_Flats', response.data)})
        },

        async createFlat ({ commit }, flat) {
            const url = `${API_URL}/user/create_flat/`;
            await axios
                .post(url,flat)
                .then(response => {commit('NEW_Flats', flat)})
        },

        async updateFlat ({ commit }, updatedFlat) {
            const url = `${API_URL}/user/up_flat/`;
            await axios
                .put(`${url}${updatedFlat._id}`, updatedFlat)
                .then(response => {commit('UPDATE_Flats', response.data)})
        },

        async removeFlat ({ commit }, deletedFlat) {
            const url = `${API_URL}/user/dl_flat/`;
            await axios
                .delete(`${url}${deletedFlat._id}`)
                .then(response => {commit('DELETE_Flat', response.data)})
        },

        async selectFlat ({ commit}, flat) {
            const url = `${API_URL}/user/get_flat/`;
            await axios 
                .get(`${url}${flat._id}`)
                .then(response => {commit('GET_Flat', response.data)})
        } 

    }
})

export { store }