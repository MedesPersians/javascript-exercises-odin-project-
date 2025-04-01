const repeatString = function(string, number) {
    let i = 1;
    let newString = '';
    while (i <=number) {
        newString += string
        // console.log(string);
        i++;
    ;}
    return newString;
};
// Do not edit below this line
module.exports = repeatString;
