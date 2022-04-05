  /*

  // babeljs.io

  setTimeout(() => document.body.classList.add('render'), 60);
  const nav = Array.from(document.querySelectorAll('.links > a'));
  const total = nav.length;
  const navigate = (linkEl) => {
    document.body.classList.remove('render');
    document.body.addEventListener('transitionend', () => window.location = linkEl.href);
  };
  nav.forEach(link => link.addEventListener('click', (ev) => {
    ev.preventDefault();
    navigate(ev.target);
  }));
  */

'use strict';

setTimeout(function () {
  return document.body.classList.add('render');
}, 60);
var nav = Array.from(document.querySelectorAll('.links > a'));
var total = nav.length;
var navigate = function navigate(linkEl) {
  document.body.classList.remove('render');
  document.body.addEventListener('transitionend', function () {
    return window.location = linkEl.href;
  });
};
nav.forEach(function (link) {
  return link.addEventListener('click', function (ev) {
    ev.preventDefault();
    navigate(ev.target);
  });
});