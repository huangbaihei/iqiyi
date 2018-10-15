
var hiddenScreen = document.getElementsByClassName("screen-spread")[0];
var hiddenDesign = document.getElementsByClassName("screen-spread")[1];
var screenNext = document.getElementsByClassName("screen-next")[0];
var designNext = document.getElementsByClassName("screen-next")[1];
var openScreen = document.getElementById("knowScreen-open");
var openDesign = document.getElementById("knowDesign-open");
var closeScreen = document.getElementById("knowScreen-close");
var closeDesign = document.getElementById("knowDesign-close");
var z = document.getElementById("knowScreen-hidden");
var z1 = document.getElementById("knowDesign-hidden");


// window.onbeforeunload = function() {
//   document.documentElement.scrollTop = 0;  //ie下
//   document.body.scrollTop = 0;  //非ie
// };

$(function () {
  //滚回顶部
  //导航栏
  $('.current-page').show();
  $('.nav-title > li').mouseover(function () {
    $('.second-nav').hide();
    $(this).children('div').show();
  });
  $('.second-nav ul').mouseout(function () {
    $('.second-nav').hide();
    $('.current-page').show();
  });
  $('.no-sec').mouseout(function () {
    $('.second-nav').hide();
    $('.current-page').show();
  });

  //请求数据
  $.ajax({
    type: "GET",
    url: "/a/evaluate/search/3",
    // data:1,
    dataType: "json",
    success: function (res) {
      if (res.message === "success") {
        var arr = res.data.splice(0, 8);
        for (var i = 0; i < arr.length; i++) {
          // 时间戳转换
          function formatDate(now) {
            var year = now.getFullYear();
            var month = now.getMonth() + 1;
            var date = now.getDate();
            return year + "-" + month + "-" + date;
          }

          $("#s-evalute").append(
            '<div class="width-50 inner-wrap">\n' +
            '                <div class="flex">\n' +
            '                    <div class="flex-left"><a href="' + arr[i].link +
            '">\n' +
            '                        <img src="' + arr[i].imgUrl +
            '" alt="">\n' +
            '                    </a></div>\n' +
            '                    <div class="flex-right">\n' +
            '                        <div class="flex-right-title">' +
            // '<span>#G2开箱#征贴活动</span>&emsp;' +
            '<span>' + arr[i].title +
            '</span></div>\n' +
            '                        <div class="flex-right-content word-length-limit">\n' +
            // '                            <span>\n' + arr[i].intro +
            '                            <span>\n' + arr[i].intro.slice(0, 59) + '...' +
            '                        </span></div>\n' +
            '                        <div class="flex-right-footer"><sapn>' + arr[i].mediaName +
            '</sapn>&emsp;&emsp;<span>' + formatDate(new Date(arr[i].updateAt)) +
            '</span></div>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '            </div>'
          )
        }

      } else {

      }
    }
  });

  // 展开按钮
  openScreen.onclick = function () {
    hiddenScreen.style.cssText = "display:block;animation:mymove 0.5s infinite;animation-iteration-count:1;animation-fill-mode:forwards;";
    screenNext.style.cssText = "animation:none;";
    openScreen.style.cssText = "animation:none;";
  };

  // 关闭按钮
  closeScreen.onclick = function () {
    hiddenScreen.style.cssText = "display:none;";
    screenNext.style.cssText = "animation:mymoves 0.5s infinite;animation-iteration-count:1;animation-fill-mode:forwards;";
    openScreen.style.cssText = "animation:click 1s infinite;animation-iteration-count:1;animation-fill-mode:forwards;";
  };
// 展开按钮
 openDesign.onclick = function () {
    hiddenDesign.style.cssText = "display:block;animation:mymove 0.5s infinite;animation-iteration-count:1;animation-fill-mode:forwards;";
    designNext.style.cssText = "animation:none;";
    openDesign.style.cssText = "animation:none;";
  };
// 关闭按钮
  closeDesign.onclick = function () {
    hiddenDesign.style.cssText = "display:none;";
    designNext.style.cssText = "animation:mymoves 0.5s infinite;animation-iteration-count:1;animation-fill-mode:forwards;";
    openDesign.style.cssText = "animation:click 1s infinite;animation-iteration-count:1;animation-fill-mode:forwards;";
  };

// 监测按钮到父级顶部的位置

  $(window).scroll(function () {
    var h = window.innerHeight;//当前视口高度
    if ((closeScreen.getBoundingClientRect().top) < (z.getBoundingClientRect().top)) {
      $('#knowScreen-close').addClass("stick-top");
    }
    else if ((closeScreen.getBoundingClientRect().bottom) < h) {
      $('#knowScreen-close').removeClass("stick-top");
    }
  });
// 监测按钮到父级底部部的位置
  $(window).scroll(function () {
    var h = window.innerHeight;//当前视口高度
    if ((closeScreen.getBoundingClientRect().bottom) > (z.getBoundingClientRect().bottom)) {
      $('#knowScreen-close').addClass("stick-bottom");
    }
    else if ((closeScreen.getBoundingClientRect().bottom) > h) {
      $('#knowScreen-close').removeClass("stick-bottom");
    }
  });

// 监测按钮到父级顶部的位置
  $(window).scroll(function () {
    var h = window.innerHeight;//当前视口高度
    if ((closeDesign.getBoundingClientRect().top) < (z1.getBoundingClientRect().top)) {
      console.log($('#knowScreen-close'));
      $('#knowDesign-close').addClass("stick-top");
    }
    else if ((closeDesign.getBoundingClientRect().bottom) < h) {
      $('#knowDesign-close').removeClass("stick-top");
    }
  });

// 监测按钮到父级底部的位置
  $(window).scroll(function () {
    var h = window.innerHeight;//当前视口高度
    if ((closeDesign.getBoundingClientRect().bottom) > (z1.getBoundingClientRect().bottom)) {
      $('#knowDesign-close').addClass("stick-bottom");
    }
    else if ((closeDesign.getBoundingClientRect().bottom) > h) {
      $('#knowDesign-close').removeClass("stick-bottom");
    }
  });


  var v = document.getElementById('video');
  var c = document.getElementById('myCanvas');
  var ctx = c.getContext('2d');
  var i, canvasheight, windowheight, divide, divided, key, divid;

  function getele(ele) {
    var divtop = $(ele).offset().top - $(window).scrollTop();
    return divtop;
  }

  //视频参数
  var width = $(window).get(0).innerWidth;
  var height = 0.6125 * $(window).get(0).innerWidth;
  var key = 0;

  //背景变暗判断条件
  function baseLine(ele, nextele) {
    var nextHeight = nextele.offset().top - $(window).scrollTop();
    var height = $(window).height();
    if (  nextHeight < height * 0.3 && nextHeight > 0) {
      ele.css({"opacity":"0.6","transition":"opacity 1s"});
    }else {
      ele.css("opacity", "1");
    }
  }

  var mlength = $(".bg").children().length;
  var nlength = $(".newbg").children().length;
  window.onscroll = function (ev) {
    //背景变暗处理
    var ele, elenext, newele, newelenext;

    for (var m = 2; m < mlength - 1; m++) {
      var j = m;
      ele = $(".bg>div").eq(j);
      elenext = $(".bg>div").eq(j + 1);
      baseLine(ele, elenext);
    }
    for (var n = 0; n < nlength - 1; n++) {
      var q = n;
      newele = $(".newbg>div").eq(q);
      newelenext = $(".newbg>div").eq(q + 1);
      baseLine(newele, newelenext);
    }

    //视频转ogg格式
    canvasheight = getele("#myCanvas");
    divid = getele("#divid");
    divide = getele("#divide");
    divided = getele("#divided");

    function playfn() {
      i = window.setInterval(function () {
        ctx.drawImage(v, 0, 0, width, height);
      }, 33);  // 每0.02秒画一张图片
    };
    windowheight = $(window).height();
    var width = $(window).get(0).innerWidth;
    var height = 0.6125 * $(window).get(0).innerWidth;
    var canvasnext = getele('#knowDesign');
    var canvasFa = getele('#rotate-video');
    // key = false;
    if (divide < windowheight * 0.45 && divide > windowheight * 0.43 && key == 0) {
      $(".canvasimg").css("opacity", "0");
      v.play();
      v.addEventListener('play', playfn, false);
      v.addEventListener('ended', function () {
        window.clearInterval(i);
        v.removeEventListener("play", playfn, false);
      }, false);
      key = 1;
    } else if (canvasFa > windowheight || canvasnext < 0) {
      key = 0;
    }

//  局域网
    if (divided < windowheight * 0.52 && divided > windowheight * 0.48) {
      $(".maxhuan").addClass("maxhuan-am");
      $(".leftvr").addClass("leftvr-am");
      $(".rightvr").addClass("rightvr-am");
      $(".huan2").addClass("huan2-am");
      $(".huan3").addClass("huan3-am");
      // } else if($('#out').offset().top <= $(window).scrollTop() ||   $('.box').offset().top > $(window).scrollTop() + $(window).height()){
    } else if ($('#out1').offset().top <= $(window).scrollTop() || $('#localweb').offset().top > $(window).scrollTop() + $(window).height()) {
      $(".maxhuan").removeClass("maxhuan-am");
      $(".leftvr").removeClass("leftvr-am");
      $(".rightvr").removeClass("rightvr-am");
      $(".huan2").removeClass("huan2-am");
      $(".huan3").removeClass("huan3-am");
    }
//  手机投屏
    if (divid < windowheight * 0.48 && divid > windowheight * 0.44) {
      $(".cellphone-greenBg").addClass("cellphone-show");
    } else if ($('#cellphone-next').offset().top <= $(window).scrollTop() || $('#cellPhone').offset().top > $(window).scrollTop() + $(window).height()) {
      $(".cellphone-greenBg").removeClass("cellphone-show");
    };
  };

  $(window).resize(resizeCanvas);
  function resizeCanvas() {
    $(".canvasimg").css("opacity", "1");
    $("canvas").attr("width", $(window).get(0).innerWidth);
    $("canvas").attr("height", 0.6125 * $(window).get(0).innerWidth);
  };
  resizeCanvas();

});