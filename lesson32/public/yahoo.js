$(function () {
  var onsearch = function (e) {
    $.get(
      '/',
      {
        keywd: $('#keywd').val(),
        page: 1
      },
      function (data) {
        $('#result').empty();

        $('Result', data).each(function() {
          $('#result').append(
            $('<a></a>')
              .attr('href', $('> Url', this).text()) //Thumbnail Urlが引っかからないように '> Url'
              .append(
                $('<img>')
                  .addClass('thumb')
                  .attr({
                    src: $('Thumbnail Url', this).text(),
                    title: $('Summary', this).text()
                  })
              )
          );
        });
      }
    );
  };

  $('#search').click(onsearch);
});