import React, { useState } from "react";

function App(){
  const[value, setValue] = useState("");
  const[todos, setTodos] = useState([])


  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, value])
    setValue('') 
  };
return(
  <div>
    <form onSubmit={handleSubmit}>
      <h2>To do App</h2>
      <input
      onChange={(e) => setValue(e.target.value)}
      type="text" 
      

/>
<button type = "submit">Add</button>
    </form>
    {todos.map(todovalue => <h1> {todovalue}</h1>)}
  </div>
);
}
export default App;
