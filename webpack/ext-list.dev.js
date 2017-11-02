const merge = require('webpack-merge');

const commonList = require('./ext-list.common');

const devserverExt = require('./devserver.ext');

module.exports = merge([
    commonList,
    devserverExt
]);
