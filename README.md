# Hundir La Flota

El objetivo es desarrollar un juego Batalla naval, que tendrá una funcionalidad similar a la de este ejemplo: https://codepen.io/collosic/pen/JpDfn.

Hemos implementado un formulario por el que se introducirían los barcos a mano, y que por defecto crea un barco por línea para facilitar las prubas. Al validar el formulario se genera de forma aleatoria la flota del oponente. También contamos con un botón "Aleatorio" que genera ambas flotas de manera aleatoria. 
En la pantalla del juego, a la izquierda veremos nuestro tablero con los barcos dibujados, y conforme la máquina dispara se nos irán pintando agua o disparo dependiendo de si acierta o no. Si el contrincante acierta, sigue jugando hasta dar a agua, momento en el que se nos devuelve el turno. De igual manera, nosotros podemos disparar (en el tablero derecho) hasta que demos a agua. Añadimos un botón "Reiniciar" que vuelve al formulario para empezar de nuevo cuando finalice la partida.
Para poder publicar la página en Github Pages hemos tenido que eliminar la carpeta de node_modules ya que múltiples archivos daban error, pero en la entrega del aula virtual se incluyen.

## Historias de usuario
En la práctica se nos indican los requisitos en forma de las historias de usuario. Algunas no las hemos finalizado.

### Completas
* Historía de usuario 1: Como jugador querría colocar mis barcos en el tablero para empezar a jugar. 
* Historía de usuario 2: Como jugador querría poder disparar en el tablero del enemigo, para poder hundir sus barcos
* Historía de usuario 3: Como jugador querría guardar los disparos de ni enemigo en mi tablero
* Historía de usuario 5: Como jugador querría poder ver el tablero del enemigo con mis disparos y ver mi tablero con mis barcos y disparos recibidos.
* Historia de usuario 6: Como jugador querría que han hundido todos los barcos de un jugador para que saber quien ha ganado
* Historía de usuario 7: Como jugador querría poder colocar de forma aleatoria mis barcos, para poder jugar mas rápido
* Historía de usuario 8: Cómo desarrollador, querría que los barcos se guarden como objetos para poder aprovechar las ventajas de la POO (Abstracción, Herencia)
* Historía de usuario 9: Cómo desarrollador querría guardar los tableros como un array para poder guardar los barcos y disparos de ambos jugadores
* Historía de usuario 10: Cómo desarrollador querría utilizar las nuevas características de ES6 (let,const, plantillas de cadena, funciones flecha..) 
* Historía de usuario 12: Cómo desarrollador querría utilizar git y github para llevar el control de versiones de mi juego
* Historía de usuario 13: Cómo desarrollador querría publicar mi proyecto github en github pages para poder jugar online a mi juego.

### Incompletas
* Historía de usuario 4: Como jugador querría que al hundir un barco del enemigo me informe para saber que lo he hundido. Debido a cómo estructuramos el programa se nos complica la forma de comprobarlo y no lo hemos conseguido.
* Historía de usuario 11: Cómo desarrollador querría tener test unitarios con mocha y chai para probar las funciones de la lógica del juego. No implementamos estas pruebas

## Criterios de calificación.

Por otra parte, fijandonos en la rúbrica:
1. Hemos eliminado los errores de JS pasando el JSHint, y hemos enlazado el fichero .min.js para facilitar la construcción de la aplicación (uglifying). 
2. También hemos utilizado características nuevas de ES6, como son las funciones flecha, las variables let, etc. 
3. Hemos creado el jugador y los barcos como objetos: tenemos una clase Barco de la que heredan los tipos de barco, y un objeto jugador que contiene una lista de barcos.
![alt text](https://github.com/PazRubio/hundirLaFlota/blob/master/UML.JPG)
4. Permite jugar una partida contra el ordenador, colocando los barcos de forma manual y aleatoria, y el juego tiene una pequeña IA para hacer los ataques.
5. Como indicabamos en el punto 1, hemos pasado JSHint para evitar los errores de validación.
6. No hemos realizado las pruebas con mocha y chai, y la estructra de nuestro programa no contiene los métodos con los nombres necesarios.
7. Utilizamos un reporsitorio en Github y el juego está pueblicado en GitHub Pages para jugar por internet: [GitHub Pages](https://pazrubio.github.io/hundirLaFlota/)	


#### Autoras

- **Paz Rubio Rubio** - [Github](https://github.com/PazRubio)

- **Gema de la Fuente Romero** - [Github](https://github.com/Gema-de-la-Fuente)

