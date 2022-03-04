import logo from './logo.svg';
import './App.css';
import Home from './components/Home/home'
import Login from './components/login/login'
import Services from './components/services/services'
import Testimonial from './components/testimonial/testimonial'
import About from './components/about/about'
function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      {/* <Login/> */}
      <Services/>
      <Testimonial/>


      
    </div>
  );
}

export default App;
