

    document.onkeydown = function (e) {
        var ev = document.all ? window.event : e;
        if (ev.keyCode == 13 && $('.search-tab-content .active input').val().length > 0) {
            $('.search-tab-content .active i').click()
        }
    }
    Date.prototype.format = function (fmt) { //author: meizz
        var o = {
            "M+": this.getMonth() + 1,                 //月份
            "d+": this.getDate(),                    //日
            "h+": this.getHours(),                   //小时
            "m+": this.getMinutes(),                 //分
            "s+": this.getSeconds(),                 //秒
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
            "S": this.getMilliseconds()             //毫秒
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }

    function calcTime(date, offset) {
        // create Date object for current location
        //var d = new Date();
        // convert to msec
        // add local time zone offset
        // get UTC time in msec
        var utc = date.getTime() + (date.getTimezoneOffset() * 60000);
        // create new Date object for different city
        // using supplied offset
        //offset = (offset>0)?offset:offset--;
        var nd = new Date(utc + (3600000 * offset));
        // return time as a string
        return nd;
    }

    function refresh() {

        var date = new Date();
        $('#wordTime li').each(function () {
            var T = parseInt($(this).attr('sc')), P = $(this).attr('sct')
            if (P > 0) {
                $(this).find('a').html(calcTime(date, (0 - T + 8)).format('MM-dd hh:mm:ss'));
            } else {
                $(this).find('a').html(calcTime(date, T + 8).format('MM-dd hh:mm:ss'));
            }
        })
        clearInterval(intval)
        intval = window.setTimeout("refresh()", 1000);
    }

    function getWeek() {
        var today = new Date();
        var firstDay = new Date(today.getFullYear(), 0, 1);
        var dayOfWeek = firstDay.getDay();
        var spendDay = 1;
        if (dayOfWeek != 0) {
            spendDay = 7 - dayOfWeek + 1;
        }
        firstDay = new Date(today.getFullYear(), 0, 1 + spendDay);
        var d = Math.ceil((today.valueOf() - firstDay.valueOf()) / 86400000);
        var result = Math.ceil(d / 7);
        var week = result + 1;
        var EndTime = new Date("" + (parseInt(today.getFullYear()) + 1) + "");
        var cjdays = Math.floor((EndTime.getTime() - today.getTime()) / 1000 / 60 / 60 / 24);
        $('.djs_t').html('' + today.getFullYear() + ' 年第 <span>' + week + '</span> 周，距' + (today.getFullYear() + 1) + '年还有 <span>' + cjdays + '</span> 天')
    }

    $(function () {
        refresh()
        getWeek()
    });
    $('.website-list .new-item,.website-list .hot-item').click(function (e) {
        if (e && e.preventDefault) {
            //阻止默认浏览器动作(W3C)
            e.preventDefault();
        } else {
            //IE中阻止函数器默认动作的方式
            window.event.returnValue = false;
            return false;
        }
        if ($(this).find('a').attr('href') == 'javascript:;') {
            return false;
        }
        window.open($(this).find('a').attr('href'))

    })

    $('.fixedWidth').css('width', $('.indexbox').width()).show();
    $('.bottomFixedAd').on('click', function () {
        $('.fixedWidth').remove()
        if (linkid) {
            $.cookie('index_fixed_bottom_' + linkid, '1', '7200000');
        } else {
            $.cookie('index_fixed_bottom_', '1', '7200000');
        }

    })
    $('#bdbtns').on('click', function () {
        var k = $(this).parent().parent().find('input').val()
        var u = "https://www.baidu.com/s?ie=UTF-8&wd=" + k
        window.open(u)
    })
    $('#ggbtns').on('click', function () {
        var k = $(this).parent().parent().find('input').val()
        var u = "https://www.google.com/search?q=" + k
        window.open(u)
    })
    $('#mlbtns').on('click', function () {
        var k = $(this).parent().parent().find('input').val()
        var u = "https://shopee.com.my/search?keyword=" + k
        window.open(u)
    })
    $('#xjpbtns').on('click', function () {
        var k = $(this).parent().parent().find('input').val()
        var u = "https://shopee.sg/search?keyword=" + k
        window.open(u)
    })
    $('#ynbtns').on('click', function () {
        var k = $(this).parent().parent().find('input').val()
        var u = "https://shopee.co.id/search?keyword=" + k
        window.open(u)
    })
    $('#flbbtns').on('click', function () {
        var k = $(this).parent().parent().find('input').val()
        var u = "https://shopee.ph/search?keyword=" + k
        window.open(u)
    })
    $('#tbbtns').on('click', function () {
        var k = $(this).parent().parent().find('input').val()
        var u = "https://shopee.co.th/search?keyword=" + k
        window.open(u)
    })
    $('#twbtns').on('click', function () {
        var k = $(this).parent().parent().find('input').val()
        var u = "https://xiapi.xiapibuy.com/search?keyword=" + k
        window.open(u)
    })
    $('#yuebtns').on('click', function () {
        var k = $(this).parent().parent().find('input').val()
        var u = "https://shopee.vn/search?keyword=" + k
        window.open(u)
    })
    $('#bxbtns').on('click', function () {
        var k = $(this).parent().parent().find('input').val()
        var u = "https://shopee.com.br/search?keyword=" + k
        window.open(u)
    })
    $('.current-menu strong').on('click', function () {

        $('.current-menu .active').removeClass('active')

        var index = $(this).index();

        $(this).addClass('active')

        $('.endtabdiv').removeClass('active')

        $('#tab-' + index).addClass('active')

        arr = [];

        var p = $('.indexbox');

        if (p.length < 1) return;

        p.each(function () {

            var of = $(this).offset();

            arr.push(Math.floor(of.top));

        });


    })

    $('.search-list .li').on('click', function () {

        var index = $(this).index();

        $('.search-list .current').removeClass('current')

        $(this).addClass('current');

        $('.search-tab-content .active').removeClass('active')

        $('.search-tab-content .tab-pane').eq(index).addClass('active')

    })

    $('li[data-active="fid-0"]').addClass('active');


    $('#pfgg').css({left: $('.main-content').offset().left - 175}).show()

    var headerheight = $('#header .container').height();

    (function ($) {

        $('.css-tooltip-new').tipso();


        var s = $('.sidebars');

        if (s.length < 1) return;

        var c = s.children('.content-sidebar');

        if (c.length < 1) return;

        var $parent = s.parent();

        if ($parent.length < 1) return;

        var start = 0, stop = 0, cHeight = 0;


        function init() {


            var soffset = s.offset();

            start = soffset.top;

            stop = start + $parent.height();

            cinit();

        }


        function cinit() {

            cHeight = c.height();

        }


        function cClear() {

            c.removeClass('fixed');

            c.removeClass('absolute');

        }


        function check_scroll() {

            var st = window.pageYOffset

                || document.documentElement.scrollTop

                || document.body.scrollTop

                || 0;

            if (st <= start) {

                cClear();

            }


            if (st < stop - cHeight && st > (start + 30)) {

                c.removeClass('absolute');

                c.addClass('fixed');

            }

        }


        var dl = $('.content-sidebar dl');

        if (dl.length < 1) return;

        var $part = $('.indexbox');

        if ($part.length < 1) return;

        var arr = [];

        $part.each(function () {

            var title = $(this).find('.indexbox_title').find('strong').html()

            var id = $(this).attr('id');

            if (title && id) {

                arr.push({

                    title: title,

                    id: id

                });

            }

        });

        var html = '';

        html += '<dt><span class="show-list"></span></dt>';
        html += '<dd><a href="#goShopee" class="auto-scroll" data-offset="-20" data-speed=500>Shopee</a></dd>';
        html += '<dd><a href="#goLazada" class="auto-scroll" data-offset="-20" data-speed=500>Lazada</a></dd>';
        for (var i = 0; i < arr.length; i++) {

            html += '<dd><a href="#' + arr[i].id + '" class="auto-scroll" data-offset="-20" data-speed=500>' + arr[i].title + '</a></dd>';

        }

        dl.html(html);

        init();

        check_scroll();

        $(window).on('resize', init);

        $(window).on('scroll', check_scroll);

        window.onload = function () {

//            alert(1)

            init();

        };

    })(jQuery);


    (function ($) {

        var p = $('.indexbox');

        if (p.length < 1) return;

        arr = [];

        function part_offset_top() {

            p.each(function () {

                var of = $(this).offset();

                arr.push(Math.floor(of.top));

            });

        }


        function goto_current(index) {

            var a = $('#goto dd');

            var b = $('#goto dt');

            if (a.length < 1) return;

            var h = a.outerHeight();

            if (!a.eq(index).hasClass('current')) {

                a.removeClass('current');

                a.eq(index).addClass('current');

                b.animate({

                    'top': h * index + (a.outerHeight() - b.outerHeight()) / 2 + 1

                }, 50);

            }

        }


        function window_scroll() {

            var st = window.pageYOffset

                || document.documentElement.scrollTop

                || document.body.scrollTop

                || 0;


            nt = 0;

            var limit = Math.ceil(st + 20 - nt);

            var index = 0;

            for (var i = 0; i < arr.length; i++) {

                if (limit >= arr[i]) {

                    index = i;

                } else {

                    break;

                }

            }

            if (index < 0) index = 0;

            if (!p.eq(index).hasClass('current')) {

                p.removeClass('current');

                p.eq(index).addClass('current');

                goto_current(index);

            }

        }


        part_offset_top();

        setTimeout(window_scroll, 0);

        $(window).on('scroll', window_scroll);

    })(jQuery);


    $(function () {
        $('.tabcheck').click(function () {
            $(this).parent().find('.current').removeClass('current')
            $(this).parent().parent().find('.showdiv').hide();
            $(this).addClass('current')
            $('#catalog_' + $(this).attr('data-id')).show()
        })

        $('.cygjtabs').find('strong').on('click', function () {

            var index = $(this).index();

            $('.cygjtabs').find('.current').removeClass('current');

            $(this).addClass('current');

            if (index === 0) {

                $('#cygj').find('.categorytop').show();

                $('#cygj').find('.category').hide();

            } else {

                $('#cygj').find('.category').show();

                $('#cygj').find('.categorytop').hide();

            }

            arr = [];

            var p = $('.indexbox');

            if (p.length < 1) return;

            p.each(function () {

                var of = $(this).offset();

                arr.push(Math.floor(of.top));

            });


        })

        //锚点跳转滑动效果

        $('#goto').find('dd').find('a').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length && target;
                if (target.length) {
                    var targetOffset = target.offset().top;
                    console.log(target)
                    $('html,body').animate({
                            scrollTop: targetOffset - 15
                        },
                        500);
                    return false;
                }
            }
        });

    })

