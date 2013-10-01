###
    Application
    - Main application class

    Responsible for initialization and bridging modules and views.

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

        # Initialize your modules independently (easier for configuration)
        @init_vent()
        @init_user()

        # Initialize your views collectively
        @init_views()

        # Emit that application is ready - vent example
        @vent.internal.trigger('application_ready')


    ### Initializers ###

    # Attach objects to the main application for decoupled access
    # Allows you to require 'application' anywhere in the project and access your modules and views

    # For example:
    #   app = require 'application'
    #   app.my_module.module_function()
    #   app.my_view.view_function()

    # Modules

    init_vent: () ->

        Vent = require './modules/vent/vent'
        @vent = new Vent()

    init_user: () ->

        User = require './modules/user/user'
        @user = new User()

    # Views

    init_views: () ->

        MainView = require './views/MainView'
        @mainview = new MainView()


module.exports = new Application()
