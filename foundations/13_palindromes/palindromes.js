
const palindromes = (string) => {
    // check for number


    string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let start, end;
    for (let i = 0; i < string.length; i++) {
        start = string.at(i);
        end = string.at(string.length - 1 - i);
        if (start !== end) {
            return false;
        }
    }
    return true;
}

// Do not edit below this line
module.exports = palindromes;
