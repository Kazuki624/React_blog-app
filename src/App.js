import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import Login from './components/Login';
import Logout from './components/Logout';
import Navbar from './components/Navbar';
import { useState } from 'react';


function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth")) //ログインしているかしていないかを管理

  return (
    <Router>
      <Navbar isAuth={isAuth}/> {/* ログイン時：isAuth =true ,　ログアウト時：isAuth=false をプロップスで渡す*/}
      <Routes>
        <Route  path='/' element={<Home />} />
        <Route  path='/createpost' element={<CreatePost isAuth/>} />
        <Route  path='/login' element={<Login setIsAuth={setIsAuth}/>} /> {/* propsでlogin.jsに渡す*/}
        <Route  path='/logout' element={<Logout setIsAuth={setIsAuth}/>} />
        gitHub deploy
      </Routes>
    </Router>
  );
}

export default App;
