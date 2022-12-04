import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {useEffect} from 'react'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Contacts from './components/pages/Contacts/Contacts';
import LogIn from './components/pages/LogIn/LogIn';
import News from './components/pages/News/News';
import NotFound from './components/pages/NotFound/NotFound';
import RegistFinish from './components/pages/RegistFinish/RegistFinish';
import SignUp from './components/pages/SignUp/SignUp';
import SingleNew from './components/pages/SingleNew/SingleNew';
import { useLocation } from "react-router-dom";


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}



function App() {

  useEffect(() => {
    document.title = 'Sdaem';
  }, []);


  return (
    <BrowserRouter>
        <ScrollToTop />
        <Header/>
        <Routes>
          {/* <Route path="/" element={<Main/>}/> */}
          <Route path="/" element={<News/>}/>
          <Route path="/news/:id" element={<SingleNew/>}/>
          <Route path="/login" element={<LogIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/signup/RegistFinish" element={<RegistFinish/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
