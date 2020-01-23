<script>
// Let's require the needed modules
const fm = require("front-matter");
var md = require("markdown-it")({
  html: true,
  typographer: true
});

export default {
  async asyncData({ params }) {
    // We read the markdown file by looking at the `post` parameter
    // in the URL and searching for a markdown file with that name in
    // the articles directory
    const resolve = require.context("~/content/index/", true, /\.md$/);
    const imported = await Promise.all(resolve.keys().map(async (fn) => import('~/content/index/'+fn.replace(/^\.\//,''))));
    const parsed = imported.map((mod)=> {return fm(mod.default);})
                           .sort((a,b) => {return a.attributes.order < b.attributes.order ? -1: 1});
    return {
      // attributes will be an object containing the markdown metadata
      contents: parsed.map((p) => {return md.render(p.body)}),
      attributes: parsed.map((p) => {return p.attributes})
    };
  }
};
//import paragraph from '~/components/paragraph'


</script>

<template>
  <div>
    <div v-for="(content, index) in contents">
      <component v-bind:is="attributes[index].component"
        v-bind:cdata="attributes[index]"
        v-bind:body="content"
        v-bind:id="attributes[index].order"/>
    </div>
  </div>
</template>
