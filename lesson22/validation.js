// valid    入力検証を行う
// required 入力されていなければエラー
// regexp   
// length   入力文字数
// range    
// inarray 

$(function () {
  var msgs;

  var setError = function (elem, msg) {
    msgs.push('<li>' + msg + '</li>');
    $(elem)
      .addClass('error_field')
      .after('<span class="error_mark">*</span>');
  };

  $('#fm').submit(function (e) {
    msgs = [];
    $('error_mark', this).remove();

    $('.valid', this)
      .removeClass('.error_field')
      .filter('.required')
      .each(function () {
        if ($(this).val() === '') {
          setError(this, $(this).prev('label').text() + 'は必須入力です。');
        }
      });


    // エラーメッセージ処理
    if (msgs.length === 0) {
      $('#error_summary').css('display', 'none');
    } else {
      $('#error_summary')
        .css('display', 'block')
        .html(msgs.join(''));
      e.preventDefault();
    }
  });
});