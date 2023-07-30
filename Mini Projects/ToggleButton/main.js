let count = 0;

//function to on Toggle Button
function ToggleOn(){
    $("body").css("background-color","black");
    $("h1").css("color","white");
    $(".box").css("justify-content","flex-end");
}
function ToggleOff(){
    $("body").css("background-color","white");
    $("h1").css("color","black");
    $(".box").css("justify-content","flex-start");
}

$('.box').on("click",(function(){
    console.log(count);
    if(count === 0)
    {
        count = 1;
        ToggleOn();
    }
    else
    {
        count = 0;
        ToggleOff();
    }
}));
