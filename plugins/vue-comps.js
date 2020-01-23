import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import wordcloud from 'vue-wordcloud'
import VueMermaid from "vue-mermaid";

Vue.component('wordcloud', wordcloud);
Vue.component('vue-mermaid', VueMermaid);

const requireComponent = require.context(
  '~/components',
  false,
  /.*\.(vue|js)$/
)

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )

  Vue.component(componentName, componentConfig.default || componentConfig)
})



