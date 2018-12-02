"use strict";

document.getElementById('nav-search').addEventListener('click', function (e) {
  e.preventDefault();
  var container = document.createElement('div');
  var searchHTML =
  /* html */
  "\n        <form class=\"main-form__search\">\n            <input type=\"search\" class=\"main-form__input\" placeholder=\"Realize tu busquedad\">\n            <button class=\"main-form__button button--submit\">Buscar</button>\n            <button class=\"main-form__button button--close\">No gracias</button>\n        </form>\n    ";
  container.classList.add('main-form');
  container.innerHTML = searchHTML;
  document.body.appendChild(container);
  closeModal(container);
});

var closeModal = function closeModal(container) {
  var closeButton = container.querySelector('.button--close');
  closeButton.addEventListener('click', function (e) {
    e.preventDefault();
    container.classList.add('end');
    container.addEventListener('animationend', function (evt) {
      if (evt.elapsedTime === 0.2) {
        document.body.removeChild(container);
      }
    });
  });
};