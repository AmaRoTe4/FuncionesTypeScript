import * as fs from 'fs/promises';

export const SacarTabulacionYEspacion = async():Promise<void> => {
    const Path = '/home/amaro/Desktop/Proyectos/FuncionesTS/CreadorDeJson/data.txt'
    
    let dataPrimary:string = await fs.readFile(Path , 'utf8');
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

    await fs.writeFile(Path , retorno , 'utf8');

    console.log('funciona');
}