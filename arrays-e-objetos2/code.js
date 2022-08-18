
function maquina(materiaPrima){
  console.log(materiaPrima);
 }

function fabrica (callback, materiaPrima) {
    return callback(materiaPrima);
}

fabrica(maquina, "doido")