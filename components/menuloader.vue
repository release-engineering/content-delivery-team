<script>
import Vue from 'vue'
const fm = require("front-matter");
var md = require("markdown-it")({
  html: true,
  typographer: true
});


var component = Vue.component('menuloader', {
  props: ['cdata', 'body'],
  data: function() {
    const parsed = [];
    const resolve = require.context("~/content/index/", true, /\.md$/);
    const imported = resolve
      .keys()
      .map((fn) => import('~/content/index/'+fn.replace(/^\.\//,''))
      .then((mod=> {parsed.push(fm(mod.default))} )));
    return {
      parsed: parsed
    };
  },
  computed: {
    icons: function() {
      return this.parsed
        .sort((a,b) => {return a.attributes.order < b.attributes.order ? -1: 1})
        .map((p) => {return {name: p.attributes.icon, order: p.attributes.order, title:p.attributes.title}})
    }
  }
});

export default component;
</script>

<template>
  <v-list dense>
    <v-list-item v-for="(icon, index) in icons">
      <v-list-item-icon>
        <v-tooltip left>
          <template v-slot:activator="{ on }">
            <v-btn icon :href="'#'+icon.order" v-on="on">
              <v-icon color=red_medium>{{icon.name}}</v-icon>
            </v-btn>
          </template>
          <span>{{icon.title}}</span>
        </v-tooltip right>
      </v-list-item-icon>
    </v-list-item>
  </v-list>
</template>
