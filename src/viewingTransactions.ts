import { NEMLibrary, NetworkTypes, Address, AccountHttp, MosaicHttp } from "nem-library";

/*
// Tercer Ejemplo OK
// Consulta las transacciones de una cuenta.
// Ojo con el comportamiento asincrono. Ver que sucede entre la impresion de las transacciones y el mensaje de fin y salida
*/

// Configuracion de la red de NEM sobre la que queremos trabajar
NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

const addressToView = 'TBIUQMOGHUH7GN5LM62CQ5CI4JEXMWU455IPHIYZ';

const myAddress = new Address(addressToView);

console.log('==>>Realizando una consulta a la TESTNET...\n')
const accountHttp = new AccountHttp();

accountHttp.allTransactions(myAddress).subscribe(allTransactions => {
	console.log(allTransactions);
});

console.log('\n==>>Terminando y saliendo...\n');


// Otro ejemplo.
// Consultando todos los mosaicos dentro de un NameSpace dado, en este caso "docta"
console.log('==>>Realizando una consulta sobre mosaicos...\n')
const mosaicHttp = new MosaicHttp();
const nameSpace='docta_test';

mosaicHttp.getAllMosaicsGivenNamespace(nameSpace).subscribe(mosaicDefinitions => {
	console.log(mosaicDefinitions);
});

console.log('\n==>>Terminando y saliendo...\n');
