$(".portrait").on("mouseover", function () {
    $(".portrait").animate({
        zoom: '105%',
      }, 300 );
})
$(".portrait").on("mouseleave", function () {
    $(".portrait").animate({
        zoom: '100%',
      }, 300 );
})