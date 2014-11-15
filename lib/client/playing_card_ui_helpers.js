Template.playingCard.helpers({
  suitString: function(suit) {
    var suits = {'H': '&hearts;', 'S':'&spades;', 'D':'&diams;', 'C':'&clubs;'}
    return Spacebars.SafeString(suits[suit]);
  },
  rankString: function(rank){
    if (rank == "A"){
      return "";
    }
    return rank;
  },
  isAce: function(rank){
    if (rank == "A"){
      return "ace";
    }
    return "";
  }
});
