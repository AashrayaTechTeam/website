<<<<<<< HEAD
import { BrowserRouter as  Router,Switch,Route } from 'react-router-dom';
import Navbar from './COMPONENTS/HEADER/Navbar';
import Home from './COMPONENTS/HOME__PAGE/Home';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './COMPONENTS/FOOTER/Footer';
import Join_us from './COMPONENTS/JOIN US/Join_us';
import Display_representatives from './COMPONENTS/ADMIN/MANAGE STATE REPRESENTATIVE/Display_representatives';
function App() {
  return (
    
    <Router>
      <Navbar/>
    <Switch>
        <Route path="/join_us">
          <Join_us/>
        </Route>
        <Route path="/assam_representative">
          <Display_representatives/>
        </Route>
        <Route path="/" component={Home}/>
    </Switch>
    </Router>
=======
import logo from './logo.svg';
import './App.css';
import './styles/output.css'
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
  <>
  <Navbar/>
  <div className="bg-white h-screen relative z-0">
    <div className="bg-black h-1/2 bg-image relative">
      <p className="text-white text-9xl font-bold absolute bottom-0 right-0 -mb-5 pr-64">
          A
      </p>
    </div>
    <div className="bg-white h-2/5 px-12 pt-8 flex justify-between">
      <div>
      <p className="font-medium text-gray-700 text-base pb-6">
        <span className="border-2 border-gray-500 mr-2.5 inline-block w-7"/> Helping hands
      </p>

      <h3 className="text-black text-4xl font-extrabold leading-normal mb-8">
          We help people <br/>
          Live there dreams
      </h3>

      <div>
          <button className="bg-black px-10 py-3 text-white rounded-xl font-bold">
              Donate

          </button>

          <button className="px-10 py-3 text-black rounded-xl font-bold">
              Learn More
          </button>

      </div>

    </div>
      <div className="pr-32">
          <h2 className="bg-yellow-300 text-5xl font-serif px-4 py-2 mb-4 inline-block text-gray-800">
              Solution
          </h2>
          <p className="text-gray-600">
              To show the people the beauty <br/> of this world.
          </p>
      </div>

    </div>
    <div className="flex justify-end px-12 py-4">
          <ul className="flex justify-between link-list">
              <li>
                  <p className="font-bold text-gray-600 text-sm">Person</p>
              </li>

              <li>
                  <p className="font-bold text-gray-600 text-sm">Get Quote</p>
              </li>

              <li>
                  <p className="font-bold text-gray-600 text-sm">Follow</p>
              </li>
          </ul>
    </div>
  </div>
  </>

<<<<<<< HEAD
>>>>>>> 9bf2c554b34bed6311368599b42466def84d46c6
=======
>>>>>>> 9bf2c554b34bed6311368599b42466def84d46c6
  );
}

export default App;
