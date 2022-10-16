import CrearArchivo from './funciones/CrearJson/CrearJson'
import TransArray from './funciones/TransArray/TransArray'
import { CuerpoPalabras } from './interface'
import { SacarTabulacionYEspacion } from './funciones/SacarEspaciosYTab/index'


const ver = async():Promise<void> => {
    SacarTabulacionYEspacion();
    const retorno:CuerpoPalabras[] = await TransArray()
    CrearArchivo(retorno);
}

ver();

//TrasJson()
//CrearArchivo();