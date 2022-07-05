import React from 'react';
import { Link } from 'react-router-dom';
import { Paths } from '../constants/routes';

import '../styles/utilities.scss';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <div className="f f-jc-spb container header bg-gradient">
      <Link to={Paths.main}>Course Platform</Link>
      <Link to={Paths.profile}>Профиль</Link>
      <Link to={Paths.login}>Войти</Link>
    </div>
  );
};

export default Header;
