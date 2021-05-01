//Funciones
function addEventListenerListResaltar(list) {
    for (var i = 0, len = list.length; i < len; i++) {
        list[i].addEventListener('mouseover', function(){list.forEach(function(e){e.className = "caja resaltar"})}, false);
        list[i].addEventListener('mouseleave', function(){list.forEach(function(e){e.className = "caja"})}, false);
    }
}

function resolveList(list){
    for (var i = 0, len = list.length; i < len; i++) {
        list[i].className = "caja resaltar"
        list[i].removeEventListener('mouseover',function(){console.log("Removed")})
        list[i].removeEventListener('mouseleave',function(){console.log("Removed")})
    }
}

//Busqueda de elementos
var elementDom = document.querySelectorAll("div.caja.dom")
var elementHeader = document.querySelectorAll("div.caja.header")
var elementArticle = document.querySelectorAll("div.caja.article")
var elementAside = document.querySelectorAll("div.caja.aside")
var elementFooter = document.querySelectorAll("div.caja.footer")
var elementNav = document.querySelectorAll("div.caja.nav")
var elementClass = document.querySelectorAll("div.caja.class")
var elementImg = document.querySelectorAll("div.caja.img")
var elementStyle = document.querySelectorAll("div.caja.style")
var elementLi = document.querySelectorAll("div.caja.li")
var elementDisplay = document.querySelectorAll("div.caja.display")
var elementUl = document.querySelectorAll("div.caja.ul")


var btnResolver = document.getElementById("btnResolver")

//Click Resolver
btnResolver.addEventListener('click',function(){
    resolveList(elementDom)
    resolveList(elementHeader)
    resolveList(elementArticle)
    resolveList(elementAside)
    resolveList(elementFooter)
    resolveList(elementNav)
    resolveList(elementClass)
    resolveList(elementImg)
    resolveList(elementStyle)
    resolveList(elementLi)
    resolveList(elementDisplay)
    resolveList(elementUl)

})

//Eventos para Resaltar
addEventListenerListResaltar(elementDom)
addEventListenerListResaltar(elementHeader)
addEventListenerListResaltar(elementArticle)
addEventListenerListResaltar(elementAside)
addEventListenerListResaltar(elementFooter)
addEventListenerListResaltar(elementNav)
addEventListenerListResaltar(elementClass)
addEventListenerListResaltar(elementImg)
addEventListenerListResaltar(elementStyle)
addEventListenerListResaltar(elementLi)
addEventListenerListResaltar(elementDisplay)
addEventListenerListResaltar(elementUl)


