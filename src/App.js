import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LogIn from './components/pages/LogIn/LogIn';
import Main from './components/pages/Main/Main';
import News from './components/pages/News/News';
import NotFound from './components/pages/NotFound/NotFound';
import RegistFinish from './components/pages/RegistFinish/RegistFinish';
import SignUp from './components/pages/SignUp/SignUp';
import SingleNew from './components/pages/SingleNew/SingleNew';

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/news/:id" element={<SingleNew/>}/>
          <Route path="/login" element={<LogIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/RegistFinish" element={<RegistFinish/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
