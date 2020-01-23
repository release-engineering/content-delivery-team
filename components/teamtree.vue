<script>
import Vue from 'vue'
import axios from 'axios'

var component = Vue.component('teamtree', {
  props: ['cdata', 'body'],
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
      <div class="text-left pa-md-10 body-1 font-weight-regular" v-html="body"></div>
      <v-container>
        <v-row>
          <v-col class='pl-md-5 text-left'>
            <div class='pb-md-5 pl-md-5 text-left'>Development team</div>
            <v-treeview :items="cdata.users" item-key="name" open-all class='pl-md-5 pb-md-5 text-left'>
              <template v-slot:prepend="{ item }">
                <v-icon
                  v-text="`${item.icon}`"
                ></v-icon>
              </template>
              <template v-slot:label="{ item }">
                  <div class='pt-md-3' >{{item.name}}</div>
                  <div class='caption font-weight-light'>{{item.role}}</div>
                  <div class='caption font-weight-light'>
                      <v-icon x-small>fa-map-marker</v-icon>
                      {{item.location}}
                  </div>
              </template>
            </v-treeview>
          </v-col>
          <v-col class='pl-md-5 text-left'>
            <div class='pb-md-5 pl-md-5 text-left'>QE team</div>
            <v-treeview :items="cdata.qeusers" item-key="name" open-all class='pl-md-5 pb-md-5 text-left'>
              <template v-slot:prepend="{ item }">
                <v-icon
                  v-text="`${item.icon}`"
                ></v-icon>
              </template>
              <template v-slot:label="{ item }">
                  <div class='pt-md-3'>{{item.name}}</div>
                  <div class='caption font-weight-light'>{{item.role}}</div>
                  <div class='caption font-weight-light'>
                      <v-icon x-small>fa-map-marker</v-icon>
                      {{item.location}}
                  </div>
              </template>
            </v-treeview>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
