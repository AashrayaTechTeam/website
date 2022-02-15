import { BrowserRouter as  Router,Switch,Route } from 'react-router-dom';
// import Navbar from './COMPONENTS/HEADER/Navbar';
import Home from './COMPONENTS/HOME__PAGE/Home';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import PastWorks from './COMPONENTS/PAST_WORKS/pastworks';
import Footer from './COMPONENTS/FOOTER/Footer';
import Navbar from './components/Navbar/Navbar';
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
        <Route path="/past_works">
          <PastWorks/>
        </Route>
        <Route path="/" component={Home}/>
    </Switch>
    </Router>

  );
}

export default App;
