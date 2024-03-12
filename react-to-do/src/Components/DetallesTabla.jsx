import { useState } from 'react'
import '../Css/Tareas.css'

export const Data = ({tarea = {}, controladorActualizar,controladorEliminar}) =>{
    
   const [isChecked, setIsChecked] = useState(false);

   const controladorCheckBox = (event)=>{
     const {checked} = event.target;
     setIsChecked(checked); 
   }

   return(
   <tr className={isChecked ? 'table-success border-black' : 'table-light border-black'}>
     <td>{tarea.id}</td>
     <td>{tarea.descripcion}</td>
     <td><input type='checkbox' className='tarea-completada' checked={isChecked} onChange={controladorCheckBox} ></input></td>
    <td>
        <button onClick={() => {controladorActualizar(tarea)}}>Actualizar</button>
     </td>
     <td>
        <button onClick={() => {controladorEliminar(tarea.id)}}>Eliminar</button>
     </td> 
    </tr>
   )

   
}