import './App.css';
import  Home  from './pages/Home/Home';
import  Timer  from './pages/Timer/Timer';
import  Footer  from './components/Footer/Footer';
import  Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
     <BrowserRouter>
      <div>
        <Header/>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Timer' element={<Timer/>}/>
         </Routes>
            <Footer/>
      </div>
     </BrowserRouter>

        </>
    )
}


export default App;
