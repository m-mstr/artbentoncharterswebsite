const menuBtn = document.querySelector("#menuBtn");
const closeBtn = document.querySelector("#closeBtn");
const navbar = document.querySelector("#navbar");

menuBtn.addEventListener('click', () => {
    const visibility = navbar.getAttribute("data-visible")

    if (visibility === "false") {
        navbar.setAttribute("data-visible", "true")
        menuBtn.setAttribute("aria-expanded", "true")
        closeBtn.setAttribute("aria-expanded", "true")
    }
});

closeBtn.addEventListener('click', () => {
    const visibility = navbar.getAttribute("data-visible")

    if (visibility === "true") {
        navbar.setAttribute("data-visible", "false")
        menuBtn.setAttribute("aria-expanded", "false")
        closeBtn.setAttribute("aria-expanded", "false")
    }
});

document.addEventListener('scroll', () => {
    const scrolledNav = document.querySelector(".nav-wrap .container");
    const topPagePadding = document.querySelector("#main-page")

        if (window.scrollY > 0) {
            scrolledNav.classList.add('scrolled');
            topPagePadding.classList.add('scrolled');
        } else {
            scrolledNav.classList.remove('scrolled');
            topPagePadding.classList.remove('scrolled');
        }
    }
);