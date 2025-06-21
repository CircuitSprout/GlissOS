import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <h2 className="gradient-text">Sidebar</h2>
            <nav>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li>
                        <Link to="/">
                            <button className="sidebar-btn">Diary</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/files">
                            <button className="sidebar-btn">Files</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/calendar">
                            <button className="sidebar-btn">Calendar</button>
                        </Link>
                    </li>
                </ul>
            </nav>
            <section className="sidebar-content">
                <p>Welcome to your personal diary app! Use the sidebar to navigate through your diary entries, manage files, and view your calendar.</p>
                <img 
                    src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHl2OHhldWE3eHBhMWNrOWFqZXNqd3Z6c3AxbW9pdG5iYzFqZW91ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/XHAv3GveJMXMXSumkO/giphy.gif"
                    alt="Computer Giphy"
                    style={{ width: '100%', height: 'auto', borderRadius: '15px', background: 'transparent', marginTop: '16px' }}
                />
            </section>
        </div>
    );
};

export default Sidebar;