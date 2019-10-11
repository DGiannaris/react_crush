import React from 'react';

import './Header.css';
import TodoList from './TodoList.js';
import MenuButton from './MenuButton.js';


function Header() {
  return (

    <div className="Header">
      <div className="header-text">Just Do It</div>
        <TodoList />
        <MenuButton/>
    </div>
  );
}

export default Header;
