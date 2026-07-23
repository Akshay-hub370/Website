document.addEventListener("DOMContentLoaded", function(){

    /* ==========================
       STICKY HEADER
    ========================== */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", function(){

        if(window.scrollY > 50){
            header.classList.add("sticky");
        }else{
            header.classList.remove("sticky");
        }

    });

    /* ==========================
       ACTIVE NAVIGATION
    ========================== */

    const currentPage =
    window.location.pathname.split("/").pop();

    document.querySelectorAll(".navbar a")
    .forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")===currentPage){
            link.classList.add("active");
        }

    });

    /* ==========================
       SCROLL ANIMATION
    ========================== */

    const sections =
    document.querySelectorAll("section");

    const observer =
    new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.style.opacity="1";
                entry.target.style.transform="translateY(0)";

            }

        });

    },{
        threshold:0.15
    });

    sections.forEach(section=>{

        section.style.opacity="0";
        section.style.transform="translateY(40px)";
        section.style.transition="all 0.8s ease";

        observer.observe(section);

    });

    /* ==========================
       PRODUCT FILTER
    ========================== */

    const filterButtons =
    document.querySelectorAll(".filter-btn");

    const cards =
    document.querySelectorAll(".product-card");

    filterButtons.forEach(button=>{

        button.addEventListener("click",()=>{

            filterButtons.forEach(btn=>{
                btn.classList.remove("active");
            });

            button.classList.add("active");

            const filter =
            button.dataset.filter;

            cards.forEach(card=>{

                if(
                    filter==="all" ||
                    card.classList.contains(filter)
                ){
                    card.style.display="block";
                }else{
                    card.style.display="none";
                }

            });

        });

    });

    /* ==========================
       PRODUCT CARD HOVER
    ========================== */

    cards.forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            card.style.transform =
            "translateY(-10px)";

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform =
            "translateY(0px)";

        });

    });

    /* ==========================
       CONTACT FORM
    ========================== */

    const form = document.querySelector(".contact-form");

if(form){

    form.addEventListener("submit", function(e){

        e.preventDefault();

        const email =
        form.querySelector('input[type="email"]').value;

        const phone =
        form.querySelector('input[type="tel"]').value;

        const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const phonePattern =
        /^[0-9]{10}$/;

        if(!emailPattern.test(email)){
            alert("Please enter a valid email.");
            return;
        }

        if(!phonePattern.test(phone)){
            alert("Please enter a valid 10 digit phone number.");
            return;
        }

        const success =
        document.getElementById("success-message");

        success.innerHTML =
        "✓ Thank you! Your enquiry has been submitted successfully.";

        success.style.display = "block";

        form.reset();

    });

}
});
const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

if(menuToggle){

menuToggle.addEventListener("click", function(){

   menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
    menuToggle.classList.toggle("open");
});

});

}
/* ===========================================================
   EV CHARGING PAGE JAVASCRIPT
===========================================================*/

document.addEventListener("DOMContentLoaded", function () {

    /* -------------------------
       Active Navigation
    ------------------------- */

    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll("nav a").forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage) {
            link.classList.add("active");
        }

    });


    /* -------------------------
       Scroll Reveal Animation
    ------------------------- */

    const revealElements = document.querySelectorAll(
        ".solution-card, .charger-card, .feature, .timeline div, .industry-grid div, .gallery-grid img, .faq-item"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    }, {
        threshold: 0.15
    });

    revealElements.forEach(el => {

        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.transition = "all .7s ease";

        observer.observe(el);

    });


    /* -------------------------
       Smooth Scroll
    ------------------------- */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    /* -------------------------
       FAQ Accordion
    ------------------------- */

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const answer = item.querySelector("p");

        if (!answer) return;

        answer.style.display = "none";

        item.addEventListener("click", () => {

            const isOpen = answer.style.display === "block";

            faqItems.forEach(i => {

                const p = i.querySelector("p");

                if (p) p.style.display = "none";

            });

            if (!isOpen) {

                answer.style.display = "block";

            }

        });

    });


    /* -------------------------
       Gallery Popup
    ------------------------- */

    const galleryImages = document.querySelectorAll(".gallery-grid img");

    if (galleryImages.length > 0) {

        const overlay = document.createElement("div");

        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.background = "rgba(0,0,0,.9)";
        overlay.style.display = "none";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.zIndex = "9999";
        overlay.style.cursor = "zoom-out";

        const image = document.createElement("img");

        image.style.maxWidth = "90%";
        image.style.maxHeight = "90%";
        image.style.borderRadius = "12px";

        overlay.appendChild(image);

        document.body.appendChild(overlay);

        galleryImages.forEach(img => {

            img.addEventListener("click", () => {

                image.src = img.src;
                overlay.style.display = "flex";

            });

        });

        overlay.addEventListener("click", () => {

            overlay.style.display = "none";

        });

    }


    /* -------------------------
       Hero Parallax
    ------------------------- */

    const hero = document.querySelector(".ev-hero");

    window.addEventListener("scroll", () => {

        if (!hero) return;

        const offset = window.pageYOffset;

        hero.style.backgroundPositionY = offset * 0.5 + "px";

    });


    /* -------------------------
       Counter Animation
       (Optional)
    ------------------------- */

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const target = Number(counter.innerText);

        let count = 0;

        const speed = target / 80;

        function updateCounter() {

            count += speed;

            if (count < target) {

                counter.innerText = Math.floor(count);

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target;

            }

        }

        updateCounter();

    });

});