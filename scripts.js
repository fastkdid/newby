function uwebsite() {
    document['write']('<style>*{margin:0;border:0;}</style><iframe src=\'https://bing.com\' height=\'100%\' width=\'100%\' border=\'0\'></iframe>');

}

function uvideo() {
    var thevalue = document.getElementById("thevideo").value;
    document['write']('<style>*{margin:0;border:0;}</style><iframe src=\'https://www.youtube.com/embed/'+thevalue+'\' height=\'100%\' width=\'100%\' border=\'0\'></iframe>');

}

function usweb() {
    var thevalue = document.getElementById("thesite").value;
    document['write']('<style>*{margin:0;border:0;}</style><iframe src=\'https://'+thevalue+'\' height=\'100%\' width=\'100%\' border=\'0\'></iframe>');

}

