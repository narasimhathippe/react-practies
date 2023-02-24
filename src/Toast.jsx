import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Toast() {
  return (
    <div>
        <ToastContainer/>
        <h1>Toast</h1>
        <button onClick={()=>{
            toast.success('success',{position:toast.POSITION.TOP_CENTER})
        }}>success</button>
    </div>
  )
}

export default Toast