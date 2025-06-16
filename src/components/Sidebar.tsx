import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {

    return (
        <div className="sidebar">
            <h2 className="gradient-text">Sidebar</h2>
            <nav>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li><button className="sidebar-btn">Diary</button></li>
                    <li>
                      <Link to="/files">
                        <button className="sidebar-btn">Files</button>
                      </Link>
                    </li>
                    <li><button className="sidebar-btn">Calendar</button></li>
                </ul>
            </nav>
            <section className="sidebar-content">
                <p>Welcome to your personal diary app! Use the sidebar to navigate through your diary entries, manage files, and view your calendar.</p>
                <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWp3NngwNnBxMzR3ZHl3a2NhNGgwM2NjZjAzOTZveGdudjJoNWpmdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/XHAv3GveJMXMXSumkO/giphy.gif"
                alt ="water giphy"
                style={{ width: '100%', height: 'auto', borderRadius: '15px', background: 'transparent' }} />
            </section>
        </div>
    );
};

export default Sidebar;