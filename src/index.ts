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

/*
// Segundo Ejemplo...
// Creacion de una wallet.
*/
const pass = new Password('01PrimerTestWallet');
const tstWallet = SimpleWallet.create('Wallet Test', pass);
console.log('A continuacion la informacion de la wallet creada:\n');
console.log(tstWallet);
console.log('\n');


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

/*
// Cuarto Ejemplo
// Salvar en disco una wallet
*/

/*
Variable donde se almacena a ruta donde almacenar la wallet creada
y el nombre del archivo de la wallet a guardar
*/
const rutaWallet = 'C:\\_Curso\\CryptoProjects\\bin';
const nombreWalletFile = 'miWallet.wlt';
let fullFileWalletPath = `${rutaWallet}\\${nombreWalletFile}`;
const timestamp = timeStampPretty();

console.log('==>>Salvando la wallet...\n')

// Se pasa la wallet de NEM a un string ue luego puede ser "bajado" a disco
const walletString = tstWallet.writeWLTFile();

//Se verifica si ya existe una wallet
if (fs.existsSync(fullFileWalletPath)){
	// Se existe una wallet, se cambia el nombre usando una timestamp como parte
	// del mismo
	fullFileWalletPath = `${rutaWallet}\\${timestamp}_${nombreWalletFile}`;
};

// La siguiente linea es la que "baja a disco" el "string" de la wallet de NEM creada
fs.writeFileSync(fullFileWalletPath, walletString);
console.log(`\n==>>La wallet se guardo exitosamente en: ${fullFileWalletPath}\n`);

// // Escribiendo el archivo de la wallet, pero esta vez de forma asincrona.
// fs.writeFile(`${rutaWallet}${nombreWalletFile}`, walletString, (err) => {
//     // Si la escritura de la wallet da error, se captura el error
//     if (err) throw err;
//
//     // si va todo bien, se da un mensaje de exito
//     console.log(`\n==>>La wallet se guardo exitosamente en: ${rutaWallet}${nombreWalletFile}\n`)
// });
