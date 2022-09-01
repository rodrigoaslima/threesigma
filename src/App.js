import './App.css';

import logo from './assets/images/logo.svg'

function App() {
  return (
    <div class="flex h-screen">
      <div class="flex-none w-96 bg-red-300">
        <img src={logo} alt="logo" class="h-9 w-48" />
      </div>

      <div class="flex-1 w-screen bg-slate-300" >
        <h1>tela 2</h1>
      </div>

    </div>
  );
}

export default App;
