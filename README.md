# BlackJack-Training

In this project we simulate a BlackJack game!

CLASS ------
-- Cards. It has the constructor with the attributes card (store the name and type of card) and values (store the card's value). Also, it has the getters and setter methods for each attribute.
-- Player. It has the constructor with the attributes name (store the player´s name) and award (store the player's award). Also, it has the getters and setter methods for each attribute.

An object for each card is created considering his value, name and type of card (♠, ♥, ♣, ♦).

ARRAYS -------
deck = []
deckValues = []

Store the name and value from each card respectly.

FUNCTIONS -----
-- starGame() --    select the 2 first cards randomly. Print the cards selected. Invoke the sumCards function

-- sumCards() --    adds up the value of the cards. Print the result. Invoke the playingGame function

-- playingGame() --  if/else statement with 3 options: sum < 18 ( new card),  sum >= 18 && sum <= 21 (BlackJack), sum > 21 (lose).  Invoke the newCard function

-- newCard () --   Allows select a new card. Invoke the sumCards function. 


CONSIDERATIONS ----

1. The default player is player1.
2. After selecting randomly the 2 first cards, the A card takes as value 1.
3. Ask player if he wants to continue playing in order to increase his/her award



EXAMPLE 1 ------------------------------------------------------------------

*****************************************
               Blackjack
*****************************************

Feeling with luck? - Give it a try~~

*****************************************
Welcome Player1.
Let's started!
*****************************************
Cards: 8♥,7♥

Sum: 15

Cards: 8♥,7♥,9♣

Sum: 24
You lose. GAME OVER
Thanks for playing. You won: 0 USD
Do you want to play again?:
1. Play again
2. Exit



EXAMPLE 2  -------------------------------------------------------------------------

*****************************************
               Blackjack
*****************************************

Feeling with luck? - Give it a try~~

*****************************************
Welcome Player1.
Let's started!
*****************************************
Cards: 9♥,4♣

Sum: 13

Cards: 9♥,4♣,2♣

Sum: 15

Cards: 9♥,4♣,2♣,4♦

Sum: 19
¡BlackJack!
Congratulations, you won: 1000 USD
Do you want to play again?:
1. Play again
2. Exit
1
Cards: 3♣,6♠

Sum: 9

Cards: 3♣,6♠,6♦

Sum: 15

Cards: 3♣,6♠,6♦,3♠

Sum: 18
¡BlackJack!
Congratulations, you won: 2000 USD
