# node-cedulapanama / Validador de cédula panameña para NodeJS

Este paquete fue basado en [el algoritmo original](https://github.com/merlos/cedula-panama) de [@merlos](https://github.com/merlos/).

# Instalación

```js
npm install --save node-cedulapanama
```

# Uso

```js
const cedulapanama = require("node-cedulapanama");
```

# Métodos

## validate({String})

-   `{String}` El número de cédula.
    -   **Ejemplo:** 8-578-1439

Ejemplo de uso:

```js
const cedulapanama = require("node-cedulapanama");
const cedula = "8-578-1439";

cedulapanama.validate(cedula);

/** Retorna: 

{
  isValid: true,
  inputString: '8-578-1439',
  isComplete: true,
  cedula: [ '8', '', '578', '1439' ]
}

**/
```
