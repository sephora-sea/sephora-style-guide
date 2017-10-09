// https://developers.google.com/youtube/iframe_api_reference

$(document).ready(function() {
  // Inject YouTube API script
  var tag = document.createElement('script');
  tag.src = "//www.youtube.com/player_api";
  var firstScriptTag = document.body.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
});

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
}
