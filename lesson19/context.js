$(function() {
  $('#btn').toggle(
    function() {
      $(document).bind('contextmenu', function (e) {
        e.preventDefault();
      });
      $(this).val("コンテキストメニューを有効化");
    },
    function() {
      $(document).unbind('contextmenu');
      $(this).val("コンテキストメニューを無効化");
    }
  );
});