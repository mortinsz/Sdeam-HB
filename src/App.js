import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter className="App">
        <Header/>
        <div className="content"></div>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
