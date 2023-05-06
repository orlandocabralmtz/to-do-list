const ToDoItem = ({ todo, handleDelete }) => { // todo es el prop para mostrar la tarea y handleDelete es el prop para eliminar la tarea
  return (
    <li> {todo}
      <button
        className='delete-button'
        onClick={handleDelete}
      > Eliminar
      </button>
    </li>
  )
}
export default ToDoItem
