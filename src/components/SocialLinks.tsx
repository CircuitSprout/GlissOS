import React from 'react';

const SocialLinks: React.FC = () => {
    return (
        <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <img src="/assets/logos/github.svg" alt="GitHub" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="/assets/logos/instagram.svg" alt="Instagram" />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                <img src="/assets/logos/x.svg" alt="X" />
            </a>
        </div>
    );
};

export default SocialLinks;