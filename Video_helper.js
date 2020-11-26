// ==UserScript==
// @name         Illini Video Helper
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       94rain
// @match        https://mediaspace.illinois.edu/media/*
// @grant        none
// ==/UserScript==

(function() {
    document.getElementsByClassName("muted small")[0].innerHTML+="<span class=\"downloadLink\"><a href=\""+document.getElementsByTagName("meta")[7].content+"\"><span class=\"\">Download</span></a></span>"
})();