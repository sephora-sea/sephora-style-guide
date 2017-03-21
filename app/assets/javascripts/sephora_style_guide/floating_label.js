$(document).ready(function(){
  function floatingLabel() {
    var PARENT_CLASS = '.form-group',
        INPUT_CLASS = '.form-group.floating-labels input, .form-group.floating-labels textarea',
        CHZN_SELECT_CLASS = '.chzn-select';

    $(document).on('focus blur', INPUT_CLASS, function (e) {
      $(this).parents(PARENT_CLASS)
          .toggleClass('focus', e.type === 'focus' ||  e.type === 'focusin')
          .toggleClass('filled', this.value.length > 0)
          .toggleClass('focused', (e.type === 'focus'||  e.type === 'focusin' || this.value.length > 0 || (this.value.length === 0 && typeof this.getAttribute('placeholder') === 'string')));
    });

    $(INPUT_CLASS).trigger('blur');

    $(document).on('liszt:showing_dropdown liszt:hiding_dropdown', CHZN_SELECT_CLASS, function (e) {
      $(this).parents(PARENT_CLASS)
          .toggleClass('focus', e.type === 'liszt:showing_dropdown')
    });
  }

  floatingLabel();
});
