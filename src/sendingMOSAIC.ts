import { NEMLibrary, NetworkTypes, ServerConfig, MosaicId, MosaicHttp, TransactionHttp, Account, TransferTransaction, TimeWindow, Address, PlainMessage } from "nem-library";


/*
// Octavo Ejemplo
// Hacer transacciones con mosaicos
*/

// Configuracion de la red de NEM sobre la que queremos trabajar
NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

// En este caso se configura un NODO NEM para salir especificamente por este nodo y no por el primero que se encuentre
const NodoNEM = <ServerConfig>{protocol: 'https', domain: 'nistest.opening-line.jp', port: 7891};


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
//

const myMosaicId = new MosaicId('docta_test', 'doctatst');
const myMosaicHTTP = new MosaicHttp();

// Crea una conexion HTTP para enviar la trx luego
const transactionHttp = new TransactionHttp([NodoNEM]);

// Se guarda en una variable temporal la clave privada de quien envia
const privateKey: string = "c4c40504fded0288455b2dbb02ad47ffba0dbab31a882251391a454905857b9c";

// Crea una cuenta con la clave privada.
const account = Account.createWithPrivateKey(privateKey);
const destinationAddress = 'TASEBRE3OYKZDC5XKAQLAIXXILLLHBQRNSFRMSJP';
// El multiplicador que se define a continuacion es en base a la propiedad de Divisibility del mosaico.
// Si la divisivilidad es 6, como en este caso del "doctatst", para enviar una unidad del mosaico hay
// que multiplicar 1 por 1000000; o lo que es lo mismo en notacion cientifica 1*10e6 o
// 1e6 en lenguaje de programacion typescript.
// Como regla rapidad la cantidad de ceros es el nro indicado en la divisivilidad del mosaico
const myMosaicMultiplier = 1e6;
const myMosaicMonto = 1 * myMosaicMultiplier;
const transferMessage = 'Programando con NEM Blockchain en Santiago!!!';

// Absolute and relative amounts
// NEM works with absolute amounts, removing the comma when the mosaic can be divisible. To get an absolute amount, multiply the amount of assets you want to create or send by 10divisibility.
// For example, if the mosaic has divisibility 2, to create or send 10 units (relative) you should define 1000 (absolute) instead.

myMosaicHTTP.getMosaicTransferableWithAbsoluteAmount(myMosaicId, myMosaicMonto).subscribe( transferable =>  {
  let transferTransaction = TransferTransaction.createWithMosaics(
                              TimeWindow.createWithDeadline(),
					                    new Address(destinationAddress),
					                    [transferable],
					                    PlainMessage.create(transferMessage));
  // sign and broadcast
  const signedTransaction = account.signTransaction(transferTransaction);
  transactionHttp.announceTransaction(signedTransaction).subscribe( x => console.log(x));
});



// Funcion para buscar un mosaico en una wallet.
// const searchMosaic = (address: Address): Promise<Mosaic> => {
// 	return new Promise<Mosaic>((resolve, reject) => {
// 		console.log(`Buscando mosaico en la direccion: ${address.pretty()}`);
//
//     const myAccount = new AccountHttp();
//     myAccount.getMosaicOwnedByAddress(address).subscribe(mosaics => {
//       try{
//         resolve(mosaics.find((mosaic) => {
//           return mosaic.mosaicId.name === 'doctatst';
//         }));
//       } catch(err) {
//         console.log(`${err}`);
//     			console.log('Please try again');
//     			reject();
//       };
//     });
// 	});
// };
//
// // Funcion para imprimir la informacion de un mosaico.
// const imprimeMosaico = async () => {
//   const pp = await searchMosaic(myAddress);
//   console.log('Hola xyz');
//   console.log(`El mosaico encontrado es: ${pp.mosaicId.name}`);
//
// };
//
// imprimeMosaico();
//
// console.log('A ver si se puede obtener un mosaico transferible...');
