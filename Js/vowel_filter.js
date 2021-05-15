const string = 'съешь же ещё этих мягких французских булочек и выпей чаю';
const vowels = ['е', 'ё', 'э', 'и', 'я', 'а', 'у', 'о', 'ы', 'ю'];
const getVowels = string => {
    let savedVowels = "";
    for (let i = 0; i < string.length; i++) {
        const eachLetter = string[i];
        if (vowels.indexOf(eachLetter) != -1){
            savedVowels += eachLetter;
        }
        

    }
    return savedVowels;

}

console.log(getVowels(string));