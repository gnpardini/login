import { useState } from 'react';
import './App.css';

function App() {
  const username = "Gisela123";
  const password = "password";

  const [usernameState, setUsername] = useState('');
  const [passwordState, setpassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  function login() {
    if(usernameState === username && passwordState === password) {
      setLoggedIn(true)
    }
  }
  //event.target.value keeps every single character you enter on the input
  return (
    <div className="App">
      <h1>Login</h1>
      <input type="text" onChange={(event) => {
        setUsername(event.target.value)
      }}/>
      <input type="password" onChange={(event) => {
        setpassword(event.target.value)
      }}/>
      <button onClick={login}>Submit</button>

      {loggedIn && (
         <h1>Logged In</h1>
      )}
    </div>
  );
}

export default App;
