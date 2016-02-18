// ==UserScript==
// @name         TWITCH HTML5 PLAYER
// @namespace    http://twitter.com/kirnehx
// @version      0.1
// @description  Forces Twitch.tv to use the new HTML5 player, instead of flash.
// @author       kirnehx
// @supportURL   http://twitter.com/Kirnehx
// @match        http://www.twitch.tv/*
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==

//setTimeout(function() {
//    javascript:$(".js-player").html($("<iframe>").attr("src", "http://player.twitch.tv/?branding=false&showInfo=false&channel="+window.location.pathname.substr(1)).attr("width", "100%").attr("height", "100%").css("border", 0));
//},5000);

//window.onload = function() {

function runMe()
{
    setTimeout(function() {
        var wlh = window.location.hostname;
        if(wlh != "www.twitch.tv/" || wlh != "www.twitch.tv" || wlh != "twitch.tv/" || wlh != "twitch.tv")
        {
            if($('#video-1 > div.player-video').length)
            {
                console.log("Object found, injecting");
                $("#video-1").html(
                    $("<iframe>").attr({
                        "src":"http://player.twitch.tv/?branding=false&html5&showInfo=false&channel=" + window.location.pathname.substr(1),
                        "width":"100%",
                        "height":"100%"
                    }).css(
                        "border", 0
                    ));
            }
            else
            {
                console.log("Object not found, reloading");
                runMe();
            }
        }
        else
        {
            console.log("On homepage, ignoring");
        }
    },1000);
}

runMe();