/* ======================================
   PUZZLE QUEST - COMMON SCRIPT
====================================== */

// Player Name
const playerName = localStorage.getItem("playerName") || "Player";

// Show player name wherever an element with id="playerDisplay" exists
document.addEventListener("DOMContentLoaded", () => {

    const display = document.getElementById("playerDisplay");

    if (display) {
        display.innerHTML = "👋 Welcome, <b>" + playerName + "</b>";
    }

});


/* ======================================
   CHECK ANSWER FUNCTION
====================================== */

function checkAnswer(selectedButton, correctAnswer) {

    const buttons = document.querySelectorAll(".option-btn");

    buttons.forEach(btn => {
        btn.disabled = true;
    });

    if (selectedButton.innerText.trim() === correctAnswer.trim()) {

        selectedButton.style.background = "#00e676";
        selectedButton.style.color = "white";

        document.getElementById("result").innerHTML =
            "✅ Correct Answer!";

        document.getElementById("nextBtn").style.display = "inline-block";

    } else {

        selectedButton.style.background = "#ff5252";
        selectedButton.style.color = "white";

        document.getElementById("result").innerHTML =
            "❌ Wrong Answer! Try the next puzzle.";

        buttons.forEach(btn => {

            if (btn.innerText.trim() === correctAnswer.trim()) {
                btn.style.background = "#00e676";
                btn.style.color = "white";
            }

        });

        document.getElementById("nextBtn").style.display = "inline-block";
    }

}


/* ======================================
   NEXT PAGE
====================================== */

function goTo(page) {

    window.location.href = page;

}


/* ======================================
   RESTART GAME
====================================== */

function restartGame() {

    localStorage.removeItem("playerName");

    window.location.href = "index.html";

}


/* ======================================
   CONFETTI (Congratulations Page)
====================================== */

function createConfetti() {

    const confetti = document.createElement("div");

    confetti.innerHTML = "🎉";

    confetti.style.position = "fixed";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-40px";
    confetti.style.fontSize = (20 + Math.random() * 25) + "px";
    confetti.style.pointerEvents = "none";
    confetti.style.zIndex = "9999";

    document.body.appendChild(confetti);

    let y = -40;

    const fall = setInterval(() => {

        y += 5;

        confetti.style.top = y + "px";

        if (y > window.innerHeight) {

            clearInterval(fall);

            confetti.remove();

        }

    }, 20);

}


/* ======================================
   START CONFETTI IF NEEDED
====================================== */

document.addEventListener("DOMContentLoaded", () => {

    if (document.body.classList.contains("congrats-page")) {

        setInterval(createConfetti, 300);

    }

});
