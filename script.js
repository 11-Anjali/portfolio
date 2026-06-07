let icons = document.querySelectorAll(".icon");
let folders = document.querySelectorAll(".folder");
let close = document.querySelectorAll(".close-pop-up");

for(let i = 0; i < icons.length; i++) {
    icons[i].addEventListener("click", () => {
        folders[i].style.display = "block";
    })
}

for(let i = 0; i < icons.length; i++) {
    close[i].addEventListener("click", () => {
        folders[i].style.display = "none";
    })
}