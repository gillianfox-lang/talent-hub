export interface OnboardingDate {
  date: string;
  cutoff: string;
  notes?: string;
  internsOnly?: boolean;
}

export interface OnboardingRegion {
  id: string;
  label: string;
  dates: OnboardingDate[];
}

export const onboardingYear = '2026';

export const onboardingRegions: OnboardingRegion[] = [
  {
    id: 'north-america',
    label: 'North America',
    dates: [
      { date: '2026-01-05', cutoff: '2025-12-19', notes: 'Interns Only', internsOnly: true },
      { date: '2026-01-12', cutoff: '2025-12-26' },
      { date: '2026-01-26', cutoff: '2026-01-09' },
      { date: '2026-02-09', cutoff: '2026-01-23' },
      { date: '2026-02-23', cutoff: '2026-02-09' },
      { date: '2026-03-09', cutoff: '2026-02-20' },
      { date: '2026-03-23', cutoff: '2026-03-06' },
      { date: '2026-04-06', cutoff: '2026-03-20' },
      { date: '2026-04-20', cutoff: '2026-04-03' },
      { date: '2026-05-04', cutoff: '2026-04-17', notes: 'Interns Only', internsOnly: true },
      { date: '2026-05-11', cutoff: '2026-04-24', notes: 'Sole full-time GEO Launch in May' },
      { date: '2026-06-01', cutoff: '2026-05-15' },
      { date: '2026-06-22', cutoff: '2026-06-05', notes: 'Two week gap due to Juneteenth' },
      { date: '2026-07-06', cutoff: '2026-06-19' },
      { date: '2026-07-20', cutoff: '2026-07-03' },
      { date: '2026-08-10', cutoff: '2026-07-24', notes: 'Two week gap due to Civic Holiday' },
      { date: '2026-08-24', cutoff: '2026-08-07' },
      { date: '2026-09-08', cutoff: '2026-08-24', notes: 'Interns Only', internsOnly: true },
      { date: '2026-09-14', cutoff: '2026-08-28', notes: 'Sole full-time GEO Launch in September' },
      { date: '2026-10-05', cutoff: '2026-09-18' },
      { date: '2026-10-19', cutoff: '2026-10-02' },
      { date: '2026-11-02', cutoff: '2026-10-16' },
      { date: '2026-11-16', cutoff: '2026-10-30' },
      { date: '2026-11-30', cutoff: '2026-11-13' },
      { date: '2026-12-14', cutoff: '2026-11-27' },
    ],
  },
  {
    id: 'europe-dubai',
    label: 'Europe & Dubai',
    dates: [
      { date: '2026-01-12', cutoff: '2025-12-29' },
      { date: '2026-01-26', cutoff: '2026-01-12' },
      { date: '2026-02-02', cutoff: '2026-01-19' },
      { date: '2026-02-16', cutoff: '2026-02-02' },
      { date: '2026-03-02', cutoff: '2026-02-16' },
      { date: '2026-03-23', cutoff: '2026-03-09' },
      { date: '2026-04-13', cutoff: '2026-03-30', notes: 'Sole onboarding date in April' },
      { date: '2026-05-11', cutoff: '2026-04-27', notes: 'Sole onboarding date in May' },
      { date: '2026-06-08', cutoff: '2026-05-25' },
      { date: '2026-06-22', cutoff: '2026-06-08' },
      { date: '2026-07-06', cutoff: '2026-06-22' },
      { date: '2026-07-20', cutoff: '2026-07-06' },
      { date: '2026-08-03', cutoff: '2026-07-20' },
      { date: '2026-08-17', cutoff: '2026-08-03' },
      { date: '2026-09-07', cutoff: '2026-08-24' },
      { date: '2026-09-21', cutoff: '2026-09-07' },
      { date: '2026-10-05', cutoff: '2026-09-21' },
      { date: '2026-10-19', cutoff: '2026-10-05' },
      { date: '2026-11-02', cutoff: '2026-10-19' },
      { date: '2026-11-23', cutoff: '2026-11-09' },
      { date: '2026-12-07', cutoff: '2026-11-23', notes: 'Sole onboarding date in December' },
    ],
  },
  {
    id: 'apac',
    label: 'APAC',
    dates: [
      { date: '2026-01-20', cutoff: '2025-12-30' },
      { date: '2026-03-03', cutoff: '2026-02-10' },
      { date: '2026-04-14', cutoff: '2026-03-24' },
      { date: '2026-05-26', cutoff: '2026-05-05', notes: 'Singaporean & Indonesian holidays this week' },
      { date: '2026-06-16', cutoff: '2026-05-26', notes: 'Indonesian holiday this week' },
      { date: '2026-07-14', cutoff: '2026-06-23' },
      { date: '2026-08-18', cutoff: '2026-07-28', notes: 'Indonesian holiday this week' },
      { date: '2026-09-22', cutoff: '2026-09-01', notes: 'Japanese holidays this week' },
      { date: '2026-10-27', cutoff: '2026-10-06' },
      { date: '2026-12-08', cutoff: '2026-11-17' },
    ],
  },
  {
    id: 'latam',
    label: 'Latin America',
    dates: [
      { date: '2026-01-12', cutoff: '2025-12-22' },
      { date: '2026-01-26', cutoff: '2026-01-05' },
      { date: '2026-02-09', cutoff: '2026-01-19' },
      { date: '2026-02-23', cutoff: '2026-02-02' },
      { date: '2026-03-09', cutoff: '2026-02-16' },
      { date: '2026-03-23', cutoff: '2026-03-02' },
      { date: '2026-04-06', cutoff: '2026-03-16' },
      { date: '2026-04-20', cutoff: '2026-03-30' },
      { date: '2026-05-11', cutoff: '2026-04-20' },
      { date: '2026-06-01', cutoff: '2026-05-11', notes: 'Colombian holiday this week' },
      { date: '2026-06-22', cutoff: '2026-06-01', notes: 'Colombian holiday this week' },
      { date: '2026-07-06', cutoff: '2026-06-15' },
      { date: '2026-07-20', cutoff: '2026-06-29' },
      { date: '2026-08-10', cutoff: '2026-07-20' },
      { date: '2026-08-24', cutoff: '2026-08-03' },
      { date: '2026-09-14', cutoff: '2026-08-24', notes: 'Mexican holiday this week' },
      { date: '2026-10-05', cutoff: '2026-09-14' },
      { date: '2026-10-19', cutoff: '2026-09-28' },
      { date: '2026-11-02', cutoff: '2026-10-12', notes: 'Brazilian holidays this week' },
      { date: '2026-11-30', cutoff: '2026-11-09' },
      { date: '2026-12-14', cutoff: '2026-11-23' },
    ],
  },
];

export const scheduleSourceUrl = 'https://docs.google.com/spreadsheets/d/1BZKUrFGB7WtFqkZUxlLvJIJKOVaGhZvMA96TvvgWFqQ/edit?gid=229205816#gid=229205816';
