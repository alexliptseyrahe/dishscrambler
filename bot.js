var Twit = require('twit');
var TwitterBot = require('node-twitterbot').TwitterBot;
var _ = require('underscore');
var s = require("underscore.string");

var Bot = new TwitterBot({
 consumer_key: process.env.BOT_CONSUMER_KEY,
 consumer_secret: process.env.BOT_CONSUMER_SECRET,
 access_token: process.env.BOT_ACCESS_TOKEN,
 access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
});
 function generateDish() {
      var ADJ_PROB = 0.5;
      var STRUCTURE_PROB = 0.5;
    var adjs = ["fried", "refried", "southern", "original", "honey dijon", "unlimited", "chef's choice", "bottomless", "cheesy", "sloppy", "white cheddar", "low-fat", "pumpkin cream", "All-American", "Santa Fe", "supreme", "sizzling", "bourbon", "buffalo", "3-alarm", "cajun", "cali", "crispy", "ultimate", "deep dish", "homestyle", "classic", "southwest", "meat-lovers", "extra", "glazed", "garden", "harvest cheddar", "jalapeño", "sour cream and onion", "ranch", "tangy", "zesty", "cool ranch", "queso", "all-beef", "$8", "$4", "barbecue ranch", "almond-crusted", "famous", "tex-mex", "deli-style", "corned", "whipped", "pepper jack", "100%", "double", "triple", "fresh", "beer-battered", "teriyaki", "Tabasco", "Country", "Grandma's", "chicken-fried", "grilled", "fiesta", "Nashville Hot", "endless", "New England"];
      var ingredients = ["bacon", "chicken", "cheese", "beef", "havarti", "fish", "white chocolate", "pork", "cinnamon roll", "pepperoni", "ham", "roast beef", "clam", "calamari", "iceberg lettuce", "tri-tip", "shrimp", "catfish", "onion", "beans", "sausage", "butter", "potato", "tater", "salmon", "meatball", "turkey", "tilapia"];
      var structures = ["patty", "melt", "patty melt", "pie", "gravy", "pancake", "pizza", "hot dog", "fingers", "rings", "slurpee", "sundae", "burger", "nuggets", "skins", "fillet", "sliders", "sampler", "platter", "steak", "doughnut", "waffle", "s'mores", "nachos", "poppers", "wedges", "bites", "scrambler", "meal", "chowder", "slam", "bowl", "combo", "sandwich", "salad", "po' boy", "biscuit", "wrap", "spread", "tots", "fries", "bread", "scampi", "™", "®", "quesadillas", "fajitas"];
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
      
      
var dish = s.capitalize(generateDish()); 
     

Bot.tweet(dish);