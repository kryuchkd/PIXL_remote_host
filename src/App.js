/* crediting github: briancodex for to do functionality used his components
from https://github.com/briancodex/react-todo-app-v1 for to do section of this
react app */
import {Router, Route, Routes} from 'react-router-dom';
import './App.css';
import TodoList from './components/TodoList';
import ReviewState from './components/ReviewState';
import NavBar from './components/NavBar';
import IntroPage from './components/IntroPage';
import AboutUs from './components/AboutUs';

function App() {
  return (
        <>
          <header><NavBar/></header>
          <Routes>
            <Route path = "/PIXL_remote_host/aboutUs" element={<AboutUs/>} exact /> 
            <Route path = "/PIXL_remote_host" element={<IntroPage/>} exact />
            <Route path = "/PIXL_remote_host/linklist" element={<TodoList className="todolist"/>} exact />
            <Route path = '/PIXL_remote_host/review' element={<ReviewState/>} exact />
          </Routes>
          </>
  );
}

export default App;
