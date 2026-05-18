// const findTheOldest = ( (people) =>{
//     let oldestIdx = -1;
//     let oldestAge = -1;
//     for( let i = 0 ; i < people.length ; i++){
//         let death = new Date().getFullYear();
//         let born = people[i].yearOfBirth;
//         // check if there is yearOfDeath
//         if(people[i].yearOfDeath !== undefined) {
//             death = people[i].yearOfDeath;
//         }
//         let age = death - born;
//         if(age > oldestAge){
//             oldestAge = age;
//             oldestIdx = i;
//         }
//     }
//     return people[oldestIdx];
// });

function getAge(birth, death) {
    if(!death) {
        death = new Date().getFullYear();
    }
    return death - birth
}
const findTheOldest = ((people) =>{
    return people.reduce( (oldestName, curName) => {
        // compare the current and the oldest
        let curAge = getAge(curName.yearOfBirth, curName.yearOfDeath);
        let oldestAge = getAge(oldestName.yearOfBirth, oldestName.yearOfDeath);
        return curAge > oldestAge ? curName : oldestName;
    },people[0]);
});
// Do not edit below this line
module.exports = findTheOldest;
