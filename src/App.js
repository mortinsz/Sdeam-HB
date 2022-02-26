import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import News from './components/pages/News/News';

function App() {
  return (
    <BrowserRouter className="App">
        <Header/>
        <Routes>
          <Route path="/news" element={<News/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
