# Creación de un util para poder medir funciones # Creación de un util para poder medir funciones

Hemos creado un **helper utilitario** para medir la ejecución de funciones en Angular. Esto nos permite comparar distintas soluciones o algoritmos de forma rápida durante el desarrollo.

El util incluye:

- `measureTime(fn, ...args)` → mide funciones **síncronas**.
- `measureTimeAsync(fn, ...args)` → mide funciones **asíncronas** que devuelven `Promise`.

