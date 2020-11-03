function openNav() { //quando o botão é clicado
    document.getElementById("mySidenav").style.width = "15%";
    document.getElementById("main").style.opacity = "0.2";
}
function closeNav() { 
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.opacity = "1";

}
document.addEventListener("click", function(){ 
    if ($("#mySidenav").innerWidth() == 0){
    }else{
         closeNav();
    }
});

$(document).ready(function () {
    $(".main-slider").slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $(".info-text").click(function(event){
        event.preventDefault();
        $(this).toggleClass('opened');
      $(this).next('.info-content').slideToggle("fast");
    });
});