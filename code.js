// let array1=[1,2,3,4,5];

// function find_average(array) {
//     let acm=0;
//     for (let i=0;i<=array.length;i++){
//     acm+=array[i];
//     console.log(acm);
//   }
//     if (array.length==0){
//       return 0;
//     } else {
//     return acm/array.length;    
//     }
//   }


let arr1= [2,4,6,8,10];
let sum=0;

arr1.forEach((average)=> {sum+=average});

media=sum/arr1.length;
console.log(media);




const media2 = arr1.reduce((a, b) => a + b, 0) / arr1.length;
console.log(media2);