// https://developers.google.com/youtube/iframe_api_reference
// global variable for the players
var players = [];

// this function gets called when API is ready to use
function onYouTubeIframeAPIReady() {
  $('.modal-video').children('iframe').each(function() {
    const id = $(this).attr('id')
  
    const player = new YT.Player(id, {
      events: {
        'onReady': onPlayerReady
      }
    });

    players.push({
      id,
      player
    });
  })
}

function onPlayerReady() {
  // bind events
  $(document).on('click', '.js-video-link', function() {
    const currentVideoId = $(this).attr('data-video');

    players.find(player => player.id === currentVideoId)?.player?.playVideo()
  });

  $('.js-video-modal').on('hide.bs.modal', function() {
    const currentVideoId = $(this).find('iframe').attr('id');

    players.find(player => player.id === currentVideoId)?.player?.pauseVideo()
  });
}
