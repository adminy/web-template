const {React, View} = require('../setup.jsx')
const videoStream = require('../components/stream')
const backButton = require('./back-button.svg')

module.exports = (state, emit) => {
    !state.connectingRoom && emit('connectRoom')
    return <View class="room">
        <a href="/"><img src={backButton} width="48px" height="48px"/></a>
        <br/>
        {videoStream(state, emit)}
        {state.meOnline ? 'on' : 'off'}
    </View>
}
