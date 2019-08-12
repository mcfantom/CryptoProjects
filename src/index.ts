/*
// Primer ejemplo...
// Prueba de entorno. El clasico hello world.

const sMessage = 'Hello world!!!'
console.log(sMessage)

*/

// Importacion de diferentes objetos desde la NEM Library
import {NEMLibrary, NetworkTypes, Password, SimpleWallet, AccountHttp, Address,
        MosaicHttp, QueryParams, TransactionHttp, TimeWindow, TransferTransaction,
        PlainMessage, Account, MosaicTransferable, Mosaic} from 'nem-library';

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
// TCGOIEPKSLTX6T2ENMUYT43H2ZHMECHE6CPWDQ6N
// TCGOIE-PKSLTX-6T2ENM-UYT43H-2ZHMEC-HE6CPW-DQ6N

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
// Consulta las transacciones de una cuenta.
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
const nameSpace='docta_test';

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
*/

/*
// Sexto Ejemplo
// Enviar token

// Crea una trasnsaccion
const transactionHttp = new TransactionHttp();

// Se guarda en una variable temporal la clave privada de quien envia
// Lo interesante seria abrir la wallet, sacar la data y con esta data firmar la transaccion.
//const privateKey: string = process.env.PRIVATE_KEY;
const privateKey: string = "39bed0a2aa27aeedd7374788ccefa644d78c25f8cb1e06b6080c96adf6b32caa";

// Crea una cuenta con la clave privada.
const account = Account.createWithPrivateKey(privateKey);

//const transferTransaction = TransferTransaction.create(
//    TimeWindow.createWithDeadline(),
//    new Address("TASEBR-E3OYKZ-DC5XKA-QLAIXX-ILLLHB-QRNSFR-MSJP"),
//    new XEM(0),
//    PlainMessage.create("A ver si llega el mensaje...")
//);

// Crea una transaccion y la envia...
const transferTransaction = TransferTransaction.create(
    TimeWindow.createWithDeadline(),
    new Address("TDU7LJFF5SZ6RA3WOPN54HMNR2QLO5XI3WDVNIH3"),
    new XEM(5),
    PlainMessage.create("Programando en el Accelerator Blockchain!!!")
);

const signedTransaction = account.signTransaction(transferTransaction);

console.log(signedTransaction);

transactionHttp.announceTransaction(signedTransaction).subscribe(x => console.log(x));
*/

/*
// Septimo Ejemplo
// Revisar balances


// Revisar balance de XEM
// Revisar blances de MOSAICs

const myAccount = new AccountHttp();
myAccount.getMosaicOwnedByAddress(myAddress).subscribe(mosaics => {
  const xemMosaic = mosaics.find((mosaic) => {
		return mosaic.mosaicId.name === 'xem';
	});
	if (!xemMosaic) {
    console.log('La cantidad XEM es: 0');
  } else {
	   console.log(`La cantidad XEM es: ${xemMosaic.quantity / 1e6}`);
  };

  const doctaMosaic = mosaics.find((mosaic) => {
    return mosaic.mosaicId.name === 'doctatst';
  });
  if (!doctaMosaic) {
    console.log('La cantidad doctatst es: 0');
  } else {
     console.log(`La cantidad doctatst es: ${doctaMosaic.quantity / 1e6}`);
  };
});
*/

/*
// Octavo Ejemplo
// Hacer transacciones
*/

// Dev Account
// Account {
//   address: Address {
//     value: 'TCGOIEPKSLTX6T2ENMUYT43H2ZHMECHE6CPWDQ6N',
//     networkType: 152
//   },
//   publicKey: '950c8c99309d62481d27ee673612d2f9c6696b59621384fa7f461f176fffb59d',
//   privateKey: 'c4c40504fded0288455b2dbb02ad47ffba0dbab31a882251391a454905857b9c'
// }
//
// TASEBRE3OYKZDC5XKAQLAIXXILLLHBQRNSFRMSJP ==>> Esta es mi nanowallet Docta

// Leyendo el archivo de la wallet...
console.log('Cargando el contenido del archivo (en crudo) de la wallet en una variable\n');
const tmpStrMiWallet = fs.readFileSync(`${fullFileWalletPath}`, 'utf8');
const miWallet = SimpleWallet.readFromWLT(tmpStrMiWallet);
const myAddress = miWallet.address;
console.log('La address o direccion de la cuenta contenida en la wallet es:\n');
console.log(myAddress.pretty());

// Funcion para buscar un mosaico en una wallet.
const searchMosaic = (address: Address): Promise<Mosaic> => {
	return new Promise<Mosaic>((resolve, reject) => {
		console.log(`Buscando mosaico en la direccion: ${address.pretty()}`);

    const myAccount = new AccountHttp();
    myAccount.getMosaicOwnedByAddress(address).subscribe(mosaics => {
      try{
        resolve(mosaics.find((mosaic) => {
          return mosaic.mosaicId.name === 'doctatst';
        }));
      } catch(err) {
        console.log(`${err}`);
    			console.log('Please try again');
    			reject();
      };
    });
	});
};

// Funcion para imprimir la informacion de un mosaico.
const imprimeMosaico = async () => {
  const pp = await searchMosaic(myAddress);
  console.log('Hola xyz');
  console.log(`El mosaico encontrado es: ${pp.mosaicId.name}`);


  const pptransfer = new MosaicTransferable.

};

//const selectedMosaic = new MosaicTransferable();

imprimeMosaico();











// // Crea una trasnsaccion
// const transactionHttp = new TransactionHttp();
//
// // Se guarda en una variable temporal la clave privada de quien envia
// // Lo interesante seria abrir la wallet, sacar la data y con esta data firmar la transaccion.
// //const privateKey: string = process.env.PRIVATE_KEY;
// const privateKey: string = 'c4c40504fded0288455b2dbb02ad47ffba0dbab31a882251391a454905857b9c';
//
// // Crea una cuenta con la clave privada.
// const account = Account.createWithPrivateKey(privateKey);
//
// // Crea una transaccion y la envia...
// const transferTransaction = TransferTransaction.create(
//     TimeWindow.createWithDeadline(),
//     new Address("TASEBRE3OYKZDC5XKAQLAIXXILLLHBQRNSFRMSJP"),
//     new XEM(5),
//     PlainMessage.create("Programando en el Accelerator Blockchain!!!")
// );
// const signedTransaction = account.signTransaction(transferTransaction);
// console.log(signedTransaction);
// transactionHttp.announceTransaction(signedTransaction).subscribe(x => console.log(x));

// Revisar como hace la transaccion en https://github.com/dgarcia360/NEMPay/blob/master/src/pages/transfer/transfer.ts
