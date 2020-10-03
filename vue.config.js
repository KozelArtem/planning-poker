module.exports = {
  pages: {
    index: {
      entry: 'client/src/index/main.js',
      template: 'client/public/index.html',
      filename: 'index.html',
      title: 'Index Page',
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
  },
};
