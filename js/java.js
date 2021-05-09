// When the user scrolls the page, execute myFunction
window.onload = function () {
    window.scrollTo(0, 1);
};

$(window).scroll(function () {
    var scrolledFromTop = $(window).scrollTop() + $(window).height();
    $(".appear").each(function () {
        var distanceFromTop = $(this).offset().top;
        if (scrolledFromTop >= distanceFromTop) {
            var delaiAnim = $(this).data("delai");
            $(this).delay(delaiAnim).animate({
                opacity: 1,
            });
        }
    });
});


window.onscroll = function() { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}