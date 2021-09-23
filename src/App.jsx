import React from 'react';
import "./app.css";
import Feed from './components/feed/Feed';
import Sidebar from './components/sidebar/Sidebar';


function App() {
  return (
   <div className="container">
     <Sidebar/>
     <Feed/>
   </div>
  );
}

export default App;
