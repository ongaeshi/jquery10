$(function () {
  $('#search').click(function () {
    $.getJSON(
      'http://search.yahooapis.jp/BlogSearchService/V1/blogSearch?appid=gFLs9RCxg65wBLXYLsx8gELmJHpYa4dq8cg1bfxalTiYgOL7u0jPeW4VrmfY6H.Zvyqh&results=50&output=json&callback=?',
      { query: $('#keywd').val() },
      function (data) {
        $('#result').empty();
        $('#template').tmpl(data.Result).appendTo('#result');
      }
    );
  });
});