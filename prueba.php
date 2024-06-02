<?php 
class ClassName { 
    const VERSION = '1.0'; 
    public function myMethod(){        
        // PSR-2: Se utiliza un espacio antes y después del operador de asignación.
        $variable = 'ejemplo';

        // PSR-2: La apertura de llaves "{" debe estar en la misma línea que la declaración y en una línea nueva para la llave de cierre "}".
        if ($condition) {
            echo 'Hola mundo';
        } else {
            echo 'Adiós mundo';
        }

        // PSR-2: Las llamadas a métodos deben dividirse en varias líneas si exceden los 120 caracteres.
        $result = $this->someObject
            ->someMethod()
            ->anotherMethod();
    }
}

// PSR-2: Se incluye un salto de línea al final del archivo.
?>