document.addEventListener("DOMContentLoaded", ()=>{
    const diceImage = document.getElementById("diceImage");
    const rollBtn = document.getElementById("rollBtn");

    const diceImages = [
        "dice-1.png",
        "dice-2.png",
        "dice-3.png",
        "dice-4.png",
        "dice-5.png",
        "dice-6.png"
    ]

    function rollDice() {
        const randomIndex = Math.floor(Math.random() * diceImages.length);
        diceImage.src = diceImages[randomIndex];

        diceImage.style.animation = "roll 0.5s ease-in-out";
        setTimeout(() => {
            diceImage.style.animation = "";
        }, 500);
    }

    rollBtn.addEventListener("click", rollDice);

})