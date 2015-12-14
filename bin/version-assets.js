'use strict';

var Version = require('node-version-assets')


new Version({
    //assets: ['dist/styles.css', 'dist/images/background.jpg', 'dist/bundle.js'],
    assets: ['dist/styles.css'],
    grepFiles: ['dist/index-src.html']
}).run()
