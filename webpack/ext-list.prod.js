const merge = require('webpack-merge');

const commonList = require('./ext-list.common');

const babelExt = require('./babel.ext');

module.exports = merge([
    commonList,
    babelExt
]);
