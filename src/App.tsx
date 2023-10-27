import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/home";
import { RouteNotFound } from "./utils/RouteNotFound";
import { Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="bg-[url(https://www3.animeflv.net/assets/animeflv/img/bg.jpg)]">
      <Navbar />
      <BrowserRouter>
        <RouteNotFound>
          <Route path="" element={<Home />} />
        </RouteNotFound>
      </BrowserRouter>
    </div>
  );
}

export default App;
