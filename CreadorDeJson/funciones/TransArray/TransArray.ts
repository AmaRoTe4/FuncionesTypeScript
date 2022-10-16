import * as fs from 'fs/promises'
import { CuerpoPalabras } from '../../interface'

const TransArray = async ():Promise<CuerpoPalabras[]> => {
    const aux = await (await fs.readFile('data.txt' , 'utf-8')).split('\n')
    
    let español:string[] = []
    let ingles:string[] = []
    
    for(let i = 0; i < aux.length; i+=2) {
        ingles.push(aux[i])
        español.push(aux[i+1])
    }

    let retorno:CuerpoPalabras[] = ingles.map(( n , i ) => {
        if(typeof(español[i]) === 'string' && typeof(n) === 'string'){
            return (
                {
                    spanish:español[i],
                    english:n,
                    pronunciation:'-'
                }
            ) 
        }
        return({
            spanish:'-',
            english:'-',
            pronunciation:'-'
        })
    })

    return retorno
}

export default TransArray;

//este es un creador de archivos json
//el cual nace con el fin de crear dichos archivos cocn especificaciones a justo.