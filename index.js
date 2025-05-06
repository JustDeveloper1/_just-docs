window.onscroll = function() {
if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.querySelector(".navbar").classList.add("scroll");
    } else {
    document.querySelector(".navbar").classList.remove("scroll");
    }
};

let focused;

document.addEventListener('keydown', function(event) {
    if (event.key === 'Tab') {
        const focusedElement = document.activeElement;
        if (focused && focusedElement !== focused) {
            focused.classList.remove('keyboard');
        }
        focused = focusedElement;
        focusedElement.classList.add('keyboard');
    } else {
        focused.classList.remove('keyboard');
    }
});

document.addEventListener('click', function() {
    const focusedElement = document.activeElement;
    focusedElement.classList.remove('keyboard');
});
