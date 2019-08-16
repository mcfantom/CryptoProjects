# Estructura formal del curso:
**1. NEM Library**
   * Es un proyecto que creó un grupo de programadores ajenos a la fundación; utilizando como base el SDK de
NEM. Éste último, el SDK, si fue construido por programadores pagados por la fundación NEM.
    * Fue tan bueno el trabajo realizado por este equipo de programadores de la comunidad, que a día de hoy se
dice que luego fueron contratados por la fundación NEM para seguir el evolucionando trabajo y seguir dando el
soporte sobre esta librería. También se comenta, que al día de hoy todavía miembros de este equipo de la
comunidad trabaja en el desarrollo de las actualizaciones para Catapult (la versión 2 de la blockchain de NEM).
    * Esta librería es la que más soporte y documentación tiene.
      * [*NEM Library Documentation*](https://nemproject.github.io/nem-library-docs/)
    * Funciona con *typescript*.
    * Desde el punto de vista de la arquitectura, para acceder a la blockchain de NEM hay que pasar por un API gateway a los fines de aislarnos de la complejidad de la blockchain. Esto es una gran ayuda que nos da esta tecnología.
      * [*NEM Technology*](https://nem.io/technology/)
    * Toda interacción con la blockchain debe ser asíncrona, no podemos quedarnos a esperar la devolución de la ejecución de una acción. La *API Gateway* nos permite trabajar en esta asincronía; de lo contrario tendríamos que programar nosotros mismos todo lo necesario para esperar y “escuchar” por las transacciones; abrir sockets, esperar las respuestas, preparar listeners, etc.
    * Este gateway permite aislarte de toda esta complejidad de la blockchain; y desde el punto de vista de la programación pura una de las mejores interfaces de acceso a este *API Gateway* es la **NEM Library**.

**2. Preparación de Ambiente**
* Instalación *NODE.JS* y *NPM*
    * Nociones básicas de Node y NPM
      * *Node.js* es una utilidad open-source, multiplataforma que permite la ejecución de código **javascript** fuera de un navegador.
      * Esta utilidad le permite a los desarrolladores ejecutar comandos del lado del servidor para poder producir contenido web de manera dinámica antes de que la misma sea enviada al
navegador del usuario final.
      * El advenimiento de Node.js representa el paradigma de __*javascript en todos lados*__, lo que permitiría unificar el desarrollo web en un sólo lenguaje de programación, en lugar de tener un lenguaje para el lado del servidor y otro para el lado del cliente.
      * *Node.js* posee una arquitectura orientada a eventos capaz de soportar llamadas asíncronas de I/O. Esta opción de diseño apunta a optimizar el rendimiento y escalabilidad
en aplicaciones web con múltiples operaciones I/O, así como también aplicaciones web en tiempo real.
       * *NPM* es un gestor de paquetes para la plataforma Node.
      * Descarga y ubica los módulos y paquetes en un lugar en donde Node los puede encontrar y utilizar. NPM también gestiona las dependencias de los paquetes solicitados.
      * Sus usos más comunes son publicar, buscar, instalar y desarrollar programas Node.
    * Bajar los paquetes
      * [*Node download site*](https://nodejs.org/en/)
      * Automáticamente detecta el sistema operativo.
      * Seleccionar el paquete y bajarlo.
        * Hay 2 opciones las LTS (v10.16.0) y la más actual. Pueden elegir la que deseen. A los fines de este curso vamos a elegir la más actual, la v12.7.
      * Seguir los pasos del instalador. No hace falta nada especial, con aceptar todas las opciones sugeridas por defecto alcanza.
      * Con lo anterior se instala tanto *NODE.JS*, como *NPM*.
      * Esto lo podemos validar ejecutando los comandos:
        * ```node -v``` -> *Veremos que indica node v12.7.0*
        * ```npm -v``` -> * Veremos que indica npm v6.10.0*
      * Aunque vienen juntos (NODE y NPM), conviene actualizar NPM con el comando:
npm install npm@latest -g
      * Si da error de actualización es probable que necesiten ejecutar el comando con permisos elevados (sudo en Linux/Unix o Run as Administrator en Windows).
      * Luego de la actualización si ejecutamos:
       ```npm -v```
       nos debería indicar que npm está actualizado a la versión v6.10.2.

    * Instalación de librerías mínimas necesarias
      * Instalar el soporte para *typescript*
        * Nociones básicas de *typescript*
          * *Typescript* necesita ser compilado. En realidad más que compilado es __*transpilado*__, es decir se *traduce*, se transcribe a *javascript* puro.
          * Es un superset, una especie de “metalenguaje” de javascript que permite la escritura de javascript respetando ciertas normas de programación más estrictas que en javascript puro.
          * JavaScript es conocido por su flexibilidad, pero, en proyectos grandes o con cierta complejidad esta flexibilidad se vuelve un punto negativo, dado que pasamos de ser flexibles a ser laxos.
          * Les dejo un link en donde pueden investigar un poco más en detalle las diferencias: [Typescript vs Javascript](https://www.adictosaltrabajo.com/2018/08/01/typescript-vs-javascript/)
        * Para instalar el soporte para typescript, ejecutamos el comando:
            * ```npm install -g typescript```
        * Si da error utilizar sudo o administrador para poder hacer la instalación.
        * Al final debería dar como resultado algo parecido a esto:
         ```typescript@3.5.3```
         ```added 1 package from 1 contributor in 3.079s```

    * Instalación de *Atom* y *VS.Code*.
      * Hay varias herramientas para trabajar con *typescript/javascript*.
      * A los fines del curso, vamos a manejar *atom*.
      * Es una gran herramienta multiplataforma, con extensiones, plugins y miles de extras para hacer de todo.
      * Es una herramienta open-source o sea que viene de la comunidad y es mantenida por la comunidad.
        * [Descarga Atom](https://atom.io)
        * Luego de instalada, para trabajar con atom y *typescript* vamos a necesitar instalar
algunos paquetes y dependencias.
        * Para instalar las utilidades necesarias y recomendadas, abrimos una ventana de comandos y ejecutamos:
```apm install atom-ide-ui```
```apm install atom-typescript```
```apm install linter```
```apm install linter-ui-default```
```apm install hyperclick```
```apm install intentions```
```apm install console-log```
```apm install file-icons```
```apm install highlight-selected```

        * Si no se encuentra el comando apm, éste normalmente se instala en:
          * ```%LOCALAPPDATA%\atom\bin\apm```
        * Para resolver este problema podemos agregar a las variables de entorno la ruta:
          * ```%LOCALAPPDATA%\atom\bin```
        * Les dejo unos link en donde van a poder revisar más en detalle lo que hacen estos paquetes de atom.
          * [Ayuda de los paquetes *Atom* en general](https://atom.io/packages)
          * [Ayuda typescript *Atom*](https://atom.io/packages/atom-typescript)
          * [Paquetes *Atom* útiles](https://curtistimson.co.uk/post/tools/8-useful-atom-packages/)

      * Como extra les dejo, *VS.Code* (Visual Studio Code), también es una herramienta open source. Aunque en este
caso nace a partir de elementos de la comunidad y de otros elementos que son propios de *Microsoft*. Aunque todo está bajo licencia estándar del MIT.
        * [Descarga VS.Code](https://code.visualstudio.com/)
        * Se instala la herramienta siguiendo las opciones por defecto.
        * Al abrir por primera vez, en la ventana de *welcome* instalar el soporte para los lenguajes deseados. Para nuestro caso, al menos instalar el soporte para:
          * JavaScript
          * TypeScript
        * Ya con esto queda listo para usar.

**3. Armado de proyecto**
* Creamos una carpeta en donde vayamos a trabajar.
  * Abrir el command.
  * Ir a una carpeta cerca de la raíz del C.
  * Crear una que se llama Proyectos y luego una que se llame mvpWallet
    * `mkdir Proyectos`
    * `cd Proyectos`
    * `mkdir mvpWallet`
 * Creación de estructura de carpetas básica.
    * Luego dentro de mvpWallet creamos dos carpetas, src y bin.
      * `cd mvpWallet`
      * `mkdir src`
      * `mkdir bin`
    * src para los fuentes y bin para los ejecutables resultantes de la compilación.
  * Dentro del directorio mvpWallet ejecutamos el comando
    * `npm init`
      * *Este comando habilita la carpeta donde estamos trabajando como repositorio local de npm y así, poder mantener o salvar, localmente para este proyecto, módulos que tal vez no nos servirían en otros proyectos. Los módulos aquí guardados son aquellos que sólo serán necesarios al momento del desarrollo, no en el “runtime”.*
      * Ingresar los valores solicitados.
      * Al finalizar obtendremos un archivo (*__package.json__*) en donde tendremos las opciones de nuestro proyecto, acorde a lo mínimo necesario por node.
  * Seguidamente instalamos las librerías necesarias para el desarrollo de nuestra wallet, las propias de NEM y la
RX.
    * _Nociones básicas de RXJS_
      * _RxJS viene Reactive Extensions for JavaScript._
      * _Es una conjunto de librerías para "programación reactiva" por medio de "observables" que facilitan la programación de programas asíncronos o basados en callbacks._
      * _Las aplicaciones, con el tiempo han ido cambiando; en especial aquellas de tipo Web, pasando de una simple página HTML estática a una altamente dinámica con animaciones
y “atentas” al usuario final. Con todo lo dicho, estamos agregando complejidad, más datos y comportamiento asíncrono. Esto hace que nos movamos hacia arquitecturas “reactivas” es decir hacia aplicaciones que “reaccionan” a los estímulos de los usuarios finales._
      * _Si necesitan más detalle sobre el patrón “Observable”, pueden ver el siguiente post que
tiene una explicación y un ejemplo simple:_
        * [Observables Angular en la Practica](https://desarrolloweb.com/articulos/practica-observables-angular.html)
    * Para ello ejecutamos la siguiente línea de comando:
      * `npm install nem-library rxjs --save`
    * Al final debería dar como resultado algo parecido a esto:
```rxjs@6.5.2```
```nem-library@2.0.0-RC4```
```added 552 packages from 332 contributors and audited 16450 packages in 135.374s```

    * Puede ser que también aparezcan algunos mensajes de warning sobre vulnerabilidades, pero en el mismo
mensaje indica cómo resolverlos.
    * Luego en la misma carpeta ejecutamos el comando
      * `atom .`
    * Esto es para que nos abra el editor con la carpeta en la que estamos tomándola como nuestro proyecto.
    * Luego vamos a crear un archivo de configuración para typescript, en particular para nuestro proyecto.
      * ***tsconfig.json***
      * En el *tsconfig* ponemos las opciones de compilación que ya tenemos más o menos definidas.
      * Las opciones son:
 ```
{
"compileOnSave": true,
"compilerOptions": {
"lib": ["es2015", "es6"],
"target": "es6",
"module": "commonjs",
"removeComments": true,
"strict": true,
"noStrictGenericChecks": true,
"noImplicitAny": false,
"strictNullChecks": true,
"strictFunctionTypes": true,
"noImplicitThis": true,
"alwaysStrict": true,
"noUnusedLocals": true,
"noUnusedParameters": true,
"noImplicitReturns": true,
"noFallthroughCasesInSwitch": true,
"moduleResolution": "node",
"inlineSourceMap": true,
"inlineSources": true
},
"include": [
"src/**/*",
"bin/**/*"
],
"exclude": ["node_modules"]
}
```

 * Con esto se completa la creación inicial del proyecto.

**4. Verificación de entorno**
* Dentro de la carpeta src, creamos un archivo llamado index.ts
* Este archivo será el que luego ejecutemos para hacer las pruebas. Es como nuestro punto de partida para la
aplicación.
* Dentro de éste archivo agregamos las líneas:
```
const sMessage = 'Hello world!!!';
console.log(sMessage);
```
* En *atom*, al salvar el archivo automáticamente transforma (transpila o compila) el archivo typescript en un
nuevo archivo javascript. El nuevo archivo javascript tendrá el mismo nombre, pero con extensión js.
* Para probar lo programado, en una línea de comandos nos ubicamos en la carpeta src; en la que debería estar
ubicado nuestro archivo index.ts, y ejecutamos el comando:
`node index.js`
* _Es importante saber que el ejecutable es el archivo **javascript**, no el archivo tipo **typescript**._
* La salida final debería ser:
`Hello world!!!`

**5. Creación de wallet.**
* Punto importante, en NEM, las wallet son una dirección; una representación de un contenedor que puede contener assets o activos. Estos assets o activos pueden ser “monedas” u cualquier otra representación que se nos ocurra. Esto último en NEM se logra con los mosaic o mosaicos.
* El string de password para una wallet al menos debe ser de al menos 12 caracteres.
* La NEM Library debe ser inicializada indicándole que red vamos a usar, la *TEST* o la *MAIN*.
* Luego para probar la creación de la wallet.
  * En una línea de comandos, ir al directorio src de nuestro proyecto y ejecutar el comando:
  `node index.js`
  * El resultado debería ser una pantalla en donde se muestra una wallet creada con todos sus atributos.
* En NEM hay otro tipo de wallet como la “brain wallet” en donde la wallet en donde la wallet se construye a partir de un conjunto de palabras; y cada vez que se quiere abrir la misma o interactuar con ella se deben ingresar el mismo conjunto de palabras en el mismo orden. Es lo que se podría denominar una “wallet fría” o una wallet que solo se resguarda en la “cabeza” del dueño, de ahí su nombre. Todo lo anterior se debe a que no se guarda la wallet en ningún lado, el dueño debe “retener” el nombre de la wallet y el password de la misma que debe contener al menos 12 palabras.
  * [NEM Brain Wallet](https://docs.nem.io/en/nanowallet/creating-a-wallet/brain-wallet)
* Las wallet de tipo “simple” se crean usando un algoritmo denominado *PRNG (Pseudo Random Number Generator)*. Este algoritmo es implementado en una función dentro del SDK. Esta función es la encargada de generar la clave privada de la wallet, luego a partir de la cual se genera una pública por medio de otra función y la address o dirección. Algo a tener en cuenta que podría llegar a ser posible que este algoritmo *PRNG* genere una address o dirección ya existente, si bien no la podríamos utilizar porque las claves serían diferentes podríamos estar frente a todo tipo de problemas aleatorios. Por este motivo es que al momento de generar la wallet con la aplicación de oficial de NEM, pide que se mueva el mouse por toda la pantalla para reducir casi a 0 la posibilidad de generar una address o dirección ya existente.

**6. Consulta de transacciones.**
* Para listar las transacciones solo necesitamos la dirección pública de una wallet.
* Para ver las transacciones hay que “suscribirse” por el hecho de que las consultas a la blockchain son asíncronas. Por eso se hace uso del patrón “observador” que se queda esperando a que le devuelvan data para poder procesarla. Este procesamiento se hace en .a llamada o “callback” a la función que se crea dentro de la consulta.
* Para probar se debe tener una address o dirección pública.
* Para esto podemos usar la wallet que creamos antes o usar alguna de ejemplo de las que podamos encontrar
en internet, ya sea de la red *TEST* o *MAIN*.
* Tener en cuenta que la blockchain es asíncrona. En el ejemplo vamos a analizar esto.
* Address o dirección de prueba con transacciones:
  * `TBIUQMOGHUH7GN5LM62CQ5CI4JEXMWU455IPHIYZ`
* Otros ejemplos
  * Buscar una address o dirección pública en la *MAIN*.
    * Cambiar el bootstrap a *MAIN*
    * Hacer la misma consulta.
  * Consulta de mosaicos dentro de un namespace.

**7. Guardar wallet**

**8. Abrir wallet.**

**9. Enviar token.**

**10. Revisar balances.**

**11. Repositorio Github**
* Tener instalado Git.
  * [Download GIT](git-scm.com)
* Abrir una línea de comandos.
* Ubicarse en el directorio en donde se quiera resguardar la copia local del repositorio
* Clonar el repositorio
  * `git clone https://github.com/mcfantom/CryptoProjects.git`
* Si hicimos cambios y queremos revisar lo pendiente de enviar al servidor remoto
  * `git status`
* Siempre se debe configurar quién está trabajando en el repositorio.
  * Para una configuración global o general:
    * `git config --global user.name “Jose Perez”`
    * `git config --global user.email joseperez@mailserver.com`
  * Para una configuración particular para determinado proyecto, debemos ingresar los mismos
comandos pero omitiendo la opción --global.
* Para ver la configuración hacemos:
  * `git config --list`
* Para enviar los cambios al servidor.
  * Si hay elementos que no queremos resguardar en el repositorio de versiones, creamos un archivo llamado
    `.gitignore`
    *debe llamarse tal cual con el punto delante y todo; y dentro de este archivo ponemos los nombres de las carpetas y de los archivos que queremos evitar enviar a git.*
  * Agregamos los archivos a control de versiones
  `git add <file>`
  * Confirmamos los cambios realizados en los archivos dentro del repositorio local
`git commit -m “Envio de archivos al servidor”`
  * Para saber el estado de nuestro repositorio comparado con el servidor
`git status`
  * Enviamos los cambios al servidor
`git push origin master`
  * Para recuperar la información del repositorio remoto que todavía no hemos traído al local. Este
comando solo trae la información, pero no genera ningún tipo de merge, solo sirve para saber los
cambios que hay en el servidor que todavía no hemos traído a nuestro repositorio local.
`git fetch`
  * Para actualizar el repositorio local con lo existente en el servidor
  `git pull`
  * Para saber como está configurado el repositorio local
  `git remote show origin`
  * Para moverse entre ramas de git
  `git checkout <nombre rama>`
  * *La rama puede ser una existente, como puede serlo la **master** o poner algo que no exista entonces git creará una nueva rama con el nombre que acabamos de proporcionar.*

**12. Notas extras**
* Si se necesita revisar los paquetes npm instalados, ejecutamos el comando:
`npm list -g --depth=0`
* Si se nos presenta problema al utilizar el comando *console.log*, hay que instalar un paquete npm local para
nuestro proyecto. Esto lo logramos con el comando:
`npm install @types/npm --save-dev`
* En *NPM*, el parámetro *--save-dev* guarda el paquete npm que pedimos que nos instale dentro del proyecto que estamos trabajando (es decir, hace una instalación LOCAL al proyecto). Si no, lo guarda como paquete GLOBAL. Si lo salvamos en modo “LOCAL” dentro de nuestro proyecto solamente, este paquete solo estará disponible para desarrollo. Si al paquete lo vamos a necesitar tanto para desarrollo como para producción
necesitamos el “flag” --save. Esto hará que el paquete esté también disponible cuando el usuario ejecute el programa o servicio que estemos construyendo (es decir, estará disponible en “runtime”).
* Si en atom se desea no ver los archivos javascript generados automáticamente a partir de los archivos typescript, hay que indicarle a atom que ignore los archivos de tipo javascript.
  * Para esto en los settings o configuración, dentro de los packages o paquetes buscamos el tree-view
  * En los settings o configuración de este paquete, habilitamos la opción que indica:
    * *Hide ignored names* (esconder archivos ignorados)
  * Luego en settings o configuración de atom, vamos a core o principal y buscamos la lista de *Ignored Names* o nombres ignorados y allí agregamos:
    * `*.js`
    * `*.js.map`
* Sobre typescript les dejo un link muy interesante con mucha información para arrancar con este lenguaje:
  * [Getting started with typescript](https://www.robertcooper.me/get-started-with-typescript-in-2019)
* Si al momento de instalar paquetes NPM están detrás de un proxy, la forma de pasar a través del proxy es la siguiente:
`npm --proxy http://<user>:<password>@172.16.0.15:8080 install npm@latest -g`
* Para documentar funciones typescript/javascript y que luego los IDE puedan mostrar la ayuda de las funciones; se puede revisar el siguiente link:
* [Best way to document javascript](https://gomakethings.com/whats-the-best-way-to-document-javascript/)
