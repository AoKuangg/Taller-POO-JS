# Taller de POO JS

Este repositorio contiene el código que compelta el taller de Programación Orientada a Objetos (POO) en JavaScript. El taller consta de varios ejercicios que te mas adelante se explican y son para practicar los conceptos fundamentales de la POO y a aplicarlos en el desarrollo de clases y objetos en JavaScript.

## Instrucciones

Sigue las instrucciones y completa los ejercicios en cada una de las carpetas correspondientes a los puntos del taller. Cada carpeta contiene los siguientes archivos:

- `index.html`: Archivo HTML que contiene el formulario y el área donde se mostrarán los resultados.
- `main.js`: Archivo JavaScript donde se encuentra el código de las clases y métodos requeridos.
- `style.css`: Archivo CSS utilizado para estilizar la apariencia del formulario y los resultados.

## Puntos de el Taller

### Punto 1: Clase Persona y Método estático esMayorDeEdad

1. Crea una clase llamada `Persona` con propiedades `nombre`, `edad`, `sexo` y un método `saludar()` que imprime en el Html un saludo con el nombre de la persona.

2. En la clase `Persona`, agrega un método estático llamado `esMayorDeEdad()` que recibe la edad de una persona como parámetro y retorna `true` si la persona es mayor de edad (18 años o más), o `false` en caso contrario.

3. Crea una instancia de la clase `Persona` llamada `persona1` y asigna valores a sus propiedades. Llama al método `saludar()` de `persona1` para que la persona imprima su saludo.

4. Llama al método estático `esMayorDeEdad()` pasando la edad de `persona1` y muestra el resultado en el Html.

### Punto 2: Clase Animal, Subclase Perro y Método hacerSonido

1. Crea una clase llamada `Animal` con propiedades `nombre` y `edad`.

2. Define un método llamado `hacerSonido()` en la clase `Animal` que imprima en el Html el sonido del animal.

3. Crea una subclase llamada `Perro` que herede de la clase `Animal`.

4. Agrega una nueva propiedad llamada `raza` a la clase `Perro`.

5. Agrega un método llamado `moverCola()` en la clase `Perro` que imprima en el Html un mensaje indicando que el perro está moviendo la cola.

6. Crea una instancia de la clase `Perro` llamada `perro1` y asigna valores a sus propiedades.

7. Llama al método `hacerSonido()` de `perro1` para que el perro imprima su sonido.

8. Llama al método `moverCola()` de `perro1` para que el perro imprima el mensaje de que está moviendo la cola.

### Punto 3: Clase Figura, Subclase Circulo y Subclase Rectangulo

1. Crea una clase llamada `Figura` con propiedades `color` y `area`.

2. Define un método llamado `calcularArea()` en la clase `Figura` que retorne el área de la figura.

3. Crea una subclase llamada `Circulo` que herede de la clase `Figura`.

4. Agrega una nueva propiedad llamada `radio` a la clase `Circulo`.

5. Redefine el método `calcularArea()` en la clase `Circulo` para que calcule el área del círculo.

6. Crea una instancia de la clase `Circulo` llamada `circulo1` y asigna valores a sus propiedades.

7. Llama al método `calcularArea()` de `circulo1` y muestra el resultado en el HTML.

8. Crea una subclase llamada `Rectangulo` que herede de la clase `Figura`.

9. Agrega nuevas propiedades llamadas `largo` y `ancho` a la clase `Rectangulo`.

10. Redefine el método `calcularArea()` en la clase `Rectangulo` para que calcule el área del rectángulo.

11. Crea una instancia de la clase `Rectangulo` llamada `rectangulo1` y asigna valores a sus propiedades.

12. Llama al método `calcularArea()` de `rectangulo1` y muestra el resultado en el HTML.

### Punto 4: Clase Vehiculo, Subclase Coche y Método estático convertirKmHEnMph

1. Crea una clase llamada `Vehiculo` con propiedades `marca`, `modelo` y `velocidad`.

2. Define un método llamado `acelerar()` en la clase `Vehiculo` que incremente la velocidad del vehículo en 10 unidades.

3. Crea una instancia de la clase `Vehiculo` llamada `vehiculo1` y asigna valores a sus propiedades.

4. Llama al método `acelerar()` de `vehiculo1` y muestra la velocidad actual en el HTML.

5. Crea una subclase llamada `Coche` que herede de la clase `Vehiculo`.

6. Agrega una nueva propiedad llamada `combustible` a la clase `Coche`.

7. Redefine el método `acelerar()` en la clase `Coche` para que incremente la velocidad del coche en 20 unidades.

8. Crea una instancia de la clase `Coche` llamada `coche1` y asigna valores a sus propiedades.

9. Llama al método `acelerar()` de `coche1` y muestra la velocidad actual en el HTML.

10. Agrega un método estático a la clase `Vehiculo` llamado `convertirKmHEnMph()` que reciba una velocidad en kilómetros por hora y retorne la velocidad equivalente en millas por hora. Para ello, divide la velocidad en kilómetros por hora entre 1.60934.

11. Llama al método estático `convertirKmHEnMph()` pasando una velocidad en kilómetros por hora y muestra el resultado en el HTML.

### Punto 5: Clase Empleado, Subclase Gerente y Método estático generarIdEmpleado

1. Crea una clase llamada `Empleado` con propiedades `nombre`, `edad` y `sueldo`.

2. Define un método llamado `calcularSalarioAnual()` en la clase `Empleado` que retorne el salario anual del empleado multiplicando el sueldo mensual por 12.

3. Crea una instancia de la clase `Empleado` llamada `empleado1` y asigna valores a sus propiedades.

4. Llama al método `calcularSalarioAnual()` de `empleado1` y muestra el resultado en el HTML.

5. Crea una subclase llamada `Gerente` que herede de la clase `Empleado`.

6. Agrega una nueva propiedad llamada `departamento` a la clase `Gerente`.

7. Redefine el método `calcularSalarioAnual()` en la clase `Gerente` para que retorne el salario anual del gerente multiplicando el sueldo mensual por 12 y sumando un bono anual de 10000.

8. Crea una instancia de la clase `Gerente` llamada `gerente1` y asigna valores a sus propiedades.

9. Llama al método `calcularSalarioAnual()` de `gerente1` y muestra el resultado en el HTML.

10. Agrega un método estático a la clase `Empleado` llamado `generarIdEmpleado()` que retorne un número entero aleatorio entre 1000 y 9999.

11. Llama al método estático `generarIdEmpleado()` y muestra el resultado en el HTML.

Por supuesto, aquí tienes una sección adicional para el uso de la página:

## Uso de la página

1. Al acceder a la página principal, encontrarás un menú de navegación con los 5 puntos del taller.

2. Haz clic en uno de los puntos del menú para acceder a la página correspondiente al ejercicio seleccionado.

3. En cada página de ejercicio, encontrarás un formulario o una interfaz donde puedes ingresar los datos necesarios para el problema planteado.

4. Completa los campos del formulario con los valores deseados.

5. Una vez que hayas llenado los campos del formulario, haz clic en el botón "Resolver" o "Calcular" para ejecutar el código correspondiente al ejercicio.

6. El resultado del ejercicio se mostrará en la página, ya sea en forma de texto o en una salida específica.

7. Si deseas volver a la página principal para seleccionar otro punto del taller, puedes hacer clic en el botón "Volver al Menú" o en un enlace similar que te lleve de vuelta a la página principal.

8. Repite los pasos anteriores para explorar y resolver los diferentes puntos del taller.
