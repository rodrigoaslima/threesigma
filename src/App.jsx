import { Link, Route, Routes } from 'react-router-dom';
import logo from './assets/images/logo.svg'
import bgImage from './assets/images/4.png'
import { Info } from './Pages/Info/Index';

function App() {
  return (
    <div class="flex h-screen"> 
      <div class="flex-none w-96  bg-cover bg-gradient-to-b from-black to-white" style={{backgroundImage: `url(${bgImage}`}}>
       
        <div>
          <div class="flex flex-col mt-7 ml-7 fixed bottom-16 z-10">
            <Link to='protocol'>Aave</Link>
            <a href='/'>Blur</a>
            <a href='/'>Foundation</a>
            <a href='/'>Ribbon</a>
            <a href='/'>Zora</a>
          </div>
        </div>
      </div>

      <div class=" flex flex-1  justify-center items-center w-screen bg-slate-300 " >
      <Routes>
        <Route path="protocol/" element={<Info/>}/>
      </Routes>
      </div>

    </div>
  );
}

export default App;
