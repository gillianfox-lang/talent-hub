export interface GuideTab {
  id: string;
  label: string;
  icon: string;
  description: string;
}

export const guideTabs: GuideTab[] = [
  {
    id: 'contracts',
    label: 'International Contracts',
    icon: '🌍',
    description: 'Country-specific contract processes for 10 international locations',
  },

  {
    id: 'offers',
    label: 'Greenhouse Offers',
    icon: '📋',
    description: 'Full offer guide: types, form fields, templates, and approval flow',
  },
  {
    id: 'interviews',
    label: 'In-Person Interviews',
    icon: '🤝',
    description: 'Distance matrix, exceptions, and candidate experience guidelines',
  },
  {
    id: 'recruitment',
    label: 'Recruitment',
    icon: '👥',
    description: 'Recruitment processes from the People Operations Guide',
  },
];

export const sourceDocLinks = [
  { label: 'International Contracts', description: 'Country-by-country contract process guide' },
  { label: 'Greenhouse Posting Guide', description: 'Job posting template and formatting rules' },
  { label: 'Greenhouse Offer Guide v1.11', description: 'Offer creation walkthrough' },
  { label: 'In-Person Interview Requirements', description: 'Distance-based interview policy' },
  { label: 'People Operations Process Guide', description: 'Full employee lifecycle reference' },
  { label: 'Benefits at a Glance (USA)', description: 'US benefits summary' },
];
