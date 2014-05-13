// ==Userscript==
// @name    KMC_JS_004
// @include *
// ==/UserScript==

(function(){

var Animal = function(){
	this.noise = "hoge";
	this.makeNoise = function(){ console.log(this.noise)};
}

var Ham = function(){};
Ham.prototype = new Animal();
Ham.prototype.noise = "foo";
var ham = new Ham();
ham.makeNoise();

})()