window.addEventListener("DOMContentLoaded", () => {
    // intro typing
    try {
        new Typed(".auto-type", {
            strings: ["Lusine Hayrapetyan", "FrontEnd developer", "Positive person"],
            typeSpeed: 70,
            loop: true
        })
    } catch{}

    //fill in progress
    try {
        const me = document.querySelector("#me");
        const language = document.querySelector(".language");
        const langHeight = language.getBoundingClientRect().top;

        me.addEventListener("scroll", () => {
            if(me.scrollTop > langHeight - 500) {
                document.querySelector(".first").value = 100;
                document.querySelector(".second").value = 87;
                document.querySelector(".third").value = 73;
            }
        })
        window.addEventListener("scroll", () => {
            if(window.scrollY > langHeight - 450) {
                document.querySelector(".first").value = 100;
                document.querySelector(".second").value = 87;
                document.querySelector(".third").value = 73;
            }
        })
    } catch{}

    //mobile menu
    try {
        const menuBtn = document.querySelector(".menu-btn");
        const menu = document.querySelector("#menu");

        menuBtn.addEventListener("click", () => {
            if (!menuBtn.classList.contains("open")) {
                menuBtn.classList.add("open");
                menu.classList.add("active_nav");
            } else{
                menuBtn.classList.remove("open");
                menu.removeAttribute("class");
            }
        });
    } catch {}

    //scroll up
    try {
        const upBtn = document.querySelector(".btn-up");

        window.addEventListener("scroll", () => {
            if(window.scrollY >= 500) {
                upBtn.classList.add("showBtn");
            } else{
                upBtn.classList.remove("showBtn"); 
                //problem with remove don't now why
            }
        });

        upBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    } catch {}

    //fill educate line
    try {
        const me = document.querySelector("#me");
        const education = document.querySelector(".education");
        const cover = document.querySelector(".line-cover");
        const line = document.querySelector(".fill-line");

        function fillLine() {
            if(window.location.pathname === "/about.html"){
                let scrollDistance = -education.getBoundingClientRect().top + 300;
                let progressWidth = Math.floor((scrollDistance / line.getBoundingClientRect().width));
                cover.style.height = `${progressWidth}%`;
            }            
        }

        window.addEventListener("scroll", fillLine);
        me.addEventListener("scroll", fillLine);
    } catch {}

    //typing text in portfolio section
    try {
        new TypeIt("#autoTyping", {
            strings: `<table><tr class="colum"><td class="number">1</td><td class="content"><span class="reserved">const</span> <span class="const-name"> biography</span> = {</td></tr><tr class="colum"><td class="number">2</td><td class="content"><span class="variables"> &emsp;&emsp;name</span>: <span class="string">'Lusine'</span>,</td></tr><tr class="colum"><td class="number">3</td><td class="content"><span class="variables"> &emsp;&emsp;surname</span>: <span class="string">'Hayrapetyan'</span>,</td></tr><tr class="colum"><td class="number">4</td><td class="content"><span class="variables"> &emsp;&emsp;gender</span>: <span class="string">'female'</span>,</td></tr><tr class="colum"><td class="number">5</td><td class="content"><span class="variables"> &emsp;&emsp;country</span>: <span class="string">'Armenia'</span>,</td></tr><tr class="colum"><td class="number">6</td><td class="content"><span class="variables"> &emsp;&emsp;professions</span>: <span class="string">'Frontend Developer'</span>,</td></tr><tr class="colum"><td class="number">7</td><td class="content"><span class="variables"> &emsp;&emsp;languages</span>: <span class="string">'Armenian, Russian, English'</span>,</td></tr><tr class="colum"><td class="number">8</td><td class="content"><span class="variables"> &emsp;&emsp;technical</span>: <span class="string">'HTML5, CSS3, JS, React + Redux, TypeScript'</span>,</td></tr><tr class="colum"><td class="number">9</td><td class="content"><span class="variables"> &emsp;&emsp;phoneNumber</span>: <span class="string">'+374(98)95-79-70'</span>,</td></tr><tr class="colum"><td class="number">10</td><td class="content"><span class="variables"> &emsp;&emsp;eMail</span>: <span class="string">'lusinehayrapetyan0220@gmail.com'</span>,</td></tr><tr class="colum"><td class="number">11</td><td class="content">}</td></tr></table>`,
            speed: 15,
            waitUntilVisible: true,
          }).go();
    } catch {}
})