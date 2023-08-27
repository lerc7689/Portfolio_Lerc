let arreglo = [7,2,4,6,3,1,5,0];
let menor ;
let newArray = []

for(let e = 0; e < arreglo.length -1; e++){

    menor = arreglo[e];
    for(let i = e; i < arreglo.length; i++)
    {
        if(i ==0){
            menor = arreglo[i]
        }
        if(arreglo[i] <= menor)
        menor = arreglo[i]     
    }
    if(e==0){
        newArray = arreglo.slice(e,arreglo.indexOf(menor)+1)
        newArray.reverse();
        arreglo = [...newArray, ...arreglo.slice(arreglo.indexOf(menor)+1)];
    }
    else{
        newArray = arreglo.slice(e,arreglo.indexOf(menor)+1)
        newArray.reverse();
        arreglo = [...arreglo.slice(0,e), ...newArray, ...arreglo.slice(arreglo.indexOf(menor)+1)];
    }
}

console.log(arreglo)

