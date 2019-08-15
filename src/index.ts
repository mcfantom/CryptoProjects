import { walletReading } from "./walletReading";

/*
// Primer ejemplo...
// Prueba de entorno. El clasico hello world.

*/

const sMessage = 'Hello world!!!';
console.log(sMessage);

// Se leen los parametros y se almacenan en una variable
const inputArguments = process.argv.slice(2);

const main = async () => {
	if (inputArguments[0] === 'wallet') {
		if (inputArguments[1] === 'read') {
			walletReading();
		};
	};
};

main();
