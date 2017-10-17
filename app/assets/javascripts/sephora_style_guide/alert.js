$(document).ready(function(){
  function alert() {
    var PARENT_CLASS = '.alert[role="alert"]',
        CLOSE_BTN = '.alert[role="alert"] .close[data-dismiss="alert"]';

    $(document).on('click', CLOSE_BTN, function () {
      $(this).parent(PARENT_CLASS).fadeOut(200);
    });
  }

  alert();
});
