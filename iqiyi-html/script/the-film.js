
window.onbeforeunload = function() {
  document.documentElement.scrollTop = 0;  //ie下
  document.body.scrollTop = 0;  //非ie
};
$(document).ready(function() {
  //筛选上架
  function judgeStatus (ele) {
    return  ele.status === 2;
  }
  //banner
  $.ajax({
      type:"GET",
      url:"/a/banner/search/1",
      dataType:"json",
      success:function(res){
        if(res.message === "success"){
           var bannerData = res.data.filter(judgeStatus);
            var arr = bannerData.splice(0,12);
            for ( var i = 0;i<arr.length;i++) {
                $(".carousel-inner").append(
                  '<img src="'+ arr[i].imgUrl +'" class="item">'
                );
                $(".carousel-indicators").append(
                '<li data-target="#myCarousel" data-slide-to="'+i+'"></li>'
                );
            }
            $(".carousel-inner img").eq(0).addClass("active");
            $(".carousel-indicators li:eq(0)").addClass("active");
        }else{

        }
      }
    });


//线上影城1
  $.ajax({
    type:"GET",
    url:"/a/movie/search/1",
    dataType:"json",
    success:function(res){
      if(res.message === "success"){
        var filmOne = res.data.filter(judgeStatus);
        filmOne = filmOne.slice(0,6);
        for(var i =0;i<filmOne.length;i++) {
          $(".film-one").append(
            ' <div class="film-item">\n' +
            '                <div class="film-show">\n' +
            '                    <div class="film-item-preview">\n' +
            '                        <img src="' + filmOne[i].previewImg +
            '" alt="">\n' +
            '                    </div>\n' +
            '                    <div class="film-item-detail">\n' +
            '                        <div class="film-item-detailtext">\n' +
            '                            <div class="movie-title">' +filmOne[i].title +
            '</div>\n' +
            '                        <div class="file-item-detailscore">' + filmOne[i].grading/10 +
            '</div>\n' +
            '                            <div class="movie-content">' + filmOne[i].intro+
            '</div>\n' +
            '                        </div>\n' +

            '                    </div>\n' +
            '                </div>\n' +
            '                <div class="film-hidden">\n' +
            '                   <div class="film-item-preview">\n' +
            '                       <img src="' + filmOne[i].detailImg +
            '" alt="">\n' +
            '                   </div>\n' +
            '                   <div class="film-item-detail mt-2">\n' +
            // '                       <div class="film-item-detailtext">\n' +
            '                           <div class="movie-title">' +filmOne[i].title+
            '</div>\n' +
            // '                       </div>\n' +
            '                       <div class="file-item-detailscore">' +filmOne[i].grading/10+
            '</div>\n' +
            '                   </div>\n' +
            '                     <div class="film-item-content">\n' +
            '                        <div class="content-title">类型：' +filmOne[i].reduction+
            '</div>\n' +
            '                        <div class="content-intro">简介：' + filmOne[i].intro+
            '</div>\n' +
            '                    </div>\n' +
            '               </div>\n' +
            '            </div>'
          )
        }
        $(".film-one>div").eq(0).addClass("no-ml");
      }else{

      }
    }
  });

  // /线上影城2
  $.ajax({
    type:"GET",
    url:"/a/movie/search/2",
    dataType:"json",
    success:function(res){
      if(res.message === "success"){
        var filmTwo = res.data.filter(judgeStatus);
       filmTwo= filmTwo.slice(0,6);
        for(var i =0;i<filmTwo.length;i++) {
          $(".film-two").append(
            ' <div class="film-item">\n' +
            '                <div class="film-show">\n' +
            '                    <div class="film-item-preview">\n' +
            '                        <img src="' + filmTwo[i].previewImg +
            '" alt="">\n' +
            '                    </div>\n' +
            '                    <div class="film-item-detail">\n' +
            '                        <div class="film-item-detailtext">\n' +
            '                            <div class="movie-title">' +filmTwo[i].title +
            '</div>\n' +
            '                        <div class="file-item-detailscore">' +filmTwo[i].grading/10 +
            '</div>\n' +
            '                            <div class="movie-content">' + filmTwo[i].intro+
            '</div>\n' +
            '                        </div>\n' +

            '                    </div>\n' +
            '                </div>\n' +
            '                <div class="film-hidden">\n' +
            '                   <div class="film-item-preview">\n' +
            '                       <img src="' + filmTwo[i].detailImg +
            '" alt="">\n' +
            '                   </div>\n' +
            '                   <div class="film-item-detail mt-2">\n' +
            '                           <div class="movie-title">' +filmTwo[i].title+
            '</div>\n' +
            '                       <div class="file-item-detailscore">' +filmTwo[i].grading/10+
            '</div>\n' +
            '                   </div>\n' +
            '                     <div class="film-item-content">\n' +
            '                        <div class="content-title">类型：' +filmTwo[i].reduction+
            '</div>\n' +
            '                        <div class="content-intro">简介：' + filmTwo[i].intro+
            '</div>\n' +
            '                    </div>\n' +
            '               </div>\n' +
            '            </div>'

          )
        }
        $(".film-two>div").eq(0).addClass("no-ml");
      }else{

      }
    }
  });


  // /线上影城3
  $.ajax({
    type:"GET",
    url:"/a/movie/search/3",
    dataType:"json",
    success:function(res){
      if(res.message === "success"){
        var filmThree = res.data.filter(judgeStatus);
        filmThree = filmThree.slice(0,6);
        for(var i =0;i<filmThree.length;i++) {
          $(".film-three").append(
            ' <div class="film-item">\n' +
            '                <div class="film-show">\n' +
            '                    <div class="film-item-preview">\n' +
            '                        <img src="' + filmThree[i].previewImg +
            '" alt="">\n' +
            '                    </div>\n' +
            '                    <div class="film-item-detail">\n' +
            '                        <div class="film-item-detailtext">\n' +
            '                            <div class="movie-title">' +filmThree[i].title +
            '</div>\n' +
            '                        <div class="file-item-detailscore">' + filmThree[i].grading/10 +
            '</div>\n' +
            '                            <div class="movie-content">' + filmThree[i].intro+
            '</div>\n' +
            '                        </div>\n' +

            '                    </div>\n' +
            '                </div>\n' +
            '                <div class="film-hidden">\n' +
            '                   <div class="film-item-preview">\n' +
            '                       <img src="' + filmThree[i].detailImg +
            '" alt="">\n' +
            '                   </div>\n' +
            '                   <div class="film-item-detail mt-2">\n' +
            // '                       <div class="film-item-detailtext">\n' +
            '                           <div class="movie-title">' +filmThree[i].title+
            '</div>\n' +
            // '                       </div>\n' +
            '                       <div class="file-item-detailscore">' +filmThree[i].grading/10+
            '</div>\n' +
            '                   </div>\n' +
            '                     <div class="film-item-content">\n' +
            '                        <div class="content-title">类型：' +filmThree[i].reduction+
            '</div>\n' +
            '                        <div class="content-intro">简介：' + filmThree[i].intro+
            '</div>\n' +
            '                    </div>\n' +
            '               </div>\n' +
            '            </div>'

          )
        }
        $(".film-three>div").eq(0).addClass("no-ml");
      }else{
      }
      // 左右移动特效
      $('.film-item').hover(function () {
        $(this).prevAll(this).addClass('move-left');
      }, function () {
        $(this).prevAll(this).removeClass('move-left');
      });

      $('.film-item').hover(function () {
        $(this).nextAll(this).addClass('move-right');
      }, function () {
        $(this).nextAll(this).removeClass('move-right');
      });
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
    });


});
