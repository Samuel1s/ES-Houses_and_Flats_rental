<template>
    <div id="card-align">
        <md-card id="card-size">
            <md-card-media-cover>
                <md-card-media md-ratio="1:1">
                  <img src="../assets/img-casa.jpg">
                </md-card-media>

                <md-card-area>
                    <md-card-header>
                        <span class="md-title">As melhores casas da Região.</span>
                        <span class="md-subhead">Cadastre sua casa ou consulte nossa lista.</span>
                    </md-card-header>

                    <md-card-actions>
                        <md-button @click="$router.push('/listHouses')">Lista</md-button>
                        <md-button @click="$router.push('/addHouses')">Cadastre</md-button>
                    </md-card-actions>
                </md-card-area>
            </md-card-media-cover>
        </md-card>

        <md-card id="card-size">
            <md-card-media-cover>
                <md-card-media md-ratio="1:1">
                  <img src="../assets/img-ap.jpg">
                </md-card-media>

                <md-card-area>
                    <md-card-header>
                        <span class="md-title">Without text background</span>
                        <span class="md-subhead">I bet you can't read this</span>
                    </md-card-header>

                    <md-card-actions>
                        <md-button>Neither this</md-button>
                        <md-button>Or this</md-button>
                    </md-card-actions>
                </md-card-area>
            </md-card-media-cover>
        </md-card>
    </div>
</template>

<script>
    import Vue from 'vue'
    import { MdCard } from 'vue-material/dist/components'
    import 'vue-material/dist/vue-material.min.css'
    import 'vue-material/dist/theme/default.css'
    
    Vue.use(MdCard)

    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   #card-align {
       display: flex;
       flex-direction: row;
       justify-content: center;
   }
   #card-size {
        width: 430px;
        height: 430px; 
   }
</style>
