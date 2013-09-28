# Brunch with PhoneGap and Lungo
This is a template for building fast HTML5 mobile apps. It uses [PhoneGap](http://phonegap.com/) for compiling/supporting different devices, [Lungo.js](http://lungo.tapquo.com/) for the mobile application framework, [Brunch.io](http://brunch.io/) for work-flow/application assembly and a little of my own optimizations, structure, and modules.

I'm pretty opinionated with my modules and views, so if you want to do it your own way just move `app/views/styles` up a directory and delete the `app/views` and `app/modules` folders along with the accompanying code in `application.coffee`.

Contributors welcome!

Main languages are [CoffeeScript](http://coffeescript.org/) and [Sass](http://sass-lang.com/).

### Getting started
* Install node: Go to http://nodejs.org/ and use their installer
* Install brunch: `npm install -g brunch`
* Create project: `brunch new gh:connorblack/brunch-with-phonegap-lungo <project name>`
* Move into folder: `cd <project name>`
* Install dependencies: `npm install`
* Build project and start server: `brunch w -s`
* Project should now be running on `http://localhost:3000/`
* To get it started with PhoneGap visit http://phonegap.com/install/

Also, for in-browser development check out the Dimensions app: http://www.dimensionsapp.com/

### Other
Versions of software the skeleton uses:

* [jQuery](http://jquery.com/) - general web development utilities
* [QuoJS](http://quojs.tapquo.com/) - awesome mobile gestures

### Legal Stuff (MIT License)

Distributed under MIT license.

Enjoy!
