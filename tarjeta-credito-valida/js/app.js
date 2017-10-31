var numbers = ['4','0','0','8','3','9','5','2','0','1','5','2','6','3'];

var isValidCard = function (array){
  
  var newArray = [];
  var size = array.length;
  var lastPosition = size -1;
  
  for (var i = lastPosition; i>=0; i--){
    /*en el nuevo array se va agregando, utilizando el meto push, se guardan los elementos al reves*/
    newArray.push(array[i]);
  }
  //La funcion retorna el nuevo array
  return newArray;
  
  /*invocando a la funcion y pasa como parametro el array que sea, mostrando la solucion en consola*/
}

console.log(isValidCard(numbers));
console.log(numbers);