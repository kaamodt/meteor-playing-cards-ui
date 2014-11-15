# Playing Card UI

A simple meteor template for displaying playing cards.

Example:
```html
{{> playingCard rank="A" suit="H" text="textOnCard"}}
```
![Alt text](https://github.com/kaamodt/meteor-playing-cards-ui/blob/screenshots/screenshots/singleCard.png?raw=true "Single Card")

The template can take 3 arguments, rank, suit and text. In reality there is no restrictions on the rank argument, but it is meant to work with values A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q and K. The suit argument takes C, D, H and S. The text argument is added if you want some text on the card. E.g, denoting the player of a card in a multiplayer game.

## Laying out cards

The template has defined two css classes for laying out the cards. The first, .cardsContainer, will lay out the cards next to each other with full width. E.g, as they would be on a table. The configuration support max 10 cards displayed in a row this way.

Example:
```HTML
<div class="cardsContainer">
  {{> playingCard rank="A" suit="H" text="textOnCard"}}
  {{> playingCard rank="A" suit="D" text="textOnCard"}}
  {{> playingCard rank="A" suit="S" text="textOnCard"}}
  {{> playingCard rank="A" suit="C" text="textOnCard"}}
</div>
```
![Alt text](https://github.com/kaamodt/meteor-playing-cards-ui/blob/screenshots/screenshots/tableLayout.png?raw=true "Table Layout")
Adding the other, .cardsInHand, will lay out the card overlapping. As you would normally stack card in your hand when playing cards. The configuration support max 13 cards displayed in a row this way.


Example:
```HTML
<div class="cardsContainer cardsInHand">
  {{> playingCard rank="A" suit="H" text="textOnCard"}}
  {{> playingCard rank="A" suit="D" text="textOnCard"}}
  {{> playingCard rank="A" suit="S" text="textOnCard"}}
  {{> playingCard rank="A" suit="C" text="textOnCard"}}
</div>
```
![Alt text](https://github.com/kaamodt/meteor-playing-cards-ui/blob/screenshots/screenshots/handLayout.png?raw=true "Hand Layout")

The number of cards you can display with these classes can easily be extended by adding your own css with the following structure for .cardsContainer:

```css
.card:nth-of-type(n) { left: ((n-1)*7)em; }
```
Where n is a number above 10.

And similar for the .cardsInHand class:

```css
.cardsInHand .card:nth-of-type(n) { left: (n-1)em; }
```
Where n is a number above 13.

## Scaling

The size is based out of the css property font-size. By default this is 14px. Add a class/id with a font-size defined to a wrapper div in order to scale the cards as wanted. Example:

```css
.size-20 {
  font-size: 20px;
}
```
```html
<div class="cardsContainer cardsInHand size-20">
  {{> playingCard rank="A" suit="H" text="textOnCard"}}
  {{> playingCard rank="A" suit="D" text="textOnCard"}}
  {{> playingCard rank="A" suit="S" text="textOnCard"}}
  {{> playingCard rank="A" suit="C" text="textOnCard"}}
</div>
```
