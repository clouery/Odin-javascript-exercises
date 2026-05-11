// const sumAll = function() {

// };

const sumAll = (first, second) => {
    if(typeof first !== 'number' || typeof second !== 'number' || first < 0 || second < 0 || !Number.isInteger(first) || !Number.isInteger(second)) {
        return 'ERROR';
    }
    let start = first
    let end = second;
    if(start > end) {
        start =second
        end = first;
    }
    let total = 0;
    let curNum = start;
    while (curNum <= end) {
        total += curNum;
        curNum++;
    }
    return total;
}
// Do not edit below this line
module.exports = sumAll;
