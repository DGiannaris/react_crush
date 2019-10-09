import React from 'react';

import './Header.css';
import TodoList from './TodoList.js';

function Header() {
  return (

    <div className="Header">
      <div className="header-text">Just Do It</div>
        <TodoList />
    </div>
  );
}

export default Header;
