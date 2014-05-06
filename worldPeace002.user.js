// ==Userscript==
// @name    KMC_JS_002_Background_Changer
// @include *
// ==/UserScript==


function changeBackgroundUrl(url){
    document.body.style.background = 'url("' + url + '")';
}

function changeLevel(url){
    return url.split(".").slice(1).join(".");
}

var highLevelUrl = changeLevel(location.host);

switch(highLevelUrl){
    case "google.co.jp":
    changeBackground("https://lh4.googleusercontent.com/-LiNMdlmi2PE/UwGTCMEip8I/AAAAAAAAABA/dEsGNSfk2fE/social-google-box-icon.jpg");
    break;

    case "yahoo.co.jp":
    case "search.yahoo.co.jp":
    changeBackground("http://images.bitsaa.org/News/2008/08/25aug200817.jpg");
    break;

    default:
    console.log("hoge");
    break;
}
