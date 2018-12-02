"use strict";

var c = document.getElementById('posts__items'),
    l = document.getElementById('posts__loading');

var loadArticles = function loadArticles() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', './json/doujins.json', true);
  console.log('Objeto abierto', xhr.readyState);
  xhr.addEventListener('load', function (e) {
    console.log('Objeto cargado', xhr.readyState);
    var interval = setInterval(function () {
      l.style.display = 'none';
      var data = JSON.parse(e.target.responseText);
      draw(data);
      clearInterval(interval);
    }, 2000);
  });
  xhr.send();
  console.log('Acción solicitado', xhr.readyState);
};

var draw = function draw(data) {
  var f = document.createDocumentFragment();
  data.forEach(function (n) {
    var container = document.createElement('div');
    container.innerHTML =
    /*html*/
    "\n            <a href=\"#\">\n                <img class=\"main-posts__img\" src=\"".concat(n.poster, "\" alt=\"\">\n                <div class=\"main-posts__info\">\n                    <h3 class=\"main-posts__info-title h3\">Titulo Doujin</h3>\n                </div>\n            </a>\n        ");
    container.classList.add('main-posts__item');
    f.appendChild(container);
  });
  c.appendChild(f);
};

window.addEventListener('load', loadArticles);
