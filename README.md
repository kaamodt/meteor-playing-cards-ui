# Playing Card UI

A simple meteor template for displaying playing cards.

Example:

{{> playing Card rank="A" suit="H" text="textOnCard"}}

The template can take 3 arguments, rank, suit and text. In reality there is no restrictions on the rank argument, but it is meant to work with values A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q and K. The suit argument takes C, D, H and S. The text argument is added if you want some text on the card. E.g, denoting the player of a card in a multiplayer game.

## Laying out cards

The template has defined two css classes for laying out the cards. The first, .cardstack, will lay out the cards besides each other with full width.

Example:

<div class="cardstack">
  {{> playing Card rank="A" suit="H" text="textOnCard"}}
  {{> playing Card rank="A" suit="D" text="textOnCard"}}
  {{> playing Card rank="A" suit="S" text="textOnCard"}}
  {{> playing Card rank="A" suit="C" text="textOnCard"}}
</div>

The other, .hand, will lay out the card overlapping. As you would normally stack card IRL when playing cards.
