import { useState } from "react";


function Addtodo({addTodo}){

   
const [inputText,setInputText]=useState('')


    return(

<>
        <input 
        type="text"
        value={inputText}
        placeholder="add your next todo.."
        onChange={e=>setInputText(e.target.value)}

        />
        <button onClick={()=>{addTodo({todoText:inputText});
        setInputText('');
        }}>Add</button>

        </>
    )
}
export default Addtodo;