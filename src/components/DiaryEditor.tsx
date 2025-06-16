import React, { useState } from 'react';

const DiaryEditor: React.FC = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        // Save to localStorage (or send to backend if you have one)
        const entry = { title, content, date: new Date().toISOString() };
        const existing = JSON.parse(localStorage.getItem('diaryEntries') || '[]');
        localStorage.setItem('diaryEntries', JSON.stringify([...existing, entry]));
        setTitle('');
        setContent('');
        alert('Diary entry saved!');
    };

    return (
        <div className="diary-editor">
            <h2 className="gradient-text">Diary Editor</h2>
            <form onSubmit={handleSave}>
                <section className="diaryRow">
                    <div className="diaryRow__item">
                        <label htmlFor="diaryTitle" className="diaryTitle">Title:</label>
                        <input
                            type="text"
                            id="diaryTitle"
                            name="diaryTitle"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="diaryRow__item">
                        <textarea
                            id="diaryContent"
                            name="diaryContent"
                            value={content}
                            onChange={e => setContent(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="diaryRow__item">
                        <button type="submit">Save Diary</button>
                    </div>
                </section>
            </form>
        </div>
    );
};

export default DiaryEditor;