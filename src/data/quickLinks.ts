export interface QuickLink {
  label: string;
  url: string;
  category: string;
}

export const quickLinkCategories = [
  'Greenhouse',
  'Onboarding & Hiring',
  'Templates & Forms',
  'Guides & Wikis',
];

export const quickLinks: QuickLink[] = [
  // Greenhouse
  { label: 'Greenhouse Offer Guide', url: 'https://docs.google.com/document/d/1HWNLNJKvrvjwiCVd18SByoAVGT6CSECPhlkLVPJbwig/edit?tab=t.0#heading=h.eh4ipql2hvir', category: 'Greenhouse' },
  { label: 'Greenhouse Posting Guide', url: 'https://docs.google.com/document/d/1oyy-H2kT1iIRj7d7UndZYzFMNdCkNbeSNDW1iu83Pf4/edit?tab=t.0#heading=h.ymsdtzsurgp4', category: 'Greenhouse' },
  { label: 'Greenhouse Job Creation Guide (HMs)', url: 'https://docs.google.com/document/d/1Nzc2OTz6uQHeuOPNWfrTWKpJNcoAX4-Qh6xigEWu3lg/edit?tab=t.0#heading=h.z27x8yefc1ly', category: 'Greenhouse' },
  { label: 'HM Training Guide', url: 'https://docs.google.com/presentation/d/12VsM-oWX_SS5nw69QrrLuiOZ3h9W2qy5ktfHYlDtrF4/edit#slide=id.p2', category: 'Greenhouse' },

  // Onboarding & Hiring
  { label: 'Global Hiring & Onboarding Tracker', url: 'https://docs.google.com/spreadsheets/d/1koKQM2wNUgAYbrpJahf4cZZU6gEXZ6c10XWaBDX3nAk/edit#gid=1244580709', category: 'Onboarding & Hiring' },
  { label: 'Job Description Index', url: 'https://docs.google.com/spreadsheets/d/1I36IEjEd6_9gXBhVsKMB4DxUMl8SrXGnpdYHYZcVpRg/edit?gid=0#gid=0', category: 'Onboarding & Hiring' },

  // Templates & Forms
  { label: 'Visa Sponsorship Request Form', url: 'https://docs.google.com/forms/d/e/1FAIpQLSe44FePGj4wmK_09qdfaTJicrym7EpdYM-ML2-8tDt55vvq4g/viewform?usp=sharing', category: 'Templates & Forms' },

  // Guides & Wikis
  { label: 'Recruitment SOP', url: 'https://docs.google.com/document/d/117a5PPBRrTFe-aECVnXngqq10LVauKrfaBeUB45q93I/edit#heading=h.ymsdtzsurgp4', category: 'Guides & Wikis' },
  { label: 'HM Playbook', url: 'https://docs.google.com/document/d/1fcMKyYAQRZQBiiwEVzY58lvpD_e_tGFx40vAGMo65pc/edit?tab=t.0#heading=h.u04e41z8k15v', category: 'Guides & Wikis' },
  { label: 'Recruitment Wiki', url: 'https://docs.google.com/document/d/12pQFV49wljGhUQaLwuHFQMoEoCH2OniToBSvxddDdSg/edit', category: 'Guides & Wikis' },
  { label: 'Campus Wiki', url: 'https://docs.google.com/document/d/1v-3gy2B5yzJ81eMT5ZeCONn1W36iJylWDgULm5qUh9w/edit?tab=t.0#heading=h.ba4cltb3tk98', category: 'Guides & Wikis' },
  { label: 'Mobility / Immigration Support', url: 'https://docs.google.com/document/d/18VoEWmzmSJNmnEyp3JGOtA-13cO_ZjaRUVjSpRgFqyU/edit#', category: 'Guides & Wikis' },
  { label: 'Sponsorship FAQs', url: 'https://docs.google.com/document/d/1D1sCo_2Q9423wQ1SK4p7S6xGBbp0QDoOpJFaf-qWaoc/edit?tab=t.0', category: 'Guides & Wikis' },
  { label: 'Benefit at a Glance - Canada', url: 'https://docs.google.com/document/d/1ICdVavuK8l0VbY00bymUxZdif8MyO3MsYtoBX4eWgFs/edit', category: 'Guides & Wikis' },
  { label: 'Benefit at a Glance - USA', url: 'https://docs.google.com/document/d/1NbtmU0asFmgh06Tqam3peJSt9esjhCc0-tCJJcz4BCw/edit', category: 'Guides & Wikis' },
  { label: 'Contracts - International', url: 'https://docs.google.com/document/d/16qg3HecniMOY0gm1WtGOuuvcFjqrxc5VjQ7G3YpZOik/edit?tab=t.0#heading=h.hyfrqnblqsmv', category: 'Guides & Wikis' },
  { label: 'Background Check Process', url: 'https://docs.google.com/document/d/1VKHBnP3yclqmYzKPZaVv_03Jf2HemGvCJYpspXR4wGA/edit#heading=h.eqekbfddv0z3', category: 'Guides & Wikis' },
];
