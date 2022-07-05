import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Paths } from './constants/routes';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/auth/Login';

import './styles/utilities.scss';
import './styles/colors.scss';

const App: React.FC = () => {
  return (
    <div className="colors light-theme app f f-clm f-jc-spb f-ai-str">
      <div>
        <Header />
        <Routes>
          <Route path={Paths.main} element={<Home />} />
          <Route path={Paths.profile} element={<Profile />} />
          <Route path={Paths.login} element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
