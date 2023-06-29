import Header from "./Header";
import {Watchlist} from "./Watchlist"
import { Watched } from "./Watched";
import Add from "./Add";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./GlobalState";
function App() {
  return (
    <GlobalProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Watchlist/>}></Route>
        <Route path="/watched" element={<Watched/>}></Route>
        <Route path="/add" element={<Add/>}></Route>


        
      </Routes>
    </Router>
    </GlobalProvider>
  );
}

export default App;
