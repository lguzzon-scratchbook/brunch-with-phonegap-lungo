
class Application

    initialize: () ->
    	
    	Lungo.init({

    	})
    	@set_list_height()

    set_list_height: () ->

    	list_height = ($(window).height()) - ($('.nav').height() + $('.group-bar').height() + $('.footer').height())
    	$('.list').height(list_height - 51)

module.exports = new Application()
