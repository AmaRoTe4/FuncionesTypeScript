import * as fs from 'fs/promises'
import { CuerpoPalabras } from '../../interface'

const CrearArchivo = async (objeto:CuerpoPalabras[]):Promise<void> => {
    await fs.writeFile('Archivos/Nuevo.json' , JSON.stringify(objeto))
}

export default CrearArchivo;

//este es un creador de archivos json
//el cual nace con el fin de crear dichos archivos cocn especificaciones a justo.