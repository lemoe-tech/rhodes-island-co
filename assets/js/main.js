(function() {
  "use strict";
  //全屏
  if (
    !document.fullscreenElement &&
    !document.mozFullScreenElement &&
    !document.webkitFullscreenElement
  ) {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(
        Element.ALLOW_KEYBOARD_INPUT
      );
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }
  //资源文件
  let assets = [
    "audio/title_intro.mp3",
    "audio/title_loop.mp3",
    "image/title-logo.png",
    "image/title-rhodes-island.png",
    "image/title-ori.png"
  ];
  let assets_len = assets.length;
  let i = 1;
  assets.forEach(function(item) {
    $.ajax({
      url: "/assets/" + item,
      async: true,
      success: function() {
        if (i++ === assets_len) {
          console.log("Done!");
        }
      }
    });
  });
})();
