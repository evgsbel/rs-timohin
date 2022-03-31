"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// fixed header
$(function () {
  function stickySidebar() {
    var scrollDistance = $(document).scrollTop(),
        headerHeight = $('.header').outerHeight(true),
        // sidebarHeight = $('aside').outerHeight(true),
    footerOffsetTop = $('.js-stop-header').offset().top,
        $header = $('header');

    if (scrollDistance >= headerHeight) {
      $header.addClass('header_fixed');
      $header.removeClass('header_hide');
    } else {
      $header.removeClass('header_fixed');
    }

    if (scrollDistance + headerHeight >= footerOffsetTop - 100) {
      $header.removeClass('header_fixed');
      $header.addClass('header_hide');
    }
  }

  stickySidebar();
  $(document).scroll(function () {
    stickySidebar();
  });
}); // hide menu

$(function () {
  var btnMenu = document.querySelector('.burger');
  var menu = document.querySelector('.hide-menu');
  var logo = document.querySelector('.hide-menu__logo');
  var body = document.querySelector('body'); // let heroHeight = document.querySelector('.hero').clientHeight
  // let headerHeight = document.querySelector('.header').clientHeight

  var toggleMenu = function toggleMenu() {
    menu.classList.add('is-open'); // menu.style.height = heroHeight + headerHeight + 'px'

    btnMenu.classList.add('is-active');
    logo.classList.add('opened-menu');
    body.classList.add('opened-menu');
  };

  btnMenu.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleMenu();
  });
  var closeBtn = document.querySelector('.close-menu');

  var closeMenu = function closeMenu() {
    menu.classList.remove('is-open');
    body.classList.remove('opened-menu');
    logo.classList.remove('opened-menu');
  };

  closeBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    closeMenu();
  });
  var hideMenuLink = document.querySelectorAll('.hide-menu__link');
  hideMenuLink.forEach(function (el) {
    el.addEventListener('click', function (event) {
      menu.classList.remove('is-open');
      body.classList.remove('opened-menu');
      logo.classList.remove('opened-menu');
    });
  });
}); // read more

$(function () {
  var status = "less";
  var toggleButton = document.querySelectorAll('.read-more');
  toggleButton.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();

      if (status == "less") {
        el.parentNode.firstElementChild.classList.add('is-open');
        el.innerText = "Скрыть";
        status = "more";
      } else if (status == "more") {
        el.parentNode.firstElementChild.classList.remove('is-open');
        el.innerText = "Смотреть еще";
        status = "less";
        el.parentNode.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}); // anchors

$(function () {
  var anchors = document.querySelectorAll('a[href*="#"]');

  var _iterator = _createForOfIteratorHelper(anchors),
      _step;

  try {
    var _loop = function _loop() {
      var anchor = _step.value;
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        var blockID = anchor.getAttribute('href').substr(1);
        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}); // tabs

$(function () {
  var tabsBtn = document.querySelectorAll('.tabs__btn');
  tabsBtn.forEach(function (el) {
    el.addEventListener('click', function (event) {
      tabsBtn.forEach(function (tabsBtn) {
        tabsBtn.classList.remove('is-active');
      });
      var path = event.currentTarget.dataset.path;
      document.querySelectorAll('.tabs__content').forEach(function (tabContent) {
        tabContent.classList.remove('is-active');
      });
      document.querySelector("[data-target=\"".concat(path, "\"]")).classList.add('is-active');
      el.classList.add('is-active');
    });
  });
});