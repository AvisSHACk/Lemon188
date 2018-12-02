"use strict";

var header = document.getElementById('main-header');
window.addEventListener('scroll', function () {
  if (document.documentElement.scrollTop > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});