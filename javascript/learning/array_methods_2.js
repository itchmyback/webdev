// var examples = ["APPLE", "Apple Cider", "   applesauce", "apple pie", "green apples"]
// This would return an empty array

var examples = ["apple", "APPLE", "Apple Cider", "   applesauce", "apple pie", "green apples"]

var test1 = examples.filter(function(data){
    //test condition return if data === apple
    return data === 'apple';
//    if (data === 'apple') {
        // need this return
//        return data;
//    };
    // do we always need return? does it not just go off of boolean statement?
    // Jon-Mikel says yes, we should test
    // Jon-Mikel is correct, there must a return statement, doesn't just go off of boolean
});

console.log(test1);

// String Methods
var txt = "banana";
//note that length doesn't require ()
txt.length;
// 6

var txt = "I like bananas";
txt.length;
// 14 - includes white spaces

// trim() - trims white spaces at beginning and end of string as well as all line terminators
var txt0 = "        I like dogs.      "
console.log(txt0.length);

console.log(txt0.trim());
console.log(txt0.trim().length);

// slice() - clips out given range based on start and end point (not inclusive)
var words = "I love talking to animals."
console.log(words.slice(7,13));

//indexOf() - returns position where a string matches
var question = "What is my name?"
var result = question.indexOf("name");
// 11

newResult = question.indexOf("George");
// - 1, DNE

lastResult = question.indexOf("What, 3");
// 14 - starts at position 3, so it will skip the first instance of What

// substr() - clips out range based on start point and character range length
var yoname = "My name is Susan Jones."

var ss0 = yoname.substr(11,5);
console.log(ss0);
// 'Susan'

var ss1 = yoname.substr(11,11);
console.log(ss1);
// 'Susan Jones'

var ss2 = yoname.substr(11);
console.log(ss2);
// 'Susan Jones.'

// substring() - ???  - this is crazy, almost identical to slice
console.log(words.substring(7,13));
