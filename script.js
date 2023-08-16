let menuIcon = document.getElementById("menu"),
    body = document.querySelector("body"),
    nav = document.querySelector(".mobile-nav");

menuIcon.addEventListener("click", () => {
    if (menuIcon.classList.contains("active")) {
        menuIcon.classList.remove("active");
        menuIcon.classList.add("inactive");
        nav.classList.remove("on");
    } else {
        menuIcon.classList.add("active");
        menuIcon.classList.remove("inactive");
        nav.classList.add("on");
        window.scrollTo({
            top:0,
            left:0,
            behavior: "smooth"
        });
    }
});

body.addEventListener("click", () => {
    if (menuIcon.classList.contains("active")) {
        nav.classList.remove("on");
        menuIcon.classList.remove("active");
        menuIcon.classList.add("inactive");
        body.style.overflowY = "auto";
    }
});
menuIcon.addEventListener("click", (ev)  => {
    ev.stopPropagation();
});
nav.addEventListener("click", (ev) => {
    ev.stopPropagation();
});

let drop = document.querySelectorAll(".mobile-nav .drop"),
    dropBar = document.querySelectorAll(".mobile-nav .dropbar");

for (let i = 0; i < drop.length; i++) {
    drop[i].addEventListener("click", () => {
        if(drop[i].classList.contains("on")) {
            drop[i].classList.remove("on");
        } else {
            drop[i].classList.add("on");
        }
    });
    dropBar[i].addEventListener("click", (e) => {
        e.stopPropagation();
    });
}

let desktopNav = document.querySelector(".desktop-nav"),
    desktopDrop = document.querySelectorAll(".desktop-nav .drop"),
    desktopDropBar = document.querySelectorAll(".desktop-nav .dropbar");

for (let i = 0; i < desktopDrop.length; i++) {
    desktopDrop[i].addEventListener("click", () => {
        if(desktopDrop[i].classList.contains("on")) {
            desktopDrop[i].classList.remove("on");
        } else {
            desktopDrop.forEach(a => a.classList.remove("on"));
            desktopDrop[i].classList.add("on");
        }
    });
    desktopDropBar[i].addEventListener("click", (e) => {
        e.stopPropagation();
    });
}

