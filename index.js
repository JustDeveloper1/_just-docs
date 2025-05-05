window.onscroll = function() {
if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.querySelector(".navbar").classList.add("scroll");
    } else {
    document.querySelector(".navbar").classList.remove("scroll");
    }
};