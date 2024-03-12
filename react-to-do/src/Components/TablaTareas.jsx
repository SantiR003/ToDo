import { Data } from "./DetallesTabla"
import '../Css/Tareas.css'

export const Tabla = ({ tareas = [], controladorEliminar, controladorActualizar, tareaCompletada }) => {


  return (

    <>
      <div className="table-container">
          <table className="table table-bordered border-black">
            <thead className="table-info border-black">
              <tr className="headers">
                <th>Id</th>
                <th>Tarea</th>
                <th>Completado</th>
                <th>Actualizar</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {
                tareas.map(tarea => {
                  return (
                    <Data tarea={tarea} controladorActualizar={controladorActualizar} controladorEliminar={controladorEliminar} tareaCompletada={tareaCompletada} key={tarea.id} />
                  )
                })

              }

            </tbody>

          </table>
      </div>

    </>
  )
}