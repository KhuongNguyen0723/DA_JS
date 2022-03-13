const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/blog');
        console.log('connect mongodb successfully')
    }
    catch (error) {
        console.log('fail to connect mongodb')
    }
}
module.exports = { connect } 