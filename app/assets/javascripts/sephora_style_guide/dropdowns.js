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
      var isOpened = $(DROPDOWN_CLASS).hasClass(OPENED_CLASS);
      if (isOpened && !clickover.hasClass(INPUT_CLASS.container) && !clickover.hasClass(INPUT_CLASS.input) && !clickover.hasClass(INPUT_CLASS.icon)) {
        $(TOGGLER_CLASS).click();
      }
    });
  }

  dropdowns();
});
