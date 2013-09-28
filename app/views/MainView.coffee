###
	MainView
    - Handles all view logic for the main view (DOM manipulations, etc)

###

app = require '../application'

module.exports = class MainView

	constructor: () ->

		@register_events()

	### Events ###

	register_events: () ->

		# Register all events for view here

		# Example
		app.vent.internal.on('application_ready', () =>
			@log('application ready')
		)

	### Functions ###

	# Example
	log: (msg) ->
		console.log msg



