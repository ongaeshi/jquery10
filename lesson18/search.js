$(function() {
  var str = '文字入力してね';
  $('#keywd')
    .addClass('watermark')
    .val(str)
    .focus(function() {
      $(this).removeClass('watermark');
      if ($(this).val() == str)
        $(this).val('');
    })
    .blur(function() {
      if ($(this).val() == '') {
        $(this).addClass('watermark');          
        $(this).val(str);
      }
    })
    .submit(function() {
      if ($(this).val() == str) {
        $(this).val('');
      }
    });
});

