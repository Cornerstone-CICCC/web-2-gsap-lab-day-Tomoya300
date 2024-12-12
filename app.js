gsap.registerPlugin(ScrollTrigger);

const hi = document.querySelector("h1 span:first-child")
const iAmJohn = document.querySelector("h1 span:last-child")
const introduce = document.querySelector(".content p")
const dogImage = document.querySelector(".content img")

const tl1 = gsap.timeline()
tl1.from(iAmJohn, {x: "100vw", duration: 1})
tl1.from(hi, {x: "-100vw", duration: 1}, "-=0.9")
tl1.from(introduce, {transformOrigin: "left center", rotation: 90, opacity: 0, duration: 0.6})
tl1.from(dogImage, {y: "100vh", duration: 0.7})

const aboutMe = document.querySelectorAll(".section2 h2 span")
const aboutMeDes = document.querySelector(".section2 p")

const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section2",
        start: "top center",
        end: "bottom center",
        markers: true,
        toggleActions: "play none reverse none",
    }
})
tl2.from(aboutMe, {y: "-100vh", duration: 0.5, stagger: 0.2})
tl2.from(aboutMeDes, {rotationY: 90, duration: 0.5})

const h2 = document.querySelector(".section3 h2")
const skilsSpan = document.querySelectorAll(".section3 span")
const portfolio = document.querySelectorAll(".portfolio-item")

const tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".horizontal-sections",
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: 1,
        toggleActions: "play none reverse none",
    }
})
tl3.from(h2, {scale: 20, duration: 0.5})
tl3.from(skilsSpan, {y: "100vh", duration: 1, stagger: 0.2})
tl3.to(skilsSpan, {backgroundColor: "yellow", color: "black"}, "<")
tl3.to(".horizontal-sections", {xPercent: -35, duration: 1})
tl3.from(portfolio, {x: "100vw", duration: 1, stagger: 0.1}, "-=1")

const contactMe = document.querySelector(".section5 h2")
const cmDes = document.querySelector(".section5 p")
const contactBtn = document.querySelector(".contact-btn")
const body = document.body

const cmtoString = contactMe.textContent
const splitCm = cmtoString.split("")
contactMe.innerHTML = ""
splitCm.forEach((letter) => {
    if (letter === " ") {
        contactMe.appendChild(document.createTextNode(" "))
      } else {
        const newSpan = document.createElement("span")
        newSpan.textContent = letter
        contactMe.appendChild(newSpan)
    }
})

const newContactMe = document.querySelectorAll(".section5 h2 span")

console.log(newContactMe)

const tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section5",
        start: "top top",
        endTrigger: ".section5",
        end: "bottom+=300px bottom",
        scrub: 1,
        pin: true,
    }
})
tl4.from(newContactMe, {y: "-100vh", duration: 1, stagger: 0.3})
tl4.from(cmDes, {y: 100, opacity: 0, duration: 1})
tl4.from(contactBtn, {scale: 0, duration: 1})
tl4.from(".section5", {backgroundPosition: "150% 100%", duration: 1})
tl4.to(".section5", {backgroundColor: "black", duration: 1}, "-=1")

