# Hundir La Flota

En esta práctica hemos creado un formulario y un login para poder incorporarlo a la práctica de PUFO.SA de la asignatura Desarrollo Web Servidor.

## Proceso de creación del formulario:

Creamos un formulario con todos los campos obligatorios de Nombre, Apellidos, Usuario, Fecha de contrato, Salario, Contraseña de acceso y Confirmación de contraseña. Y los opcionales Trabajo, Jefe y Teléfono móvil. La estructura del formulario la implementamos en HTML5 y con CSS le damos estilo.

\*\*1.Requisitos funcionales\*\*

Uno de los requisitos de la práctica era que se validaran los datos introducidos por el usuario.

Para ello utilizamos las restricciones que nos proporciona HTML5 con la etiqueta type y pattern y funciones de JavaScript.

Con JavaScript también le dotamos al formulario de interactividad, al cambiar los mensajes de error predeterminados de HTML5.

El formulario de alta debe contar con los siguientes campos:

- Nombre  (Obligatorio) Sólo puede tener entre 2 y 15 caracteres, no puede contener números
- Apellido (Obligatorio) Sólo puede tener entre 2 y 15 caracteres, no puede contener números
- Usuario (Obligatorio) Debe ser un email válido del dominio de la empresa, ejemplo: pedro.sanchez@pufo.es
- Trabajo: Mostrar un desplegable con el nombre de los tipos de trabajo.
- Jefe: Mostrar un desplegable con los nombres de los Jefes
- Fecha de contrato. De tipo Date (Obligatorio). No puede ser anterior al año 2000 ni posterior a la fecha actual
- Teléfono móvil (Opcional): Debe ser un número válido español (9 dígitos que comienzan por 6 o 7)
- Salario (Obligatorio). No puede ser menor que el salario mínimo (858,55€) ni mayor que el del CEO (12.000€)
- Contraseña de acceso (Obligatorio). Para que sea válida debe tener al menos ocho caracteres y contener al menos una letra minúscula, una mayúscula, un número y un símbolo
- Confirmación de contraseña (Obligatorio)

- Para validar los diferentes campos obligatorios primero deben pasar los filtros de pattern y type que hemos establecido para cada input en el HTML5, también para que el usuario no deje ningún campo vacío hemos puesto a estos campos el atributo required. Además hemos añadido el atributo title=&quot;Obligatorio&quot; en los label para que al pasar el ratón por encima aparezca un mensaje de Obligatorio.

La validación con JS consiste en seleccionar el input del formulario que queramos validar a través de su id, lanzamos un evento, que al hacer keyup de una tecla del teclado, lance la función comprobando si se cumple la expresión regular o si está vacío el input del elemento, si el campo se completa de forma incorrecta se lanza un mensaje de error personalizado para  informar al usuario.

Ejemplo de validación:

var nombre = document.getElementById(&quot;Nombre&quot;);

nombre.addEventListener(&quot;keyup&quot;, function(){

    var expReg = /[A-Za-z]{2,15}/g;

    if(!expReg.test(Nombre.value) || nombre.value == &quot;&quot;){

        nombre.setCustomValidity(&quot;Introduzca un nombre que contenga entre 2 y 15 caracteres, NO númericos&quot;);

    }

    else{

        nombre.setCustomValidity(&quot;&quot;);

    }

});

Para la confirmación de la contraseña lo que hicimos fue comparar el valor del input de contrasenia con el de contrasenia2.

var contrasenia = document.getElementById(&quot;contrasenia&quot;);

var contrasenia2 = document.getElementById(&quot;contrasenia2&quot;);

contrasenia.addEventListener(&quot;keyup&quot;, function(){

    var expReg = /^(?=.\*[a-z])(?=.\*[A-Z])(?=.\*\d)(?=.\*\W)[A-Za-z\d\W]{8,16}$/g;

    if((!expReg.test(contrasenia.value) || contrasenia.value == &quot;&quot;)){

        contrasenia.setCustomValidity(&quot;La contraseña debe incluir una minúscula, una mayúscula, un número, un simbolo y no tener espacios en blanco&quot;);

    }

    else{

        contrasenia.setCustomValidity(&quot;&quot;);

    }

});

contrasenia2.addEventListener(&quot;keyup&quot;, function(){

    var expReg = /^(?=.\*[a-z])(?=.\*[A-Z])(?=.\*\d)(?=.\*\W)[A-Za-z\d\W]{8,15}$/g;

    if(contrasenia.value !== contrasenia2.value){

        contrasenia2.setCustomValidity(&quot;La contraseñas deben coincidir&quot;);

    }

    else{

        contrasenia2.setCustomValidity(&quot;&quot;);

    }

});

- Campos no obligatorios:

Se validan a través de HTML5 y con javascript.

\&lt;label\&gt;Móvil:\&lt;/label\&gt;

\&lt;input type=&quot;number&quot; id=&quot;movil&quot; pattern=&quot;/^[6|7][0-9]{8}$/&quot;\&gt;

\&lt;div class=&quot;txtError&quot;\&gt;\&lt;/div\&gt;

movil.addEventListener(&quot;keyup&quot;, function(){

    var expReg = /^[6|7][0-9]{8}$/g;

    if(!expReg.test(movil.value) || movil.value == &quot;&quot;){

        movil.setCustomValidity(&quot;El número de teléfono es incorrecto, debe empezar por 6 o 7 y tener 9 dígitos&quot;);

    }

    else{

        movil.setCustomValidity(&quot;&quot;);

    }

});

- Jefe y Trabajo:

Se han creado dos funciones que contienen los arrays de jefes y trabajos. Estas funciones crean los options con  el atributo value de cada uno de los jefes y trabajos y se añaden en los select correspondientes creados en el html.

\*\*2.Requisitos técnicos:\*\*

- Para indicar de forma visible los campos que son obligatorios añadimos en sus correspodientes \&lt;label\&gt; un (\*), en los inputs el atributo required y  el atributo title=&quot;Obligatorio&quot; en los label para que al pasar el ratón por encima aparezca un mensaje de Obligatorio.

- Si los datos son correctos, el formulario redirigirá al login y mostrará un mensaje que indique que usuario se registró correctamente y creará una una cookie con el nombre del usuario y su contraseña.

-Si no son correctos mostrará se colocará el foco en el input mal completado y saldrá un mensaje explicando los requisitos del formato del input.

- Al hacer login se comprobará en las cookies si existe para ese usuario y la contraseña es correcta, en ese caso creará una cookie de sesión para ese usuario.

- También se añadirá la opción de cerrar sesión que borrará la cookie de sesión creada anteriormente.

- No se podrá utilizar ningún tipo de framework para la implementación del formulario.

\*\*3.Funciones para las cookies\*\*

- Cookie de usuario que se crea cuando completa el formulario de registro:

Para crear las cookies hemos hecho la función setCookie que recibe el nombre, la contraseña y un valor numérico que es el tiempo en el que se borrará la cookie. La función crea un par clave-valor con el nombre y la contraseña que el usuario ha introducido al rellenar el formulario de registro. Esta función la llamamos en el momento que se pulsa el botón de &quot;Registrar Empleado&quot; y se ha validado correctamente el formulario.

La función getCookie lo que hace es coger los datos del nombre y la contraseña y comprueba si esas credenciales coinciden con la cookie de algún usuario registrado.

- Cookie de sesión que se crea cuando el usuario hace el login:

Cuando el usuario rellena los campos del login se llama a una función que esta a su vez llama a getCookie y comprueba que el nombre y la contraseña cifrada estén en las cookies creadas al hacer el registro(cookie de usuario), si es así, se llama a la función setCookie que crea la cookie de sesión y se muestra un mensaje de bienvenida y el nombre de usuario. Si no es así se muestra un mensaje de que las credenciales no son correctas.

También se nos pedía que cuando se hiciese login apareciese un botón de logout, esto lo hemos hecho creando un botón con un estilo display:none que lo oculta. Una vez que el login es correcto el estilo se cambia a display:block y aparece.

- Borrar cookie de sesión:

En la práctica nos piden que cuando se haga logout se borre la cookie de sesión, lo hemos conseguido poniendole un onclick al botón logout que llama a la función logoutSesion(), que cambia la fecha de expiración a la fecha unix.

function logoutSesion(cname){

    document.cookie = &quot;sesion=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;&quot;;

}

\*\*4.Pruebas automatizadas\*\*

Hemos realizado 10 pruebas automatizadas para validar el formulario utilizando el plugin de Selenium para Chrome junto con el servidor ligero que utilizamos para la práctica de migas de pan.

- Prueba 1: Se completa el formulario sin errores.

- Prueba 2: Se introduce mal el nombre.

- Prueba 3: Se introduce mal el apellido.

- Prueba 4: Se introduce mal el email.

- Prueba 5: Se introduce mal la contraseña.

- Prueba 6: No se introduce nombre.

- Prueba 7: No se introduce apellido.

- Prueba 8: No se introduce email.

- Prueba 9: No se introduce contraseña.

- Prueba 10: Solo se rellenan los campos obligatorios.

Las pruebas automatizadas se han tenido que realizar en proyectos separados, ya que al hacerlas juntas se producían fallos al ejecutar.

#### Autoras

- \*\*Paz Rubio Rubio\*\* - [Github](https://github.com/PazRubio)

- \*\*Gema de la Fuente Romero\*\* - [Github](https://github.com/Gema-de-la-Fuente)

