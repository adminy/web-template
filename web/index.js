const choo = require('choo')
const app = choo()
app.mount('body')

//store procedures
app.use(require('./store-procedures/join-room'))

//styles
import './style.scss'

//routes
app.route('/', require('./views/join-room'))
app.route('/:roomID/:name', require('./views/stream'))
