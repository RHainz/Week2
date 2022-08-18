let arr="abracadabra";
/* arr=arr.toLowerCase();
let toStr=arr.split("");

console.log(toStr);

function countVo (arr1) {
    let count=0;
    if (arr1==="a"||arr1==="e"||arr1==="i"||arr1==="o"||arr1==="u") {
        count++;
    }
    
    return count;
}

let todas=toStr.filter(countVo);
console.log(todas.length); */

function getCount (str) {
    let vogais=["a","e","i","o","u"];
    let vogaisCount=str.split('').filter((currentLetter) => vogais.includes(currentLetter));
    return vogaisCount.length
}

let tamanho=getCount(arr);
console.log(tamanho);