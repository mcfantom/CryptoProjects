import { NEMLibrary, NetworkTypes, AccountHttp, SimpleWallet } from "nem-library";

/*
// Septimo Ejemplo OK
// Revisar balance de XEM
// Revisar blances de MOSAICs
*/

// Disponibilizacion del objeto fs (file system) en la variable fs
// Luego esta variable nos permitira interactuar con el sistema de
// archivos del sistema operativo
const fs = require('fs');

// Configuracion de la red de NEM sobre la que queremos trabajar
NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

// Variable donde se almacena la ruta donde se va a escribir el archivo de la wallet creada.
const rutaWallet = 'C:\\_Curso\\CryptoProjects\\bin';
// Variable que registra el nombre del archivo de la wallet a guardar
const nombreWalletFile = 'miWallet.wlt';
let fullFileWalletPath = `${rutaWallet}\\${nombreWalletFile}`;

// Leyendo el archivo de la wallet...
console.log('Cargando el contenido del archivo (en crudo) de la wallet en una variable\n');
const tmpStrMiWallet = fs.readFileSync(`${fullFileWalletPath}`, 'utf8');
const miWallet = SimpleWallet.readFromWLT(tmpStrMiWallet);
const myAddress = miWallet.address;
console.log('La address o direccion de la cuenta contenida en la wallet es:\n');
console.log(myAddress.pretty());


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

// La cantidad XEM es: 96.35
// La cantidad doctatst es: 1234566.999998
