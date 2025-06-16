// filepath: c:\Users\Alexandria\Documents\GlissOS\GlissOS\src\components\AccountMenu.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const AccountMenu: React.FC = () => {
    const handleLogout = () => {
        
    };

    return (
        <div className="account-menu">
            <button className="sidebar-btn">
                <Link to="/settings">Settings</Link>
            </button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default AccountMenu;