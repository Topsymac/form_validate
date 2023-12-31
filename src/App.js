import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit =(e)=>{
    e.preventDefault();
    // if (name === "" ) {
    //   alert('Name is required')
    // } 
    // if (email === ""){
    //   alert('Email is required')
    // }
    // if (password === "") {
    //   alert('Password is required')
    // }
    // return;
    if (name === "" || email === "" || password === ""){
      const emptyFields = [];
      if (name === "") {
        emptyFields.push("Name");
      }
      if (email === "") {
        emptyFields.push("Email");
      }
      if (password === "") {
        emptyFields.push("Password");
      }
      const emptyFieldsMessage = emptyFields.join(", ");

      alert(
        `${emptyFieldsMessage} ${
          emptyFields.length > 1 ? "are" : "is"
        } required.`
      );
    } else{ 
      alert ('Form Submitted Successfully')
    }
  }
  return (
    <div className="App">
      <h2>Fill your details correctly</h2>
      <div>
        <form action="" className="form" onSubmit={handleSubmit}>
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            
          />
          <label htmlFor="Name">Email Address</label>
          <input
            type="text"
            placeholder="enter@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            
          />
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            placeholder="*******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            
          />
          <button className="btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
