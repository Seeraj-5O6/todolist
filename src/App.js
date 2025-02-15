import React,{useReducer} from "react";
import "./App.css";
import {Container} from "reactstrap";
import todoReducer from "./context/reducer";
import "bootstrap/dist/css/bootstrap.min.css";


import TodoContext from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";





const App=()=>{

  const [todos,dispatch]=useReducer(todoReducer,[]);



  return(
<TodoContext.Provider value={{todos,dispatch}}>


  <Container fluid>
    <h1>Todo App with Context API</h1>
    <Todos/>
    <TodoForm/>
  </Container>


</TodoContext.Provider>



  );
}

export default App;
