import React from 'react';
import '../sass/style.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Chat from './page/Chat';
import Settings from './page/Settings';
import Header from './component/Header';
import Navigation from './component/Navigation';
import Footer from './component/Footer';
import { ServiceContext, ServiceContextProps } from './context/ServiceContext';
import { settingServiceImp } from './service/setting-service';
import { messageServiceImp } from './service/message-service';
import { userServiceImp } from './service/user-service';

function App() {
  const provider: Partial<ServiceContextProps> = {
    messageService: messageServiceImp(localStorage),
    settingService: settingServiceImp(localStorage),
    userService: userServiceImp
  }
  return (
    <Router>
      <div id="wrapper">
        <Header></Header>
        <Navigation></Navigation>
        <main>
          <ServiceContext.Provider value={provider}>
            <Route path="/" component={Chat} exact></Route>
            <Route path="/settings" component={Settings}></Route>
          </ServiceContext.Provider>
        </main>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
