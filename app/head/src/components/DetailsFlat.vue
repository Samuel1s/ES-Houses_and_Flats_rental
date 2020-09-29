<template>
    <md-content id="content">
    	<div>
            <md-card>
                <md-card-header>
                    <div class="md-title">Detalhes da Casa:</div>
                    <div class="md-subhead">Rua: {{flat.rua}} - Bairro:{{flat.bairro}}</div>
                </md-card-header>

                <md-card-content>
                    <form>
                        <div id="slice">
                            <md-field>
                                <label>Cidade</label>
                                <md-input v-model.lazy="flat.cidade" maxlength="40" md-counter="40">
                                </md-input>
                            </md-field>

                            <md-autocomplete v-model.lazy="flat.uf" :md-options="estados" md-dense>
                                <label>UF</label>
                            </md-autocomplete>
                        </div>

                        <div id="slice">
                            <md-field>
                                <label>Rua</label>
                                <md-input v-model.lazy="flat.rua" maxlength="40" md-counter="40">
                                </md-input>
                            </md-field>
                            
                            <md-autocomplete v-model.lazy="flat.bairro" :md-options="neighborhoods" md-dense>
                                <label>Bairro</label>
                            </md-autocomplete>
                        </div>

                        <div id="slice">
                            <md-field>
                                <label>Área</label>
                                <md-input v-model.number="flat.area" maxlength="4" md-counter="4">
                                </md-input>
                            </md-field>
                            
                            <div class="align">
                                <label>Armário embutido</label>
                                <md-switch v-model.lazy="flat.armario_emb" class="md-primary">
                                </md-switch>
                            </div>
                            
                            <md-field>
                                <label>Quantas vagas de Garagem?</label>
                                <md-input v-model.number="flat.n_garagem" maxlength="4" md-counter="4">
                                </md-input>
                            </md-field>
                        </div>

                        <div id="slice">
                            <md-field>
                                <label>Quantos Quartos?</label>
                                <md-input v-model.number="flat.n_quarto" maxlength="4" md-counter="4">
                                </md-input>
                            </md-field>
                            
                            <md-field>
                                <label>Quantas Salas?</label>
                                <md-input v-model.number="flat.n_sala" maxlength="4" md-counter="4">
                                </md-input>
                            </md-field>

                            <md-field>
                                <label>Quantas Suítes?</label>
                                <md-input v-model.number="flat.n_suite" maxlength="4" md-counter="4">
                                </md-input>
                            </md-field>
                        </div>  

                        <div id="slice">
                            <md-field>
                                <label>Quantos Salas de Jantar?</label>
                                <md-input v-model.number="flat.n_sala_jantar" maxlength="4" md-counter="4" required></md-input>
                            </md-field>
                            
                            <div class="align">
                                <label>Portaria 24 horas: </label>
                                <md-switch v-model.lazy="flat.portaria_24h" class="md-primary"></md-switch>
                            </div>

                            <md-field>
                                <label>Valor do condomínio</label>
                                <md-input v-model.number="flat.valor_cond" maxlength="4" md-counter="4" required></md-input>
                            </md-field>
                        </div>   
                        
                        <md-field class="change">
                            <label>Descrições adicionais</label>
                            <md-textarea v-model.lazy="flat.descricao" maxlength="300" md-counter="300">
                            </md-textarea>
                        </md-field>
                    </form>      
                </md-card-content>

                <md-card-actions>
                    <md-button @click="CLEAR_Arr(); $router.push('listFlats')">Voltar</md-button>
                    <md-button class="md-primary" @click="updateFlat(flat); $router.push('listFlats')">Atualizar</md-button>
                </md-card-actions>
            </md-card>
        </div>
    </md-content>
</template>

<script>
	import Vue from 'vue'
	import { MdContent, MdCard } from 'vue-material/dist/components'

	Vue.use(MdContent, MdCard)

    import { mapState, mapMutations,mapActions } from 'vuex'

    import BR_STATES from '../../Estados.json'

    let estados_br = [];

    BR_STATES.forEach(est => {
        estados_br.push(est.Sigla);
    });

    export default {
        data: () => ({
            estados: estados_br
        }),

        computed: {
            ...mapState([
                'flat', 'neighborhoods'
            ])
        },

        methods: {
            ...mapActions([
                'updateFlat'
            ]),

            ...mapMutations([
                'CLEAR_Arr'
            ]),
        },
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#content {
		padding: 24px 16px
	}

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