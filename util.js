export function requestFullscreen( canvas ) {
	if( canvas.requestFullscreen ) {
		canvas.requestFullscreen()
	} else if( canvas.mozRequestFullScreen ) {
		canvas.mozRequestFullScreen()
	} else if( canvas.webkitRequestFullscreen ) {
		canvas.webkitRequestFullscreen()
	} else if( canvas.msRequestFullscreen ) {
		canvas.msRequestFullscreen()
	}
}
