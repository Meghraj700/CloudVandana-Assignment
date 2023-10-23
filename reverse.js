function revWords(rev) {
    let revSentence = '';
    let word = '';
    
    for (let i = 0; i < rev.length; i++) {
        const char = rev[i];
        
        if (char !== ' ') {
            word = char + word;
        } else {
            
            revSentence += word + ' ';
            word = ''; 
        }
    }
    
   
    revSentence += word;

    return revSentence;
}

const input = "This is a sunny day";
const reversed = revWords(input);
console.log(reversed);                  // Output Should be: "sihT si a ynnus yad"
                                                        //   "sihT si a ynnus yad"






