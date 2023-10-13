// 1. Set up HTML/CSS/JS file. 
// 2. Create HTML and CSS structure for game with tags for:
//     - game-container √
//     - win-message 
//     - lose-message
//     - reset-button (btn)
//     - img 1-16 (including urls)
//     - albums/EPs

// 3. Create JS structure to build game with constants, state variables, etc.
/*----- constants -----*/
const album = [ 
{class: 'card1', id: 1, src: "./photos/fayewebster.jpg"},
{class: 'card2', id: 2, src: "./photos/ftheworld-brentfaiyaz.jpeg"},
{class: 'card3', id: 3, src: "./photos/keatonhenson.jpeg"},
{class: 'card4', id: 4, src: "./photos/lfm-omarapollo.png"},
{class: 'card5', id: 5, src: "./photos/lost-brentfaiyaz.jpeg"},
{class: 'card6', id: 6, src: "./photos/norman-lanadelrey.jpeg"},
{class: 'card7', id: 7, src: "./photos/inrainbows-radiohead.jpeg"},
{class: 'card8', id: 8, src: "./photos/toolate-sonder.jpeg"},
];

const numAttempts = 20;
let attempts = 0;
let albumsShown = [];
let matches = 0;

/*----- state variables -----*/
// let albumsShown=[];
// let albumsMatch=0;


/*----- cached elements  -----*/
// getElementbyId(.......) tags seen above
// querySelector(......)

const resetButton = document.getElementById('reset-btn');
const imagesGrid = document.getElementById('images-grid');

let shuffledPairs = [];

/*----- event listeners -----*/
// when Reset button is clicked: something.addEventListener('click', function that resets game)

resetButton.addEventListener('click', resetGame);

/*----- functions -----*/

// function initializeGame()
function initializeGame() {
    albumsShown = [];
    matches = 0;
    attempts = 0;
    shuffledPairs = shuffleArray([...album, ...album]);
    createGrid(shuffledPairs);
}

// function flipAlbum()
function flipAlbum() {
    if (matches === album.length || attempts >= numAttempts) {
        return;
    }
    
    if (albumsShown.length < 2 && !this.classList.contains('matched') && !this.classList.contains('flipped')) {
        this.classList.add('flipped');
        albumsShown.push(this);

        if (albumsShown.length === 2) {
            checkIfMatches();
            }
        }
    }


// function checkIfMatches
function checkIfMatches() {
    if (albumsShown.length === 2){
        const [firstCard, secondCard] = albumsShown;

    if (firstCard.id === secondCard.id) {
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        albumsShown = [];
        matches++;

        if (matches === album.length) {
            alert('You won! Game over. Click reset button to play again.');
        }
    } else {
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            albumsShown = [];
        }, 1000);
    }

    attempts++;
    updateAttempts();

    if (attempts === numAttempts) {
        alert('You lost. Try again by clicking the reset button!');
        }
    }
}

//f function updateAttempts
function updateAttempts() {
    const attemptsEl = document.getElementById('attempts');
    attemptsEl.textContent = attempts;
}

// function shuffleArray to randomize order
function shuffleArray (array) {
    for (let i=array.length - 1; i>0; i--) {
        const x = Math.floor(Math.random() * (i+1));
        [array[i], array[x]] = [array[x], array[i]];
    }
    return array;
}

// function resetGame
function resetGame() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.classList.remove('flipped', 'matched');
    });

    initializeGame();
}

// function for grid of cards
function createGrid (albumData) {
    imagesGrid.innerHTML = '';

    albumData.forEach((cardData) => {
        const albumEl = document.createElement('div');
        albumEl.classList.add('card');
        albumEl.id = cardData.id;

        const frontOfCard = document.createElement('div');
        frontOfCard.classList.add('frontOfCard', cardData.class);

        const backOfCard = document.createElement('div');
        backOfCard.classList.add('backOfCard');

        const frontImage = document.createElement('img');
        frontImage.src = cardData.src;
        frontOfCard.appendChild(frontImage);


        const backImage = document.createElement('img');
        backImage.src = "./photos/backofcard.jpeg";
        backOfCard.appendChild(backImage);

        albumEl.appendChild(frontOfCard);
        albumEl.appendChild(backOfCard);

        albumEl.addEventListener('click', flipAlbum);
        imagesGrid.appendChild(albumEl);
    });
};

// function for shuffling cards 
shuffledPairs.forEach((pair, index) => {
    
    const albumEl = document.querySelector(`.card[data-id="${pair.id}"]`);
    const frontOfCard = albumEl.querySelector('.frontOfCard');



    frontOfCard.addEventListener('click', () => {
        if(!albumEl.classList.contains('flipped') && !albumEl.classList.contains('matched')) {
            albumEl.classList.add('flipped');
            checkIfMatches();
        }
    });

    const backOfCard = document.createElement('div');
    backOfCard.classList.add('backofCard');

    albumEl.appendChild(backOfCard);
    

});

// 4. Initialize game.


initializeGame();
