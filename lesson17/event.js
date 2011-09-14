$(function() {
  // 最初に表示する画像をセット
  $('#big').attr('src', $('#list img:first').attr('src'));

  // サムネイルクリックで画像を切り替え
  $('#list img').click(function() {
    $('#big').attr('src', $(this).attr('src'));    
  });

  // 画像の上でマウスを動かしてみてね
  $('img#hamster').mousemove(function(e) {
    var x = e.pageX;
    if (x < 175) {
      $('#msg').text('こんにちは');
    } else if (x < 410) {
      $('#msg').text('ガジガジ');
    } else {
      $('#msg').text('のど乾いたな');
    }
  });

  // ドラッグ＆ドロップ
  var flag = false;
  $('img#dragdrop')
    .mousedown(function() {
      flag = true;
      return false; // falseを返すとここでイベント終了(ブラウザ規定の挙動に移行しない)
    })
    .mouseup(function () {
      flag = false;
    })
    .mousemove(function(e) {
      if (flag) {
        $(this).css({
          top: e.pageY - 30,
          left: e.pageX - 70
        });
      }
    });
});

