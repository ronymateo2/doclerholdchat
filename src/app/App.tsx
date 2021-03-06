import React, { useContext, useEffect } from 'react';
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
import { ThemeProvider, ThemeContext } from './context/ThemeContext';
import { InterfaceType } from './model/interface-type';
import { initialChatMessages } from './model/chat-message';
import { defaultSetting } from './model/setting';
import { currentUser } from './model/user';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { userService, settingService } = useContext(ServiceContext)
  const { theme, updateTheme } = useContext(ThemeContext);
  const classNameValue = theme === InterfaceType.Ligth ? '' : 'theme--dark';

  useEffect(() => {
    (async () => {
      const user = await userService!.me()
      const settings = await settingService!.get(user.id)
      updateTheme!(settings.inferfaceType)
    })()
  }, [])

  return (
    <div id="wrapper" className={classNameValue}>
      {children}
    </div>)
};

function App() {
  const provider: Partial<ServiceContextProps> = {
    messageService: messageServiceImp(localStorage, initialChatMessages),
    settingService: settingServiceImp(localStorage, defaultSetting),
    userService: userServiceImp(currentUser)
  }

  return (
    <ServiceContext.Provider value={provider}>
      <ThemeProvider startingTheme={InterfaceType.Ligth}>
        <Router basename={process.env.PUBLIC_URL}>
          <Layout>
            <Header />
            <Navigation></Navigation>
            <main>
              <Route path="/" component={Chat} exact></Route>
              <Route path="/settings" component={Settings}></Route>
            </main>
            <Footer />
          </Layout>
        </Router>
      </ThemeProvider>
    </ServiceContext.Provider>
  );
}

export default App;
