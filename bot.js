var Twit = require('twit');
var TwitterBot = require('node-twitterbot').TwitterBot;
var _ = require('underscore');
var s = require("underscore.string");

 function generateDish() {
      var ADJ_PROB = 0.5;
      var STRUCTURE_PROB = 0.5;
      var PLATE_PROB = 0.5;
      var SUFFIX_PROB = 0.5;
    
    var adjs = ["fried", "build-your-own", "chargrilled", "bold", "12-hr", "fiery", "Baja", "slow-cooked", "mesquite", "creamed", "skinnilicious", "jumbo", "smothered", "Million-dollar", "boneless", "Tuscan", "Italian", "chopped", "finger-lickin'", "refried", "southern", "original", "old-fashioned", "Dave's", "honey dijon", "unlimited", "chef's choice", "bottomless", "cheesy", "sloppy", "white cheddar", "low-fat", "pumpkin cream", "All-American", "Santa Fe", "supreme", "sizzling", "traditional", "bourbon", "buffalo", "3-alarm", "cajun", "cali", "crispy", "ultimate", "deep dish", "homestyle", "classic", "southwest", "meat-lovers", "extra", "glazed", "garden", "harvest cheddar", "jalapeño", "sour cream and onion", "ranch", "tangy", "zesty", "cool ranch", "queso", "all-beef", "$8", "$4", "barbecue ranch", "almond-crusted", "famous", "tex-mex", "deli-style", "corned", "whipped", "pepper jack", "100%", "double", "triple", "fresh", "beer-battered", "teriyaki", "Tabasco", "Country", "Grandma's", "chicken-fried", "grilled", "fiesta", "Nashville Hot", "endless", "New England"];
      var ingredients = ["bacon", "chicken", "cream cheese", "Cool Whip", "mozzarella", "cheese", "beef", "havarti", "garlic", "fish", "white chocolate", "pork", "provolone", "cinnamon roll", "pepperoni", "ham", "roast beef", "clam", "calamari", "iceberg lettuce", "tri-tip", "shrimp", "catfish", "onion", "sausage", "butter", "potato", "salmon", "meatball", "turkey", "tilapia", "chili", "mac 'n cheese", "ground beef", "flounder", "sweet corn", "coleslaw"];
      var structures = ["patty", "pie", "gravy", "pancake", "pizza", "hot dog", "fingers", "rings", "wings", "with all the fixins", "burger", "nuggets", "sticks", "skins", "knots", "meatloaf", "fillet", "sliders", "steak", "doughnut", "s'mores", "nachos", "poppers", "wedges", "bites", "chowder", "salad", "biscuit", "spread", "tots", "fries", "scampi", "™", "®", "quesadillas", "fajitas", "waffle fries"];
      var plates = ["sampler", "platter", "melt", "patty melt", "bowl", "scrambler", "meal", "combo", "wrap", "grinder", "sandwich", "po' boy", "slam", "plate", "bread", "biscuit", "waffle", "doughnut", "slurpee", "sundae"];
      var conjunctions = ["with", "topped with", "served with", "on", "with a side of", "with a bucket of", "with a bowl of"];
      var suffixes = ["-coated", "-stuffed", "-crusted", "-topped"];
      var dish = "";
    
    
      if (_.random(0, 100) < ADJ_PROB * 100) {
        dish += _.sample(adjs) + " ";  
      } else if (_.random(0, 100) < SUFFIX_PROB * 100) {
        dish += _.sample(ingredients) + _.sample(suffixes) + " ";
      }
      
      dish += _.sample(ingredients) + " ";
          
      if (_.random(0, 100) < STRUCTURE_PROB * 100) {
        dish += _.sample(structures) + " ";
      
      } else if (_.random(0, 100) < PLATE_PROB * 100) {
        dish += _.sample(plates) + " ";
      }
     
      dish += _.sample(conjunctions) + " ";
      
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

console.log(dish);     
var Bot = new TwitterBot({
 consumer_key: process.env.BOT_CONSUMER_KEY,
 consumer_secret: process.env.BOT_CONSUMER_SECRET,
 access_token: process.env.BOT_ACCESS_TOKEN,
 access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
});

Bot.tweet(dish);