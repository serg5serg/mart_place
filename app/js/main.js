$(function () {
  $(".slider__user-rating").rateYo({
    rating: 4.5,
    readOnly: true,
    starWidth: "17px",
  });
  $(".product__item-rating").rateYo({
    rating: 4.5,
    readOnly: true,
    starWidth: "15px",
  });
  $(".slider__conteiner").slick({
    nextArrow:
      '<button class="slick-arrow slick-next"><img src="images/next.png" alt="next arrow"></button>',
    prevArrow:
      '<button class="slick-arrow slick-prev"><img src="images/previous.png" alt="prev arrow"></button>',
  });
  $(".followers__inner-box").slick({
    nextArrow:
      '<button class="slick-arrow slick-next"><img src="images/next.png" alt="next arrow"></button>',
    prevArrow:
      '<button class="slick-arrow slick-prev"><img src="images/previous.png" alt="prev arrow"></button>',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  });
  $(".feedback__inner").slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
  });

  var mixer = mixitup(".product__inner-box");
});
