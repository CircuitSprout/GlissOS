import React, { useState } from 'react';

const MemoPad: React.FC = () => {
    const [entry, setEntry] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEntry(event.target.value);
    };

    const handleSave = () => {
        // Logic to save the diary entry
        console.log('Diary Entry Saved:', entry);
        setEntry(''); // Clear the textarea after saving
    };

    return (
        <div className="memo-pad">
            <h2>Memo Pad</h2>
            <textarea
                value={entry}
                onChange={handleChange}
                placeholder="Write your diary entry here..."
                rows={10}
                cols={30}
            />
            <button onClick={handleSave}>Save Entry</button>
        </div>
    );
};

export default MemoPad;