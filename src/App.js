import './App.css';
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import app from './Firebase/Firebase.init';

const auth = getAuth(app);
console.log(auth)

function App() {
  const provider = new GoogleAuthProvider()
  console.log(provider)
  const handleGoogleSign = () => {
    console.log('Google sign in coming')
  }
  return (
    <div className="App">
      <button onClick={handleGoogleSign}>Google Sing In</button>
    </div>
  );
}

export default App;
