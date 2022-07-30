const path = require('path');

path.resolve('.');

module.exports = function() {
  return {
    name: 'custom-webpack-config',
    configureWebpack() {
      return {
        resolve: {
          alias: {
            react: path.resolve('./node_modules/react'),
            'react-dom': path.resolve('./node_modules/react-dom'),
          },
        },
      };
    },
  };
};
