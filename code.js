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


function uniqueCharacters(str) {
    for(let i = 0; i < str.length; i++)
    for(let j = i + 1; j < str.length; j++)
        if(str[i] === str[j])
        return false;   //O(n^2) 
        
} 
console.log(uniqueCharacters)

let abc = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let dog = ['The quick brown fox jumps over the lazy dog!']


function letters(abc) {
    for (let i = 0; i < abc.length; i++) 
    const abc = abc[i];
    if(abc === dog)
     return true
}
 
console.log(letters)  



function findLongestWord(str) {
    let strSplit = str.split('')

}