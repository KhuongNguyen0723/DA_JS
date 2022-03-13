const newsRouter = require('./news')
const siteroutes = require('./site')
function route(app) {
    app.get('/news', newsRouter)
    app.get('/', siteroutes)
}

module.exports = route;