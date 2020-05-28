$(function () {
  $(".slider_user-rating").rateYo({
    rating: 3.2,
    readOnly: true,
  });
  $(".slider_conteiner").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  });

  $("#Container").mixItUp({});
});
