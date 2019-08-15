import { NEMLibrary, NetworkTypes, SimpleWallet, Password } from "nem-library";

/*
// Quinto Ejemplo OK
// Leyendo una wallet desde el disco
*/

export const walletReading = () => {
  
  // Disponibilizacion del objeto fs (file system) en la variable fs
  // Luego esta variable nos permitira interactuar con el sistema de
  // archivos del sistema operativo
  const fs = require('fs');

  // Configuracion de la red de NEM sobre la que queremos trabajar
  NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

  // Variable para resguardar el password
  const miWalletPass = new Password('01PrimerTestWallet');

  // Variable donde se almacena la ruta donde se va a escribir el archivo de la wallet creada.
  const rutaWallet = 'C:\\_Curso\\CryptoProjects\\bin';
  // Variable que registra el nombre del archivo de la wallet a guardar
  const nombreWalletFile = 'miWallet.wlt';
  let fullFileWalletPath = `${rutaWallet}\\${nombreWalletFile}`;

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
};
