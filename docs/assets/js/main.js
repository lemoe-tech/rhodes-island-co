(function() {
  "use strict";
  //全屏
  $(".background").click(function() {
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
  });

  //资源文件
  let assets = [
    "audio/title_intro.mp3",
    "audio/title_loop.mp3",
    "image/title-rhodes-island.png",
    "image/title-ori.png"
  ];
  let assets_len = assets.length;
  let i = 1;
  assets.forEach(function(item) {
    $.ajax({
      url: "assets/" + item,
      async: true,
      success: function() {
        if (i++ === assets_len) {
          console.log("Done!");
          var audio = document.getElementById("bgm");
          audio.src = "assets/audio/title_intro.mp3";
          audio.play();
          $("audio").bind("ended", function() {
            audio.src = "assets/audio/title_loop.mp3";
            audio.play();
            $("#bgm").attr("loop", "");
            $("audio").unbind();
          });
          setTimeout(function() {
            setTimeout(function() {
              $(".background").fadeOut();
            }, 1000);
            $("#loading").fadeOut();
          }, 2500);
          setTimeout(function() {
            $(".background").css(
              "background",
              'url("assets/image/title-ori.png")  center center no-repeat'
            );
            $(".background").css("background-size", "100%");
            $(".background").fadeIn();
          }, 5000);
        }
      }
    });
  });

  var detectOrient = function() {
    var width = document.documentElement.clientWidth,
      height = document.documentElement.clientHeight,
      $wrapper = document.getElementById("content"),
      style = "";
    if (width >= height) {
      style += "width:" + width + "px;";
      style += "height:" + height + "px;";
      style += "-webkit-transform: rotate(0); transform: rotate(0);";
      style += "-webkit-transform-origin: 0 0;";
      style += "transform-origin: 0 0;";
    } else {
      style += "width:" + height + "px;";
      style += "height:" + width + "px;";
      style += "-webkit-transform: rotate(90deg); transform: rotate(90deg);";
      style +=
        "-webkit-transform-origin: " + width / 2 + "px " + width / 2 + "px;";
      style += "transform-origin: " + width / 2 + "px " + width / 2 + "px;";
    }
    $wrapper.style.cssText = style;
  };
  window.onresize = detectOrient;
  detectOrient();
})();
