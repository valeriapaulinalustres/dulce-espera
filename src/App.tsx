import './app.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Drug from './views/drug/Drug';
import { ApiProvider } from './context/ApiContext';


function App() {

  return (
    <div >
      <ApiProvider>
        <BrowserRouter>
          <div className="App container">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/drug" element={<Drug />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </ApiProvider>
    </div >
  );
}

export default App;