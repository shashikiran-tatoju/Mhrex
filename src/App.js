import logo from './logo.svg';
import './App.css';
import Home from './components/Home/home'
import Login from './components/login/login'
import Services from './components/services/services'
function App() {
  return (
    <div className="App">
      <Home/>
      {/* <Login/> */}
      <Services/>


      
    </div>
  );
}

export default App;
