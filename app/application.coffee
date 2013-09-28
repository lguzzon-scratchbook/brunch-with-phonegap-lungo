###
    Application
    - Main application class

    Responsible for maintaining the communication layer of the modules and views.

###

class Application

    initialize: () ->
    	
        # Initialize lungo
    	Lungo.init(

            # Load your templates here
            resources: [
                'templates/asides/side_drawer.html'
            ]
        )

    	@init_vent()

        # Initialize your views collectively
    	@init_views()

        # Emit that application is ready, more of an example than anything 
    	@vent.internal.trigger('application_ready')


    ### Initializers ###

    # Attaches modules and views to the main application object for decoupled access

    # Modules

    init_vent: () ->

    	Vent = require './modules/vent/vent'
    	@vent = new Vent()

    # Views

    init_views: () ->

    	MainView = require './views/MainView'
    	@mainview = new MainView()


module.exports = new Application()
