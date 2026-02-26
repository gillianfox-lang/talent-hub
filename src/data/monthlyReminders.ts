export interface Reminder {
  text: string;
  link?: { label: string; url: string };
}

export const currentMonth = 'February 2026';

export const reminders: Reminder[] = [
  { text: 'Process Change: Please tag your Team Lead to review and activate all new job postings.' },
  { text: 'Compliance: Avoid copying text directly between US and Canadian postings. The fine print requirements differ by region; specifically, ensure all Ontario postings include the phrase: "This posting is for an existing vacancy."' },
  { text: 'Process Efficiency: Try sending Kickoff forms to Hiring Managers for completion ahead of your initial meeting.' },
  { text: 'Use RealTalent for resume shortlisting.' },
  { text: 'Clear your pipelines to meet our SLAs.' },
  {
    text: 'Check out this Greenhouse Automation Guide and implement automation into your process.',
    link: { label: 'Greenhouse Automation Guide', url: 'https://docs.google.com/document/d/1qEXEHv-F5PHHhJ-VZRRWXeO-cld3lDS1Ijm0Z4OGI5E/edit?tab=t.0#heading=h.4h2cub70h86f' },
  },
  {
    text: 'Leaders with comp visibility 2026.',
    link: { label: 'View Spreadsheet', url: 'https://docs.google.com/spreadsheets/d/1cnuZiwZ31fe76xchD8J9DviMuXkP0rYJRNj329O_6-k/edit?gid=0#gid=0' },
  },
  { text: 'Start asking this question in screening interviews: "Have you used AI tools in any capacity — whether professionally, or personally? How do you engage with them?"' },
  {
    text: 'Review the In-Person Interview Guidelines.',
    link: { label: 'In-Person Interview Guidelines', url: 'https://docs.google.com/document/d/1uoNhmMEk9mhuQTcf7fX86pFgZYpLSW7x7VpLT9DvSs4/edit?tab=t.0#heading=h.tkp3btbp3g5v' },
  },
];
