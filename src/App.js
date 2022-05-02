import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./COMPONENTS/HEADER/Navbar";
import Home from "./COMPONENTS/HOME__PAGE/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/Responsive.css";
// import Footer from './COMPONENTS/FOOTER/Footer';
import Admin from "./ADMIN/Admin";
import Join_us from "./COMPONENTS/JOIN US/Join_us";
import SaktiWeek from "./Temp Component/Sakti Week/SaktiWeek";
import ListTeam from "./COMPONENTS/TEAM/ListTeam";
import About from "./COMPONENTS/ABOUT/About";
import AdminHandle from "./ADMIN/AdminHandle";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/team" >
        <ListTeam/>
        </Route>
        <Route path="/admin/admin_handle" >
        <AdminHandle/>
        </Route>
        <Route path="/about" >
        <About/>
        </Route>
        <Route path="/join_us">
          <Join_us />
        </Route>
        <Route path="/saktiweek" component={SaktiWeek} />
        <Route path="/admin" component={Admin} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
