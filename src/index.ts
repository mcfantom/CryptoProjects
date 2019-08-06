/*
// Primer ejemplo...
// Prueba de entorno. El clasico hello world.

const sMessage = 'Hello world!!!'
console.log(sMessage)

*/

// Importacion de diferentes objetos desde la NEM Library
import {NEMLibrary, NetworkTypes, Password, SimpleWallet, AccountHttp, Address, MosaicHttp, QueryParams} from 'nem-library';

// Importacion de modulo con funciones utiles
import { timeStampPretty } from './privFunctions';

// Disponibilizacion del objeto fs (file system) en la variable fs
// Luego esta variable nos permitira interactuar con el sistema de
// archivos del sistema operativo
const fs = require('fs');

// Configuracion de la red de NEM sobre la que queremos trabajar
NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

// Variable para resguardar el password
const miWalletPass = new Password('01PrimerTestWallet');

/*
// Segundo Ejemplo...
// Creacion de una wallet.

const tstWallet = SimpleWallet.create('Wallet Test', miWalletPass);
console.log('A continuacion la informacion de la wallet creada:\n');
console.log(tstWallet);
console.log('\n');
*/

/*
// Tercer Ejemplo
// Lista de las transacciones de una cuenta.
// Ojo con el comportamiento asincrono. Ver que sucede entre la impresion de las transacciones y el mensaje de fin y salida

const myAddress = new Address('TBIUQMOGHUH7GN5LM62CQ5CI4JEXMWU455IPHIYZ');

console.log('==>>Realizando una consulta a la TESTNET...\n')
const accountHttp = new AccountHttp();

accountHttp.allTransactions(myAddress)
.subscribe(allTransactions => {
	console.log(allTransactions);
});

console.log('\n==>>Terminando y saliendo...\n')


// Otro ejemplo.
// Consultando todos los mosaicos dentro de un NameSpace dado, en este caso "docta"
console.log('==>>Realizando una consulta sobre mosaicos...\n')
const mosaicHttp = new MosaicHttp();
const nameSpace='docta';

mosaicHttp.getAllMosaicsGivenNamespace(nameSpace).subscribe(mosaicDefinitions => {
	console.log(mosaicDefinitions);
});

console.log('\n==>>Terminando y saliendo...\n')
*/

// Variable donde se almacena la ruta donde se va a escribir el archivo de la wallet creada.
const rutaWallet = 'C:\\_Curso\\CryptoProjects\\bin';
// Variable que registra el nombre del archivo de la wallet a guardar
const nombreWalletFile = 'miWallet.wlt';
let fullFileWalletPath = `${rutaWallet}\\${nombreWalletFile}`;
const timestamp = timeStampPretty();

/*
// Cuarto Ejemplo
// Salvar en disco una wallet

console.log('==>>Salvando la wallet...\n')

//Se verifica si ya existe una wallet
if (fs.existsSync(fullFileWalletPath)){
	// Se existe un archivo de wallet, se cambia el nombre usando un timestamp
	fullFileWalletPath = `${rutaWallet}\\${timestamp}_${nombreWalletFile}`;
};

// Se pasa la wallet de NEM a un string ue luego puede ser "bajado" a disco
const walletString = tstWallet.writeWLTFile();

// La siguiente linea es la que "baja a disco" el "string" de la wallet de NEM creada
fs.writeFileSync(fullFileWalletPath, walletString);
console.log(`\n==>>La wallet se guardo exitosamente en: ${fullFileWalletPath}\n`);

// // Escribiendo el archivo de la wallet, pero esta vez de forma asincrona.
// fs.writeFile(`${fullFileWalletPath}`, walletString, (err) => {
//     // Si la escritura de la wallet da error, se captura el error
//     if (err) throw err;
//
//     // si va todo bien, se da un mensaje de exito
//     console.log(`\n==>>La wallet se guardo exitosamente en: ${rutaWallet}${nombreWalletFile}\n`)
// });
*/

/*
// Quinto Ejemplo
// Leyendo una wallet desde el disco
*/

// Leyendo el archivo de la wallet...
console.log('Cargando el contenido del archivo (en crudo) de la wallet en una variable\n');
const tmpStrMiWallet = fs.readFileSync(`${fullFileWalletPath}`, 'utf8');
console.log('\nEl archivo "puro" de la wallet contiene:\n');
console.log(tmpStrMiWallet);
console.log('\n');


// Si la wallet a leer fue creada de manera sencilla, es decir, sin usar la "Nano Wallet".
const miWallet = SimpleWallet.readFromWLT(tmpStrMiWallet);

// Si la wallet a leer fue creada con la "Nano Walllet"
//const miWallet = SimpleWallet.readFromNanoWalletWLF(tmpStrMiWallet);

console.log('\nEl contenido de la wallet segun NEM es:\n');
console.log(miWallet);
console.log('\n');

console.log('\nAbriendo la wallet para ver la informacion detallada de la misma:\n');
const miCuenta = miWallet.open(miWalletPass);
console.log('\nLa informacion de la cuenta contenida en la wallet es:\n');
console.log(miCuenta);
console.log('\n');


// Extrae la address o direccion de la wallet.
// La address se puede extraer de la misma wallet o de la cuenta
const myAddress = miWallet.address;
console.log('La address o direccion de la cuenta contenida en la wallet es:\n');
console.log(myAddress.pretty());
console.log('\n');
