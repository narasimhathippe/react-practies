import React from 'react'
import Form from "./Form"
import '../Task/global.css'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Dashboard'
import Employee from './Employee'
function App() {
  return (
    <div>
      <ToastContainer/>
        <Router>
          <Routes>
            <Route path='/' element={<Form/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/Employee' element={<Employee/>}/>
          </Routes>
        </Router>
    </div>
  )
}

export default App