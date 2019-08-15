import { NEMLibrary, NetworkTypes, SimpleWallet, Password } from "nem-library";
import { timeStampPretty } from "./privFunctions";

// Configuracion de la red de NEM sobre la que queremos trabajar
NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

/*
// Segundo Ejemplo OK
// Creacion de una wallet.
*/

// Variable para resguardar el password
const miWalletPass = new Password('01PrimerTestWallet');

const tstWallet = SimpleWallet.create('Wallet Test', miWalletPass);
console.log('A continuacion la informacion de la wallet creada:\n');
console.log(tstWallet);
console.log('\n');



/*
// Cuarto Ejemplo OK
// Salvar en disco una wallet
*/

// Disponibilizacion del objeto fs (file system) en la variable fs
// Luego esta variable nos permitira interactuar con el sistema de
// archivos del sistema operativo
const fs = require('fs');

// Variable donde se almacena la ruta donde se va a escribir el archivo de la wallet creada.
const rutaWallet = 'C:\\_Curso\\CryptoProjects\\bin';
// Variable que registra el nombre del archivo de la wallet a guardar
const nombreWalletFile = 'miWallet.wlt';
let fullFileWalletPath = `${rutaWallet}\\${nombreWalletFile}`;
const timestamp = timeStampPretty();


console.log('==>>Salvando la wallet...\n')

//Se verifica si ya existe una wallet
if (fs.existsSync(fullFileWalletPath)) {
	// Se existe un archivo de wallet, se cambia el nombre usando un timestamp
	fullFileWalletPath = `${rutaWallet}\\${timestamp}_${nombreWalletFile}`;
};

// Se pasa la wallet de NEM a un string ue luego puede ser "bajado" a disco
const walletString = tstWallet.writeWLTFile();

// La siguiente linea es la que "baja a disco" el "string" de la wallet de NEM creada
fs.writeFileSync(fullFileWalletPath, walletString);
console.log(`\n==>>La wallet se guardo exitosamente en: ${fullFileWalletPath}\n`);

/*
// Escribiendo el archivo de la wallet, pero esta vez de forma asincrona.
fs.writeFile(`${fullFileWalletPath}`, walletString, (err) => {
    // Si la escritura de la wallet da error, se captura el error
    if (err) throw err;

    // si va todo bien, se da un mensaje de exito
    console.log(`\n==>>La wallet se guardo, de manera asincrona, exitosamente en: ${fullFileWalletPath}\n`)
});
*/
