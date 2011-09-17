$(function() {
  $('.tiplink')
    .mouseover(function (e) {
      $('div.tip:not(:animated)')
        .text($(this).data('tips'))
        .css({
          top: e.pageY,
          left: e.pageX
        })
        .fadeIn(500);
    })
    .mouseout(function (e) {
      $('div.tip')
        .fadeOut(1000);
    })
  ;
});