import { walletReading } from "./walletReading";

const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");

/*
// Primer ejemplo...
// Prueba de entorno. El clasico hello world.

*/

const helloWorld = () => {
	const sMessage = 'Hello world!!!';
	console.log('');
	console.log(sMessage);
};

// Menu de inicio de la aplicacion.
const init = () => {
  console.log(chalk.green(
      figlet.textSync("Coala Wallet POC", {
        font: 'Banner',
        horizontalLayout: "default",
        verticalLayout: "default"
      })
    )
  );
};

const mnuPrincipal = () => {
  const options = [
    {
      name: "mnuOPCION",
      type: "list",
      message: "Seleccione una opcion:",
      choices: ["01.Hello World",
                "02.Creacion Address Wallet",
                "03.Consultar Transacciones",
                "04.Salvar Wallet a Disco",
                "05.Leer Wallet de Disco",
                "06.Transferir XEMs",
                "07.Revisar balances (XEM y Mosaics)",
                "08.Transferir Mosaics",
                "99.Salir"],
      filter: function(val) {
        return val.split(".")[1];
      }
    }
  ];
  return inquirer.prompt(options);
};

const run = async () => {
  // Mostrar Titulo principal del menu.
  init();

  // Mostrar menu y esperar la respuesta
  const answers = await mnuPrincipal();
  const { mnuOPCION } = answers;

	switch(mnuOPCION) {
		case 'Hello World': {
    	helloWorld();
    	break;
   	}
		case 'Creacion Address Wallet': {
    	console.log('Creacion Address Wallet');
    	break;
   	}
		case 'Consultar Transacciones': {
    	console.log('Consultar Transacciones');
    	break;
   	}
		case 'Salvar Wallet a Disco': {
    	console.log('Salvar Wallet a Disco');
    	break;
   	}
  	case 'Leer Wallet de Disco': {
			walletReading();
    	break;
   	}
		case 'Leer Wallet de Disco': {
    	console.log("Good");
    	break;
   	}
		case 'Transferir XEMs': {
    	console.log('Leer Wallet de Disco');
    	break;
   	}
		case 'Revisar balances (XEM y Mosaics)': {
    	console.log('Revisar balances (XEM y Mosaics)');
    	break;
   	}
		case 'Transferir Mosaics': {
    	console.log('Transferir Mosaics');
    	break;
   	}
		case 'Salir': {
    	console.log('Saliendo...');
    	break;
   	}
	};
};

run();

/*

// Si quisieramos trabajar con parametros desde la linea de comandos,
// Deberiamos procesar los argumentos que reciba

// Se leen los parametros y se almacenan en una variable
const inputArguments = process.argv.slice(2);

// Funcion para procesar los parametros
const main = async () => {
	if (inputArguments[0] === 'wallet') {
		if (inputArguments[1] === 'read') {
			walletReading();
		};
	};
};

// Funcion de inicio principal
main();

*/
