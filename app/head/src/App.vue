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
                    <router-view/>
                </md-app-content>
            </md-app>
        </div>
    </div>  
</template>

<script>
    import Vue from 'vue'
    import 'vue-material/dist/vue-material.min.css'
    import 'vue-material/dist/theme/default.css'

    import { MdRipple, MdDialogConfirm } from 'vue-material/dist/components'
    import { MdApp, MdToolbar, MdDrawer, MdContent, MdTabs } from 'vue-material/dist/components'
    import { MdAutocomplete, MdMenu, MdDialog, MdDialogAlert } from 'vue-material/dist/components'
    import { MdList ,MdIcon, MdButton, MdField, MdSwitch, MdCard } from 'vue-material/dist/components'
        
    Vue.use(MdApp)
    Vue.use(MdCard)
    Vue.use(MdTabs)
    Vue.use(MdList)
    Vue.use(MdIcon)
    Vue.use(MdMenu)
    Vue.use(MdField)
    Vue.use(MdSwitch)
    Vue.use(MdRipple)
    Vue.use(MdDrawer)
    Vue.use(MdButton)
    Vue.use(MdDialog)
    Vue.use(MdToolbar)
    Vue.use(MdContent)
    Vue.use(MdDialogAlert)
    Vue.use(MdAutocomplete)
    Vue.use(MdDialogConfirm)
  
    export default {
        components: {
        },

        data: () => ({
            menuVisible: false
        }),

        computed: {
            username() {
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
    #view-app {
        min-height: 100vh;   
    }

    #main {
        padding: 56px 48px
    }

    .md-app {
        max-height: 100vh;
    }

    .md-drawer {
        width: 230px;
        max-width: calc(100vw - 125px);
    }
</style>
