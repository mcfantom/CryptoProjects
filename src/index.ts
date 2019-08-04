/*
// Primer ejemplo...

const sMessage = 'Hello world!!!'
console.log(sMessage)

*/

import {NEMLibrary, NetworkTypes, Password, SimpleWallet, AccountHttp, Address, MosaicHttp, QueryParams} from 'nem-library';

NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

/*
// Segundo Ejemplo...

const pass = new Password('01PrimerTestWallet');
const tstWallet = SimpleWallet.create('Wallet Test', pass);
console.log(tstWallet);

*/

/*
// Tercer Ejemplo
// Ojo con el comportamiento asincrono. Ver que sucede entre la impresion de las transacciones y el mensaje de fin y salida
*/
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
