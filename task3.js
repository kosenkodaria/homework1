const strings = ['Star', 'Planet', 'Comet', 'Interstellar', 'Space'];
let wordLength = 0;
for (let i = 0; i < strings.length; i++) {
    wordLength = strings[1].length
    if (strings[i].length > wordLength) {
        console.log(strings[i]);
    }
    
}