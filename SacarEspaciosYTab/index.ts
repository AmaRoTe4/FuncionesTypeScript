const fs = require('fs/promises');

//\t and 
const SacarTabulacionYEspacion = async(Path:string):Promise<void> => {
    let dataPrimary:string = await fs.readFile(Path , 'utf8' , (err) => {
        err ? console.log(err.message) : ''
    });
    let response:string[] = dataPrimary.split('\n');
    const limpioArray:string[] | void[] = response.map(n => 
    {   
        let retorno = n.trim()
        return retorno;
    })
    
    let retorno:string = '';
    for(let i = 0 ; limpioArray.length > i; i++){
        retorno += `${limpioArray[i]}\n`;
    }

    await fs.writeFile(Path , retorno , 'utf8' , (err) => {
        err ? console.log(err.message) : ''
    });

    console.log('funciona');
}

SacarTabulacionYEspacion('/home/amaro/Desktop/Proyectos/FuncionesTS/SacarEspaciosYTab/Data/data.txt')