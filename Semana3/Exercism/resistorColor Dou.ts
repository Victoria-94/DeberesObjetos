const colourValues = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]
export function decodedValue(bands:string[]):number {
   return colourValues.indexOf(bands[0]) * 10 + colourValues.indexOf(bands[1])
   //respasar indexOf
}//como llamar a la funcion 

decodedValue(["black","red","yellow"]);