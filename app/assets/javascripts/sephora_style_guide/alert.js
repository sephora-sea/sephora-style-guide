$(document).ready(function(){
  function alert() {
    var PARENT_CLASS = '.alert[role="alert"]',
        CLOSE_BTN = '.alert[role="alert"] .close[data-dismiss="alert"]';

    $(document).on('click', CLOSE_BTN, function () {
      $(this).closest(PARENT_CLASS).fadeOut(200, 'linear');
    });
  }

  alert();
});
