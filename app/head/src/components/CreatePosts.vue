<template>
	<div>
		<div>
			<div>
				<div class="alert alert-warning" v-show=false >
						<button type="button" class="close" @click="hideMessage()">X</button>
						<strong>Error!</strong>
				</div>

				<h1>Criação de um novo usuário.</h1>
                
				<div class="info-form">
					<div id="adress">
						<input v-model.lazy="obj.rua" type="text" placeholder="Rua">
						<input v-model.lazy="obj.bairro" type="text" placeholder="Bairro">
						<input v-model.lazy="obj.uf" type="text" placeholder="UF">
					</div>
					<div class="adress">
						<input v-model.lazy.number="obj.area" type="text" placeholder="">
						<select v-model="obj.armario_emb">
							<option value=true>Sim</option>
							<option value=false>Não</option>
						</select>
						<input v-model.lazy.number="obj.n_suite" type="text" placeholder="Nº Suítes">
					</div>
					<div class="adress">
						<input v-model.lazy.number="obj.n_sala" type="text" placeholder="Nº Salas">
						<input v-model.lazy.number="obj.n_garagem" type="text" placeholder="Nº Vagas de garagem">
						<input v-model.lazy.number="obj.n_quarto" type="text" placeholder="Nº Quartos">
					</div>
					<textarea v-model.lazy="obj.descricao" placeholder="Escreva bastante"></textarea>  
                    
                    <md-button class="md-raised md-primary" @click='createItem(obj)'>Create</md-button>
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
    import { MdButton } from 'vue-material/dist/components'
    import 'vue-material/dist/vue-material.min.css'
    import 'vue-material/dist/theme/default.css'
    
    Vue.use(MdButton)

	import { mapState, mapMutations, mapActions } from 'vuex'

  
	export default {
	name: 'CreatePosts',
	components: {},

	computed: {
        ...mapState(['obj'])
	},
    
	methods: {
		...mapActions([
			'createItem'
		]),
	},

	}
</script>


<style scoped>
	#adress {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
</style>