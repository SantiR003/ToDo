import { useEffect, useState } from "react"
import { Tabla } from "./TablaTareas";
import { FormularioTareas } from "./FormularioTareas";
import { findAll } from "../Services/TareasService";


export const Home = () => {

    const[tareas,setTareas] = useState([]);

    useEffect(()=>{
        ObtenerTareas();
    },[]);

    const ObtenerTareas = async()=>{
      
        const result = await findAll();
        setTareas(result.data._embedded.tareas);
      }

      const controladorActualizar = ()=>
      {

      }
      const controladorEliminar = ()=>
      {

      }


    return (
        <>
           <h1 className="text-primary">Lista de Tareas</h1>
        
           <div>
     <div>
       { /* <FormularioTareas /> */}
     </div>
 
     <div>
       <Tabla tareas = {tareas}  controladorEliminar = {controladorEliminar} controladorActualizar={controladorActualizar} />
     </div>


   </div>
        </>
    )
}