<script>
import Vue from 'vue'
import axios from 'axios'
import VueMermaid from "vue-mermaid";

Vue.use(VueMermaid);

var component = Vue.component('flowchart', {
  props: ['cdata', 'body'],
  data: function () {
    return {config:{
      theme: "default",
      themeCSS: `.node rect { fill: #383838;} 
      .node .label {color: #ffffff} 
      .cluster .label {color: #212121; font-size:15px; font-weight:bold; margin:10px} 
      .cluster rect {fill: #d6d6d6; stroke-width:0px; padding: 100px} 
      `,
      sequence: {height:200},
      state: {labelHeight: 32,padding: 8, sizeUnit:10}
    }}
  }
});

export default component;
</script>

<template>
  <div>
    <v-card class="mx-auto" max-width="800" outlined>
      <div class="headline mb-1 pl-md-5 text-center">
        <v-container>
          <v-row>
            <v-col class='pl-md-5 text-left' cols=1>
              <v-icon color="grey_dark"  x-large>{{cdata.icon}}</v-icon>
            </v-col>
            <v-col class='text-left pl-md-3'>
              {{cdata.title}}
            </v-col>
          </v-row>
        </v-container>
      </div>
      <div class="text-left pa-md-10" v-html="body"></div>
      <vue-mermaid :nodes="cdata.graph" :config="config" type="graph TD" />
    </v-card>
  </div>
</template>
