import * as util from "util.js"

let renderer = null;
const stage = new PIXI.Container();
let _canvas = null

export function init( canvas, w, h ) {
	_canvas = canvas
	renderer = PIXI.autoDetectRenderer( w, h, { view: canvas, antialias: true } )

	const graphics = new PIXI.Graphics()
	graphics.beginFill(0xFF3300)
	graphics.lineStyle(10, 0xffd900, 1)
	stage.interactive = true
	graphics.moveTo(50,50)
	graphics.lineTo(250, 50)
	graphics.lineTo(100, 100)
	graphics.lineTo(250, 220)
	graphics.lineTo(50, 220)
	graphics.lineTo(50, 50)
	graphics.endFill()
	stage.addChild(graphics)
}

export function resize( w, h ) {
	renderer.width = w
	renderer.height = h
}

export function render() {
	renderer.render( stage )
}

export function update( dt ) {
}

export function mousedown( e, x, y ) {
	util.requestFullscreen( _canvas )
}


export function mouseup( e, x, y ) {
	
}

export function mousemove( e, x, y, dx, dy ) {
}

export function touchstart( e, x, y, touches ) {
}

export function touchend( e, x, y, touches ) {
	mousedown( e, x, y )
}

export function touchcancel( e ) {
}

export function touchmove( e, x, y, touches ) {
}
