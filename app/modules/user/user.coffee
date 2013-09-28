###
	User
    - Maintains all data logic for the user

###

app = require '../../application'

module.exports = class User

	constructor: () ->

		# Store data attributes here
		@email = ''
		@password = ''
		@first_name = ''
		@last_name = ''

		# @fetch_init_data()

	### Functions ###

	fetch_init_data: () ->

		# Do API calls here and set attributes