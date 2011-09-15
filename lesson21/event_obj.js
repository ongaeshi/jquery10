$(function() {
  var onmousedown = function(e) {
    if (e.which == 3) {
      e.data.exp.css({
        display: 'block',
        top: e.pageY,
        left: e.pageX
      });
    }
    e.stopPropagation();
  };
  
  $(document)
    .mousedown({exp: $('#menu')}, onmousedown)
    .click(function (e) {
      if (e.which == 1) {
        $('#menu').css('display', 'none');
      }
    })
    .bind('contextmenu', function(e) {
      e.preventDefault();
    });

  $('table#data')
    .mousedown({exp: $('#menu2')}, onmousedown)
    .click(function (e) {
      if (e.which === 1) {
        $('#menu2').css('display', 'none');
      }
    })
    .bind('contextmenu', function (e) {
      e.preventDefault();
    });
  
});