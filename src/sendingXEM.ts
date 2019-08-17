import { NEMLibrary, NetworkTypes, TransferTransaction, TimeWindow, Address, XEM, PlainMessage, ServerConfig, TransactionHttp, Account } from "nem-library";

/*
// Sexto Ejemplo OK
// Enviar XEM (transacciones con XEM)
*/

// Configuracion de la red de NEM sobre la que queremos trabajar
NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

// En este caso se configura un NODO NEM para salir especificamente por este nodo y no por el primero que se encuentre
const NodoNEM = <ServerConfig>{protocol: 'https', domain: 'nistest.opening-line.jp', port: 7891};

// Se guarda en una variable temporal la clave privada de quien envia
// Lo interesante seria abrir la wallet, sacar la data y con esta data firmar la transaccion.
const privateKey: string = "c4c40504fded0288455b2dbb02ad47ffba0dbab31a882251391a454905857b9c";

const destinationAddress = 'TASEBRE3OYKZDC5XKAQLAIXXILLLHBQRNSFRMSJP';
const amountToSend = 1;
const transferMessage = 'Programando con NEM Blockchain en Santiago!!!';

// switch to node nistest.opening-line.jp. It uses different configuration so should allow wrong timestamp.
// change your local time -30sec
// Crea una transaccion con sus datos.
const transferTransaction = TransferTransaction.create(
    TimeWindow.createWithDeadline(),
    new Address(destinationAddress),
    new XEM(amountToSend),
    PlainMessage.create(transferMessage)
);

// Crea una conexion HTTP para enviar la trx luego
const transactionHttp = new TransactionHttp([NodoNEM]);

// Crea una cuenta con la clave privada.
const account = Account.createWithPrivateKey(privateKey);

// Se firma la transaccion antes de su envio.
const signedTransaction = account.signTransaction(transferTransaction);

console.log(signedTransaction);

// Cuando se anuncia la transaccion es cuando realmente se la envia a la blockchain.
transactionHttp.announceTransaction(signedTransaction).subscribe(x => {
  console.log(x)
});
