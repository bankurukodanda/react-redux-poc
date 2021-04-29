import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import AppRouter from './AppRouter.js';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
          <AppRouter></AppRouter>  
        <Footer></Footer>
      </Router> 
    </div>
  );
}

export default App;
