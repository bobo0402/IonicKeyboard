cordova.define("com.berheley.main.plugins.keyboard.keyboard", function(require, exports, module) { 
	var exec = require("cordova/exec");
	    //var BarcodeScanner = function() {};
	
    var 
    utils = require('cordova/utils');
    //exec = require('cordova/exec');
	var Keyboard = {
	};
	Keyboard.hideKeyboardAccessoryBar = function(hide) {
	    exec(null, null, "IonicKeyboard", "hideKeyboardAccessoryBar", [hide]);
	};
	
	Keyboard.close = function() {
	 exec(null, null, "IonicKeyboard", "close", []);
	};
	
	Keyboard.disableScroll = function(disable) {
	 exec(null, null, "IonicKeyboard", "disableScroll", [disable]);
	};
	Keyboard.isVisible = false; 
	
	module.exports = Keyboard;
	
	Keyboard.hideKeyboardAccessoryBar(false);

});

function setInputDivHeight(val){
	$("#inputDiv2").height(val-20);
}