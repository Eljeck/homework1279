// ==UserScript==
// @name         Yandexbot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @grant        none
// ==/UserScript==

if ( document.getElementById("text") ) { // если мы на главной
    document.getElementById("text").value = "танки"
    document.getElementsByClassName("button mini-suggest__button button_theme_websearch button_size_ws-head i-bem button_js_inited")[0].click()
} else if (document.getElementsByName("text")[0].value != "танки") {
    document.getElementsByName("text")[0].value = "танки"
    document.getElementsByClassName("websearch-button mini-suggest__button")[0].click()
} else {
	var links = document.getElementsByTagName("a")
    for (link in links){
        if (links[link].href){
            if ( links[link].href.indexOf("wargaming") != -1 ){
                links[link].removeAttribute("target")
                links[link].click()
                break
            }
        }
    }
}