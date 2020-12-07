import React from 'react'
import jQuery from "jquery";

export default function Jquery() {
    const $ = (window.$ = window.jQuery = jQuery);
    
        // 누르기
        $(".Profile01>a, .Profile02>a").click(function(){
            $(this).next(".down").stop().slideToggle(500);
            $(this).find("span.up").toggleClass("on");
        });


    // 시계만들기
    var timer = setInterval(function(){
        var today = new Date(); //현재시간날짜

        var nowHour = today.getHours();
        var nowMin = today.getMinutes();

        //시간, 분 두자리로 만들기
        if(nowHour<10){
            nowHour = "0" + nowHour;
        }
        if(nowMin<10){
            nowMin = "0" + nowMin;
        }

        $(".header_1 > span").eq(0).text(nowHour);
        $(".header_1 > span").eq(1).text(nowMin);
    },1000);

    
    return (
        <div></div>
    )
}