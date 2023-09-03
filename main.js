//*******************************************************************************************
// 
// $Workfile: main.js $
// $Author: Brian Fugate $ 
// 
// Codecademy Full-Stack Engineer Course
// Building Interactive Websites Portfolio Project: Mixed Messages
//
//*******************************************************************************************

// Create array of objects containing the quotes to use
const quotes = [
    {quote: "\n\nI alone cannot change the world, but I can cast a word0 across the word1 to create many word2.",
    author: 'Mother Teresa',
    types: ['noun', 'noun', 'noun']},
    {quote: "\n\nTwenty years from now, you will be more disappointed by the things you didn't do than by the"
    + " ones you did.\nSo, throw off the word0, sail away from safe word1, catch the trade winds in your word2.",
    author: 'Mark Twain',
    types: ['noun', 'noun', 'noun']}];

// Create arrays of words to enter
const nouns = ['cat', 'trampoline', 'monster', 'princess', 'lion', 'pirate', 'boat', 'ballerina', 
'superhero', 'teacher', 'chicken', 'snake', 'elf', 'reindeer', 'clown', 'Santa', 'dragonfly', 
'castle', 'zoo', 'monster truck', 'Zamboni', 'ice skate', 'banana', 'monkey', 'mouse', 'house', 
'hat', 'sock', 'soccer ball', 'ankle', 'flash card', 'water bottle', 'box', 'box of tissues', 
'can of soda', 'can of beans', 'baby carrier', 'hair bow', 'skirt', 'dress', 'phone case', 
'bouncy ball', 'nail file', 'minivan', 'tin can', 'rubber ball', 'rocking chair', 'garbage bag', 
'scissors', 'stapler', 'staple remover', 'lamp', 'energy drink', 'sprinkle', 'picture frame', 
'stone', 'rock', 'brick', 'swing', 'slide', 'chicken', 'dog dish', 'leash', 'bone', 'collar', 
'stuffed animal', 'headphone', 'earbud', 'microphone', 'laptop', 'straw', 'fence', 'post', 
'stick', 'tent', 'Lego', 'Lincoln Log', 'jar of dirt', 'box of pasta', 'spaghetti noodle', 
'elbow noodle', 'flour tortilla', 'egg', 'toilet bowl', 'chair', 'fern', 'herb', 'vitamin', 
'printer', 'wet wipe', 'diaper', 'phone cord', 'charger', 'television', 'DVD', 'remote control', 
'video camera', 'security camera', 'chapstick', 'makeup', 'paperclip', 'mixer', 'blender', 
'butcher knife', 'rainboot', 'hiking boot', 'snow boot', 'raincoat', 'mitten', 'glove', 'scarf', 
'claw', 'notebook', 'thermometer', 'compass', 'pen', 'pencil', 'book', 'clipboard', 'file', 
'folder', 'filing cabinet', 'sink', 'taco', 'pizza', 'pepperoni', 'sewing kit', 'needle', 
'thread', 'thimble', 'sewing machine', 'calendar', 'tree', 'Christmas tree', 'flower', 'flour', 
'sugar', 'candle', 'light bulb', 'trophy', 'lantern', 'statue', 'gate', 'bassinet', 'car seat', 
'car', 'truck', 'tractor', 'dragon', 'cot', 'blanket', 'tv tray', 'mouse pad', 'office chair', 
'laundry basket', 'iron', 'perfume', 'smelling salt', 'fire extinguisher', 'fire truck', 
'dump truck', 'police car', 'airplane', 'jet', 'ticket', 'cloud', 'raindrop', 'fingernail clipper', 
'cellphone', 'landline', 'teddy bear', 'duster', 'rubber ducky', 'quilt', 'heater', 'air conditioner', 
'website', 'video', 'bottle of ink', 'ink cartridge', 'wand', 'crystal ball', 'magic carpet', 
'dollar bill', 'coin', 'measuring cup', 'fork', 'spoon', 'whisk', 'potato smasher', 'egg timer', 
'bobby pin', 'clamp', 'curling iron', 'straightener', 'tablet', 'doll', 'hairbrush', 'toothbrush', 
'shower curtain'];

// Function used to randomly select appropriate word
function pickWord(type) {
    if (type == 'noun') {
        return nouns[Math.floor(Math.random() * nouns.length)];
    }
}

// Select random quote object from quotes array
let selectedQuote = Math.floor(Math.random() * quotes.length);

// Replace 3 words in quote
for (let i = 0; i < 3; i++) {
    quotes[selectedQuote].quote = quotes[selectedQuote].quote.replace('word' + i.toString(), pickWord(quotes[selectedQuote].types[i]));
}

// Output to console
console.log(quotes[selectedQuote].quote);
console.log(`\n    - NOT ${quotes[selectedQuote].author}\n`);