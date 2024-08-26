import './App.css';
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Update from './Pages/Update'
import Delete from './Pages/Delete'
import { Routes , Route } from 'react-router-dom'

function App() {
  return (
   <>
   <Navbar/>
   <div className='container'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/update' element={<Update/>}/>
      <Route path='/delete' element={<Delete/>}/>
    </Routes>
   </div>
  </>
  );
}

export default App;
