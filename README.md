# Browser Memory Game

This is a memory game consisting of albums/EPs I listen to daily. There is a total of 16 cards, making a 4x4 grid. This makes 8 pairs, with the following albums:

1. "Faye Webster" by Faye Webster
2. "Norman F------ Rockwell" by Lana Del Rey
3. "F--- the World" by Brent Faiyaz
4. "Lost" by Brent Faiyaz
5. "Too Late to Die Young" by Brent Faiyaz
6. "In Rainbows" by Radiohead
7. "Kindly Now" by Keaton Henson
8. "Live For Me" by Omar Apollo

When player begins the game, the backsides of each card is shown. The main goal is to find all 8 matching pairs in under 20 attempts. To start game, you must click on the card you want to flip over. Pairs of cards that match will remain flipped over until end of game. Cards that do not match will flip back over within 1 second. The number of attempts is kept track of throughout the game, which is seen beneath the title.

If player wins, there will be a message prompt that says, 
"You won! Game over. Click reset button to play again."
If player loses, there will be a message prompt that says, 
"You lost. Try again by clicking the reset button." 
This is so the player has the chance to play again, even if they win or lose.

------------------------------------------------------

## GAME PICTURES:

<img width="1067" alt="readme-ss1" src="https://github.com/adrimsaav/browser-memory-game/assets/145809449/d5af24a6-88fc-4fe3-83c1-4767c3457e46">

(photo of game first displayed)

This is how the game will look when first displayed. Reset button is shown below.
Title, sub-title that says "you get 20 tries! you'll need all of them", and
"attempts: 0" is shown. 


<img width="875" alt="readme-ss3" src="https://github.com/adrimsaav/browser-memory-game/assets/145809449/99227f1d-55a8-4167-85e0-e0906d41f50d">

(photo of a pair that matches)

Cards that match will remain flipped throughout the game. You can continue clicking other cards while they stay visible.


<img width="768" alt="readme-ss4" src="https://github.com/adrimsaav/browser-memory-game/assets/145809449/9fef1cc1-5f21-4c00-a363-932e1310448c">

(photo of continuation; another pair of cards has been chosen by used 
and matching pair remains)

<img width="812" alt="readme-ss2" src="https://github.com/adrimsaav/browser-memory-game/assets/145809449/da9c7d56-efc0-43c1-8cbb-e6b5a1f15bae">

(photo of a pair that does not match)

These cards do not match. Therefore, they will flip back over and go to their original state after a second.


--------------------------------------------------------

## TECHNOLOGIES USED:

I used HTML, CSS, and Javascript to build this game.

HTML was used for layout of the game. Identifier for image grid is what contains the individual, specfic cards, and the reset button is what allows the player to rest the game. Identifier for attempts is also in HTML.

CSS was used to style the game, giving it a moving background and aligning the cards to look like a 4x4 grid. It was also used to stylize the backsides and frontsides of the cards, along with the button.

Javascript was used to make the game interactive. For the logic, I used many functions containing forEach loops, conditional if-else statements, and the setTimeout function. Event listeners and event handlers are also implemented to capture and respond to user interactions. Through Javascript, I was able to access each necessary identifier to execute the game's functions and create the code. I also created the shuffleArray() function that was designed to shuffle the cards when the reset button is clicked. This function adds an essential element of randomness and challenge to the game, enhancing the overall gaming experience.


--------------------------------------------------------

## CHALLENGING CODE PARTS

<img width="441" alt="readme-ss5" src="https://github.com/adrimsaav/browser-memory-game/assets/145809449/e150df47-077f-438e-9d73-2d07ad564e5c">

<img width="760" alt="readme-ss6" src="https://github.com/adrimsaav/browser-memory-game/assets/145809449/49c9ca32-5dfa-496e-b4f7-2bb77fd6bb3d">


I found these two very difficult to create code for. Managing the elements in the loops/conditional statements would become stressful. For the shuffleArray, there were several concepts that I did not understand initially, like backward iteration or random number generation, which meant it took more time to learn more about it, then script it.

For the flipAlbum function, it required nested conditions, which caused confusion. The if statement was also complex and hard for me to understand, but after reading up on it, it made sense in the end. It helped shorten the code a lot. I definitely still need practice with these kinds of statements where a set of conditions, rather than a longer script, is better.# browser-memory-game

game code link: 
git@github.com:adrimsaav/browser-memory-game.git
