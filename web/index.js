// Our custom code goes here.
var baseurl = "api.tunes.redspin.net"

function test(){
    return("true");
}

function testAjax(){
    $.ajax({
        url: "mysql/counts",
        context: document.body
    });
}