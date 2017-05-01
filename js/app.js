$(document).ready(function() {
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
    $('.myImg').click(function() {
        $('#myModal').css("display", "block");
        $('#modelImage').prop("src", "images/modal.jpg");
    });
    var span = document.getElementsByClassName("close")[0];
    $('.close').click(function() {
        $('#myModal').css("display", "none");
    });
});