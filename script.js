const coin = document.getElementById("coin");
const headsOrTails = ["Heads!", "Tails!"];

const flipCoin = () => {
    let random = Math.floor(Math.random() * 2);
    coin.classList.add("flip");
    setTimeout(() => {
        coin.innerText = headsOrTails[random];
        coin.classList.remove("flip");
    }, 600)
}

coin.onclick = flipCoin;