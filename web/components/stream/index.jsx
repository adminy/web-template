const React = require('jsx-dom')
module.exports = (state, emit) => {
	const w = window.innerWidth
	const h = window.innerHeight
	const canvas = <canvas width={w} height={h - 48}/>
	const ctx = canvas.getContext('2d')
	ctx.fillRect(100, 100, w - 200, h / 2)
	return canvas
}
