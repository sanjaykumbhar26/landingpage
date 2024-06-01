(function () {

    var quotes = $(".quotes");
    var quoteIndex = -1;

    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(1000)
            .delay(1000)
            .fadeOut(1000, showNextQuote);
    }

    showNextQuote();

})();


document.addEventListener('DOMContentLoaded', function () {
    const openButtons = document.querySelectorAll('.open-sidebar');
    const cartSidebar = document.getElementById('cartSidebar');
    const closeSidebar = document.getElementById('closeSidebar');

    openButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            cartSidebar.classList.add('open');
        });
    });

    closeSidebar.addEventListener('click', function () {
        cartSidebar.classList.remove('open');
    });

    document.addEventListener('click', function (event) {
        if (!cartSidebar.contains(event.target) && !event.target.closest('.open-sidebar')) {
            cartSidebar.classList.remove('open');
        }
    });
});

