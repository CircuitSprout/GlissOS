import React from 'react';

const DiaryEditor: React.FC = () => {
    return (
        <div className="diary-editor">
            <h2 className="gradient-text">Diary Editor</h2>
            <section className="diaryRow">
                <div className="diaryRow__item">
                    <label htmlFor="diaryTitle" className="diaryTitle">Title:</label>
                    <input type="text" id="diaryTitle" name="diaryTitle" />
                </div>
                <div className="diaryRow__item">
                    <textarea id="diaryContent" name="diaryContent"></textarea>
                </div>
                <div className="diaryRow__item">
                    <button type="submit">Save Diary</button>
                </div>
                </section>
        </div>
    );
};

export default DiaryEditor;