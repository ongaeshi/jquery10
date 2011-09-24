$(function () {
  $('#keyword').autocomplete({
    source: 'autocomplete',
    delay: 500,
    minLength: 1,
    select: function(e, ui) {
      if (ui.item) { $('#result').html(ui.item.id); }
    }
  });
});