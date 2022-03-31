// fixed header
$(() => {

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

});

// hide menu
$(() => {
  const btnMenu = document.querySelector('.burger');
  const menu = document.querySelector('.hide-menu');
  const logo = document.querySelector('.hide-menu__logo');
  const body = document.querySelector('body');
  // let heroHeight = document.querySelector('.hero').clientHeight
  // let headerHeight = document.querySelector('.header').clientHeight

  const toggleMenu = function () {
    menu.classList.add('is-open');
    // menu.style.height = heroHeight + headerHeight + 'px'
    btnMenu.classList.add('is-active');
    logo.classList.add('opened-menu');
    body.classList.add('opened-menu');
  };

  btnMenu.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleMenu();
  });

  const closeBtn = document.querySelector('.close-menu');
  const closeMenu = function () {
    menu.classList.remove('is-open');
    body.classList.remove('opened-menu');
    logo.classList.remove('opened-menu');
  };

  closeBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    closeMenu();
  });

  const hideMenuLink = document.querySelectorAll('.hide-menu__link');
  hideMenuLink.forEach(function (el) {
    el.addEventListener('click', function (event) {
      menu.classList.remove('is-open');
      body.classList.remove('opened-menu');
      logo.classList.remove('opened-menu');
    })
  })

});

// read more
$(() => {
  var status = "less";
  let toggleButton = document.querySelectorAll('.read-more');
  toggleButton.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault()
      if (status == "less") {
        el.parentNode.firstElementChild.classList.add('is-open')
        el.innerText = "Скрыть";
        status = "more";
      } else if (status == "more") {
        el.parentNode.firstElementChild.classList.remove('is-open');
        el.innerText = "Смотреть еще";
        status = "less"
        el.parentNode.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  })
});

// anchors
$(() => {
  const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1)

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
})

// tabs
$(() => {
  var tabsBtn = document.querySelectorAll('.tabs__btn');
  tabsBtn.forEach(function (el) {
    el.addEventListener('click', function (event) {

      tabsBtn.forEach(tabsBtn => {
        tabsBtn.classList.remove('is-active');
      });

      var path = event.currentTarget.dataset.path;

      document.querySelectorAll('.tabs__content').forEach(function (tabContent) {
        tabContent.classList.remove('is-active');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('is-active');
      el.classList.add('is-active');

    });
  });
});


