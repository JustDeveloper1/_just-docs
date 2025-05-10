window.onscroll = function() {
if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.querySelector(".navbar").classList.add("scroll");
    } else {
    document.querySelector(".navbar").classList.remove("scroll");
    }
};
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('h1, h2, h3');
    elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const a = ((rect.top + rect.height / 2) <= (window.innerHeight / 2));
        if (a) {
            
        } else {
            document.body.style.setProperty('--hc', index);
        }
    });
});
