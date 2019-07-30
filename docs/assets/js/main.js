(function() {
  "use strict";
  //全屏
  if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
  } else if (!/(Android)/i.test(navigator.userAgent)) {
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
  }

  //资源文件
  let assets = [
    "audio/title_intro.mp3",
    "audio/title_loop.mp3",
    "image/title-rhodes-island.png",
    "image/title-ori.png",
    "image/worldtip1.png",
    "image/worldtip2.png",
    "image/worldtip3.png",
    "image/worldtip5.png"
  ];
  //介绍
  let world_tip = [];
  world_tip["矿石病"] =
    "目前发现长期接触源右及其工业衍生品，会使人更容易得二种被称、“矿石病”的不治之症。患上矿石病的人被称为“感染者”。矿石病会以一种危险的形式增强人的法术使用能力，但是却会在患者使用法术的过程中不断扩大感石疒石病染范围最终夺走感染者的生命并以其作为新的感染源。有关该病症经有多方面的长期研究，然而并没有太多有效成果。";
  world_tip["原石"] =
    "泰拉世界普遍存在的一种矿物，大部分呈黑色半透光晶体。源石都蕴藏着巨大的能里，是引发天灾的首要因素。通 常被运用于法术领域，是制造各种施术工具和法术道具的基本材料和催化物，离开了源石辅助，法术的使用效率会大幅下降。现在，随着源石引擎技术的革新，越来越多的源石被各个国家作为能源使用。";
  world_tip["移动城市"] =
    "建造在可移动设备上的城市。破坏力巨大且频发的天灾，迫使几乎所有国家定期采用迁移城市的方式进行躲避。源石引擎的发明使得源石工业化得以实现，人们开始尝试建造远大于之前规模的载具。载具的尺寸规模今非昔比，最终形成了移动城邦的概念。配合多途径天灾预测系统，根据灾害的不同，城市通常需要留出28周时间来保证安全撤离出灾害范围。";
  world_tip["天灾"] =
    "在泰拉世界频繁发生的各种自然灾害的统称。包含且不限于暴风、雪灾、强降雨、洪水等甚至陨石坠落。天灾的发生频率非常高，规律也难以捉摸，导致大部分的文明通过全城市迁徙来躲避天灾。天灾过后往往会留下一种叫做源石的矿物。研究表明，天灾其实反而可能是源石的一种传播媒介。";
  world_tip["罗德岛"] =
    "罗德岛制药公司是一家注册医药研发公司。罗德岛在公开的资料中声称正在研究可以应用于各个国家、组织或个人遭遇的感染者问题的医疗方案,因此在各国范围内广招贤士，不管资历，无论感染。同时，罗德岛也为其雇员提供良好的医疗与生活条件以及最先进的研究设备，这吸引了许多走投无路的感染者和立志改变感染者处境的有能人士。";

  let assets_len = assets.length;
  let i = 1;
  assets.forEach(function(item) {
    $.ajax({
      url: "assets/" + item,
      async: true,
      success: function() {
        //资源加载完毕
        if (i++ === assets_len) {
          console.log("Done!");
          $("#bgm-intro").bind("ended", function() {
            $("#bgm-loop")[0].play();
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

  //强制横屏
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
