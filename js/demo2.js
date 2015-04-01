/**
 * Demo 2
 *
 * Wiring up a custom controller to our video to
 * allow for playback, pause, mute, and unmute.
 */
(function() {

  // cache vars
  var cmn_video = document.getElementById("cmn-video-demo2__video"),
      cmn_playback = document.getElementById("cmn-video-demo2__controls--playback"),
      cmn_mute = document.getElementById("cmn-video-demo2__controls--mute");

  // listen for playback
  cmn_playback.addEventListener( "click", function(e) {
    e.preventDefault();
    if (cmn_video.paused) {
      cmn_video.play();
      cmn_playback.innerHTML = "Pause";
    } else {
      cmn_video.pause();
      cmn_playback.innerHTML = "Play";
    }
  } );

  // listen for mute/unmute
  cmn_mute.addEventListener( "click", function(e) {
    e.preventDefault();
    if (cmn_video.muted) {
      cmn_video.muted = false;
      cmn_mute.innerHTML = "Mute";
    } else {
      cmn_video.muted = true;
      cmn_mute.innerHTML = "Unmute";
    }
  } );

})();