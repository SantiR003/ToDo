import { useEffect, useState } from "react"
import { Tabla } from "./TablaTareas";
import { FormularioTareas } from "./FormularioTareas";
import { create, findAll, remove, update } from "../Services/TareasService";
import '../Css/Tareas.css';


export const Home = () => {

  const [tareas, setTareas] = useState([]);
  const [actualizarTarea, setActualizarTarea] = useState({
    id: 0,
    descripcion: ''
  })

  useEffect(() => {
    ObtenerTareas();
  }, []);

  const ObtenerTareas = async () => {

    const result = await findAll();
    setTareas(result.data._embedded.tareas);
  }

  const controladorAgregarTarea = async (nuevaTarea) => {
    if (nuevaTarea.id > 0) {
      const resultado = await update(nuevaTarea);
      setTareas(tareas.map(tarea => {
        if (tarea.id == resultado.data.id) {
          return { ...resultado.data };
        }
        return tarea;
      })
      )
    }
    else {
      const resultado = await create(nuevaTarea);
      setTareas([...tareas, { ...resultado.data }]);
    }

  }
  const controladorEliminar = async (id) => {
    await remove(id);
    ObtenerTareas();
  }

  const ActualizarTarea = (tarea) => {
    setActualizarTarea({ ...tarea });
  }



  return (
    <>
      <div className="container-principal">
        <h1 className="titulo">Lista de Tareas</h1>


        <div className="container">
          <div className="container-elementos">

            <div className="form">
              <FormularioTareas controladorAgregar={controladorAgregarTarea} controladorActualizar={actualizarTarea} tareas={tareas} />
            </div>

            <div className="col-md-12">
              {tareas.length !== 0 ? (
                <Tabla tareas={tareas} controladorEliminar={controladorEliminar} controladorActualizar={ActualizarTarea} />
              )
                :
                (
                  <div className="texto-sinTareas">
                    <p>Todavia no hay tareas, prueba en agregar una.</p>
                    <img className="imagen" src="src\img\lista-de-tareas-ilustracion.png" alt="" />
                  </div>
                )
              }
            </div>

          </div>
        </div>

      </div>
    </>
  )
}