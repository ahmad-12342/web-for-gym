
import React from 'react';

const schedule = [
    { time: '07:00 AM', mon: 'Yoga', tue: 'HIIT', wed: 'Bodybuilding', thu: 'Cardio', fri: 'Yoga', sat: 'Zumba' },
    { time: '09:00 AM', mon: 'Cardio', tue: 'Yoga', wed: 'Zumba', thu: 'Bodybuilding', fri: 'HIIT', sat: 'Yoga' },
    { time: '05:00 PM', mon: 'HIIT', tue: 'Cardio', wed: 'Yoga', thu: 'Zumba', fri: 'Bodybuilding', sat: 'HIIT' },
    { time: '07:00 PM', mon: 'Bodybuilding', tue: 'Zumba', wed: 'HIIT', thu: 'Yoga', fri: 'Cardio', sat: 'Bodybuilding' },
];

const Schedule = () => {
    return (
        <section id="schedule" style={{ padding: '5rem 0', background: 'var(--bg-dark)' }}>
            <div className="container">
                <h2 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '3rem' }}>CLASS <span style={{ color: 'var(--primary)' }}>SCHEDULE</span></h2>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', color: 'white', background: 'var(--glass)', borderRadius: '15px', overflow: 'hidden' }}>
                        <thead>
                            <tr style={{ background: 'var(--primary)', color: 'black' }}>
                                <th style={{ padding: '1.5rem' }}>TIME</th>
                                <th>MON</th>
                                <th>TUE</th>
                                <th>WED</th>
                                <th>THU</th>
                                <th>FRI</th>
                                <th>SAT</th>
                            </tr>
                        </thead>
                        <tbody>
                            {schedule.map((row, i) => (
                                <tr key={i} style={{ borderBottom: '1px solid var(--border)', textAlign: 'center' }}>
                                    <td style={{ padding: '1.5rem', fontWeight: 'bold' }}>{row.time}</td>
                                    <td>{row.mon}</td>
                                    <td>{row.tue}</td>
                                    <td>{row.wed}</td>
                                    <td>{row.thu}</td>
                                    <td>{row.fri}</td>
                                    <td>{row.sat}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Schedule;
