import React,{useState} from 'react';
import './App.css';
import Todo from './components/Todo';
import Auth from './components/Auth';
import Header from './components/Header';

const app = () =>{

  const [todo,setTodoDisplay] = useState(false);
  const [auth,setAuthDisplay] = useState(false);

  const setTodo = () => {
    console.log(todo)
      if(todo){
        setTodoDisplay(false)
        console.log(todo)
      } else {
        setTodoDisplay(true)
        console.log(todo)
      }
  }

   const setAuth = () => {
    if(auth){
      setAuthDisplay(false)
    } else {
      setAuthDisplay(true)
    }
   }

    return (
      <div className="App">
        <Header onLoadTodos= {setTodo} onLoadAuth={setAuth} />
        <hr />
        <Todo todoDisplay = {todo} />
        <Auth setAuthDisplay = {auth} />
      </div>
    );
  
}

export default app;
