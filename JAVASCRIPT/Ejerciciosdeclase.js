const cohortes = [
    ["m,a,g"] ,
    ["m, e, t"]];
console.log(cohortes[0],[2]);

// Con for-in 
for(let fila in cohortes){
    for (let columna in cohortes[fila])console.log(cohortes[fila][columna]);
}
//forEach
const cohortes2 = [
    ["Marihan", "Adrian", "Gustavo"],
    ["Miri", "Emiliano", "TuTiaAbi"]];
    
cohortes.forEach(fila=>fila.forEach(columna=>console.log(columna)));

//for
for(let i=0;i<cohortes.length;i++){
    for(let j=0;j<cohortes[i].length;j++){
        console.log(cohortes[i][j]);
    }
}
