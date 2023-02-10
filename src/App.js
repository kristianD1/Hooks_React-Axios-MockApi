import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
//rutas
import Create from './components/create';
import Update from './components/update';
import Read from './components/read'

function App() {
  return (
    <div className='main'>
      <div>
      Vista Crud con React
      </div>
      <nav className='nav'>
        <Link to="/create">
        <p>CREATE</p>
        </Link>
        <Link to="/update">
        <p>---- </p>
        </Link>
        <Link to="/read">
        <p>READ</p>
        </Link>
      </nav>
      <Router/>
    </div>
  );
}

const Router = () => {
  return (
    <Routes>
      <Route path="/create" element={<Create />}></Route>
      <Route path="/update" element={<Update/>}></Route>
      <Route path="/read" element={<Read />}></Route>
    </Routes>
  )
}

export default App;
