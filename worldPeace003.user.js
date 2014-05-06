// ==Userscript==
// @name    KMC_JS_003_Background_Changer
// @include *
// ==/UserScript==


function changeBackgroundUrl(url){
    document.body.style.background = 'url("' + url + '")';
}

function changeBackground(pictIndex,pictList){
    if(pictList[pictIndex] === undefined){
	changeBackgroundUrl("http://www.saijuken.com/kokusai/index.php?plugin=ref&page=%B5%FE%C5%D4%C2%E7%B3%D8%B0%E5%B3%D8%C9%F4&src=kyoto.jpg")
    }else{
	changeBackgroundUrl(pictList[pictIndex])
    }
}

var whiteList = [
['www.google.co.jp','search.yahoo.co.jp','kmc.gr.jp','hatena.ne.jp','kyoto-u.ac.jp'],
["http://images.bitsaa.org/News/2008/08/25aug200817.jpg","https://lh4.googleusercontent.com/-LiNMdlmi2PE/UwGTCMEip8I/AAAAAAAAABA/dEsGNSfk2fE/social-google-box-icon.jpg"]
]

changeBackground(whiteList[0].indexOf(location.host),whiteList[1])
