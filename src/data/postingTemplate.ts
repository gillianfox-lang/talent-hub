export interface PostingSection {
  heading: string;
  template: string;
  instructions: string;
  isTemplated?: boolean;
}

export const externalPostingSections: PostingSection[] = [
  {
    heading: 'Who we are',
    template: '',
    instructions: 'This section is automatically templated into the posting. No editing needed.',
    isTemplated: true,
  },
  {
    heading: 'Who you are',
    template: `We are always looking for amazing talent who can contribute to our growth and deliver results! Geotab is seeking a [POSITION TITLE] who will [OVERALL RESPONSIBILITY]. If you love technology, and are keen to join an industry leader — we would love to hear from you!`,
    instructions: 'Use Heading 1 in Greenhouse. Format: Paragraph, Helvetica, 12pt, text colour #66788C.',
  },
  {
    heading: "What you'll do",
    template: `As a [POSITION TITLE] your key area of responsibility will be [INSERT KEY KPA OBJECTIVES]. You will need to work closely with [STAKEHOLDER COLLABORATION]. To be successful in this role you will be a [SOFT SKILLS]. In addition, the successful candidate will have [BUSINESS SKILLS].`,
    instructions: 'Use Heading 1 in Greenhouse. Format: Paragraph, Helvetica, 12pt, text colour #66788C.',
  },
  {
    heading: "How you'll make an impact",
    template: `• [COPY KPAs FROM JOB DESCRIPTION DOC — LINK TO DOC SHOULD BE FOUND IN THE REQ] {5-7 POINTS}`,
    instructions: 'Use Heading 1 in Greenhouse. Format: Paragraph, Helvetica, 12pt, text colour #66788C. Do NOT use sub bullet points.',
  },
  {
    heading: "What you'll bring to this role",
    template: `• [FOR ALL FedRAMP/USPS SUPPORT ROLES] US Residents Only - Ability to pass a US Government Background Check and drug screening
• [COPY FROM JOB DESCRIPTION DOC — include years of experience, education, and soft skills] {5-7 POINTS}`,
    instructions: 'Use Heading 1 in Greenhouse. Format: Paragraph, Helvetica, 12pt, text colour #66788C. Do NOT use sub bullet points.',
  },
];

export const postingFooterText = `If you got this far, we hope you're feeling excited about this role! Even if you don't feel you meet every single requirement, we still encourage you to apply.

Please note: Geotab does not accept agency resumes and is not responsible for any fees related to unsolicited resumes. Please do not forward resumes to Geotab employees.`;

export const formattingRules = [
  'All 4 main headings should be in the text colour: #21325E',
  'Use Heading 1 format in Greenhouse for each section heading',
  'Body text: Format > Formats > Blocks > Paragraph',
  'Font: Format > Fonts > Helvetica',
  'Size: Format > Font sizes > 12pt',
  'Color: Format > Text colour > #66788C',
  'Do NOT use sub bullet points',
  'When listing a position as Remote, include "(Remote)" in the posting title for LinkedIn',
];

export const autoTemplatedSections = [
  { heading: 'Why job seekers choose Geotab', note: 'Automatically templated — varies depending on location.' },
  { heading: 'How we work', note: 'Automatically templated — varies depending on role/location.' },
  { heading: 'Pay Transparency', note: 'Appears only if a pay transparency rule was selected under post details. Enter the currency and pay range.' },
];
