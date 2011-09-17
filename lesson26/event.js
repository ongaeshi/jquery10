$(function () {
  var l = $('#list');

  $('#up').click(function () {
    if (parseFloat(l.css('margin-top')) < 0) {
      l.animate({
        marginTop: parseFloat(l.css('margin-top')) + 44 + 'px'
      }, 1000);
    }
  });

  $('#down').click(function () {
    if (Math.abs(parseFloat(l.css('margin-top'))) < 44 * ($('li', l).size() / 4 - 1)) {
      l.animate({
        marginTop: parseFloat(l.css('margin-top')) - 44 + 'px'
      }, 1000);
    }
  });

  // 最初に表示する画像をセット
  $('#big').attr('src', $('#list img:first').attr('src'));

  // サムネイルクリックで画像を切り替え
  $('#list img').click(function() {
    var img = $(this);
    $('#big')
      .hide(1000, function() { // 1000msで消える
        // アニメーションが終了したときに呼ぶ処理
        // あらかじめキャッシュしてある 'クリックされた<img>'を渡す
        // $(this)は 'img#big' なので適切ではない
        $('#big').attr('src', img.attr('src')); 
      })
      .show(2000)               // 2000msで表示
    ;

    // .fadeOut(300, function() { // 1000msで消える
    //   $('#big').attr('src', img.attr('src')); // $(this)のキャッシュは大切
    // })
    // .fadeIn(900)               // 2000msで表示
  });
  
});