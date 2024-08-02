

let arr = [13,4,15,16,-2, 2, 1, -1, -12]
let num = 0;
let haha = [];
let lol = [];
function near(){
arr.push(num)
arr.sort((a,b) => a-b);
result = arr.indexOf(num) +1
result2 = arr.indexOf(num) -1
for(let i = 0; i < arr[result];i++){
    lol.push(i)
}
for(let j = 0; j > arr[result2]; j--){
    haha.push(j)
}
if (haha.length > lol.length){
    console.log(arr[result])
}
if(lol.length > haha.length){
    console.log(arr[result2])
}
if(lol.length == haha.length){
    console.log(arr[result])
    console.log(arr[result2])
}
}

near()



// example
// input["eva","jak"];
// output["ejvak"]

// input["eva","jakoo"];
// output["ejvakoo"]

// let result = []
// let arr = ["eka","jak"]
// function plus(){

//     for(let i = 0; i <1; i++){
// for(let i = 0; i < arr[0].length; i++){
//     result.push(arr[0][i])
// }

// for(let i = 0; i < arr[arr.length-1].length; i++){
//     result.push(arr[arr.length-1][i])
// }
// }
// console.log(result)
// }


// plus()









