module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/video");
    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/fonts");

    return {
        dir: {
            input: "src",
            output: "public"
        },
    };

};

function lazyImages (eleventyConfig, userOptions = {}) {
    const {parse} = require('node-html-parser')
  
    const options = {
      name: 'lazy-images',
      ...userOptions
    }
  
    eleventyConfig.addTransform(options.extensions, (content, outputPath) => {
      if (outputPath.endsWith('.html')) {
        const root = parse(content);
        const images = root.querySelectorAll('img');
        images.forEach((img) => {
          img.setAttribute('loading', 'lazy')
        })
        return root.toString()
      }
      return content;
    })
  }