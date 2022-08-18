function past(h, m, s){
    let hourToS= h*3600;
    let minToS=m*60;
    let TotalSec=s+minToS+hourToS;

    return TotalSec*1000;



  }