$(function () {
  // slick slaid
  $(".blog-page__slider").slick({
    prevArrow:
      '<button type="button" class="slick-prev"><svg fill="#000000"  width="27px" height="13px" viewBox="0 0 30.727 30.727" xml:space="preserve" transform="rotate(90)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0 l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z"></path> </g> </g></svg></button>',
    nextArrow:
      '<button type="button" class="slick-next"><svg fill="#000000"   width="27px" height="13px" viewBox="0 0 30.727 30.727" xml:space="preserve" transform="rotate(270)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0 l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z"></path> </g> </g></svg></button>',
    infinite: false,
  });

  // cum se fac Taburile
  // selectam clasa product ce contine 3 text , cu clic cu functie.
  $(".product-tabs__top-item").on("click", function (e) {
    e.preventDefault();
    // dupa ce apasam pe unul din ele se sterge status active rosu.
    $(".product-tabs__top-item").removeClass("product-tabs__top-item--active");
    // apoi se adauga clasa activa si culoare se schimb in dependenta de elementrul selectat
    $(this).addClass("product-tabs__top-item--active");

    //  daca apasam pe content description stergem item active
    $(".product-tabs__content-item").removeClass(
      "product-tabs__content-item--active"
    );

    // alegem atribul href care sa corespunda cu top item si sa selecteze dupa nr 1 pana la 3 href
    // folosim saitul https://jquery.page2page.ru/ informatia descrisa bine
    $($(this).attr("href")).addClass("product-tabs__content-item--active");
  });

  // Facem slaider p/u cartela produsului din interior
  // cream 2 slaiduri care sa fie legate
  $(".product-slide__thumb").slick({
    // referinta la al 2
    asNavFor: ".product-slide__big",
    // daca selectam sa fie focus pe el
    focusOnSelect: true,
    // cite slaiduri sa fie afisate
    slidesToShow: 4,
    // cu cite slaiduri ne mutam
    slidesToScroll: 1,
    // sa apara pe verticala
    vertical: true,
    // prioritate sa nu dispara
    draggable: false,
  });

  $(".product-slide__big").slick({
    // sa treaca la urmatorul slaid sa fie legate unul de altul
    asNavFor: ".product-slide__thumb",
    draggable: false,
    // inalaturam previous si next arrow din slaider
    arrows: false,
    // efect de trecere
    fade: true,
  });

  // View sa lucreze  grid sau lista
  $(".shop-content__filter-btn").on("click", function () {
    //  la prima clasa se adauga inca una activa , adaugam culoare la view sortare
    $(".shop-content__filter-btn").removeClass(
      "shop-content__filter-btn--active"
    );
    $(this).addClass("shop-content__filter-btn--active");
  });

  // sa fie adaugata inca o clasa p/u list anume la cartele , pun la clase existenta , fara punct la cele noi.
  $(".button-list").on("click", function () {
    $(".product-item").addClass("product-item--list");
  });

  // sa fie stearsca inca o clasa p/u grid anume la cartele
  $(".button-grid").on("click", function () {
    $(".product-item").removeClass("product-item--list");
  });

  $(".select-style, .product-one__item-num").styler();

  // filter slaider sa lucreze
  $(".filter-price__input").ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $(".filter-price__from").text(data.from);
      $(".filter-price__to").text(data.to);
    },
    onChange: function (data) {
      $(".filter-price__from").text(data.from);
      $(".filter-price__to").text(data.to);
    },
  });

  $(".top-slider__inner").slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpead: 2000,
  });

  $(".star").rateYo({
    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#ffdb9d",
    readOnly: true,
    // adaugam stele sa fie ca in macheta
    starSvg:
      '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 12.705 512 486.59" x="0px" y="0px" xml:space="preserve" width="17px" height="17px" fill="#ccccce"  style="margin-left: 0px;"> <polygon  points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566 "> </polygon> </svg>',
  });
});

// CLOCK timer invers

function getTimeRemaining(endtime) {
  const t = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((t / 1000) % 60);
  const minutes = Math.floor((t / 1000 / 60) % 60);
  const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  const days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function initializeClock(id, endtime) {
  const clock = document.querySelector(".promo__clock");
  const daysSpan = clock.querySelector(".promo__days");
  const hoursSpan = clock.querySelector(".promo__hours");
  const minutesSpan = clock.querySelector(".promo__minutes");
  const secondsSpan = clock.querySelector(".promo__seconds");

  function updateClock() {
    const t = getTimeRemaining(endtime);
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = $(".promo__clock").attr("data-time");
initializeClock("promo__clock", deadline);
