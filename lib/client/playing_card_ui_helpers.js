Template.playingCard.helpers({
  suitString: function(suit) {
    var suits = {'H': '&hearts;', 'S':'&spades;', 'D':'&diams;', 'C':'&clubs;'}
    if (suits[suit] === "undefined"){
      throw Meteor.Error("suit-undefined", "It seems the suit is not H, S, D or C");
    }
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
