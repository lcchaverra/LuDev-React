import React, { useState } from 'react';

// Formulario De Tareas
function FormTarea({ addTodo }) {
    const [value, setValue] = useState('');
  
  //   Manejo del Submit
    const handleSubmit = (event) => {
      event.preventDefault();
      addTodo(value);
      setValue('');
    }
  
    return (
      <>
      <h2 className="title">Formulario de Tareas</h2>
          <div className="main-container">
              <form onSubmit={handleSubmit}>
                  <div className="form-item">
                      <label htmlFor="Tarea">Tarea</label>
                      <input
                        className="Large-Imput"
                          type="text" name='Tarea'
                          value={value}
                          onChange={(event) => setValue(event.target.value)}
                      />
                  </div>
                  <div className="form-item">
                      <button type="submit" className="button">Agregar tarea</button>
                  </div>
              </form>
          </div>
      </>
    );
  }


export default FormTarea