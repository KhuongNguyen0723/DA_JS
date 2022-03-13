const model = require('../Model/index')
const { multipleDataToObject } = require('../../ulti/mongoose')
class SiteController {
    // [GET] index news
    home(req, res,next) {
        model.find({})
            .then(model => {
                // res.render('home', {
                //     model: multipleDataToObject (model),
                //  })
                res.json(model)
            })
            .catch(next) 
    }

    search(req, res) {
        return res.render('search')
    }
}

module.exports = new SiteController