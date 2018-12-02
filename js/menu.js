"use strict";

document.getElementById('nav-btn').addEventListener('click', function (e) {
  e.preventDefault();
  var nav = document.getElementById('nav-menu');
  nav.classList.toggle('active');
});
document.getElementById('filter-title').addEventListener('click', function (e) {
  e.preventDefault();
  var down = document.getElementById('filter');
  down.classList.toggle('active');
});