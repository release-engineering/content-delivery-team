
<script>
import Vue from 'vue'
import wordcloud from 'vue-wordcloud'

var component = Vue.component('cwordcloud', {
  props: ['cdata', 'body'],
  data: () => {
    return {
    }
  }
});

export default component;
</script>

<template>
  <v-card class="mx-auto" max-width="800" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1 pb-md-5 text-center">
          <v-container>
            <v-row>
              <v-col class='pl-md-5 text-left' cols=1>
                <v-icon color=grey_dark x-large>{{cdata.icon}}</v-icon>
              </v-col>
              <v-col class='text-left pl-md-3'>
                {{cdata.title}}
              </v-col>
            </v-row>
          </v-container>
        </v-list-item-title>
        <div class="text-left pa-md-10" v-html="body"></div>

  <wordcloud
    :data="cdata.words"
    nameKey="name"
    valueKey="value"
    :color="cdata.colors"
    :showTooltip="true">
  </wordcloud>

      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>
