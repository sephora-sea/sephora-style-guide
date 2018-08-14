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
  $(document).on('click', '.close', function() {
    var currentVideoId = $(this).closest('.modal-header').siblings().find('iframe').attr('id');

    for (var i in players) {
      if (players[i].a.id === currentVideoId) {
        players[i].pauseVideo();
      }
    }
  });

  $(document).on('click', '.modal[role="dialog"]', function() {
    var currentVideoId = $(this).find('iframe').attr('id');

    for (var i in players) {
      if (players[i].a.id === currentVideoId) {
        players[i].pauseVideo();
      }
    }
  }).on('click', '.modal-dialog[role="document"]', function(e) {
    e.stopPropagation();
  });

  $(document).on('click', '.video-link', function(e) {
    var currentVideoId = $(this).attr('data-video');

    for (var i in players) {
      if (players[i].a.id === currentVideoId) {
        players[i].playVideo();
      }
    }
  });

  $(document).on('keyup', '.modal[role="dialog"]', function(e) {
    // if key pressed is not the escape key
    if (e.keyCode !== 27) {
      return
    }

    var currentVideoId = $(this).find('iframe').attr('id');

    for (var i in players) {
      if (players[i].a.id === currentVideoId) {
        players[i].pauseVideo();
      }
    }
  });
}
