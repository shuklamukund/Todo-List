
import { bindActionCreators } from 'redux';
import './App.css'
import Addtodo from './components/Addtodo/Addtodo'
import TodoList from './components/TodoList/TodoList'
import { useDispatch } from 'react-redux';

import todoReducer,{addTodo,editTodo,deleteTodo,todoFinished} from './slices/todoSlice';
function App() {

  const dispatch=useDispatch();
  const actions=bindActionCreators({addTodo,deleteTodo,editTodo,todoFinished},dispatch);
  return (
    <>
      <Addtodo addTodo={actions.addTodo}/>
      <TodoList deleteTodo={actions.deleteTodo} editTodo={actions.editTodo} todoFinished={actions.todoFinished}/>
    </>
  )
}

export default App
