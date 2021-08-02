const fs = require("fs");
const moment = require("moment");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItAttrs = require('markdown-it-attrs');
const markdownItFigure = require('markdown-it-figure');
const lazy_loading = require('markdown-it-image-lazy-loading');
// const cacheBuster = require('@mightyplow/eleventy-plugin-cache-buster');
const pageAssetsPlugin = require('eleventy-plugin-page-assets');


module.exports = function(eleventyConfig) {
    // date filter (localized)
    eleventyConfig.addNunjucksFilter("date", function(date, format, locale) {
      locale = locale ? locale : "en";
      moment.locale(locale);
      return moment(date).format(format);
    });

    eleventyConfig.addShortcode("favicon", function(emoji) {
        return `<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>">`
    })

    eleventyConfig.addFilter("bust", (url) => {
        const outputDir = 'docs';
        const [urlPart, paramPart] = url.split("?");
        const params = new URLSearchParams(paramPart || "");
        const relativeUrl = (urlPart.charAt(0) == "/") ? outputDir + urlPart : outputDir + '/' + urlPart;

        try {

            const fileStats = fs.statSync(relativeUrl);
            // const dateTimeModified = new DateTime(fileStats.mtimeMs).toFormat("X");
            const dateTimeModified = moment(fileStats.mtime).format('x');

            params.set("v", dateTimeModified);

        } catch (error) {
            console.log(error);
         }
            
        return `${urlPart}?${params}`;
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
    .use(markdownItAttrs)
    .use(lazy_loading);

    // require "https://" in front of mail to prevent i.e "bologna.cc" to turn into link
    markdownLibrary.linkify.set({fuzzyLink: false});
    
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

    // // cache buster
    // const cacheBusterOptions = {
    //     outputDirectory: "docs",
    // };

    // // ref the context
    // let env = process.env.ELEVENTY_ENV;

    // // only run cache buster in prod
    // if (env == 'prod') {
    //     eleventyConfig.addPlugin(cacheBuster(cacheBusterOptions));
    // }

    // Base config
    return {
        passthroughFileCopy: true,
        dir: {
            input: "src",
            output: "docs",
        }
    };
}