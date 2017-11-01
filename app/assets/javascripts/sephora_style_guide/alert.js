$(document).ready(function(){
  function alert() {
    var PARENT_CLASS = '.alert[role="alert"]',
        CLOSE_BTN = '.alert[role="alert"] .close[data-dismiss="alert"]'
        OPEN_ALERT = '[data-target="alert"]';

    var alertTimeout = null;

    $(document).on('click', CLOSE_BTN, function () {
      $(this).closest(PARENT_CLASS).fadeOut(200, 'linear');
    });

    $(document).on('click', OPEN_ALERT, function() {
      if ($('.alert-success').is(':visible')) {
        clearTimeout(alertTimeout);
        alertTimeout = setTimeout(function () {
          $('.alert-success').fadeOut(200, 'linear');
        }, 3500);
      }

      if ($('.alert-warning').is(':visible')) {
        clearTimeout(alertTimeout);
        alertTimeout = setTimeout(function () {
          $('.alert-warning').fadeOut(200, 'linear');
        }, 3500);
      }

      if ($('.alert-error').is(':visible')) {
        clearTimeout(alertTimeout);
        alertTimeout = setTimeout(function () {
          $('.alert-error').fadeOut(200, 'linear');
        }, 3500);
      }
    })
  }

  alert();
});
