import React,{useState, useEffect} from 'react'
import axios from 'axios'

const todo = props => {

    const [todoName,setTodoName] = useState('');
    const [todoList,setTodoList] = useState([])

    useEffect(()=> {
        axios
        .get('https://react-demo-5c585.firebaseio.com/todo.json')
        .then(res=> {
            console.log(res);
            const todoData = res.data;
            const todo = [];
            for(const key in todoData){
                todo.push({id:key,name:todoData[key].name})
            }
            setTodoList(todo);
        })
        .catch(err=> {
            console.log(err)
        })
    },[])

    const mouseMovementHandler = (event) => {
        console.log(event.clientX,event.clientY)
    }

    useEffect(()=> {
        document.addEventListener('mousemove',mouseMovementHandler);
        return () => {
            document.removeEventListener('mousemove',mouseMovementHandler);
        };
    },[])

    const inputChangeHandler = (event) => {
        setTodoName(event.target.value)
    }

    const todoHandler = () => {
        // setTodoList(todoList.concat(todoName));
        axios
            .post('https://react-demo-5c585.firebaseio.com/todo.json',{name:todoName})
            .then((res)=> {
                console.log(res)
                setTodoName("")
            })
            .catch(err=> {
                console.log(err)
            })
    }


    return(
        <React.Fragment>
            <input 
                type="text"
                placeholder="Todo"
                onChange={inputChangeHandler}
                value={todoName}
            />
            <button type="button" onClick={todoHandler}>Add</button>
            <ul>
                {todoList.map(todo=><li key={todo.id}>{todo.name}</li>)}
            </ul>
        </React.Fragment>
    )
}

export default todo

