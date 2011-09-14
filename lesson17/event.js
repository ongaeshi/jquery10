$(function() {
  // 最初に表示する画像をセット
  $('#big').attr('src', $('#list img:first').attr('src'));

  // サムネイルクリックで画像を切り替え
  $('#list img').click(function() {
    $('#big').attr('src', $(this).attr('src'));    
  });
});

