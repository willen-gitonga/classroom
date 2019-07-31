window.onscroll = function () {
    scrollFunction();
 };
 window.preload = function () {
    setAttrib();
 };
 function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.backgroundColor = "#637C33";
    } else {
        document.getElementById("navbar").style.backgroundColor = "transparent";
    }
 }
 function setAttrib() {
    document.getElementsByClassName('collapsed').setAttribute('aria-expanded', 'true');
 }
 $(document).ready(function () {
    $('ul.nav li.dropdown').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(400);
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(400);
    });
 });
 $(document).ready(function () {
    $('.carousel .carousel-item:first').addClass('active');
 });
 $(document).ready(function () {
    $('#myTabs a').click(function (e) {
        e.preventDefault();
        let url = $(this).attr("data-url");
        let href = this.hash;
        let pane = $(this);
        // ajax load from data-url
        $(href).load(url, function (result) {
            pane.tab('show');
        });
    });
 });