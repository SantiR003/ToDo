const initialForm = 
    {
       id:0,
       descripcion:''
    }

export const FormularioTareas = ({handlerAdd,updateProduct,handlerlist = []}) =>{

  const [form, setForm] = useState(initialForm);
  const {descripcion} = form;

  useEffect(()=>{
    console.log(updateProduct);
    setForm(updateProduct);
  },[updateProduct]);

  return (
   <form onSubmit={(event) => {event.preventDefault();
    
   if(!descripcion)
   {
    alert("Debe completar los campos");
   }
   else
   {
    if(handlerlist.includes(form))
    {
      handlerlist.forEach(product => console.log(product));
      alert("ya existe");
    }
    else{
      handlerAdd(form);
    }
   }
   setForm(initialForm);
   }}>
    <div>
      <div>
        <input style={{marginBottom: '2px'}} placeholder="Descripcion"  name="descripcion" value={descripcion} onChange={(event) => setForm({...form, descripcion:event.target.value})} ></input>
      </div>
      <div>
      <button type="submit">{form.id > 0 ? 'Update' :'Create'}</button>
     </div>
     </div>
  
   </form>

  );
}