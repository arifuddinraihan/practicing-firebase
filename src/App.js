import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import app from './Firebase/Firebase.init';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const provider = new GoogleAuthProvider()
  const [user , setUser] = useState({})
  const handleGoogleSign = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user
        setUser(user)
      })
      .catch(error => {
        console.error("error :", error)
      })
  }
  console.log(user)
  const handleSignOut = () => {
    signOut(auth)
      .then()
      .catch()
  }
  return (
    <div className="App">
      <button onClick={handleGoogleSign}>Google Sing In</button>
      <button onClick={handleSignOut}>Sing Out</button>
      <div>
        <h3>User : {user.displayName}</h3>
        <p>Email : {user.email}</p>
        <img src={user.photoURL}></img>
      </div>
    </div>
  );
}

export default App;
