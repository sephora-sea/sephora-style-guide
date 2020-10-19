// https://developers.google.com/youtube/iframe_api_reference
// global variable for the players
var players = [];

// this function gets called when API is ready to use
function onYouTubeIframeAPIReady() {
  var allPlayers = $('.modal-video').children('iframe');

  for (var el in Array.from(allPlayers)) {
    var player = new YT.Player($(allPlayers[el]).attr('id'), {
      events: {
        'onReady': onPlayerReady
      }
    });
    players.push(player);
  }
}

function onPlayerReady() {
  // bind events
  $(document).on('click', '.js-video-link', function() {
    var currentVideoId = $(this).attr('data-video');

    for (var i in players) {
      if (players[i].a.id === currentVideoId) {
        players[i].playVideo();
      }
    }
  });

  $('.js-video-modal').on('hide.bs.modal', function() {
    var currentVideoId = $(this).find('iframe').attr('id');

    for (var i in players) {
      if (players[i].getIframe().getAttribute('id') === currentVideoId) {
        players[i].pauseVideo();
      }
    }
  });
}
