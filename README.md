# Callback

"Callback" is a **simple class for managing callbacks**. This module is easy to use, light, small and has **no dependencies**, except assert-testing module for testing (not needed for usage).

The module is written in TypeScript and compiled into commonJS. 

**This is not any high-tech code. It is not dependent on 420420 modules and does not offer unseen JavaScript magic. Download this, save 10 minutes of your time and use it to create something awesome. We #keepItSimple.**

## Download

You can download the module on [GitHub/callback-class](https://github.com/drozdik-m/callback-class) or using [npm/callback-class](https://www.npmjs.com/package/callback-class) service.

```
npm install callback-class --save
```

## Callback - What is that? (skip if you know)

Callback is a **way to call functions on an action**. For example: Call on load, call on page scroll, call on task finish, call on animation started etc. 


```javascript

//CALLBACK EXAMPLE
var video = new Video("videoId"); //Imaginary class, representing a video on a web page

//Add a function, that is triggered by Video class whenever a user stops the video
youtubeVideo.OnPause.Add(function(){
	console.log("The user paused the video");
});

```

### How does it work in development?

If you want to work with callbacks, it usually goes like this: You want to use a class. The class has some implemented callbacks. You add functions, that should be triggered on some point (on load, on start, ...). Then, the class that you are using, will trigger your added functions on the appropriate time.

Sometimes, you need to get some information from the class, for example in jQuery, when you use ajax, you add some callbacks and the ajax method will provide you with received data - passes them as an argument into your function.

Summary: **You, as a user of come class, will add functions to be called on some specific point. Then, the class will call your functions.**

## Usage

### Import and create new List

You can import the module using __import__ keyword or __require__ function.

```javascript
import { Callback } from "callback-class";

//Instantiate new and empty Callback class
var callback = new Callback();

```

```javascript
var C = require("callback-class")

//Instantiate new and empty List
var callback = new C.Callback();

```

### Callback

Working with the Callback is easy. Here are all implemented methods:

```javascript

//Instantiate new and empty Callback
var callback = new Callback();

//Add new function into the callback - usually used by "user", meaning the programmer that uses a class or some code
callback.Add(function(){
	console.log("Callback called");
});

//Execute all added functions - usually executed by guy that created the "trigger enviroment" or a class
callback.Execute();
callback.Execute(parameter1, parameter1); //Any number of parameters you want ("rest" parameter)

//Check if there are some added callbacks
callback.Empty(); //True if no callbacks added

//Remove all added callbacks
callback.Clear();

//Return number of callback functions added
callback.Size();


```

Here is an example of illustrative Menu handler. It detects clicks on a hamburger and opens/closes menu. User of the class wants to write text into the console whenever menu is opened or closed. That would be normally hard, but we have callbacks!

```javascript

//EXAMPLE OF A SIMPLE MENU CLASS THAT YOU MAY HAVE DOWNLOADED OR CREATED
//Feel free to develop in ECMA, TypeScript or other languages, I will use the simplest JavaScript I know, so the example is as understandable as I can provide for everyone, sorry if it's not good :/
function Menu ()
{
	//Variable that remembers the menu status
	var isOpened = false;

	//Reference to this object
	var object = this;

	//Callbacks
	this.OnOpen = new Callback();
	this.OnClose = new Callback();
	this.OnMenuChange = new Callback();

	//Call on Menu object creation (not a callback, just a constructor)
	function constructor()
	{
		//Add trigger on click on a hamburger
		document.getElementById("hamburger").addEventListener("click", function(){

			//Change open status
			isOpened = !isOpened;

			//Trigger appropriate callback
			if (isOpened)
				object.OnOpen.Execute();
			else
				object.OnClose.Execute();

			//Call callback with parameter
			object.OnMenuChange.Execute(isOpened);

			//As you can see, the guy that handles triggering of those callbacks doesn't add any callback functions. That is the job for user of this class.
			//"The class architect triggers, the user adds"
		}); 
			
	}
	constructor();
}

//YOU, AS A USER OF THE CLASS ABOVE, REALLY DON'T CARE ABOUT ITS IMPLEMENTATION
//YOU CARE ONLY THAT IF YOU ADD SOME CALLBACK FUNCTIONS, THEY WILL BE TRIGGERED CORRECTLY

//Create new Menu object
var myMenu = new Menu();

//Add callback on menu open
myMenu.OnOpen.Add(function(){
	console.log("Menu is open");
});

//Add callback on menu close
myMenu.OnClose.Add(function(){
	console.log("Menu is closed");
});

//Add callback on menu status change
myMenu.OnMenuChange.Add(function (status){
	console.log("Menu open status: " + status);
});


```

### More examples

There is a testing file included in this module ("callback-class/tests/callback_tests.ts" for TypeScript or "callback-class/dist/tests/cakllback_tests.js" for JavaScript). The test is ridicilously long for such a simple code, so you may find more examples of the the Callback class there.

___

Sorry for my English, I hope it's readable.