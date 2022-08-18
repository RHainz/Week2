
const twoDimArr1 = [
    [1, 2, 3],
    [4, 3, 8],
    [5, 12, 9]
  ];

let maior=0;
for (let h=0; h<twoDimArr1.length; h++) {
for (let i=0; i<twoDimArr1[h].length; i++){
    if (maior<twoDimArr1[h][i]) {maior=twoDimArr1[h][i]};
    console.log(maior);
}
}



/*

let palavraUnica=wordsArr[0];
  let count=0;
  for (let h=0; h<wordsArr.length;h++) {
    palavraUnica=wordsArr[h];
    for (let i=0; i<wordsArr.length; i++) {
        console.log (palavraUnica);
        console.log (count);
        if (palavraUnica===wordsArr[i]) {
    
        count++;
    
    }
    if (count>1) {break}
   }
    if (count==1) {break}
  }
  console.log(palavraUnica) */