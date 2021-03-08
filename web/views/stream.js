const html = require('nanohtml')
const videoStream = require('../components/stream')
const backButton = require('./back-button.svg')

module.exports = (state, emit) => {
    !state.connectingRoom && emit('connectRoom')
    return html`
<body>
    <a href="/"><img src="${backButton}" width="48px" height="48px"/></a>
    <br/>
    ${videoStream(state, emit)}

    ${state.meOnline ? 'on' : 'off'}
</body>
`
}
