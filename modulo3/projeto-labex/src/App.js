import {ContainerApp} from "./App-styled"
import { Router } from "./routes/Router";
import Footer from "./components/Footer/Footer"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';




function App() {
  return (
    
    
    <ContainerApp >
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
      <Router/>
      <Footer/>
    </ContainerApp>
    
  );
}

export default App;
