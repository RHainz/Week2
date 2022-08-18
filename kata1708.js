ft=[1,"a","b",0, 15];  //== [1,2]

function filter_list(l) {
    return  l.filter((current)=>{
        if (current===0) {return "0"}
        if (typeof current==="number"){ return current}
    })
}

console.log(filter_list(ft));