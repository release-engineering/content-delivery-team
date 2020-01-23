<script>
import MenuLoader from '~/components/menuloader.vue'

export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<template>
  <v-app id="content-delivery-team" light>
    <v-navigation-drawer v-model="drawer" floating dark mini-variant permanent app>
      <v-list-item class='text-center'>
        <v-list-item-avatar color="#de1414">
          CD
        </v-list-item-avatar>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <menuloader/>
      </v-list-item>

    </v-navigation-drawer>


    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="text-center">
            <nuxt/>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-footer dark app >
      <span class="white--text">Red Hat &copy; 2020</span>
    </v-footer>
  </v-app>
</template>

