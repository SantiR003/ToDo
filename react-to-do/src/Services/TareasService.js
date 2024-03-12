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

export const create = async({descripcion}) => {
  try {
    const respuesta = await axios.post(urlBase,
    {descripcion});
    return respuesta;
  } catch (error) {
    console.log(error);
  }

  return undefined;
}

export const update = async({id,descripcion}) => {
  try {
    const respuesta = axios.put(`${urlBase}/${id}`,{descripcion});
    return respuesta;
  } catch (error) {
    console.log(error);
  }

  return undefined;
}

export const remove = async(id)=>{

  try {
    await axios.delete(`${urlBase}/${id}`);
  } catch (error) {
    console.log(error);
  }
}