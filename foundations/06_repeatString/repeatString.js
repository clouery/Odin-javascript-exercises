// const repeatString = (string, num) => {
//     if(num < 0){
//         return 'ERROR';
//     }
    
//     for(i=0; i<10; i++) {
//         console.log("hello");
//     }

// };

const repeatString = (string, num) => {
    let res = "";
    if(num < 0){
        return "ERROR";
    }
    for(let i = 0 ; i < num ; i++){
        res += string;
    }
    return res;
}

// Do not edit below this line
module.exports = repeatString;
