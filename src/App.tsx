import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import DiaryEditor from './components/DiaryEditor';
import AccountMenu from './components/AccountMenu';
import SocialLinks from './components/SocialLinks';
import Settings from './components/Settings';
import Files from './components/Files';
import './styles/main.css';

const App: React.FC = () => {
    return (
        <div className="app-container">
            <header>
                <img
                    src="/assets/GlissOS-logo.png"
                    alt="GlissOS Logo"
                    style={{ height: '64px', marginRight: '16px' }}
                />
                <AccountMenu />
            </header>
            <main>
                <Sidebar />
                <Routes>
                    <Route path="/" element={<DiaryEditor />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/files" element={<Files />} />
                    <Route path="/diary/:id" element={<DiaryEditor />} />
                    <Route path="/calendar" element={<DiaryEditor />} />
                </Routes>
            </main>
            <footer>
                <SocialLinks />
            </footer>
        </div>
    );
};

export default App;