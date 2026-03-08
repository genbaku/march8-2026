function stealEnvelope() {
    const paw = document.getElementById("thief-paw");
    const envelope = document.getElementById("envelope-img");
    const btnContainer = document.getElementById("open-btn-container");
    const title = document.getElementById("envelope-title");
    const cat = document.getElementById("running-cat");

    btnContainer.style.display = "none";
    title.style.display = "none";

    setTimeout(() => {
        paw.classList.add("reach");
    }, 500);

    setTimeout(() => {
        paw.classList.remove("reach");
        paw.classList.add("pull-back");
        envelope.classList.add("stolen");
    }, 1200);

    setTimeout(() => {
        document.getElementById("screen-envelope").style.display = "none";
        document.getElementById("screen-game").style.display = "flex";

        cat.style.top = "0px";
        cat.style.left = "50%";
        cat.style.transform = "translateX(-50%)";
    }, 2000);
}

let clicksCount = 0;
const maxClicks = 6;

function catchCat() {
    clicksCount++;
    document.getElementById("running-cat").style.transform = "none";

    if (clicksCount >= maxClicks) {
        endGame();
    } else {
        moveCat();
    }
}

function moveCat() {
    const cat = document.getElementById("running-cat");
    const catSize = 120;
    const maxX = window.innerWidth - catSize;
    const maxY = window.innerHeight - catSize;

    const randomX = Math.max(0, Math.floor(Math.random() * maxX));
    const randomY = Math.max(0, Math.floor(Math.random() * maxY));

    cat.style.left = randomX + "px";
    cat.style.top = randomY + "px";
}

function endGame() {
    document.getElementById("screen-game").style.display = "none";
    document.getElementById("screen-final").style.display = "flex";
    document.body.style.overflow = "auto";
}