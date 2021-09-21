// styles
import 'bulma/css/bulma.css'
import './style.scss'
window.React = require('jsx-dom')
const choo = require('choo')
const app = choo()
app.mount('body')

// store procedures
app.use(require('./store-procedures/task'))

// routes
app.route('/', require('./views/home'))
app.route('/user/:name', require('./views/profile'))
