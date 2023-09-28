//----------------    preloader   ----------------
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById("preloader").style.display = 'none';
        const content = document.getElementById("content")
        content.style.display = 'block';
        content.scrollIntoView({
            behavior: 'smooth', // Use smooth scrolling behavior
            block: 'start' // Scroll to the top of the target element
        });
    }, 1000);
})


function callnow() {
    var scroll = new LocomotiveScroll(
        {
            el: document.querySelector('[data-scroll-container]'),
            smooth: true
        }
    );
}
// callnow();


const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;

function hyperplex() {
    let word = document.querySelector("h1");
    let wordValue = "KRISHNA"
    let wordLength = word.length
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
        word.innerText = word.innerText
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return wordValue[index];
                }

                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");

        if (iteration >= wordLength) {
            clearInterval(interval);
        }

        iteration += 1 / 3;
    }, 40);
}
hyperplex()
setInterval(hyperplex, 5000)




function openWebpage(e) {
    window.location.href = e.dataset.link;
}



let value = 0;
let navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    let valueY = window.scrollY;
    if (value < valueY) {
        value = valueY;
        navbar.style.opacity = 0;
        // console.log("up")
    }
    else if (value > valueY) {
        value = valueY;
        navbar.style.opacity = 1;
        // console.log("down")
    }
    // console.log(value)
})


const menuToggle = document.querySelector('.hamburger');
const mainMenu = document.querySelector('.menu-wrapper');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('is-active')
    mainMenu.classList.toggle('visible-menu')
    console.log("clicked")
})


// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const rangeBar = document.querySelectorAll('.bar-range');
// Function to handle the animation
function handleAnimation() {
    // console.log("ani")
    for (let j = 0; j < rangeBar.length; j++) {
        if (isInViewport(rangeBar[j])) {
            rangeBar[j].style.width = rangeBar[j].dataset.fullwidth + '%';
        }
        else {
            rangeBar[j].style.width = '0';
        }
    }
}

// Listen for scroll events to trigger the animation
window.addEventListener('scroll', handleAnimation);

// Initial check in case the element is already in the viewport on page load
handleAnimation();


const currentYear = document.getElementById("currentYear");
const newDate = new Date();

currentYear.innerHTML = newDate.getFullYear();