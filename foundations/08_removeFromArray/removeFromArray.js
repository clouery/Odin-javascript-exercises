// const removeFromArray = function() {
// };

// const removeFromArray = (array, ...toRemove) => {
//     let newArr = [];
//     array.forEach(item => {
//         if (!toRemove.includes(item)) {
//             newArr.push(item);
//         }
//     });
//     return newArr;

const removeFromArray = (arr, ...toRemove) => {
    return arr.filter(item => !toRemove.includes(item));
}
// Do not edit below this line
module.exports = removeFromArray;
