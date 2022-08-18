// Objetos

// Dicionarios

const obj ={
    key:"value",

};

const danielDisconect={
    user: "danielDisconect",
    seguidores: [{}],
    seguindo: [{}],
}

const endereco={
    rua: "Rua dos Bobos",
    n: 0,
    cep: 00000000,
    UF: "SP",
    cidade:"São Paulo",
}



// Dot Notation
endereco.rua 

// E quando não sabemos o que acessar ?

const boletim={
    pt: 6,
    mat: 9,
    hist: 4,
    geo: 7,
    edFis: 3,
    filo:10,
    isApproved: false,
}

// Braket Notation

const materia= "pt";

//boletim.[materia];

console.log(endereco.rua);
console.log(boletim[materia]);