import {useState} from 'react';
import Login from './components/noAuth/Login';
import Welcome from './components/Auth/Welcome';
import './App.css';

function App() {
  const [user, setUser] = useState(undefined);
  return (
  
    <form class='backGround'>
    {user?
    <Welcome />: <Login />}
    </form>
  );
}

export default App;
