const navigation = $('.navigation');
const btnClose = $('.navigation__close');
const headerBurger = $('.header__burger');

$(document).on('click', function(event) {
  if (!$(event.target).closest(navigation).length && !$(event.target).is(headerBurger)) {
    navigation.animate({
      left: '-400px',
    }, 500);
    btnClose.animate({
      opacity: 0,
    }, 300);
  }
});

$(headerBurger).on('click', function() {
  navigation.animate({
    left: 0,
  }, 500, function() {
    btnClose.animate({
      opacity: 1,
    }, 300, 'swing');
  });
});

btnClose.on('click', function(target) {
  btnClose.animate({
    opacity: 0,
  }, 300);
  navigation.animate({
    left: '-400px',
  }, 500);
});