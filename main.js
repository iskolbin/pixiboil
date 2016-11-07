let renderer = null;
const stage = new PIXI.Container();

export function init( canvas, w, h ) {
	renderer = PIXI.autoDetectRenderer( w, h, { view: canvas, antialias: true } );
}

export function resize( w, h ) {
	renderer.width = w;
	renderer.height = h;
}

export function render() {
	renderer.render( stage );
}

export function update( dt ) {
}

export function mousedown( e, x, y ) {
}

export function mouseup( e, x, y ) {
}

export function mousemove( e, x, y, dx, dy ) {
}

export function touchstart( e, x, y, touches ) {
}

export function touchend( e, x, y, touches ) {
}

export function touchcancel( e ) {
}

export function touchmove( e, x, y, touches ) {
}
