import React from 'react';

const Settings: React.FC = () => {
    return (
        <div className="settings-container">
            <h2 className="gradient-text">Settings</h2>
            <section className="settings-section">
                <h3>Account</h3>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />
                </div>
                <button>Update Account</button>
            </section>
            <section className="settings-section">
                <h3>Theme</h3>
                <div>
                    <label>
                        <input type="checkbox" name="darkMode" />
                        Enable Dark Mode
                    </label>
                </div>
            </section>
            <section className="settings-section">
                <h3>Security</h3>
                <button>Change Password</button>
                <button>Logout</button>
            </section>
        </div>
    );
};

export default Settings;