//1) Sum Zero
let numArry = [0, 1, 3, 4, 5,]
sum = 0

let result = numArry.filter(function(item) {
    for (let i = 0; i < numArry.length; i++) {
        sum += item[i];
    }
    if (sum !== 0) {
        return item
    }

})
console.log(result) // O(N)

//2) Unique Characters
const charString =("Thequickbrownfoxjumpedoverthelazydogs");

function unique(charString){
    for (let i=0; i < charString.length; i++) {
        for (let j = 0; j < charString.length; j++) {
            if (charString[i] === charString[j])
            return false;

            return true;
        }
    }
}
//O(N^2)
unique(charString)

//3) Pangram Sentence

let abc = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let dog = ['The quick brown fox jumps over the lazy dog!']


function letters(abc) {
    for (let i = 0; i < abc.length; i++) 
    const abc = abc[i];
    if(abc === dog)
     return true
}
 
console.log(letters)  


//4) Longest Word
function findLongestWord(str) {
    let strSplit = str.split('');

    let findLongestWord = "";
    for(let index = 0; index < splStrArray.length; index++) {
        if(splStrArray[index].length > findLongestWord.length) {
            longestWord = splStrArray[index];
        }
    }
  return longestWord

}
//O(N^2)
const perf = require('execution-time')();
perf.start();
findLongestWord("The quick brown fox jumped over the lazy dogs");
let results = perf.stop();
console.log('Results for the longest word');
console.log(results);

// time: 0.3358,
// words: '242 μs',
// preciseWords: '255.9 μs',
// verboseWords: '225 microseconds 900 nanoseconds'