// central file for the custom code used in Style Guide components

// Tabs

function _getLeftMargin($tbs, index) {
  var totalMargin = 0;
  for(var i = 0; i < index; i++) {
    totalMargin += $($tbs[i]).outerWidth();
  }
  return totalMargin;
};

function _moveBar($selectedTab, $ul) {
  var $lis = $ul.find('li'),
  index = $lis.index($selectedTab);

  $ul.find('.bar').animate({
    width: $selectedTab.outerWidth() + 'px', 
    marginLeft: this._getLeftMargin($lis, index) + 'px'
  }, 300);
};

//# Introduce Animated tab with bar
function loadTrackBar() {
  $('.nav-tabs.nav-tabs-primary').each(function(){
    $(this).append('<div class="tab-track"><div class="bar"></div></div>');
  });
}

$(document).on('ready', loadTrackBar);
