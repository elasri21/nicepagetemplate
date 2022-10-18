const openMenu = document.querySelector(".open");
const closeMenu = document.querySelector(".close");
const nav = document.querySelector("nav");
openMenu.addEventListener("click", function() {
    nav.style.display  = "block";
});
closeMenu.addEventListener("click", function() {
    nav.style.display  = "none";
});

// slider
const slides = Array.from(document.querySelectorAll(".review"));
const bullets = Array.from(document.querySelectorAll(".bullet"));
bullets.forEach(function (bullet) {
    bullet.addEventListener("click", function() {
        slides.forEach(slide => {
            slide.style.display = "none";
        });
        for(let i = 0; i < bullets.length; i++) {
            bullets[i].classList.remove("active");
        }
        this.classList.add("active");
        for(let i = 0; i < slides.length; i++) {
            if(slides[i].id == this.dataset.id)
            slides[i].style.display = "block";
        }
    });
});


//panel
const toClick = Array.from(document.querySelectorAll(".panel h3"));
const panels = Array.from(document.querySelectorAll(".panel p"));
toClick.forEach(btn => {
    btn.addEventListener("click", function() {
        for(let i = 0; i < toClick.length; i++) {
            toClick[i].classList.remove("active");
        }
        panels.forEach(panel => {
            panel.style.display = "none";
        });
        this.classList.add("active");
        this.nextElementSibling.style.display = "block";
    })
})