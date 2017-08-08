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

function onPlayerReady(event) {
  // bind events
  $('.close').on('click', function() {
    var currentVideoId = $(this).closest('.modal-header').siblings().find('iframe').attr('id');

    for (var i in players) {
      if (players[i].a.id === currentVideoId) {
        players[i].pauseVideo();
      }
    }
  });

  $('.modal[role="dialog"]').on('click', function(e) {
    var currentVideoId = $(this).find('iframe').attr('id');

    for (var i in players) {
      if (players[i].a.id === currentVideoId) {
        players[i].pauseVideo();
      }
    }
  }).on('click', '.modal-dialog[role="document"]', function(e) {
    e.stopPropagation();
  });

  $('.video-link').on('click', function() {
    var currentVideoId = $(this).attr('href').replace(/#|-/g, '');

    for (var i in players) {
      if (players[i].a.id.toLowerCase() === currentVideoId) {
        players[i].playVideo();
      }
    }
  });
}
