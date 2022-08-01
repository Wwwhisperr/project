window.onload = function () {
    var header = document.querySelector('header');
    var nav = header.querySelector('.nav');
    var banner = header.querySelector('.banner');
    window.onscroll = function () {
        console.log(document.documentElement.scrollTop);
        if (document.documentElement.scrollTop > 70) {
            nav.className = 'navafter';
            banner.style.transform = 'translateY(50px)';
        } else {
            nav.className = 'nav';
            banner.style.transform = 'translateY(0)';
        }
    }
}
