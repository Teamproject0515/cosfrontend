import {BrowserRouter as Router} from "react-router-dom";
import AppRouter from './ProductListComponent/route/RouterComponent';
import Banner from "./Maincomponent/Banner";
import Footer from "./Maincomponent/Footer";


function App() {
  return (
    <div className="App">
      <Router >
        <Banner />
        <AppRouter />
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
