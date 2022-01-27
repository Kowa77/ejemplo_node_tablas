const fs = require('fs');
const colors = require('colors');

colors.setTheme({
    blue: 'blue',
    title: 'cyan'
  });

const crearArchivo = async(  base, listar = false, limite=10 ) =>{

    try {
        let salida  = '';
        let consola  = '';

        if(limite){
            for (let i = 1; i <= limite ; i++) {
                salida += `${ base } x ${ i } = ${  base * i }\n`;
                consola += `${ base } ${ 'x'.yellow } ${ i } ${'='.yellow} ${  base * i }\n`;
            }

        }else{
            for (let i = 1; i <= 10 ; i++) {
                salida += `${ base } x ${ i } = ${  base * i }\n`;
                consola += `${ base } ${ 'x'.yellow } ${ i } ${'='.yellow} ${  base * i }\n`;
            }
        }

        
        if (listar){

            console.log("=============================".title);
            console.log("         TABLA DEL".title, base);
            console.log("=============================".title);
            console.log(consola);
        }
        
        fs.writeFileSync(`./salida/Tabla del ${ base }.txt`, salida);

        return `Tabla_Del_${ base }.txt`;
        
    } catch (err) {
        throw err
    }

}

module.exports = {
    //crearArchivo: crearArchivo    es revundante se puede usar una ves sola 
    crearArchivo
}