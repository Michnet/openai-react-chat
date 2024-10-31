import React, {useState} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Sidebar from "../components/SideBar";
import MainPage from "../components/MainPage";
//import './App.css';
import {ToastContainer} from "react-toastify";
import ExploreCustomChats from "../components/ExploreCustomChats";
import CustomChatEditor from '../components/CustomChatEditor';

const GPT = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebarCollapse = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  interface MainPageProps {
    className: string;
    isSidebarCollapsed: boolean;
    toggleSidebarCollapse: () => void;
  }

  const MainPageWithProps: React.FC<Partial<MainPageProps>> = (props) => (
      <MainPage
          className={'main-content'}
          isSidebarCollapsed={isSidebarCollapsed}
          toggleSidebarCollapse={toggleSidebarCollapse}
          {...props}
      />
  );
  return (
          <div className="App dark:bg-gray-900 dark:text-gray-100">
            <ToastContainer/>
            <div className="flex overflow-hidden w-full  relative z-0" style={{height: 'calc(100vh - 150px)'}}>
              <Sidebar
                  className="sidebar-container flex-shrink-0"
                  isSidebarCollapsed={isSidebarCollapsed}
                  toggleSidebarCollapse={toggleSidebarCollapse}
              />
              <div className="flex-grow  overflow-hidden bg-white">
                <Routes>
                  <Route path="/" element={<MainPageWithProps/>}/>
                  <Route path="/c/:id" element={<MainPageWithProps/>}/>
                  <Route path="/explore" element={<ExploreCustomChats/>}/>
                  // Use the wrapper for new routes
                  <Route path="/g/:gid" element={<MainPageWithProps/>}/>
                  <Route path="/g/:gid/c/:id" element={<MainPageWithProps/>}/>
                  <Route path="/custom/editor" element={<CustomChatEditor/>}/>
                  <Route path="/custom/editor/:id" element={<CustomChatEditor/>}/>
                  <Route path="*" element={<Navigate to="/" replace/>}/>
                </Routes>
              </div>
            </div>
          </div>
  );
};

export default GPT;
