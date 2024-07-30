//       // //Гурвалжингийн периметрийг олох.
//       // const a = prompt("a-g oruul");
//       // const b = prompt("b-g oruul");
//       // const c = prompt("c-g oruul");
//       // const p = Number(a) + Number(b) + Number(c) * 2;
//       // console.log(p);

//       // // Өгсөн тоог цельсээс фаренгейт рүү хөрвүүл (F = (9/5)C + 32).
//       // const C = prompt("heden c avahaa oruulnuu");
//       // const F = Number(f) * cc + 32;
//       // console.log(cc);

//       // //Өгсөн cm -г inch рүү хөрвүүлэх (1cm = 1/2.54 inch)

//       // const cm = prompt("heden cm avahaa oruulnuu");
//       // const inch = cm / 2.54;
//       // console.log(inch);

//       // //1 удаагийн хэвлэлтээр үүнийг хэвлэж гаргана уу.
//       // //Hello I am "Name Here".
//       // //I am 'Age here' years old.
//       // //This is the new line with tab and some \backslashes\.
//       // let Text =
//       //   "Hello I am Iveel.\n  I am 13 years old. \n \t  This is the new line with tab and some \\backslashes\\  ";
//       // console.log(Text);

//       // // Гаднаас 2 утга аваад аль урт string-г alert ашиглан харуул .Ижил урттай бол ижилхэн гэж хэвлээрэй .
//       // const tex1 = prompt("ehniihee oruulnuu");
//       // const text2 = prompt("hoyrtohoo oruulnuu");
//       // if (tex1.length < text2.length) {
//       //   alert("hoyrtoh in ih");
//       // } else if (tex1.length > text2.length) {
//       //   alert("ehniih in ih");
//       // } else {
//       //   alert("tentsuu");
//       // }
//       // // 0-10 хүртэлх натурал тоог хэвлэх программ бич.
//       // for (let i = 0; i <= 10; i++) {
//       //   console.log(i);
//       // }
//       // // 15-3 хүртэлх натурал тоог хэвлэх программ бич.
//       // for (let i = 15; i >= 3; i--) {
//       //   console.log(i);
//       // }
//       // // Гончигсумлай хоолны газар оров. Орсон хоолны газар нь 5000₮ - 30000₮
//       // // хооронд 15% нэмж төлдөг, бусад үед 20% - ийг нэмж төлдөг бол. Эдгээр тохиолдолуудад нийт хэдийг төлөхийг
//       // // олно уу. Эдгээр тохиолдолуудад тус бүр хэдийг төлөх вэ? 3000₮, 27500₮, 100000₮.

//       // let oros1 = prompt("une oruul");
//       // let oros = (Number(oros1) / 100) * 15 + Number(oros1);
//       // let oros2 = (Number(oros1) / 100) * 20 + Number(oros1);
//       // if (5000 <= oros1 && oros1 <= 30000) {
//       //   alert(`tuluh tulbur bol ${oros}`);
//       // } else {
//       //   alert(`tuluh tulbur bol ${oros2}`);
//       // }
//       //       1.N тоо өгөхөд NxN хэмжээтэй шатрын хөлөг буцаах .
//       // Гаралт:
//       // _#_
//       // #_#
//       // _#_
// // let n = 3;
// // let result = "";
// // for( let j = 0; j < n ; j++ ){
// //   for(let i = 0; i < n; i++){
// //   if(j % 2 == 0){
// //       if(i % 2 == 0){
// //         result += "_"
// //       }
// //       else{
// //         result += "#"
// //       }
// //   }
// //     else {
// //       if(i % 2 == 0){
// //         result += "#"
// //       }
// //       else{
// //         result += "_"
// //       }   
// // }
// //   }
// //    result += "\n"
// // }
// // console.log(result)

// // 2.Console a Pyramid of Stars (*) .
// // (*) Од ашиглан пирамидыг хэвлэнэ үү .
// // for example :
// //   *
// //  ***
// // *****
// //*******

// // const a = 5;
// // const mid = (a - 1);
 
// // for (let i = 0; i < a - 1; i++){
// //   let line = ""
// //   for (let j = 0; j < 2 * a -1; j++){
// //     if (j >= mid - i && j <= mid + i){
// //       line += "*";
// //     } else {
// //       line += " ";
// //     }
// //   }
// //   console.log(line);
// // }








// // let StudentAges = [10 , 20, 15 ,19];
// // let sum = 0;
// // for(let i = 0; i < StudentAges.length; i++){
// //   sum += StudentAges[i];
// // } 
// // let average = sum / StudentAges.length;
// // console.log(average);


// // let userBlance = [1000, 2000 , 2500, 4000000, 13054, 323425];
// // for (let i = 0; i < userBlance.length; i++){
// //   userBlance[i] = (userBlance[i] * 1.15);
// // }
// // console.log(userBlance)


// // 1.Array - ын хувьсагчийг itCompanies гэж зарлаж, Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon зэрэг анхны утгыг оруулна уу. 
// // console.log() ашиглан array хэвлэх
// // Array дахь компаниудын length хэвлэх
// // Эхний компани, дунд болон сүүлчийн компанийг хэвлэх
// // Компани бүрийг хэвлэх
// // Компанийн нэр тус бүрийг нэг нэгээр нь том үсгээр сольж хэвлэж гарга (JavaScript String toUpperCase() , toLocaleLowerCase() )



// let itCompanies =['Facebook' , 'Google', 'Microsoft' ,'Apple' , 'IBM' , 'Oracle' , 'Amazon'];
// console.log(itCompanies);


// for(let i = 0; i < itCompanies.length; i++ ){
//   console.log(itCompanies[i].length)
// }

// let a = "";
// for( let i = 0; i < itCompanies.length; i++){
//   a += itCompanies[i]
//   a += "\n"
// }
// console.log(a);


// let result = [];
// let itCompanies =['Facebook' , 'Google', 'Microsoft' ,'Apple' , 'IBM' , 'Oracle' , 'Amazon'];
// for(let i = 0; i < itCompanies.length; i++){
//   result += itCompanies[i] 
//   result += "\n"
// }
// console.log(result.toUpperCase())
// console.log(itCompanies.slice(0,3))


// console.log(itCompanies.slice (4,7))

// let a = "";
//  a += itCompanies.shift()
//  console.log(itCompanies)

// 17
// let b = "";
//  b += itCompanies.pop()
//  console.log(itCompanies)
// console.log(itCompanies[0])
// console.log(itCompanies[itCompanies.length-1])
// let data = ['Засгийн', 'газарт', '6.4', 'сая', 'тонн', 'Нүүрс', 'алдагдсан', 'гэх', 'мэдээлэл', 'ирээгүй', 'байна.', 'Бодит', 'байдалд', 'ийм', 'их', 'хэмжээний', 'нүүрс', 'алдагдсан', 'гэх', 'асуудал', 'эргэлзээтэй', 'байна.', 'Хууль', 'хяналтын', 'байгууллага', 'хяналт', 'шалгалтын', 'ажил', 'явуулж', 'байна'];

// let haisan = 'Нүүрс';

// let hariu = 0; 
// for ( let i = 0; i < data.length ; i++){
//   if(data[i].toLowerCase() ===  haisan.toLowerCase()){
//     hariu += 1;
//   }
// }
// console.log(hariu)

// // let arrayOfNumbers = ['43' ,'56' ,'23' ,'89' ,'88' ,'90' ,'99' ,'65' ,'15', '29', '11'];
// // arrayOfNumbers.sort();
// // console.log(arrayOfNumbers)

// // console.log(arrayOfNumbers[0])


// // console.log(arrayOfNumbers[arrayOfNumbers.length-1])




// let arrayOfNumbers = ['43' ,'56' ,'23' ,'89' ,'88' ,'90' ,'99' ,'65' ,'15', '29', '11'];

// arrayOfNumbers.push('110')
// console.log(arrayOfNumbers)


// arrayOfNumbers.unshift( '110')
// console.log(arrayOfNumbers)



// // 5.Ижилхэн урттай массив(array) өгөхөд харилцан үржүүлж хариуг массив(array)-д буцаа .
// // Input:
// // - arr1 = [3, 45, 23, 78, 34]
// // - arr2 = [4, 2, 34, 4, 12, 1]
// // Output: [12, 90, 782, 312, 408, 1]
// let arr1 = [3, 45, 23, 78, 34];
// let arr2 = [4, 2, 34, 4, 12, 1];
// let result = [];
// for ( let i = 0; i < arr1.length; i++){
//   result += `${Number(arr1[i]) * Number(arr2[i])} `;
// }
//  result = result.split( ' ' )
// console.log(result)
// // 6. array values : 5 6 4 12 19 121 1 7 9 63 
// // 1. Хэдэн ширхэг сондгой тоо байгаа вэ?
// // 2. Хэдэн ширхэг тэгш тоо байгаа вэ?

// let  values = [5, 6 ,4 ,12 ,19, 121, 1 ,7 ,9 ,63 ];
// let result1 = 0; 
// let result2 = 0; 
// for ( let i = 0; i < values.length; i++){
// if (values[i] % 2 == 0){
//   result1 += 1
// }
// else {
//   result2 += 1
// }
// }
// let b = (` tegsh too ${result1} bn`)
// let c = (` sondgoi too ${result2} bn`)
// console.log(b)
// console.log(c)


// 7.Array-н давхардсан утгуудыг array-т буцаадаг код бичээрэй .
// Input: [4, 2, 34, 4, 1, 12, 1, 4]
// Output: [4, 1]




