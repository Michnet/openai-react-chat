import React, {useState} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {I18nextProvider} from 'react-i18next';
import i18n from './i18n';
import Sidebar from "./components/SideBar";
import MainPage from "./components/MainPage";
import './App.css';
import {ToastContainer} from "react-toastify";
import ExploreCustomChats from "./components/ExploreCustomChats";
import CustomChatEditor from './components/CustomChatEditor';
import Scaffold from './layouts/Scaffold';
import GPT from './layouts/GPT';

const App = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebarCollapse = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  interface MainPageProps {
    className: string;
    isSidebarCollapsed: boolean;
    toggleSidebarCollapse: () => void;
  }
/* 
  const GPT: React.FC<Partial<MainPageProps>> = (props) => (
      <MainPage
          className={'main-content'}
          isSidebarCollapsed={isSidebarCollapsed}
          toggleSidebarCollapse={toggleSidebarCollapse}
          {...props}
      />
  ); */
  return (
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
        <Scaffold>
                <Routes>
                <Route path="/" element={<GPT/>}/>
                  <Route path="/c/:id" element={<GPT/>}/>
                  <Route path="/explore" element={<ExploreCustomChats/>}/>
                  // Use the wrapper for new routes
                  <Route path="/g/:gid" element={<GPT/>}/>
                  <Route path="/g/:gid/c/:id" element={<GPT/>}/>
                  <Route path="/custom/editor" element={<CustomChatEditor/>}/>
                  <Route path="/custom/editor/:id" element={<CustomChatEditor/>}/>
                  <Route path="*" element={<Navigate to="/" replace/>}/>
                </Routes>
          </Scaffold>
        </I18nextProvider>
      </BrowserRouter>
  );
};

export default App;
