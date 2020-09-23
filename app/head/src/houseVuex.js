import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)


const API_URL = 'http://localhost:8000';

const store = new Vuex.Store({
    state: {
    	obj: {
	   	    rua: "",
			bairro: "",
			uf: "",
			area: 0,
			armario_emb: false,
			n_suite: 0,
			n_sala: 0,
			n_garagem: 0,
			n_quarto: 0,
			descricao: ""
		},

        items: [],  
    },

    getters: {
        items: state => {
            return state.items;
        },
    },

    mutations: {
        SET_Items (state, items) {
            state.items = items
        },

        NEW_Items (state, obj) {
        	state.items.unshift(obj)
        },

        UPDATE_Items (state, updatedItem) {
        	const index = state.items.findIndex(it => it.id == updatedItem.id );
        	if (index !== -1) {
        		state.items.splice(index, 1, updatedItem);
        	}
        },

        DELETE_Items (state, item) {
        	state.items = state.items.filter(it => it.id);
        	state.items.unshift(item);
        }
    },

    actions: {
        async loadItems ({ commit }) {
            await axios
                .get(`${API_URL}/user/houses/`)
                .then(response => {commit('SET_Items', response.data)})
        },

        async createItem ({ commit }, obj) {
        	const url = `${API_URL}/user/create_house/`;
        	console.log(obj);
        	await axios
        	    .post(url,obj)
                .then(response => {commit('NEW_Items', response.data)})
        },

        async updateItem ({ commit }, item) {
        	const url = `${API_URL}/user/update_house/`;
        	await axios
        	    .put(`${url}${item._id}`, item)
        	    .then(response => {commit('UPDATE_Items', response.data)})
        },

        async removeItem ({ commit }, item) {
        	const url = `${API_URL}/user/dl_house/`;
        	await axios
        	    .delete(`${url}${item._id}`)
        	    .then(response => {commit('DELETE_Items', item)})
        }
    }
})

export { store }