import React from 'react';
import '../sass/style.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Chat from './page/Chat';
import Settings from './page/Settings';
import Header from './component/Header';
import Navigation from './component/Navigation';
import Footer from './component/Footer';

function App() {
  return (
    <Router>
      <div id="wrapper">
        <Header></Header>
        <Navigation></Navigation>
        <main>
          <Route path="/" component={Chat} exact></Route>
          <Route path="/settings" component={Settings}></Route>
        </main>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
