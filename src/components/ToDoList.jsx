import { useState } from 'react'

const ToDoList = () => {
  // 1: los estados de React sirven para guardar información que se va a utilizar en el componente. esta informacion tiene la particularidad de que se actualiza la vista automaticamente cuando cambia el estado
  // El primer elemento del arreglo es el valor del estado y el segundo elemento es una funcion que se utiliza para actualizar el valor del estado
  const [inputValue, setInputValue] = useState('') // 2: se inicializa el estado con un string vacio - Esto se usara para un input

  // esta funcion se ejecuta cuando el usuario hace click en el boton agregar
  const handleAdd = () => {
    console.log('agregar: ', inputValue)
  }
  return (
    <div>
      <h1>Lista de trareas </h1>
      {/* 1: se agrega un titulo */}
      <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} /> {/* 3: se agrega un input para que el usuario pueda escribir. El value será lo que este en el input value  */}

      <button onClick={handleAdd}> Agregar</button>  {/* 4: se agrega un boton para agregar tareas */}
      <ul>
        <li> Comprar Leche
          <button> Eliminar</button>
        </li>
        <li> Comprar Pan
          <button> Eliminar</button>
        </li>
        <li> Comprar Huevos
          <button> Eliminar</button>
        </li>
      </ul>
    </div>
  )
}
export default ToDoList
