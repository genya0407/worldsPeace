// ==Userscript==
// @name    KMC_JS_001_Background_Changer
// @include *
// ==/UserScript==


function changeBackground(url){
    document.body.style.background = 'url("' + url + '")';
}



var url = location.host;

/*
switch(url){
    case "www.google.co.jp":
    changeBackground("https://lh4.googleusercontent.com/-LiNMdlmi2PE/UwGTCMEip8I/AAAAAAAAABA/dEsGNSfk2fE/social-google-box-icon.jpg");
    break;

    case "www.yahoo.co.jp":
    changeBackground("http://images.bitsaa.org/News/2008/08/25aug200817.jpg");
    break;

    default:
    console.log("hoge");
    break;
}
*/

if(url === "www.google.co.jp"){
    changeBackground("https://lh4.googleusercontent.com/-LiNMdlmi2PE/UwGTCMEip8I/AAAAAAAAABA/dEsGNSfk2fE/social-google-box-icon.jpg");
}else if((/yahoo/).test(url)){
    changeBackground("http://images.bitsaa.org/News/2008/08/25aug200817.jpg");
}else{
    console.log("Where is this?");
}
