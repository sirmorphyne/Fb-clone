import React from 'react';
import Header from "./components/Header/header";
import "./App.css";
import Sidebar from './components/sidebar/sidebar';
import Feed from './components/Feed/Feed';

import Widgets from './components/Widgets/Widgets';
import Login from './components/Login/Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{user},dispatch] = useStateValue();
    
  return (
    
    <div className="app">
      { !user ? <Login /> : (
      <>
    <Header />
     <div className="app_body">
     <Sidebar />
     <Feed />
     <Widgets />
     </div>
     </>)}
    </div>
  );
}

export default App;
 