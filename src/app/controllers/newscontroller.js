
class NewsController {
    // [GET] index news
    index(req, res) {

        res.render('news')
    }

    detail(req, res) {
        return res.render('home')
    }
}

module.exports = new NewsController