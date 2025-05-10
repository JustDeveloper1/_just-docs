const page_ = 'p' + window.location.pathname;
const scrll = localStorage.getItem('s' + page_);
const theme = localStorage.getItem('t');
const main_ = 'html > body > main > div#main > div.main';

// navbar + right sidebar
window.onscroll = function() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.querySelector(".navbar").classList.add("scroll");
    } else {
        document.querySelector(".navbar").classList.remove("scroll");
    }

    localStorage.setItem('s' + page_, document.documentElement.scrollTop);

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
};

if (scrll) {
    document.documentElement.scrollTo(0, scrll);
}

// theme
const getnsettheme = () => {
    try {
        const darkThemeMq = () => window?.matchMedia?.('(prefers-color-scheme:dark)')?.matches ?? false;
        if (darkThemeMq()) {
            document.documentElement.classList.remove('l');
        } else {
            document.documentElement.classList.add('l');
        }
    } catch {
        document.documentElement.classList.add('l');
    }
}
const checkTheme = () => localStorage.getItem('t');
const autotheme = () => {
    function setColorScheme(scheme) {
        switch(scheme){
            case 'dark':
                if (checkTheme() == 'a') {
                    document.documentElement.classList.remove('l');
                }
            break;
            case 'light':
                if (checkTheme() == 'a') {
                    document.documentElement.classList.add('l');
                }
            break;
            default:
                if (checkTheme() == 'a') {
                    document.documentElement.classList.add('l');
                }
            break;
        }
    }

    function getPreferredColorScheme() {
        if (window.matchMedia) {
            if(window.matchMedia('(prefers-color-scheme: dark)').matches){
                return 'dark';
            } else {
                return 'light';
            }
        }
        return 'light';
    }

    function updateColorScheme(){
        setColorScheme(getPreferredColorScheme());
    }

    if(window.matchMedia){
        var colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        colorSchemeQuery.addEventListener('change', updateColorScheme);
    }

    updateColorScheme();
}

if (theme && theme == 'l') {
    document.documentElement.classList.add('l');
} else if (theme && theme == 'a') {
    localStorage.setItem('t', 'a');
    autotheme()
} else {
    getnsettheme()
}

const ltb = document.getElementById('l');
const dtb = document.getElementById('d');
const atb = document.getElementById('a');
ltb.addEventListener('click', () => {
    document.documentElement.classList.add('l');
    localStorage.setItem('t', 'l');
});
dtb.addEventListener('click', () => {
    document.documentElement.classList.remove('l');
    localStorage.setItem('t', 'd');
});
atb.addEventListener('click', () => {
    localStorage.setItem('t', 'a');
    autotheme()
});