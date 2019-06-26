
//                 Галочки для анализа
var firstStop = document.getElementById('F1gst1');
percentage = '5%'; firstStop.setAttribute('offset',percentage);


$(".analysis-li").click(function(){
    $(this).toggleClass("check");
    if($(this).hasClass('check')){
        var arr = [];
        $.each(arr, function(){
            console.log(arr.length)  
        });
        }
});

