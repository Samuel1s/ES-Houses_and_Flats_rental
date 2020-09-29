<template>
	<md-content id="content" class="md-elevation-2">
		<h1 class="md-title">Cadastro de Apartamentos</h1>
			<form @submit.prevent="submit">
				<div id="slice">
					<md-field :class="messageClass">
						<label>Cidade</label>
						<md-input v-model.lazy="flat.cidade" maxlength="40" md-counter="40" required 
						@change="validateCidade($event.target.value)"></md-input>
						<span id="alert" class="md-caption" v-if="!$v.vl_cidade.required && $v.vl_cidade.$dirty">Campo obrigatório.</span>
					    <span id="alert" class="md-caption" v-if="!$v.vl_cidade.alpha">Digite apenas letras.
					    </span>
					</md-field>

					<md-autocomplete :class="messageClass" v-model.lazy="flat.uf" :md-options="estados" md-dense required>
		                <label>UF</label>
		            </md-autocomplete>
				</div>

			    <div id="slice">
					<md-field :class="messageClass">
						<label>Rua</label>
						<md-input v-model.lazy="flat.rua" maxlength="40" md-counter="40" required 
						@change="validateRua($event.target.value)"></md-input>
						<span id="alert" class="md-caption" v-if="!$v.vl_rua.required && $v.vl_rua.$dirty">Campo obrigatório.</span>
					    <span id="alert" class="md-caption" v-if="!$v.vl_rua.alpha">Digite apenas letras.
					    </span>
					</md-field>

					<md-autocomplete :class="messageClass" v-model.lazy="flat.bairro" :md-options="neighborhoods" md-dense required>
		                <label>Bairro</label>
		            </md-autocomplete>
				</div>
				
				<div id="slice">
		            <md-field :class="messageClass">
						<label>Área</label>
						<md-input v-model.number="flat.area" maxlength="4" md-counter="4" required
						@change="validateArea($event.target.value)"></md-input>
						<span id="alert" class="md-caption" v-if="submitStatus && !$v.vl_area.required && $v.vl_area.$dirty">Campo obrigatório.</span>
					</md-field>
				    
		            <div class="align">
						<label>Armário embutido</label>
						<md-switch v-model.lazy="flat.armario_emb" class="md-primary"></md-switch>
	                </div>
	                
					<md-field :class="messageClass">
						<label>Quantas vagas de Garagem?</label>
						<md-input v-model.number="flat.n_garagem" maxlength="4" md-counter="4" required @change="validateGaragem($event.target.value)"></md-input>
						<span id="alert" class="md-caption" v-if="!$v.vl_garagem.required && $v.vl_garagem.$dirty">Campo obrigatório.</span>
					</md-field>
				</div>

				<div id="slice">
					<md-field :class="messageClass">
						<label>Quantos Quartos?</label>
						<md-input v-model.number="flat.n_quarto" maxlength="4" md-counter="4" required
						@change="validateQuarto($event.target.value)"></md-input>
						<span id="alert" class="md-caption" v-if="!$v.vl_quarto.required && $v.vl_quarto.$dirty">Campo obrigatório.</span>
					</md-field>
					
					<md-field :class="messageClass">
						<label>Quantas Salas?</label>
						<md-input v-model.number="flat.n_sala" maxlength="4" md-counter="4" required
						@change="validateSala($event.target.value)"></md-input>
						<span id="alert" class="md-caption" v-if="!$v.vl_sala.required && $v.vl_sala.$dirty">Campo obrigatório.</span>
					</md-field>

					<md-field :class="messageClass">
						<label>Quantas Suítes?</label>
						<md-input v-model.number="flat.n_suite" maxlength="4" md-counter="4">
						</md-input>
					</md-field>
				</div>	

				<div id="slice">
					<md-field :class="messageClass">
						<label>Quantos Salas de Jantar?</label>
						<md-input v-model.number="flat.n_sala_jantar" maxlength="4" md-counter="4" required
						@change="validateSJantar($event.target.value)"></md-input>
						<span id="alert" class="md-caption" v-if="!$v.vl_sala_j.required && $v.vl_sala_j.$dirty">Campo obrigatório.</span>
					</md-field>
					
					<div class="align">
						<label>Portaria 24 horas: </label>
						<md-switch v-model.lazy="flat.portaria_24h" class="md-primary"></md-switch>
	                </div>

					<md-field :class="messageClass">
						<label>Valor do condomínio</label>
						<md-input v-model.number="flat.valor_cond" maxlength="4" md-counter="4" required
						@change="validateValorCond($event.target.value)"></md-input>
						<span id="alert" class="md-caption" v-if="!$v.vl_cond.required && $v.vl_cond.$dirty">Campo obrigatório.</span>
					</md-field>
				</div>	
				
				<md-field class="change">
					<label>Descrições adicionais</label>
					<md-textarea v-model.lazy="flat.descricao" maxlength="300" md-counter="300">
					</md-textarea>
				</md-field>
	            
	            <md-switch v-model="hasMessages">{{ !hasMessages ? 'Mostrar' : 'Esconder' }} Obrigatórios
	            </md-switch>
	     
		        <div class="align-buttons"> 
		        	 <md-button class="md-primary" @click="CLEAR_Arr(); $router.push('listFlats')">Voltar</md-button>
			   	    <md-button type="reset" class="md-raised">Limpar</md-button>
			   	    <md-button type="submit" v-bind:class="[ submitStatus == false ? messageClass : (createFlat(flat), $router.push('listFlats'))]" class="md-raised md-primary">Criar</md-button>
		        </div>  
		    </form>
    </md-content>
</template>

<script>
	import Vue from 'vue'
    import { MdButton, MdField, MdSwitch, MdContent } from 'vue-material/dist/components'
    import { MdAutocomplete, MdMenu, MdDialog, MdDialogAlert } from 'vue-material/dist/components'
    import 'vue-material/dist/vue-material.min.css'
    import 'vue-material/dist/theme/default.css'
    
    Vue.use(MdButton)
    Vue.use(MdField)
    Vue.use(MdSwitch)
    Vue.use(MdMenu)
    Vue.use(MdDialog, MdDialogAlert)
    Vue.use(MdAutocomplete)
    
	import { mapState, mapMutations, mapActions } from 'vuex'
	import { required, minLength, maxLength, alpha } from 'vuelidate/lib/validators'
 
	import BR_STATES from '../../Estados.json'

	let estados_br = [];

	BR_STATES.forEach(est => {
	    estados_br.push(est.Sigla);
	});
    
	export default {
		components: {},

        data: () => ({
        	vl_cidade: '',vl_rua: '', vl_area: null, 
        	vl_garagem: null, vl_quarto: null, vl_sala: null,
        	vl_sala_j: null, vl_cond: null,
        	estados: estados_br,
		    hasMessages: false,
		    submitStatus: false,
        }),

		computed: {
	        ...mapState(['flat', 'neighborhoods']),

	        messageClass () {
			    return {
			        'md-invalid': this.hasMessages
			    }
            },
		},

		validations: {
			vl_cidade: {
            	required,
            	alpha
            },

            vl_rua: {
            	required,
            	alpha
            },

            vl_area: {
            	required
            },

            vl_garagem: {
            	required
            },

            vl_quarto: {
            	required
            },

            vl_sala: {
            	required
            },

            vl_sala_j: {
                required
            },

            vl_cond: {
            	required
            }

        },
	    
		methods: {
			...mapActions([
				'createFlat'
			]),

			...mapMutations([
                'CLEAR_Arr'
			]),

			validateCidade(value) {
                this.vl_cidade = value;
                this.$v.vl_cidade.$touch()
            },

            validateRua(value) {
                this.vl_rua = value;
                this.$v.vl_rua.$touch()
            },

            validateArea(value) {
                this.vl_area = value;
                this.$v.vl_area.$touch()
            },

            validateGaragem(value) {
                this.vl_garagem = value;
                this.$v.vl_garagem.$touch()
            },

            validateQuarto(value) {
                this.vl_quarto = value;
                this.$v.vl_quarto.$touch()
            },

            validateSala(value) {
                this.vl_sala = value;
                this.$v.vl_sala.$touch()
            },

            validateSJantar(value) {
                this.vl_sala_j = value;
                this.$v.vl_sala_j.$touch()
            },

            validateValorCond(value) {
                this.vl_cond = value;
                this.$v.vl_cond.$touch()
            },

			submit() {
				this.submitStatus = true;

                // stop here if form is invalid
                this.$v.$touch();
                if (this.$v.$invalid) {
                    return;
                }

			}
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

	#alert {
		color: red
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