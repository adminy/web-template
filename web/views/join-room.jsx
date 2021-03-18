const {React, View, BlockInput, Shadow, Footer} = require('../template.jsx')
module.exports = (state, emitter) => {
    return <View class="room">
    <form id="joinRoom" class="form" autocomplete="off" onsubmit={state.onJoinRoom}>
        <div class="control" style="text-align:center">
            <br/>
            <h1 style="color:pink"> Magic Stream </h1>
            <br/><br/><br/>
            <h1> Join Room </h1>
            <br/><br/>
            <div id='error'>{state.error}</div>
            <br/>
        </div>
        <BlockInput>
            <input name="room-id" type="text" placeholder="Room ID" />
        </BlockInput>
        <BlockInput>
            <input name="your-name" type="text" placeholder="Your Name" />    
        </BlockInput>
        <button type="submit" class="btn block-cube block-cube-hover">
            <Shadow/>
            <div class="text"> Join </div>
        </button>
        <Footer/>
    </form>
    </View>
}