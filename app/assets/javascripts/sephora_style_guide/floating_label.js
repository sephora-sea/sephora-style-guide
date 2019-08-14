$(document).ready(function(){
  function floatingLabel() {
    var PARENT_CLASS = '.form-group',
        INPUT_CLASS = '.form-group.floating-labels input, .form-group.floating-labels textarea',
        CHZN_SELECT_CLASS = '.chzn-select';

    $(document).on('focus blur', INPUT_CLASS, function (e) {
      var valLength = this.value.length;
      var placeholder = this.getAttribute('placeholder');

      $(this).parents(PARENT_CLASS)
          .toggleClass('focus', e.type === 'focus' ||  e.type === 'focusin')
          .toggleClass('filled', valLength > 0)
          .toggleClass('focused', (e.type === 'focus'||
            e.type === 'focusin' ||
            valLength > 0 ||
            (valLength === 0 && typeof placeholder === 'string' && placeholder.length > 0)));
    });

    $(INPUT_CLASS).trigger('blur');

    $(document).on('liszt:showing_dropdown liszt:hiding_dropdown', CHZN_SELECT_CLASS, function (e) {
      $(this).parents(PARENT_CLASS)
          .toggleClass('focus', e.type === 'liszt:showing_dropdown')
    });
  }

  floatingLabel();
});
