// ==UserScript==
// @name         Schedlink_Helper
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://catalog.illinois.edu/courses-of-instruction/*
// @grant        none
// ==/UserScript==

(function() {
    var links = document.getElementsByClassName("schedlink");
    for(var i = 0;i< links.length;i++){
        var url = document.getElementsByClassName("schedlink")[i].href;
        var new_url = url.replace(/terms/,"2021/fall");
        document.getElementsByClassName("courseblocktitle")[i].innerHTML+="<span><a class=\"explorerlink\" href=\""+new_url+"\" target=\"_blank\" style='text-decoration:none;color:#C0C0C0';>[2021 Fall Schedule]</a></span>";
    }
})();