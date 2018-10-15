window.onbeforeunload = function() {
  document.documentElement.scrollTop = 0;  //ie下
  document.body.scrollTop = 0;  //非ie
};
$(function () {
  function judgeStatus (ele) {
    return  ele.status === 2;
  }
  function deepClone(data){
    var obj=[];
    for(var i = 0, len = data.length; i < len; i++){
      var clone = $.extend(true, {}, data[i]);
      obj.push(clone);
    }
    return obj;
  }
    // 轮播
    $.ajax({
        type: "GET",
        url: "/a/banner/search/2",
        dataType: "json",
        success: function (res) {
            if (res.code === 0) {
                 var bannerData = res.data.filter(judgeStatus);
                var arr = bannerData.slice(0, 12);
                for (var i = 0; i < arr.length; i++) {
                    $(".carousel-inner").append(
                        '<img src="' + arr[i].imgUrl + '" class="item">'
                    );
                    $(".carousel-indicators").append(
                        '<li data-target="#myCarousel" data-slide-to="' + i + '"></li>'
                    );
                }
                $(".carousel-inner img").eq(0).addClass("active");
                $(".carousel-indicators li").eq(0).addClass("active");
            } else {

            }
        }
    });
    // 平台
    $.ajax({
        type: "GET",
        url: "/a/app/search/2",
        dataType: "json",
        success: function (res) {
            if (res.code === 0) {
              var  copyarr = deepClone(res.data);
              var newarr =   res.data.filter(judgeStatus);
              var newarrs =  copyarr.filter(judgeStatus);
                var firstRow = newarr.splice(0, 4);
                var secondRow = newarrs.splice(4, 4);
                for (var j = 0; j < firstRow.length; j++) {
                    $('.first-row').append(
                        '<div class="matrix">\n' +
                        '                <div class="hover-disappear">\n' +
                        '                    <img src="' + firstRow[j].previewImg + '" class="matrix-img">\n' +
                        '                    <div class="matrix-text">' + firstRow[j].title + '</div>\n' +
                        '                </div>\n' +
                        '                <div class="hover-appear">\n' +
                        '                    <img src="' + firstRow[j].detailImg + '" class="hover-img">\n' +
                        '                    <div class="hover-text">\n' +
                        '                        <div class="title">' + firstRow[j].title + '</div>\n' +
                        '                        <div class="description">\n' + firstRow[j].intro +
                        '                        </div>\n' +
                        '                    </div>\n' +
                        '                </div>\n' +
                        '            </div>'
                    )
                }
                for (var k = 0; k < secondRow.length; k++) {
                    $('.sec-row').append(
                        '<div class="matrix">\n' +
                        '                <div class="hover-disappear">\n' +
                        '                    <img src="' + secondRow[k].previewImg + '" class="matrix-img">\n' +
                        '                    <div class="matrix-text">' + secondRow[k].title + '</div>\n' +
                        '                </div>\n' +
                        '                <div class="hover-appear">\n' +
                        '                    <img src="' + secondRow[k].detailImg + '" class="hover-img">\n' +
                        '                    <div class="hover-text">\n' +
                        '                        <div class="title">' + secondRow[k].title + '</div>\n' +
                        '                        <div class="description">\n' + secondRow[k].intro +
                        '                        </div>\n' +
                        '                    </div>\n' +
                        '                </div>\n' +
                        '            </div>'
                    )
                }

                // 左右移动特效
                $('.matrix').hover(function () {
                    $(this).prevAll(this).addClass('move-left');
                }, function () {
                    $(this).prevAll(this).removeClass('move-left');
                });

                $('.matrix').hover(function () {
                    $(this).nextAll(this).addClass('move-right');
                }, function () {
                    $(this).nextAll(this).removeClass('move-right');
                });

            } else {
                alert('数据错误。请刷新页面');
            }
        }
    });
    // 应用
    $.ajax({
        type: "GET",
        url: "/a/app/search/1",
        dataType: "json",
        success: function (res) {
          var nextarr =  res.data.filter(judgeStatus);
            if (res.code === 0) {
                var moreApp = nextarr.splice(0, 4);
                for (var k = 0; k < moreApp.length; k++) {
                    $('.app-content').append(
                        '<div class="app-message">\n' +
                        '                <div class="hover-disappear">\n' +
                        '                    <img src="' + moreApp[k].previewImg + '" alt="" class="message-img">\n' +
                        '                    <div class="app-text">' + moreApp[k].title + '</div>\n' +
                        '                </div>\n' +
                        '                <div class="app-detail">\n' +
                        '                    <img src="' + moreApp[k].detailImg + '" alt="" class="trigger-img">\n' +
                        '                    <div class="trigger-text">\n' +
                        '                        <div class="app-title">' + moreApp[k].title + '</div>\n' +
                        '                        <div class="app-description">\n' + moreApp[k].intro +
                        '                        </div>\n' +
                        '                    </div>\n' +
                        '                </div>\n' +
                        '            </div>'
                    );
                }

                $('.app-message').hover(function () {
                    $(this).prevAll(this).addClass('move-left');
                }, function () {
                    $(this).prevAll(this).removeClass('move-left');
                });

                $('.app-message').hover(function () {
                    $(this).nextAll(this).addClass('move-right');
                }, function () {
                    $(this).nextAll(this).removeClass('move-right');
                });


            } else {
                alert('数据错误。请刷新页面');
            }
        }
    });
    // 导航栏
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
    })


});

