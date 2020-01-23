<script>
import Vue from 'vue'
import axios from 'axios'

var component = Vue.component('githubprojects', {
  props: ['cdata', 'body'],
});

export default component;
</script>

<template>
  <v-card class="mx-auto text-center" max-width="800" outlined >
  <div class="headline mb-1 pl-md-5 text-center">
    <v-container>
      <v-row>
        <v-col class='pl-md-5 text-left' cols=1>
          <v-icon color="grey_dark" x-large>{{cdata.icon}}</v-icon>
        </v-col>
        <v-col class='text-left  pl-md-3'>
          {{cdata.title}}
        </v-col>
      </v-row>
    </v-container>
    </div>
    <div class="text-left pa-md-10" v-html="body"></div>
    <githubproject :cdata="{'project':project}" v-for="project in cdata.projects" />
  </v-card>
</template>
