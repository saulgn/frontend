(function() {
  'use strict';

  if (!document.querySelector || !window.addEventListener || !document.documentElement.classList) {
    return;
  }

  var $ = document.querySelector.bind(document);
  var $$ = document.querySelectorAll.bind(document);
  var opts = {
    minWidth: 504,
    minHeight: 400,
    topLink: $('.c-top-nav'),
    stateClass: 'is-visible'
  };

  function showTopLink() {
    var scrollTop = document.body.scrollTop;

    if (window.innerWidth > opts.minWidth) {
      if (scrollTop >= opts.minHeight) {
        opts.topLink.classList.add(opts.stateClass);
      } else {
        opts.topLink.classList.remove(opts.stateClass);
      }
    }
  }

  window.addEventListener('scroll', showTopLink);

  smoothScroll.init({
    speed: 1000
  });
}());