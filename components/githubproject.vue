<script>
import Vue from 'vue'
import axios from 'axios'

var component = Vue.component('githubproject', {
  props: ['cdata', 'body'],
  data: function() {
    const data = {project: null};
    //console.log(cdata);
    let self = this;
    this.project = null;
    axios.get("https://api.github.com/repos/"+this.cdata.project)
      .then((res) => {self.project=res.data})
      .catch((err) => {
        console.log("https://api.github.com/repos/"+this.cdata.project);
        console.log(err);
      })
    axios.get("https://api.github.com/repos/" + this.cdata.project+ "/languages")
      .then((res) => {self.languages=res.data})
      .catch((err) => {
        console.log("https://api.github.com/repos/"+this.cdata.project + "/languages");
        console.log(err);
      })
    return data;
  }
});

export default component;
</script>

<template>
  <v-card max-width="800" class="ml-md-2 mr-md-2 mt-md-5 mb-md-5" outlined>
    <v-progress-circular indeterminate color="red" v-if="!project"></v-progress-circular>
    <v-container v-if="project">
      <v-row align='start'>
        <v-col cols=4 align='center' class='text-center' sm=4>
            <v-list-item-avatar
              tile
              size="60"
              color="grey">
                  <img :src="project.owner.avatar_url"/>
            </v-list-item-avatar>
            <v-list-item-title class="pb-md-4 title">{{project.name}}</v-list-item-title>
        </v-col>
        <v-col justify='start' sm=8 class='text-left'>
          <v-list-item>
            <v-list-item-content class="text-left">
              <v-list-item-subtitle class="overline pb-md-2">{{project.owner.login}}</v-list-item-subtitle>
              <v-list-item-title v-if='languages'>
                <v-btn x-small color="green" class="" rounded dark
                       v-for="(count,language) in languages">{{language}}</v-btn>
              </v-list-item-title>
              <v-divider class="pb-md-2"></v-divider>
              <div class="pa-md-2 body-1">{{project.description}}</div>
              <v-list-item-subtitle class='text-left'>
                  <v-container>
                    <v-row>
                      <v-col cols=2>
                        <v-badge color="pink" :content="project.stargazers_count"><v-icon>fa-star</v-icon></v-badge>
                      </v-col>
                      <v-col cols=2>
                        <v-badge color="pink" :content="project.forks"><v-icon>fa-code-branch</v-icon></v-badge>
                      </v-col>
                      <v-col cols=2>
                        <v-badge color="pink" :content="project.watchers"><v-icon>fa-eye</v-icon></v-badge>
                      </v-col>
                      <v-col cols=2>
                        <v-badge color="pink" :content="project.open_issues"><v-icon>fa-exclamation-circle</v-icon></v-badge>
                      </v-col>
                    </v-row>
                  </v-container>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          </div>
            <v-btn rounded color="white" primary small :href="project.html_url" class="pb-md-2">github page</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
