const path = require('path')

module.exports = {
    mode: 'development',
    entry: './script/script.js',
    output: {
        path: path.resolve(__dirname,'html'),
        filename: 'bundle.js'
    },
    watch: true
}