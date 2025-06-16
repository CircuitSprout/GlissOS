import React, { useEffect, useState } from 'react';

interface DiaryEntry {
    title: string;
    content: string;
    date: string;
}

const Files: React.FC = () => {
    const [entries, setEntries] = useState<DiaryEntry[]>([]);
    const [selected, setSelected] = useState<DiaryEntry | null>(null);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('diaryEntries') || '[]');
        setEntries(saved);
    }, []);

    return (
        <div className="files-container">
            <h2 className="gradient-text">Saved Diary Entries</h2>
            <div className="files-list">
                <ul>
                    {entries.length === 0 && <li>No diary entries found.</li>}
                    {entries.map((entry: DiaryEntry, idx: number) => (
                        <li key={idx}>
                            <button onClick={() => setSelected(entry)}>
                                {entry.title || 'Untitled'} <span style={{fontSize: '0.8em', color: '#888'}}>({new Date(entry.date).toLocaleString()})</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            {selected && (
                <div className="file-viewer">
                    <h3>{selected.title || 'Untitled'}</h3>
                    <p><em>{new Date(selected.date).toLocaleString()}</em></p>
                    <div style={{whiteSpace: 'pre-wrap'}}>{selected.content}</div>
                    <button onClick={() => setSelected(null)} style={{marginTop: '1em'}}>Close</button>
                </div>
            )}
        </div>
    );
};

export default Files;