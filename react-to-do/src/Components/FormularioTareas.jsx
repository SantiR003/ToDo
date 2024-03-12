import { useState, useEffect } from "react";

export const FormularioTareas = ({ controladorAgregar, controladorActualizar, tareas = []}) => {
  const initialForm = {
    id: 0,
    descripcion: ''
  };

  const [formulario, setFormulario] = useState(initialForm);

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  useEffect(()=>{
    setFormulario(controladorActualizar);
    setShowModal(true);
    if(tareas.includes(formulario))
    {
      setFormulario(initialForm);
    }
  },[controladorActualizar]);

  const handleClose = ()=>{
    setFormulario(initialForm);
    handleCloseModal();
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formulario.descripcion) {
      alert("Debe completar los campos");
      return;
    }

    if (tareas.find(tarea => tarea.descripcion === formulario.descripcion)) {
      alert("La tarea ya existe");
      return;
    }

    controladorAgregar(formulario);
    setFormulario(initialForm);
    handleCloseModal();
  };

  return (
    <>
    <div className="button-modal">
      <button type="button" className="btn btn-outline-info" onClick={handleOpenModal}>Agregar Tarea</button>
    </div>
      <div className={`modal ${showModal ? 'show' : ''}`} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: `${showModal ? 'block' : 'none'}` }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Nueva Tarea</h5>
              <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseModal}></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="descripcion" className="form-label">Descripción:</label>
                  <input type="text" className="form-control" id="descripcion" value={formulario.descripcion} onChange={(e) => setFormulario({ ...formulario, descripcion: e.target.value })} />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={handleClose}>Cerrar</button>
                  <button type="submit" className="btn btn-primary">{formulario.id > 0 ? 'Actualizar' :'Crear'}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};