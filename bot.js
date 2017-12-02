var Twit = require('twit');
var TwitterBot = require('node-twitterbot').TwitterBot;
var Bot = new TwitterBot({
 consumer_key: process.env.BOT_CONSUMER_KEY,
 consumer_secret: process.env.BOT_CONSUMER_SECRET,
 access_token: process.env.BOT_ACCESS_TOKEN,
 access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
});
 function generateDish() {
      var ADJ_PROB = 0.5;
      var STRUCTURE_PROB = 0.5;
    var adjs = ["fried", "unlimited", "bottomless", "cheesy", "sloppy", "white cheddar", "Angus", "low-fat", "pumpkin cream", "All-American", "fit", "Santa Fe", "supreme", "sizzling", "bourbon", "buffalo", "cajun", "cali", "crispy", "ultimate", "deep dish", "homestyle", "classic", "southwest", "meat-lovers", "extra", "glazed", "garden", "harvest cheddar", "jalepeno", "sour cream and onion", "ranch", "tangy", "zesty", "cool ranch", "queso", "all beef", "$8", "$4", "barbecue ranch", "almond-crusted"];
      var ingredients = ["bacon", "chicken", "cheese", "beef", "havarti", "fish", "white chocolate", "pork", "cinnamon roll", "pepperoni", "ham", "roast beef", "crayfish", "clam", "calamari"];
      var structures = ["patty", "melt", "patty melt", "pie", "pancake", "pizza", "hot dog", "fingers", "rings", "slurpee", "sundae", "burger", "nuggets", "skins", "sliders", "sampler", "platter", "steak", "doughnut", "waffle", "smores", "nachos", "poppers", "wedges", "bites", "scrambler", "meal", "chowder", "slam", "bowl", "combo", "sandwich"];
      var dish = "";
      if (_.random(0, 100) < ADJ_PROB * 100) {
        dish += _.sample(adjs) + " ";
      }
      dish += _.sample(ingredients) + " ";
      if (_.random(0, 100) < STRUCTURE_PROB * 100) {
        dish += _.sample(structures) + " ";
      }
      dish += "with ";
      if (_.random(0, 100) < ADJ_PROB * 100) {
        dish += _.sample(adjs) + " ";
      }
      dish += _.sample(ingredients) + " ";
      if (_.random(0, 100) < STRUCTURE_PROB * 100) {
        dish += _.sample(structures) + " ";
      }
      return dish;
      }

var dish = generateDish(); 
Bot.tweet(dish);