<template>
	<div id="view-listHouses">
	    <md-table v-model="items" md-sort="name" md-sort-order="asc" md-card>
		    <md-table-toolbar>
		        <h1 class="md-title">Houses</h1>
		    </md-table-toolbar>
		    <md-table-row slot="md-table-row" slot-scope="{ item }">
		        <md-table-cell md-label="Rua" md-sort-by="street">{{ item.rua }}</md-table-cell>
		        <md-table-cell md-label="Bairro" md-sort-by="neighbo">{{ item.bairro }}</md-table-cell>
		        <md-table-cell md-label="Estado" md-sort-by="state">{{ item.uf }}</md-table-cell>
		        <md-table-cell>
		        	<md-button class="md-icon-button md-accent" @click="active = true">
		        		<md-icon>delete</md-icon>
		        	</md-button>
		        </md-table-cell>

				<md-dialog-confirm
				    :md-active.sync="active"
				    md-title="Tem certeza que deseja excluir esse imóvel?"
				    md-content="Ao clicar no botão confimar você irá excluir esse imóvel da lista <strong>e não o verá novamente,</strong> caso contrário aperte o botão cancelar."
				    md-confirm-text="Confimar"
				    md-cancel-text="Cancelar"
				    @md-cancel="onCancel"
				    @md-confirm="removeItem(item); loadItems()"/> 
		    </md-table-row>
	    </md-table>

	    <div id="align-fab">
		    <md-button class="md-icon-button md-raised md-primary" @click="$router.push('addHouses')">
	            <md-icon>add</md-icon>  
	        </md-button>
        </div>
   </div>
</template>

<script>
    import Vue from 'vue'
    import { MdTable, MdCard, MdRipple, MdDialog } from 'vue-material/dist/components'
    import { MdDialogConfirm } from 'vue-material/dist/components'
    import 'vue-material/dist/vue-material.min.css'
    import 'vue-material/dist/theme/default.css'
    
    Vue.use(MdCard)
    Vue.use(MdTable)
    Vue.use(MdRipple)
    Vue.use(MdDialog)
    Vue.use(MdDialogConfirm)

	import { mapState, mapGetters, mapActions } from 'vuex'


	export default {
		data: () => ({
	        active: false,
	        value: null
	    }),

		components: {},

		computed: {
	        ...mapState([
	        	'items'
	        ])
		},
	     
		methods: {
	        ...mapActions([
				'removeItem', 'loadItems'
			]),

			onCancel () {
	            this.value = 'Disagreed'
	        }

		},

		mounted () {
	        this.$store.dispatch('loadItems')
	    },
	}
</script>

<style scoped>
	#view-listHouses {
        height: 67vh
	}

	#align-fab {
		text-align: end;
		margin: 16px 8px;
	}

</style>