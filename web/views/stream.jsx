const {React, View} = require('../template')
const videoStream = require('../components/stream')
const backButton = require('./back-button.svg')

module.exports = (state, emit) => {
    !state.connectingRoom && emit('connectRoom')
    return <View class="room">
        <div class="display: flex;">
            <a href="/"><img src={backButton} width="48px" height="48px"/></a>
            <span style={'float:right; font-size: 48px; color: '+(state.meOnline ? 'green' : 'red')}>
                {state.meOnline ? '☻' : '☹'}
            </span>
        </div>
        {videoStream(state, emit)}
    </View>
}
