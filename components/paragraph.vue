
<script>
import Vue from 'vue'
var component = Vue.component('paragraph', {
  props: ['cdata', 'body'],
  data: function (data) {
    return {
      count: 0,
    }
  },
});

export default component;
</script>

<template>
  <v-card class="mx-auto pb-md-5" max-width="800" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1 pb-md-5 text-center">
          <v-container>
            <v-row>
              <v-col class='pl-md-5 text-left' cols=1>
                <v-icon color="grey_dark" x-large>{{cdata.icon}}</v-icon>
              </v-col>
              <v-col class='text-left pl-md-3'>
                {{cdata.title}}
              </v-col>
            </v-row>
          </v-container>
        </v-list-item-title>
        <div class="text-left pa-md-10 body-1 font-weight-regular" v-html="body"></div>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>
