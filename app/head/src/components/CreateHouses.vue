<template>
	<md-content id="content" class="md-elevation-2">
		<h1 class="md-title">Cadastro de Casas</h1>
		<form>
		    <div id="slice">
				<md-field :class="messageClass">
					<label>Rua</label>
					<md-input v-model.lazy="obj.rua" maxlength="40" md-counter="40" required>
					</md-input>
				</md-field>
				
				<md-field :class="messageClass">
					<label>Bairro</label>
					<md-input v-model.lazy="obj.bairro" maxlength="20" md-counter="20" required>
					</md-input>
				</md-field>

				<md-autocomplete :class="messageClass" v-model.lazy="obj.uf" :md-options="estados" md-dense required>
	                <label>UF</label>
	            </md-autocomplete>
			</div>

			<div id="slice">
	            <md-field :class="messageClass">
					<label>Área</label>
					<md-input v-model.number="obj.area" maxlength="4" md-counter="4" required></md-input>
				</md-field>
			    
	            <div class="align">
					<label>Armário embutido</label>
					<md-switch v-model.lazy="obj.armario_emb" class="md-primary"></md-switch>
                </div>
                
				<md-field :class="messageClass">
					<label>Quantas vagas de Garagem?</label>
					<md-input v-model.number="obj.n_garagem" maxlength="4" md-counter="4" required>
					</md-input>
				</md-field>
			</div>

			<div id="slice">
				<md-field :class="messageClass">
					<label>Quantos Quartos?</label>
					<md-input v-model.number="obj.n_quartos" maxlength="4" md-counter="4" required>
					</md-input>
				</md-field>
				
				<md-field :class="messageClass">
					<label>Quantas Salas?</label>
					<md-input v-model.number="obj.n_salas" maxlength="4" md-counter="4" required>
					</md-input>
				</md-field>

				<md-field :class="messageClass">
					<label>Quantas Suítes?</label>
					<md-input v-model.number="obj.n_suites" maxlength="4" md-counter="4" required>
					</md-input>
				</md-field>
			</div>	
			
			<md-field class="change">
				<label>Descrições adicionais</label>
				<md-textarea v-model.lazy="obj.descricao" maxlength="300" md-counter="300">
				</md-textarea>
			</md-field>
            
            <md-switch v-model="hasMessages">{{ !hasMessages ? 'Mostrar' : 'Esconder' }} Obrigatórios
            </md-switch>
     
	        <div class="align-buttons"> 
		   	    <md-button class="md-raised" type="reset">RESET</md-button>
		   	    <md-button class="md-raised md-primary" @click="createItem(obj); $router.push('/')">Create</md-button>
	        </div> 
	    </form>
    </md-content>
</template>

<script>
	import Vue from 'vue'
    import { MdButton, MdField, MdSwitch, MdContent } from 'vue-material/dist/components'
    import { MdAutocomplete, MdMenu } from 'vue-material/dist/components'
    import 'vue-material/dist/vue-material.min.css'
    import 'vue-material/dist/theme/default.css'
    
    Vue.use(MdButton)
    Vue.use(MdField)
    Vue.use(MdSwitch)
    Vue.use(MdMenu)
    Vue.use(MdAutocomplete)
    
	import { mapState, mapMutations, mapActions } from 'vuex'

	import BR_STATES from '../../Estados.json'

	var estados_br = [];

	BR_STATES.forEach(est => {
	    estados_br.push(est.Sigla);
	});

	export default {
		components: {},

        data: () => ({
        	estados: estados_br,
		    hasMessages: false
        }),

		computed: {
	        ...mapState(['obj', 'estados']),

	        messageClass () {
		        return {
		            'md-invalid': this.hasMessages
		        }
            }
		},
	    
		methods: {
			...mapActions([
				'createItem'
			]),
		},

	}
</script>

<style scoped>
	#slice {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
	}

	#content {
		padding: 24px 16px
	}

	.md-field {
		margin: 8px 16px
	}

	.md-switch {
        margin: 8px
	}

	.change {
		margin: 56px 0px
	}

	.align {
		display: flex;
		align-items: center;
		justify-content: space-around;
		min-width: 185px;
        padding-top: 28px;
        font-size: 16px;
        color: rgba(0,0,0,0.54);
	}

	.align-buttons {
		text-align: center
	}
</style>