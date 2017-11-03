$(document).ready(function(){
  function dropdowns() {
    var DROPDOWN_CLASS = '.dropdown-menu',
        OPENED_CLASS = 'collapse show',
        INPUT_CLASS = {
          container: 'dropdown-searchbar',
          input: 'search-input',
          icon: 'search-icon'
        },
        TOGGLER_CLASS = '.dropdown-toggle[role="tab"]';

    $(document).on('click', function (event) {
      var clickover = $(event.target);

      $(DROPDOWN_CLASS).each(function() {
        var isOpened = $(this).hasClass(OPENED_CLASS);
        if (isOpened && !clickover.hasClass(INPUT_CLASS.container) && !clickover.hasClass(INPUT_CLASS.input) && !clickover.hasClass(INPUT_CLASS.icon)) {
          $(this).siblings(TOGGLER_CLASS).click();
        }
      })
    });
  }

  dropdowns();
});
