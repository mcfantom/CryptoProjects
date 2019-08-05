/**
 * Completa con 0 (cero) a la izquierda un numero
 * @numberToPad {Number} Numero a completar con ceros a la izquierda
 * @lengthRequired  {Number} Longitud a lograr completando con ceros
 * @return {String}
 */
export const leftPad = (numberToPad: number, lengthRequired: number): string => {
  let stringZero = '0';
  stringZero = stringZero.repeat(lengthRequired - numberToPad.toString.length);

  if (numberToPad.toString().length < lengthRequired) {
    return stringZero + numberToPad.toString();
  } else {
    return numberToPad.toString();
  };
};

/**
 * Esta funcion devuelve un timestamp en el formato YYYYMMDD_HHMMSS
 * @return {String}
 */
export const timeStampPretty = () =>{
  // Donde dice getMonth se suma 1, porque en javascript los meses son
  // "como el index de un array, inician en 0". Entonces, por ejemplo en el mes
  // de Agosto, getMonth devuelve un 7.
  const currentDate = new Date();
  const timeStampPrettyString = currentDate.getFullYear().toString() +
    leftPad(currentDate.getMonth() + 1, 2) +
    leftPad(currentDate.getDate(), 2) + '_' +
    leftPad(currentDate.getHours(), 2) +
    leftPad(currentDate.getMinutes(), 2) +
    leftPad(currentDate.getSeconds(), 2);

  return timeStampPrettyString;
};
