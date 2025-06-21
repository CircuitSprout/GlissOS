import React, { useState } from 'react';

const Calendar: React.FC = () => {
    const [notes, setNotes] = useState<string[]>(Array(7).fill(''));

    const handleNoteChange = (index: number, value: string) => {
        const updatedNotes = [...notes];
        updatedNotes[index] = value;
        setNotes(updatedNotes);
    };

    return (
        <div className="calendar-container">
            <h2 className="gradient-text">Calendar</h2>
            <div className="calendar-grid">
                {[...Array(7)].map((_, i) => (
                    <div className="calendar-day" key={i + 1}>
                        <div className="calendar-row">
                            <textarea
                                id={`calendar-note-${i + 1}`}
                                name={`calendarNote${i + 1}`}
                                placeholder={`Add a note for day ${i + 1}...`}
                                value={notes[i]}
                                onChange={e => handleNoteChange(i, e.target.value)}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Calendar;

