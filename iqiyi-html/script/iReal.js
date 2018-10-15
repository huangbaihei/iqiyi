window.onbeforeunload = function() {
  document.documentElement.scrollTop = 0;  //ie下
  document.body.scrollTop = 0;  //非ie
};
$(function () {
    var showcase = $("#showcase");
    showcase.Cloud9Carousel({
        yOrigin: 42,
        yRadius: 48,
        autoPlay: 0,
        bringToFront: true,
        onLoaded: function () {
            showcase.css('visibility', 'visible');
            showcase.css('display', 'none');
            showcase.fadeIn(1500);
        }
    });
    // hove绑定click
    $('.black-btn').mouseover(function () {
        $('.black').click();
        fontBlack();
    });
    $('.red-btn').mouseover(function () {
        $('.red').click();
        fontRed();
    });
    $('.golden-btn').mouseover(function () {
        $('.golden').click();
        fontGolden();
    });
    // 小点点样式
    function fontBlack () {
        $('.choose-color .red-btn').css('opacity','0.5');
        $('.choose-color .golden-btn').css('opacity','0.5');
        $('.choose-color .black-btn').css('opacity','1');
    };
    function fontRed () {
        $('.choose-color .golden-btn').css('opacity','0.5');
        $('.choose-color .black-btn').css('opacity','0.5');
        $('.choose-color .red-btn').css('opacity','1');
    };
    function fontGolden () {
        $('.choose-color .red-btn').css('opacity','0.5');
        $('.choose-color .black-btn').css('opacity','0.5');
        $('.choose-color .golden-btn').css('opacity','1')
    };


    $('.black').click(function () {
        fontBlack();
    });
    $('.red').click(function () {
        fontRed();
    });
    $('.golden').click(function () {
        fontGolden();
    });

/*
    $('.type-btn').mouseover(
        function () {
            $(this).css('opacity', '1');
        },
        function () {
            $(this).css('opacity', '0.5');
        }
    );
*/

    // debounce处理resize高频率事件
    function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }
    function fn() {
        $(function () {
            showcase.Cloud9Carousel({
                yOrigin: 42,
                yRadius: 48,
                autoPlay: 0,
                bringToFront: true,
                onLoaded: function () {
                    showcase.css('visibility', 'visible');
                    showcase.css('display', 'none');
                    showcase.fadeIn(1500);
                }
            });
            //重置旋转样式属性
            fontBlack();
        });
    }
    // 添加resize的回调函数，但是只允许它每300毫秒执行一次
    window.addEventListener('resize', debounce(function (event) {
        fn();
    }, 300));

    //也可以写成
    // window.addEventListener('resize', debounce(fn(), 300));
});

