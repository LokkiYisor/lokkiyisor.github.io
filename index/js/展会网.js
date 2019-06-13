var bannerSec = document.querySelectorAll('.p_01');
var secP = document.querySelectorAll('.p_01>p')
var secUl = document.querySelectorAll('.p_links')

bannerSec.forEach(function (item, index) {
    item.index = index;
    var ind = index;
    item.onmouseenter = function (e) {
        secUl[ind].style.display = 'block';
        e.target.style.background = '#ff6700'
        e.target.style.cursor = 'pointer'
    }
    item.onmouseleave = function (e) {
        secUl[ind].style.display = 'none';
        e.target.style.background = ''
        e.target.style.cursor = ''
    }

})


var plis = document.querySelector('.p_nrong2_ul');
var p_lis = document.querySelectorAll('.p_nrong2_ul>li')
var btns = document.getElementsByClassName("p_nrong2_ul2")[0].children
var imgs = document.getElementsByClassName("p_nrong2_ul")[0].children

    ; (function () {
        var x = 0;
        function next() {
            timer = setInterval(function () {
                $(".p_nrong2_ul .p_nrong2_ul2 li").eq(x).removeClass("p_acction")
                x++;
                if (x == 4) {
                    x = 0;
                    $(".p_nrong2_ul").css({ marginLeft: 0 });
                }
                $(".p_nrong2_ul").animate({ marginLeft: -728 * x }, 500)
                $(".p_nrong2_ul .p_nrong2_ul2 li").eq(x).addClass("p_acction")
            }, 5000);
        }
        next();
        $(".p_nrong2_ul .p_nrong2_ul2 li").click(function(){
            $(".p_nrong2_ul .p_nrong2_ul2 li").eq(x).removeClass("p_acction")

            x=$(this).index()

            $(".p_nrong2_ul .p_nrong2_ul2 li").eq(x).addClass("p_acction")
            $(".p_nrong2_ul").animate({ marginLeft: -728 * x }, 500)
        })

    })()
