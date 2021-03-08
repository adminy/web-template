const html = require('nanohtml')
module.exports = (state, emitter) => html`
<body>
    <form id="joinRoom" class="form" autocomplete="off" onsubmit="${state.onJoinRoom}">

        <div class="control" style="text-align:center">
            <br/>
            <h1 style="color:pink"> Magic Stream </h1>
            <br/><br/><br/>
            <h1> Join Room </h1>
            <br/><br/>
            <div id='error'>${state.error}</div>
            <br/>
        </div>

        <div class="control block-cube block-input">
            <input name="room-id" type="text" placeholder="Room ID" /> 

            <div class="bg-top">
                <div class="bg-inner"></div>
            </div>

            <div class="bg-right">
                <div class="bg-inner"></div>
            </div>

            <div class="bg">
                <div class="bg-inner"></div>
            </div>
        </div>
        <br/><br/>
        <div class="control block-cube block-input">
            <input name="your-name" type="text" placeholder="Your Name" />
    
            <div class="bg-top">
                <div class="bg-inner"></div>
            </div>

            <div class="bg-right">
                <div class="bg-inner"></div>
            </div>

            <div class="bg">
                <div class="bg-inner"></div>
            </div>

        </div>
        <br/><br/>        
        <button type="submit" class="btn block-cube block-cube-hover">
            <div class="bg-top">
                <div class="bg-inner"></div>
            </div>
            <div class="bg-right">
                <div class="bg-inner"></div>
            </div>
            <div class="bg">
                <div class="bg-inner"></div>
            </div>
            <div class="text"> Join </div>
        </button>

        <div class="credits">
            <a href="https://codeismagic.com/" target=>"_blank">Cloud 8</a>
        </div>
    </form>
</body>
`
