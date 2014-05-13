// ==Userscript==
// @name    KMC_JS_004
// @include *
// ==/UserScript==

(function(){

var Animal = function(){
	this.noise = "hoge";
	this.makeNoise = function(){ console.log(this.noise)};
}

var anim = new Animal();
anim.makeNoise();
var Ham = new Animal();
Ham.noise = "foo";
var ham = new Ham();
ham.makeNoise();

})()