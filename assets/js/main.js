
"use strict"
//menu catalog 
const menuBtn = document.querySelector('.menu__catalog'),
      menuSubmenu = document.querySelector('.menu__submenu-js');

      menuBtn.addEventListener('click', () => {
        menuSubmenu.classList.toggle('menu__submenu-active');
      })
      menuSubmenu.addEventListener('click', e => {
        e._isClickWithInMenu = true;
      })
      menuBtn.addEventListener('click', e => {
        e._isClickWithInMenu = true;
      })
      document.body.addEventListener('click', (e) => {
        if(e._isClickWithInMenu) return;
        menuSubmenu.classList.remove('menu__submenu-active');
      })

//menu burger 

const menuMobileBtn = document.querySelector('.menu__icon'),
      menuMobile = document.querySelector('.menu__mobile');

menuMobileBtn.addEventListener('click', () => {
  menuMobileBtn.classList.toggle('menu__icon-active')
  menuMobile.classList.toggle('menu__mobile-active');
  document.body.classList.toggle('lock');

});
if(menuMobileBtn.classList.contains('menu__icon-active')) {
  menuMobileBtn.classList.remove('menu__icon-active')
  menuMobile.classList.remove('menu__mobile-active');
  document.body.classList.remove('lock');
}
// search 
const searchBtn = document.querySelector('.menu-form'),
      dropClose = document.querySelector('.drop-close'),
      drop = document.querySelector('.header__drop'),
      language = document.querySelector('.menu__language'),
      logo = document.querySelector('.header__logo');

searchBtn.addEventListener('click', ()=> {
  drop.classList.add('header__drop-active');
  searchBtn.classList.add('menu-form-active');
  logo.classList.add('hiden-mobile');
  language.classList.add('hiden-mobile');
  menuMobileBtn.classList.add('hiden-mobile');
})
dropClose.addEventListener('click', () =>{
  drop.classList.remove('header__drop-active');
  searchBtn.classList.remove('menu-form-active');
  logo.classList.remove('hiden-mobile');
  language.classList.remove('hiden-mobile');
  menuMobileBtn.classList.remove('hiden-mobile');
})

drop.addEventListener('click', e => {
  e._isClickWithInMenu = true;
})
searchBtn.addEventListener('click', e => {
  e._isClickWithInMenu = true;
})
document.body.addEventListener('click', (e) => {
  if(e._isClickWithInMenu) return;
  drop.classList.remove('header__drop-active');
})
    
//slider 1
new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
//slider 2
new Swiper(".mySwipertwo", {
  spaceBetween: 1, 
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
//slider 3
new Swiper(".mySwiperthree", {
  slidesPerView: 7,
  loop: true,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});
//Два слайдера
new Swiper(".mySwiper2", {
  spaceBetween: 10,
  thumbs: {
    swiper: {
      el: '.mySwiperFive',
      slidesPerView: 3
    }
  }
});
new Swiper(".mySwiperFive", {
  spaceBetween: 20,
  slidesPerView: 3,
  navigation: {
    nextEl: ".swiper-button-next-five",
    prevEl: ".swiper-button-prev-five",
  }
});

// Показать еще search
const showMore = document.querySelector('.btn-show ');
const cards = document.querySelectorAll('.search__wrapper-item').length;

let items = 12;

if (showMore) {
  showMore.addEventListener('click', () => {
    items += 12;
    const array = Array.from(document.querySelector('.search__wrapper').children);
    const visItems = array.slice(0 , items);
  
    visItems.forEach(el => el.classList.add('is-visible'));
  
    if(visItems.length === cards) {
      showMore.style.display = 'none';
    }
  });
}

//Показать еще news
const showMoreOne = document.querySelector('.btn-news ');
const cardsOne = document.querySelectorAll('.news__wrapper__item').length;

let itemsOne = 12;

if (showMoreOne) {
  showMoreOne.addEventListener('click', () => {
    itemsOne += 12;
    const array = Array.from(document.querySelector('.news__wrapper').children);
    const visItems = array.slice(0 , itemsOne);
  
    visItems.forEach(el => el.classList.add('is-visible'));
  
    if(visItems.length === cardsOne) {
      showMoreOne.style.display = 'none';
    }
  });
}
// скрыть показать
const accordionBtn = document.querySelector('.accordion-btn');
const accordionHidden = document.querySelector('.accordion-hidden');
if(accordionBtn) {
  accordionBtn.addEventListener('click', () => {

    if(!accordionHidden.classList.contains('accordion-hidden')) {
      accordionHidden.classList.add('accordion-hidden');
      accordionBtn.innerHTML = 'Показать все';
    } else {
      accordionHidden.classList.remove('accordion-hidden');
      accordionBtn.innerHTML = 'Скрыть';
    }

  })
}

//фильтры  shell-active shell 
const btnFilter = document.querySelector('.filter-btn'),
      shell = document.querySelector('.shell'),
      filterClose = document.querySelector('.filter__close-cross')
if(btnFilter) {
    btnFilter.addEventListener('click', () => {
      shell.classList.toggle('shell-active');
    });       
}
if(filterClose) {
  filterClose.addEventListener('click', () => {
    shell.classList.remove('shell-active');
  });  
}

// tabs
const tabs1 = new Tabs('tab', {
  // isChanged: (tabs) => {
  //   console.log(tabs);
  // } проверка на баги
});
const tabs2 = new Tabs('tab2', {});

// Читать полностью
const read = document.querySelector('.mixer__content-left_read'),
      more = document.querySelector('.mixer__content-left_more'),
      dots = document.querySelector('.mixer__content-left_dots');

if(read) {
  read.addEventListener('click', () => {
    if(!more.classList.contains('mixer__content-left_more-active')) {
      more.classList.add('mixer__content-left_more-active');
      read.innerHTML = 'Скрыть'
      dots.innerHTML = '';
    } else {
      more.classList.remove('mixer__content-left_more-active');
      read.innerHTML = 'Читать полностью'
      dots.innerHTML = '...';
    }

  })
}
// Аккардеон 
let accordionOne = document.querySelector('#accordion-1');
let accordionTwo = document.querySelector('#accordion-2');
let accordionThree = document.querySelector('#accordion-3')
if(accordionOne) {
    new ItcAccordion('#accordion-1');
}
if(accordionTwo ) {
    new ItcAccordion('#accordion-2');
}
if(accordionThree ) {
  new ItcAccordion('#accordion-3');
}

let btns = document.querySelectorAll('.accordion__content-link');

btns.forEach(button => {
  button.addEventListener('click', function() {
    button.classList.toggle('accordion__content-link_active')
  })
})


//Только при достежении блока начнется анимация 
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
    //amimate number
    const one = document.querySelector('#number-one'),
    two = document.querySelector('#number-two'),
    three = document.querySelector('#number-three');
      
    function animateNumber(callback, from, to, duration) {
    let start = null,
      animate = timestamp => {
        start = start || timestamp;
        let progress = Math.min((timestamp - start) / duration, 1);
        callback(progress * (to - from) + from);
        if(progress < 1) {
          window.requestAnimationFrame(animate);
        }
      };
    window.requestAnimationFrame(animate);
    }
    if(one) {
    animateNumber(value => {
      one.textContent = Math.floor(value);
    }, 0, 15, 1000);
    }

    if(two) {
    animateNumber(value => {
      two.textContent = Math.floor(value);
    }, 0, 400, 1000);
    }
    if(three) {
    animateNumber(value => {
      three.textContent = Math.floor(value);
    }, 0, 100, 1000);
    }

        }
      });
}

let options = {
    threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.assortment');

for (let elm of elements) {
  observer.observe(elm);
}