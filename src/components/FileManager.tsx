import React from 'react';

const FileManager: React.FC = () => {
    return (
        <div className="file-manager">
            <h2>File Manager</h2>
            <div className="file-manager-content">
                <p>Manage your files here. You can upload, download, and organize your files.</p>
                <button className="upload-button">Upload File</button>
                <button className="download-button">Download File</button>
                <button className="delete-button">Delete File</button>
            </div>
        </div>
    );
};

export default FileManager;