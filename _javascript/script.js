function createStars(){
    const star = document.createElement("div")
    star.classList.add("flake");
    star.innerText = "☆";
    star.style.left = Math.random() * 100 + "%";
    star.style.animationDuration = Math.random() * 3 + 2 + "s";

    const card = document.querySelector(".card");
    card.appendChild(star);

    let animationDuration = parseFloat(star.style.animationDuration);
    setTimeout(() =>{
        star.remove();
    }, animationDuration * 1000)
}
setInterval(createStars, 500);
let tl = gsap.timeline({ default: { duration: .65 } })

tl.fromTo(".icons", { opacity: 0, y: 100 }, { opacity: 1, y: 0 })
tl.fromTo(".icons", { y: 0 }, { y: -10, repeat: 1, yoyo: true })
gsap.fromTo(".icon-topo",  { y: 0 },{ y: 45, rotation: 15, duration: 2});
