### Pseudocodigo
1. 1. Crear una funciòn llamada isValidCard que reciba un nùmero de una tarjeta de crèdito, por medio de un prompt()
2. Validar el input que el usuario introdusca
	2.1 Validar que no haya campos vacìos
3. Comprobar validez de tarjeta de crèdito
	3.1 Utilizar el algoritmo de Luhn.
	3.2 Teniendo el nùmero de tarjeta de credito a validar, multiplicar por 2 los dìgitos que ocupan las posiciones pares empezando por el final.
	3.3 Sumar los dígitos que ocupaban las posiciones impares con los dígitos de los productos obtenidos
	3.4 Dividir el resto entre 10 
	3.5 Si el total de la divisiòn es igual a cero, el numero es correcto.
	3.6 Si no es igual a cero el numero es incorrecto.
4.FIN












   4.1. Utilizar la formula modular (x-65+n)%26+65.
5. Optener el codigo ascii de una letra 
	4.1 Utilizar el metodo string.charCodeAt().
6. Convertir el codigo ascii a una letra
    4.2 Utilizar el meto String.fromCharCode().
7. Regresar frace encriptada
8. FIN 
