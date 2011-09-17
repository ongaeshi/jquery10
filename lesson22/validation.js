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

    $('.valid', this)           // thisを基点に検索
      .removeClass('.error_field')
      .filter('.required')
      .each(function () {
        if ($(this).val() === '') {
          setError(this, $(this).prev('label').text() + 'は必須入力です。');
        }
      })
      .end()
      .filter('.length')
      .each(function () {
        if ($(this).val().length > $(this).data('length')) {
          setError(this, $(this).prev('label').text() + 'は' + $(this).data('length') + '文字以内で入力して下さい。');
        }
      })
      .end()
      .filter('.range')
      .each(function () {
        var v = parseFloat($(this).val());
        if (v < $(this).data('min') || v > $(this).data('max')) {
          setError(this, $(this).prev('label').text() + 'は' + $(this).data('min') + '～' + $(this).data('max') + 'の範囲で入力して下さい。');
        }
      })
      .end()
      .filter('.inarray')
      .each(function () {
        var opts = $(this).data('option').split(' ');

        if ($.inArray($(this).val(), opts) === -1) {
          setError(this, $(this).prev('label').text() + 'は [' + opts.toString() + '] のいずれかで入力して下さい。');
        }
      })
      .end()
      .filter('.regexp')
      .each(function () {
        var reg = new RegExp($(this).data('pattern'), 'gi');
        if (!reg.test($(this).val())) {
          setError(this, $(this).prev('label').text() + 'の形式(' + $(this).data('pattern') + ')が間違っています。');
        }
      })
    ;

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