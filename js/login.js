$(document).ready(function () {

    $(".ham").click(function(){
        $(".navi").stop().toggle("fast", function(){

        });
    });

        /*top scroll*/
        $(function(){
            $(window).scroll(function(){
                if( $(this).scrollTop() > 100){
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

});