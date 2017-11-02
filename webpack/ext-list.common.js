const merge = require('webpack-merge');

const entries = require('./entries');

module.exports = merge([
    entries
]);
