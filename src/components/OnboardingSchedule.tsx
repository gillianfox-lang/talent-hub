import { useState } from 'react';
import './OnboardingSchedule.css';
import { onboardingRegions, onboardingYear, scheduleSourceUrl } from '../data/onboarding';
import type { OnboardingDate } from '../data/onboarding';

function formatDate(iso: string): string {
  const d = new Date(iso + 'T12:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function isPast(dateStr: string): boolean {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return new Date(dateStr + 'T12:00:00') < now;
}

function isCutoffPassed(cutoffStr: string): boolean {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return new Date(cutoffStr + 'T12:00:00') < now;
}

function daysUntil(iso: string): number {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return Math.ceil((new Date(iso + 'T12:00:00').getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
}

function findNext(dates: OnboardingDate[]): number {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return dates.findIndex(d => new Date(d.date + 'T12:00:00') >= now);
}

export default function OnboardingSchedule() {
  const [activeRegion, setActiveRegion] = useState('north-america');
  const region = onboardingRegions.find(r => r.id === activeRegion)!;
  const nextIdx = findNext(region.dates);
  const nextDate = nextIdx >= 0 ? region.dates[nextIdx] : null;
  const cutoffDays = nextDate ? daysUntil(nextDate.cutoff) : 0;

  return (
    <section id="onboarding-schedule" className="onboarding-schedule">
      <div className="onboarding-inner">
        <h2 className="section-heading">GEO Launch Onboarding Schedule</h2>
        <p className="section-subheading">
          {onboardingYear} onboarding dates and offer cutoff deadlines.{' '}
          <a href={scheduleSourceUrl} target="_blank" rel="noopener noreferrer" className="onboarding-source-link">
            Source spreadsheet ↗
          </a>
        </p>

        <div className="onboarding-tabs">
          {onboardingRegions.map(r => (
            <button
              key={r.id}
              className={`onboarding-tab${activeRegion === r.id ? ' active' : ''}`}
              onClick={() => setActiveRegion(r.id)}
            >
              {r.label}
            </button>
          ))}
        </div>

        {nextDate && (
          <div className="onboarding-next">
            <div className="onboarding-next-left">
              <span className="onboarding-next-label">Next GEO Launch</span>
              <span className="onboarding-next-date">{formatDate(nextDate.date)}</span>
              {nextDate.internsOnly && <span className="ob-badge intern">Interns</span>}
            </div>
            <div className="onboarding-next-right">
              <span className="onboarding-next-cutoff-label">Offer cutoff</span>
              <span className="onboarding-next-cutoff">{formatDate(nextDate.cutoff)}</span>
              <span className={`ob-badge ${cutoffDays > 0 ? 'upcoming' : 'passed'}`}>
                {cutoffDays > 0 ? `${cutoffDays}d left` : 'Passed'}
              </span>
            </div>
          </div>
        )}

        <div className="onboarding-list">
          {region.dates.map((d, i) => {
            const past = isPast(d.date);
            const isNext = i === nextIdx;
            const cutoffGone = isCutoffPassed(d.cutoff) && !past;
            return (
              <div key={d.date} className={`ob-row${past ? ' past' : ''}${isNext ? ' next' : ''}`}>
                <div className="ob-date">
                  <strong>{formatDate(d.date)}</strong>
                  {d.internsOnly && <span className="ob-badge intern">Interns</span>}
                </div>
                <div className="ob-cutoff">
                  Cutoff: {formatDate(d.cutoff)}
                  {cutoffGone && <span className="ob-badge passed">Passed</span>}
                </div>
                {d.notes && !d.internsOnly && <div className="ob-note">{d.notes}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
