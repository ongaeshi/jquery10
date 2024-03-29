$(function () {
  // isNaNだと、引数が""の時にfalseが返ってしまうので専用関数を作る
  var isNotANumber = function(v) {
    return isNaN(v) || v === "";
  };

  var onsearch = function (e) {
    var page_num = isNotANumber($(this).text()) ? 1 : $(this).text();
    
    $.get(
      '/',
      {
        keywd: $('#keywd').val(),
        page: page_num
      },
      function (data) {
        $('#result').empty();
        $('#pager').empty();

        // video
        $('Result', data).each(function() {
          $('#result').append(
            $('<a></a>')
              .attr('href', $('> Url', this).text()) //Thumbnail Url縺悟ｼ輔▲縺九°繧峨↑縺�繧医≧縺ｫ '> Url'
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

        // paging
        var pager = $('#pager');
        var page_cnt = Math.ceil($('ResultSet', data).attr('totalResultsAvailable') / 20);

        if (page_cnt > 1) {
          for (var i = 1; i <= page_cnt; i++) {
            if (i > 10) { break; }
            pager.append(
              $('<a></a>')
                .addClass('pager_link')
                .attr('href', '#')
                .text(i)
            );
          }
        }
      });
    e.preventDefault();
  };

  $('#search').click(onsearch);
  $('.pager_link').live('click', onsearch);
});