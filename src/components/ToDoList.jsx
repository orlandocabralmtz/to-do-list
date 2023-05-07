import { useState } from 'react'
import ToDoItem from './ToDoItem' // se importa el componente ToDoItem

const ToDoList = () => {
  // 1: los estados de React sirven para guardar información que se va a utilizar en el componente. esta informacion tiene la particularidad de que se actualiza la vista automaticamente cuando cambia el estado
  // El primer elemento del arreglo es el valor del estado y el segundo elemento es una funcion que se utiliza para actualizar el valor del estado
  const [inputValue, setInputValue] = useState('') // 2: se inicializa el estado con un string vacio - Esto se usara para un input

  // se añade un estado para almamcenar la lista de tareas
  const [todos, setTodos] = useState([]) // 5: se inicializa el estado con un arreglo vacio - Esto se usara para almacenar la lista de tareas

  // esta funcion se ejecuta cuando el usuario hace click en el boton agregar

  // se va a modificar la funcion para que el ToDo se agrege a la lista de tareas con el arreglo de tareas
  const handleAdd = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]) // 6: se agrega el valor del input al arreglo de tareas- con el spread operator se agrega el valor del input al arreglo de tareas
      setInputValue('') // 7: se limpia el input para que el usuario pueda agregar otra tarea
    }
  }
  // funcion para eliminar una tarea
  const handleDelete = (index) => { // el index es el indice del elemento que se va a eliminar
    setTodos(todos.filter((_, i) => i !== index)) // i es el indice del elemento que se esta iterando. el _ se usa para indicar que no se va a usar el elemento
  }

  return (
    <div>
      <h1>Lista de trareas </h1>
      {/* 1: se agrega un titulo */}
      <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} /> {/* 3: se agrega un input para que el usuario pueda escribir. El value será lo que este en el input value  */}

      <button onClick={handleAdd}> Agregar</button>  {/* 4: se agrega un boton para agregar tareas */}
      <ul>
        {/* 8: se itera el arreglo de tareas para mostrar cada tarea. por cada elemento creamos un ToDoItem */}
        {todos.map((todo, index) => ( // el map recibe una funcion que se ejecuta por cada elemento del arreglo. el primer parametro es el elemento y el segundo parametro es el indice del elemento
          <ToDoItem
            todo={todo}
            handleDelete={() => handleDelete(index)}
            key={index} // el key es un identificador unico para cada elemento. en este caso se usa el indice del elemento. Se usa el indice porque no se va a modificar el arreglo de tareas
          />
        ))}
      </ul>
    </div>
  )
}
export default ToDoList
