$(function () {
  // 最初のパネルを読み込む
  $('#container li:first > a').addClass('selected');
  $('#container div').load($('#container li:first > a').attr('href'));

  // タブクリックしたら
  $('#container li > a').click(function (e) {
    if (!$(this).hasClass('selected')) {
      $('#container li > a').removeClass('selected');
      $(this).addClass('selected');
      $('#panel').load($(this).attr('href'));
    }
    // リンク先へのジャンプはしない
    e.preventDefault();
  });
});