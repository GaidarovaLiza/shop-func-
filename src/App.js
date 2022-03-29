import './App.css';
import React from 'react';
import ShopItemFunc from './components/ShopItemFunc';


function App(item) {
  return (
    <div className='wrapper'>
      <div className="container">
        <div className="background-element">
        </div>
        <div className="highlight-window">
          <div className='highlight-overlay'></div>
        </div>
        <div className="window">
          <ShopItemFunc item={item} />
        </div>

      </div>
    </div>
  )
}

export default App;
