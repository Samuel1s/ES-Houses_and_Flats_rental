<template>
  <div id="view-app">
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons">
    <div class="page-container">
      <md-app md-waterfall md-mode="fixed-last">
        <md-app-toolbar class="md-large md-dense md-primary">
          <div class="md-toolbar-row">
            <div class="md-toolbar-section-start">
              <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
                <md-icon>menu</md-icon>
              </md-button>

              <span class="md-title">SAJU Imóveis</span>
            </div>

            <div class="md-toolbar-section-end">
              <md-button class="md-icon-button">
                <md-icon>more_vert</md-icon>
              </md-button>
            </div>
          </div>

          <div class="md-toolbar-row">
            <md-tabs md-sync-route class="md-primary">
              <md-tab id="tab-home" md-label="Home" to="/" exact></md-tab>
              <md-tab id="tab-pages" md-label="Sobre" to="/about" ></md-tab>
            </md-tabs>
          </div>
        </md-app-toolbar>

        <md-app-drawer :md-active.sync="menuVisible">
          <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

          <md-list>
            <md-list-item>
              <md-icon>move_to_inbox</md-icon>
              <span class="md-list-item-text">Inbox</span>
            </md-list-item>

            <md-list-item>
              <md-icon>send</md-icon>
              <span class="md-list-item-text">Sent Mail</span>
            </md-list-item>

            <md-list-item>
              <md-icon>delete</md-icon>
              <span class="md-list-item-text">Trash</span>
            </md-list-item>

            <md-list-item>
              <md-icon>error</md-icon>
              <span class="md-list-item-text">Spam</span>
            </md-list-item>
          </md-list>
        </md-app-drawer>

        <md-app-content id="main">
          <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
          <router-view/>
        </md-app-content>
      </md-app>
    </div>
  </div>  
</template>

<script>
  import Vue from 'vue'
  import { MdApp, MdToolbar, MdDrawer, MdContent, MdTabs } from 'vue-material/dist/components'
  import { MdList ,MdIcon} from 'vue-material/dist/components'

  import 'vue-material/dist/vue-material.min.css'
  import 'vue-material/dist/theme/default.css'
   
  Vue.use(MdApp)
  Vue.use(MdToolbar)
  Vue.use(MdDrawer)
  Vue.use(MdContent)
  Vue.use(MdTabs)
  Vue.use(MdList)
  Vue.use(MdIcon)

  export default {
    name: 'LastRowFixed',

    components: {
    },

    data: () => ({
      menuVisible: false
    }),

    computed: {
        username() {
          // We will see what `params` is shortly
          return this.$route.params.username
        }
    },
    methods: {
        goBack() {
          window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        }
    }
  }
</script>

<style>

.md-app {
  max-height: 100vh;
}

// Demo purposes only
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}

#view-app {
   min-height: 100vh;   
}

#main {
  padding: 56px 48px
}
</style>
