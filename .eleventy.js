const moment = require("moment");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const lazy_loading = require('markdown-it-image-lazy-loading');
const pageAssetsPlugin = require('eleventy-plugin-page-assets');


module.exports = function(eleventyConfig) {
    // date filter (localized)
    eleventyConfig.addNunjucksFilter("date", function(date, format, locale) {
      locale = locale ? locale : "en";
      moment.locale(locale);
      return moment(date).format(format);
    });

    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    //! plugin is broken
    // eleventyConfig.addPlugin(pageAssetsPlugin, {
    //     mode: "directory",
    //     postsMatching: "src/*/pages/*/*.md",
    //     // hashAssets: false,
    //     assetsMatching: ".png|.jpg|*.gif|*.svg",
    // });
    

    eleventyConfig.addLayoutAlias("default", "layouts/default.njk");
    eleventyConfig.addLayoutAlias("home", "layouts/home.njk");

    // en posts
    eleventyConfig.addCollection("pages_en", function(collection) {
        return collection.getFilteredByGlob("./src/en/pages/*");
    });

    // de
    eleventyConfig.addCollection("pages_de", function(collection) {
        return collection.getFilteredByGlob("./src/de/pages/*");
    });

    let markdownLibrary = markdownIt({
        html: true,
        breaks: true,
        linkify: true
    })
    .use(markdownItAnchor, {
      permalink: false,
    })
    .use(lazy_loading);
    
    eleventyConfig.setLibrary("md", markdownLibrary);

    // copy css folder
    eleventyConfig.addPassthroughCopy('src/assets/css');
    eleventyConfig.addPassthroughCopy('src/assets/js');
    eleventyConfig.addPassthroughCopy('src/assets/letters');
    eleventyConfig.addPassthroughCopy('src/assets/images');
    eleventyConfig.addPassthroughCopy('src/assets/fonts');
    eleventyConfig.addPassthroughCopy('src/assets/documents');
    eleventyConfig.addPassthroughCopy('src/CNAME');
    // copy files in page directories
    // eleventyConfig.addPassthroughCopy('src/*/pages/*/*.{jpg,jpeg,png,gif,svg,kmz,zip,pdf,css}');

    // Base config
    return {
        passthroughFileCopy: true,
        dir: {
            input: "src",
            output: "docs",
        }
    };
}