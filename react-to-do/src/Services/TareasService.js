import axios from "axios"

const urlBase = 'http://localhost:8080/tareas';

export const findAll = async() =>{

    try {
        const respuesta = await axios.get(urlBase);
        return respuesta;
    } catch (error) {
      console.log(error);
    }
    return null;

}