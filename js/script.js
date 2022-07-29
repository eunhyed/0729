$(document).ready(function () {
    //자동+버튼클릭 슬라이드
    /*const slide = setInterval(leftMove, 1800);
    const size = $(".imgslide a").width();
    //console.log(size);
    let i = 0;
    let j = 0;
    function leftMove(i) {
        //console.log("위치"+i);
        let z = 0;
        if (i == null) {
            z = $(".btnslide button.orange").index();
            z++;
            if (z == 3) { z = 0; }
            j = z;
        } else {
            j = i;
        }
        $(".imgslide").stop().animate({ left: size * (j * -1) }, 1500);
        $(".btnslide button").eq(j).addClass("orange").siblings().removeClass("orange");

    };

    $(".btnslide button").click(function () {
        i = $(this).index();
        leftMove(i);
    });


    /*미디어쿼리*/
    if ($(window).width() <= 768) {
        $("#ham").click(function () {
            if ( $("#ham i").hasClass("fa-align-right")==true ) {
                $(".navi").show().stop().animate({left:0}, 400,  function () {
                    $("#ham").html("<i class='fa-solid fa-xmark'></i>");
                });
            } else {
                    $(".navi").stop().animate({left:"100vw"}, 400, function(){
                        $("#ham").html("<i class='fa-solid fa-align-right'></i>");
                    });
            }
        });

        $(".navi a").click(function () {
            $(".navi").stop().slideUp();
            $(".navi").stop().animate({left:"100vw"}, 400, function(){
                $("#ham").html("<i class='fa-solid fa-align-right'></i>");
            });
        });


            /*미디어쿼리 서브메뉴 슬라이드 다운*/
            $('.submenu').hide();
            $('nav > ul> li> i').click(function(){
                $(this).parent().children('.submenu').stop().slideToggle();
            });

            $(".submenu li > a").click(function(){
                $(".submenu").slideUp();
            });
    }

    /*팝업*/
    $().ready(function () {
        $("#alertStart1, #alertStart2, #alertStart3, #alertStart4, #alertStart5, #alertStart6, #alertStart7, #alertStart8, #alertStart9, #alertStart10")
            .click(function () {
                Swal.fire({
                    icon: 'info',                         // Alert 타입
                    title: '회원가입 후 이용 가능합니다.',         // Alert 제목
                    // text: '',  // Alert 내용
                });
            });
    });

    /*top scroll*/
    $(function(){
        $(window).scroll(function(){
            if( $(this).scrollTop() > 400){
                $("#topbtn").fadeIn();
            }else{
                $("#topbtn").fadeOut();
            }
        });
    
        $("#topbtn").click(function(){
            $("html, body").animate({
                scrollTop : 0
            }, 400);
            return false;
        });
    });

    /*큰화면에서 서브메뉴 슬라이드다운*/
    if ($(window).width() > 768){
        $('.submenu').hide();
        $('nav > ul li').mouseover(function(){
            $('.submenu').slideDown();
        });

        $('.navi').mouseleave(function(){
            $('.submenu').slideUp();
        });
    }



});////////////////////