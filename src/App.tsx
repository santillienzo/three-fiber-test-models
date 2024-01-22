import {BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/layout/Navbar/Navbar";

const App = () => {

  return (
    <main className="main">
      <Router>
          <Navbar />
          <AppRoutes/>
      </Router>
    </main>
    
  )
}

export default App
