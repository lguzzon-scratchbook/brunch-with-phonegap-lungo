###
	Vent
    - Events wrapper class

	I also usually maintiain socket.io here too if I use it in my backend:

		constructor: () ->
			@external = io.connect('http://localhost:3000')

	This make for a nice, semantic way to handle events:

		app.vent.internal.on('event', 'function')
		app.vent.external.on('event', 'function')
		
###

app = require '../../application'

module.exports = class Vent

	constructor: () -> 

		# I use LucidJS for my internal events
		# It's awesome, check it out: http://robertwhurst.github.io/LucidJS/
		@internal = LucidJS.emitter()

	### Functions ###