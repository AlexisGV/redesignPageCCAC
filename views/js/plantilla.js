$(document).on("click", ".header__btnMenu", function(){
    $(this).parent().parent().parent().children("nav").slideToggle("slow");
});