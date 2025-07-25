const game_board = document.getElementById("game-board");
const resultDisplay = document.querySelector("#score");
const restartBtn = document.getElementById('restart-btn');


const cardIcon = [
    {
        name: "ace_spade",
        img: "assets/Ace_spade.jpg"
    },
    {
        name: "joker",
        img: "assets/Joker.jpg"
    },{
        name: "king_heart",
        img: "assets/King_heart.jpg"
    },{
        name: "king_spade",
        img: "assets/King_spade.jpg"
    },{
        name: "9_diamond",
        img: "assets/9_diamond.png"
    },{
        name: "queen_spade",
        img: "./assets/Queen_spade.jpg"
    },{
        name: "queen_diamond",
        img: "./assets/Queen_diamond.jpg"
    },{
        name: "ace_diamond",
        img: "./assets/Ace_diamond.jpeg"
    },
    {
        name: "ace_spade",
        img: "assets/Ace_spade.jpg"
    },
    {
        name: "joker",
        img: "assets/Joker.jpg"
    },{
        name: "king_heart",
        img: "assets/King_heart.jpg"
    },{
        name: "king_spade",
        img: "assets/King_spade.jpg"
    },{
        name: "9_diamond",
        img: "assets/9_diamond.png"
    },{
        name: "queen_spade",
        img: "./assets/Queen_spade.jpg"
    },{
        name: "queen_diamond",
        img: "./assets/Queen_diamond.jpg"
    },{
        name: "ace_diamond",
        img: "./assets/Ace_diamond.jpeg"
    }
]
cardIcon.sort(() => 0.5 - Math.random());

generateBoard();

function generateBoard() {
    for (let i=0; i<cardIcon.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src','assets/gray_back.png');
        card.setAttribute("data-id",i);
        card.addEventListener('click',flipCard);
        game_board.appendChild(card);
    }
    console.log(cardIcon);
}

let card_chose = [];
let card_chose_id = [];


function flipCard() {
    const card_id = this.getAttribute("data-id");
    this.setAttribute('src',cardIcon[card_id].img);
    this.classList.add('flip');
    card_chose_id.push(card_id);
    card_chose.push(cardIcon[card_id].name);

    if(card_chose.length === 2) {
        setTimeout(checkMatch,500);
    }
}

let cardWon =[];
function checkMatch() {
    const cards = document.querySelectorAll("img");
    const card1 = document.querySelector(`[data-id="${card_chose_id[0]}"]`);
    const card2 = document.querySelector(`[data-id="${card_chose_id[1]}"]`);

    if (card_chose[0] == card_chose[1]) {
        card1.removeEventListener('click', flipCard);
        card2.removeEventListener('click', flipCard);
        cardWon.push(card_chose[0]);
        resultDisplay.innerHTML = cardWon.length;
    } else {
        setTimeout(() => {
            card1.setAttribute('src', 'assets/gray_back.png');
            card2.setAttribute('src', 'assets/gray_back.png');
            card1.classList.remove('flip');
            card2.classList.remove('flip');
        }, 800);

    };
    card_chose = [];
    card_chose_id = [];
}

function restartGame() {
    card_chose = [];
    card_chose_id = [];
    cardWon = [];
    resultDisplay.textContent = '0';
    game_board.innerHTML = '';
    cardIcon.sort(() => 0.5 - Math.random());
    generateBoard();
}

restartBtn.addEventListener('click', restartGame);