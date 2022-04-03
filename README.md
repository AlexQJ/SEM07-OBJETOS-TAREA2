# SEM07-OBJETOS-TAREA2
## Tarea 2

### Crear un método que reciba como parámetros un arreglo de números, un número para agregarlo al arreglo y un tamaño máximo del arreglo:
   >addElement(array, element, maxSize)
### Y se debe considerar lo siguiente:

   #### Si el elemento no existe en el arreglo y no se ha alcanzado el tamaño máximo, agregar al nuevo elemento al final.
           addElement([1,2,3,4], 10, 5)        //output: [1,2,3,4,10]

   #### Si el elemento no existe en el arreglo y se ha alcanzado el tamaño máximo, el nuevo elemento debe reemplazar el último elemento del arreglo.
           addElement([1,2,3,4], 10, 4)        //output: [1,2,3,10]

   #### Si el elemento ya existe en el arreglo, se debe desplazar el elemento del arreglo al final.
           addElement([1,2,3,4], 2, 5)         //output: [1,3,4,2]
