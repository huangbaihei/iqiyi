window.onbeforeunload = function() {
  document.documentElement.scrollTop = 0;  //ie下
  document.body.scrollTop = 0;  //非ie
};
$(function () {
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
//  ajax get
  $.ajax({
    type:"GET",
    url:"/a/evaluate/search/2",
    // data:1,
    dataType:"json",
    success:function(res){
      if(res.message === "success"){
        var arr = res.data.splice(0,4);
        for(var i = 0;i<arr.length;i++){
          // 时间戳转换
          function formatDate(now) {
            var year=now.getFullYear();
            var month=now.getMonth()+1;
            var date=now.getDate();
            return year+"-"+month+"-"+date;
          }

          $("#s-evalute").append(
            '<div class="width-50 inner-wrap">\n' +
            '                <div class="flex">\n' +
            '                    <div class="flex-left"><a href="' + arr[i].link+
            '">\n' +
            '                        <img src="' + arr[i].imgUrl+
            '" alt="">\n' +
            '                    </a></div>\n' +
            '                    <div class="flex-right">\n' +
            '                        <div class="flex-right-title">' +
            // '<span>#G2开箱#征贴活动</span>&emsp;' +
            '<span>' +arr[i].title +
            '</span></div>\n' +
            '                        <div class="flex-right-content word-length-limit">\n' +
            // '                            <span>\n' + arr[i].intro +
            '                            <span>\n' + arr[i].intro.slice(0,59) + '...'+
            '                        </span></div>\n' +
            '                        <div class="flex-right-footer"><sapn>' +arr[i].mediaName+
            '</sapn>&emsp;&emsp;<span>' +formatDate(new Date(arr[i].updateAt)) +
            '</span></div>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '            </div>'
          )
        }

      }else{

      }
    }
  });
});