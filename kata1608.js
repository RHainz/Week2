a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"

function longest(s1, s2) {
    let juntaTudo=s1+s2;
    let emArr=juntaTudo.split("");
    let modArr=[];
    
    let finalArr=emArr.forEach((current,index) => {
        console.log(modArr);
        if (index===emArr.length){
            return modArr;
        }
        if (!modArr.includes(current)) {
            modArr.push(current);
        }
        
    });
    
    let sortArr=modArr.sort((a,b)=>{return a.localeCompare(b)});
    let strFin=sortArr.toString("");
    let gskFin=strFin;
    for (let i=0; i<gskFin.length; i++) {
        gskFin=gskFin.replace(",", "");
    }
    console.log(gskFin);
    return gskFin;
}

const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

// Set não permite duplicatas. Mas deve ser transformado em arr. Então longest = [... SET] - Spread Set.

longest(a,b);

function long2 (s1,s2) {
    return (s1+s2).split("").filter(onlyUnique).sort().join("")
}

function onlyUnique (current, index, selfArray) {
    return self.indexOf(value)===index;
}

// const arr=["a","b","c","c"]
// arr.indexOf("c")= retorna o primeiro (index =2)
//  se comparar o index 2 com o 3 (letra c também), dá false e não retorna o valor. 
