$(function() {
  $('#panel dd:gt(0)').hide();
  $('#panel dt')
    .click(function (e) {
      $('#panel dd').slideUp(500);     // 全てのパネルを閉じて 
      $('+dd', this).slideDown(500);   // 選択パネルのみを表示
    })
  ;
  
  // $('#panel dd').hide();
  // $('#panel dt')
  //   .click(function (e) {
  //     $('+dd', this).slideToggle(200);
  //   })
  // ;
});