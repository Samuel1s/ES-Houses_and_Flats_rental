<template>
	<md-content id="view-document">
		<div id="view-listHouses">
			<md-list v-for="(item, i) in houses" :key="item.rua" :md-expand-single="expandSingle">
	            <div id="item-part">  
		            <md-list-item id="list-width"  md-expand >
			            <md-icon>home</md-icon>
			            <span class="info-1">{{item.rua}}</span>
			            <span class="info-2">{{item.bairro}}</span>
			            <span class="info-3">{{item.uf}}</span>

			            <md-list slot="md-expand">
			            	<div id="item-part">
				                <md-list-item class="md-inset">Cidade: {{item.cidade}}</md-list-item>
				            </div>
				            <div id="item-part">
				                <md-list-item class="md-inset">Área: {{item.area}}</md-list-item>
				                <md-list-item class="md-inset" :class="transformData(item.armario_emb, i)">Armário embutido: {{value_armario[i]}}</md-list-item>
				                <md-list-item class="md-inset">Vagas de Garagem: {{item.n_garagem}}
				                </md-list-item>
				            </div>
				            <div id="item-part">
				                <md-list-item class="md-inset">Número de Quartos: {{item.n_quarto}}
				                </md-list-item>
				                <md-list-item class="md-inset">Número de Salas: {{item.n_sala}}
				                </md-list-item>
				                <md-list-item class="md-inset">Número de Suítes: {{item.n_suite}}
				                </md-list-item>
				            </div>  
				            <div id="item-part">
				                <md-list-item class="md-inset">Informações adicionais: {{item.descricao}}</md-list-item>
				            </div>     
			            </md-list>
		             
		            </md-list-item>
		            <md-list-item> 
		                <md-button class="md-icon-button md-accent" @click="active = true">
			        		<md-icon>delete</md-icon>
			        	</md-button>
			        	<md-button class="md-icon-button md-primary" @click="selectHouse(item); $router.push('updateHouse')">
			        		<md-icon>edit</md-icon>
			        	</md-button>
		            </md-list-item> 
	            </div>
	            <md-dialog-confirm
					    :md-active.sync="active"
					    md-title="Tem certeza que deseja excluir esse imóvel?"
					    md-content="Ao clicar no botão confimar você irá excluir esse imóvel da lista <strong>e não o verá novamente,</strong> caso contrário aperte o botão cancelar."
					    md-confirm-text="Confimar"
					    md-cancel-text="Cancelar"
					    @md-cancel="onCancel"
					    @md-confirm="removeHouse(item); loadHouses(); CLEAR_Arr()"
					    />      
	        </md-list>
	    </div>
	    <div id="align-fab">
			<md-button class="md-icon-button md-raised md-primary" @click="$router.push('addHouses')">
		        <md-icon>add</md-icon>  
		    </md-button>
	    </div>
	    <div id="align-back">
	    	<md-button class="md-primary" @click="$router.push('/')">Voltar</md-button>
	    </div>	
	</md-content>    
</template>

<script>
	import { mapState, mapMutations, mapActions } from 'vuex'

	export default {
		data: () => ({
			value_armario: [],
			expandSingle: false,
	        active: false,
	        value: null
	    }),

		components: {},

		computed: {
	        ...mapState([
	        	'houses'
	        ])
		},
	     
		methods: {
	        ...mapActions([
				'removeHouse', 'loadHouses', 'selectHouse'
			]),

			...mapMutations([
                'CLEAR_Arr'
			]),

			onCancel () {
	            this.value = 'Disagreed'
	        },

	        transformData(data, i) {
	        	if (data == false) 
                    this.value_armario[i] = 'Não'
                else
                	this.value_armario[i] = 'Sim'
	        }
		},

		mounted () {
	        this.$store.dispatch('loadHouses')
	    }
	}
</script>

<style scoped>
	#view-document {
		height: 67vh
	}

	#view-listHouses {
		display: flex;
        flex-direction: column;
        align-items: center  
	}

	#align-fab {
		text-align: end;
		margin: 16px 8px
	}

	#align-back {
		text-align: center;
		margin: 16px 8px
	}

	#item-part {
		display: flex
	}

	#list-width {
		width: 70vw

	}

	.info-1 {
		width: 40vw;
		color: rgba(0,0,0,0.54)
	}

	.info-2 {
		width: 20vw;
		color: rgba(0,0,0,0.54)
	}

	.info-3 {
		width: 10vw;
		color: rgba(0,0,0,0.54)
	}
</style>