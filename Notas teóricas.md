# Nota 1: Typescript para desarrollo y javascript para el navegador
Para el desarrollo siempre se utiliza typescript, luego al buildear el proyecto, en la carpeta dist todos los archivos son minificaciones de javascript. (Esto nos permite mas seguridad y mejor rendimiento de nuestra aplicación).

Esto se realiza 

# Nota 1.1: Proceso Build / Subir a Producción (ng build)
transpilacion => tranforma nuestro codigo de alto nivel a otro lenguaje de alto nivel. (en nuestro caso de angular, de typescript a javascirpt) (Nota: antiguamente se utilizaba Babel para el webpack, ahora no se utiliza)

uglify => Dificulta a los atacantes a la hora de intentar acceder a nuestro codigo.

minification => Los archivos de codigo pasan a estar todo junto en una sola línea en javascript.

tree shaking => Elimina los componentes que no se están usando. (y no existen en el dist)

bundles => Al buildear se separa nuestro codigo en pedacitos mas pequeños permitiendonos mas seguridad (un bundle es un pedacito)

lazy loading => Carga sola y estrictamente justo los componentes que necesitamos (hacen como si no existiesen, aunque existan, pero solo y cuando lo necesitemos) (Nos da mas rendimiento y es mas seguro, porque si no te logueas, por ejemplo, pues no te muestra la parte privada)

# Nota 2: Angular 19 tiene su propio sevidor de node express
Actualmente en esta ultima versión en la v19 de angular tenemos un archivo "server.ts", el cual se utiliza para el SSR (Server Side Rendering) es posible crear una basa de datos pequeña para pruebas de loguin y con poca información, para hacer pruebas a nivel full stack con modelos de datos y endpoints, de hecho en este proyeto voy a realizarlo.