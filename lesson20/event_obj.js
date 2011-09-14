$(function() {
  $(document)
    .mousedown(function (e) {
      if (e.which == 3) {
        $('#menu').css({
          display: 'block',
          top: e.pageY,
          left: e.pageX
        });
      }
    })
    .click(function (e) {
      if (e.which == 1) {
        $('#menu').css('display', 'none');
      }
    })
    .bind('contextmenu', function(e) {
      e.preventDefault();
    });
});