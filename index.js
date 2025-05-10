window.onscroll = function() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.querySelector(".navbar").classList.add("scroll");
    } else {
        document.querySelector(".navbar").classList.remove("scroll");
    }
};
const main_ = 'html > body > main > div#main > div.main'
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll(`${main_} h1, ${main_} h2, ${main_} h3`);
    let headerIndex = -1;

    elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const isInView = (rect.top + rect.height / 2) <= (window.innerHeight / 2);
        
        if (isInView) {
            headerIndex = index;
        }
    });

    document.body.style.setProperty('--hc', headerIndex >= 0 ? headerIndex : 0);
});
