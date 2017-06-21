if (process.env.NODE_ENV === 'production') {
    module.export = require('./App.js');
} else {
    module.exports = require('./App.dev.js');
}