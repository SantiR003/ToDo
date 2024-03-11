export const Data = ({tarea = {}, controladorActualizar,controladorEliminar }) =>{
   
   return(
   <tr>
     <td>{tarea.id}</td>
     <td>{tarea.descripcion}</td>
    <td>
        <button onClick={controladorActualizar}>Actualizar</button>
     </td>
     <td>
        <button onClick={controladorEliminar}>Eliminar</button>
     </td> 
    </tr>
   )
}