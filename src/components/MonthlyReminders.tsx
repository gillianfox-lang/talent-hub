import './MonthlyReminders.css';
import { reminders, currentMonth } from '../data/monthlyReminders';

export default function MonthlyReminders() {
  return (
    <section id="monthly-reminders" className="monthly-reminders">
      <div className="monthly-reminders-inner">
        <div className="mr-header">
          <span className="mr-title">Reminders</span>
          <span className="mr-month">{currentMonth}</span>
        </div>

        <ul className="mr-list">
          {reminders.map((r, i) => (
            <li key={i} className="mr-item">
              <span className="mr-bullet" />
              <div>
                <span>{r.text}</span>
                {r.link && (
                  <>
                    {' '}
                    <a
                      href={r.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mr-link"
                    >
                      {r.link.label} ↗
                    </a>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
