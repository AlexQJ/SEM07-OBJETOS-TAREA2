/* *
    TODO 1: Crear un método que reciba como parámetros un arreglo de números, un número para agregarlo al arreglo y un tamaño máximo del arreglo:
    ?       addElement(array, element, maxSize)
    TODO: Y se debe considerar lo siguiente:

    *Si el elemento no existe en el arreglo y no se ha alcanzado el tamaño máximo, agregar al nuevo elemento al final.
    ?       addElement([1,2,3,4], 10, 5)        //output: [1,2,3,4,10]

    *Si el elemento no existe en el arreglo y se ha alcanzado el tamaño máximo, el nuevo elemento debe reemplazar el último elemento del arreglo.
    ?       addElement([1,2,3,4], 10, 4)        //output: [1,2,3,10]

    *Si el elemento ya existe en el arreglo, se debe desplazar el elemento del arreglo al final.
    ?       addElement([1,2,3,4], 2, 5)         //output: [1,3,4,2]
*/


let arreglo = [1,2,3,4];
let separador = '-------------------------------------------------------------\n';
console.log('Arreglo original:', arreglo,'\n', separador )

function addElement(array, element, maxSize){
    let encontrado = 0;
    let indice;// indicará el indice del elemento si ya existe.
    let cabe;
    
    for(let i = 0;  i < array.length; i++){     // Recorrer el arreglo
        if(array[i] === element){
            encontrado++;                       // Determinar si el elemento existe dentro del arreglo
            indice = array.indexOf(element);
        }
    }
    if(encontrado >= 1){                        
        // ? Si existe. desplazarlo hasta el final.
        // * Hecho

        array.splice(indice, 1);    // eliminar elemento             
        array.push(element);        // volverlo a añadir al final
        console.log(`El elemento ${element} existe. Se desplaza al final del arreglo:`,array);
    }else{
        if(maxSize > array.length){
            cabe = true;
            // ? Si el elemento no existe en el arreglo y no se ha alcanzado el tamaño máximo, agregar al nuevo elemento al final.
            // * Hecho

            array.push(element);    // agregar el elemento al final

            console.log(`El elemento ${element} no existe y cabe en el arreglo. Se agrega al final.`, arreglo);
        }else{
            cabe = false
            // ? Si no existe y si se ha alcanzo el tamaño maximo del array reemplazar el ultimo elemento por el nuevo.
            // * Hecho
    
            array.pop();        // se elimina el ultimo elemento
            array.push(element);    // Se agrega el nuevo elemento al final
            console.log(`El elemento ${element} no existe y se alcanzo el máximo de elementos en el arreglo. Se reemplaza el ultimo por el nuevo`, array);
        }
        
    }
    console.log(separador)

}

addElement(arreglo, 2, 4);// Existe
addElement(arreglo, 10, 4);//No existe y no cabe
addElement(arreglo, 15, 10);// No existe y si cabe
