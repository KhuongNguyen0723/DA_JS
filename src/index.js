const express = require('express')
const morgan = require('morgan')
const path = require('path')
const handlebars = require('express-handlebars')
const router = require('./routes')

//connect to db 
const db = require('./config/db')
db.connect()

const app = express()
const port = 3000

//http logger
app.use(morgan('combined'))
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

//handlebars
app.engine('hbs',handlebars.engine({
    extname:'hbs'
}))
app.set('view engine','hbs')
app.set('views', path.join(__dirname, 'resources','views'))

//route initial
router(app)

app.listen(port, () => console.log('Listening to port: http://localhost:' + port))