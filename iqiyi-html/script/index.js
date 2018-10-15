$(function () {
  window.onbeforeunload = function() {
    document.documentElement.scrollTop = 0;  //ie下
    document.body.scrollTop = 0;  //非ie
  };
    $('.index-footer-right').on('click', function () {
        // console.log(123);
        $('.video-wrap').show();
        $('.video-wrap').css({
            'z-index': '999',
            'background-color': 'rgba(25,25,25,0.6)'
        });
        $('.video-js').css({'transform': 'scale(1)'});
    });

    var options = {
        poster: "img/index/footer-right.jpg",
        controls : true,
        preload: "auto"
    };
    var myPlayer = videojs('my-video', options, function () {
        var myPlayer = this;
        myPlayer.play();
    });
    //预防api的样式污染
    $('.vjs-styles-defaults').remove();
    $('.vjs-styles-dimensions').remove();

});
