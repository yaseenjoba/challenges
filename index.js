//challenge 1.
function getPositives(arr) {
    return arr.filter((value) => value > 0);
}
//challenge 2.
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}
//challenge 3.
function checkKey(object, key) {
    return object.hasOwnProperty(key);
}
//challenge 4.
function checkArray(object) {
    return Array.isArray(object);
}
//challenge 5.
function capitalize(text) {
    let arr = text.toLowerCase().split(' ');
    let i;
    for (i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
    }
    // return it as a string 
    return arr.join(' ');
}
//challenge 6.
function bubbleSort(inputArr) {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr;
}
let student = {
    name: "yaseen",
    id: 181033,
    major: "CSE"

};
let arr1 = [1, 2, 5, 6, 0, 1, 4, 5];
let arr2 = [-1, -6, 5, 6, 0, 1, 4, 5];
document.getElementById("challenge1").innerHTML = getPositives(arr2);
document.getElementById("challenge2").innerHTML = mergeArrays(arr1, arr2);
let test = "mark";
document.getElementById("challenge3-1").innerHTML = checkKey(student, test);
let test1 = "id";
document.getElementById("challenge3-2").innerHTML = checkKey(student, test1);
document.getElementById("challenge4-1").innerHTML = checkArray(arr2);
document.getElementById("challenge4-2").innerHTML = checkArray(student);
let txt = "yaseen hazem joba";
document.getElementById("challenge5").innerHTML = capitalize(txt);
document.getElementById("challenge6").innerHTML = bubbleSort(arr2);