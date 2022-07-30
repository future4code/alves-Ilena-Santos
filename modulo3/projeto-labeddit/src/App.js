import React from "react";
import Router from "./routes/Router";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';




export default function App() {
  return (
    <div >
      <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      <Router />
    </div>
  )
}
