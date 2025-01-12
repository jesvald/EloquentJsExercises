// tamaño de la tabla
let size = 8;
//string vacio
let result = "";
//loop para las filas
let row = 1;
while (row <= size) {
    // loop para las columnas
    let column = 1;
    while (column <= size) {
        if((column + row) % 2){ // si la columna + la fila son par, agrega un #
            result += "#"
        } 
        else { // si es impar, agrega un espacio
            result += " "
        }
        column += 1; //Pasa a la siguiente columna
    } 
    result += '\n' //linebreak
    row += 1; //Pasa a la siguiente fila
}
console.log(result)
//terminado