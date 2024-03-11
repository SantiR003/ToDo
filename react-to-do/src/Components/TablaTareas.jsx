import { Data } from "./DetallesTabla"

export const Tabla = ({tareas = [] , controladorEliminar,controladorActualizar })=>{
 
    return (

        <>
        <table>
          <thead>
            <tr>
                <th>Id</th>
                <th>Tarea</th>
            </tr>
          </thead>
          <tbody>
           {
             tareas.map(tarea => {
                return (
                     <Data tarea={tarea}  controladorActualizar={controladorActualizar} controladorEliminar={controladorEliminar} key={tarea.id} /> 
                )
             })
            
           }

          </tbody>

        </table>
        
        </>
    )
}