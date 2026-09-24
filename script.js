const opening = document.getElementById("opening");
const mainContent = document.getElementById("mainContent");
const music = document.getElementById("birthdayMusic");
const modal = document.getElementById("surpriseModal");


function openCard() {

    opening.classList.add("hide");

    setTimeout(() => {

        opening.style.display = "none";

        mainContent.classList.remove("hidden");
        mainContent.classList.add("show");

        // Coba mulai musik
        music.play().catch(() => {
            console.log("Music membutuhkan interaksi pengguna.");
        });

        createConfetti();

    }, 900);
}


function showSurprise() {

    modal.classList.remove("hidden");

    createConfetti();

}


function closeSurprise() {

    modal.classList.add("hidden");

}


/* =========================
   CONFETTI
========================= */

function createConfetti() {

    const symbols = ["✦", "✧", "·", "✦", "✧"];

    for (let i = 0; i < 35; i++) {

        const confetti = document.createElement("div");

        confetti.innerHTML =
            symbols[Math.floor(Math.random() * symbols.length)];

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";
        confetti.style.zIndex = "999";
        confetti.style.pointerEvents = "none";
        confetti.style.color =
            Math.random() > 0.5 ? "#b99a5d" : "#ffffff";

        confetti.style.fontSize =
            Math.random() * 10 + 8 + "px";

        document.body.appendChild(confetti);

        const duration =
            Math.random() * 2500 + 2000;

        confetti.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(110vh) rotate(${Math.random() * 720}deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duration,
                easing: "ease-out"
            }
        );

        setTimeout(() => {
            confetti.remove();
        }, duration);
    }
}


/* =========================
   CLOSE MODAL WHEN CLICK OUTSIDE
========================= */

modal.addEventListener("click", function (event) {

    if (event.target === modal) {
        closeSurprise();
    }

});