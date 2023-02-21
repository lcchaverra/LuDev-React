import React, { useState } from 'react';
import FormTarea from './FormTarea';

// Listado de Tareas - ToDo
function RetoMañana() {
    <FormTarea/>

    const [todos, setTodos] = useState([]);
  
    const addTodo = (nombre) => {
      const newTodos = [...todos, { nombre, realizada: false }];
      setTodos(newTodos);
    }
  
    return (
        <>
        <h3 className="title">Listado de Tareas</h3>
            <div className="main-container">
                <div className="form-item">
                    <ul>
                        {todos.map((todo, index) => (
                            <li key={index}>
                            <input
                                type="checkbox"
                                checked={todo.realizada}
                                onChange={() => {
                                const newTodos = [...todos];
                                newTodos[index].realizada = !newTodos[index].realizada;
                                setTodos(newTodos);
                                }}
                            />
                            <span style={{ textDecoration: todo.realizada ? 'line-through' : 'none' }}>
                                {todo.nombre}
                            </span>
                            </li>
                        ))}
                    </ul>
                <FormTarea addTodo={addTodo} />
            </div>
        </div>
        </>
    );
}

export default RetoMañana