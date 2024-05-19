import React,{useState,useContext} from "react";


import {
    Form,
    Button,
    Input,
    FormGroup,
    InputGroup,
    InputGroupAddon
    
} from "reactstrap";

import {v4} from "uuid";
import TodoContext  from "../context/TodoContext";
import { ADD_TODO } from "../context/action.type";

const TodoForm=()=>{


    const [todostring,setTodoString]=useState("");
    const {dispatch}=useContext(TodoContext);


    const handleSubmit=e=>{


        e.preventDefault();

        if(todostring===""){
            return alert("Please enter the todo")
        }

        const todo={
            todostring,
            id:v4()


        }


        dispatch({

            type:ADD_TODO,
            payload:todo
        })

        setTodoString("");
    }

return(

<Form onSubmit={handleSubmit}>

<FormGroup>

    <InputGroup>

    <Input
    type="text"
    name="todo"
    id="todo"
    placeholder="Your Next Todo"

    value={todostring}
    onChange={e=>setTodoString(e.target.value)}
    />


    

        <Button color="warning"
        // onclick
        >
            Add
        </Button>
    
    
    
    
    
    </InputGroup>

  
</FormGroup>


</Form>



);

}

export default TodoForm;
