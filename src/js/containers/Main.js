if (process.env.NODE_ENV === 'production') {
    module.exports = require('./App.js');
} else {
    module.exports = require('./App.dev.js');
}
