// const { codecs, getWasm, WebAudio, WebGLPlayer } = require('wasm-codecs')
module.exports = (state, emit) => {
    const canvas = document.createElement('canvas')
    /*
    codecs('/codecs.webasm').then(({libde265, libopus}) => {
        const video = libde265.decoder()
        const videoOut = WebGLPlayer(canvas)

        const resizeCanvas = () => {
            canvas.width = video.img.width
            canvas.height = video.img.height
            const ratio = video.img.width / video.img.height
    
            const w = window.innerWidth
            const h = window.innerHeight
            const height = h * 0.6
    
            if(ratio * height > w) {
                canvas.style.width =  w + 'px'
                canvas.style.height = w / ratio + 'px'
            } else {
                canvas.style.width = ratio * height + 'px'
                canvas.style.height = height + 'px'
            }
        }
        window.addEventListener('resize', () => resizeCanvas())
    
        video.onDecodedFrame = (y, u, v) => {
            video.img.width != canvas.width && resizeCanvas()
            videoOut.renderFrame(y, u, v, video.img.width, video.img.height)
        }
        state.ws.onmessage = e => video.push(e.data)
        
	
    })
    */

    return canvas
}