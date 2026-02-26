export interface ContractCountry {
  country: string;
  status: 'active' | 'archived' | 'wip';
  note?: string;
  entity?: string;
  genderSpecific: boolean;
  sendMethod: 'greenhouse' | 'email';
  documents: ContractDocument[];
  emailTemplate: string;
  stip: boolean;
  templateFolder?: string;
}

export interface ContractDocument {
  name: string;
  description: string;
  signingInstructions?: string;
  link?: string;
}

export const contractCountries: ContractCountry[] = [
  {
    country: 'Spain',
    status: 'active',
    genderSpecific: false,
    sendMethod: 'greenhouse',
    stip: true,
    templateFolder: 'https://drive.google.com/drive/folders/1OE_d2goO-6EnHHAks1erLqWL-7CpSRa_?usp=sharing',
    documents: [
      {
        name: 'Permanent Employment Contract',
        description: 'TEMPLATE Geotab Employment Contract - Spain [RES]',
        link: 'https://docs.google.com/document/d/145vMGA0RY08RS53sfqC2hOsww0Lpv_DL0taDUgkhx_Q/edit?usp=sharing',
        signingInstructions: 'On acceptance, please sign page XX and send back the entire copy for our records within 7 days of receiving this offer.',
      },
      {
        name: 'Fixed-Term Employment Contract',
        description: 'TEMPLATE - Fixed-Term Employment Contract (for seasonal or peak demand) - Spain [RES]',
        link: 'https://docs.google.com/document/d/1KS87dPLCa2hd-QUMq_Naph4PduyEZuCkocWP5jUyV8s/edit?usp=sharing',
        signingInstructions: 'On acceptance, please sign page XX and send back the entire copy for our records within 7 days of receiving this offer.',
      },
      {
        name: 'CWIA',
        description: 'Confidentiality, Works and Inventions Agreement (TEMPLATE Geotab CWIA - SPAIN [RES])',
        link: 'https://docs.google.com/document/d/17cKRkaDKZN_Wpd0dnGyVwWsIYooMMTZOpkeznlEUwjk/edit?usp=sharing',
        signingInstructions: 'Page XX: Please sign and date it. Page XX: Mark with a cross (above) the option that applies. Page XX: Please sign and date it. Scan back the entire copy for our records.',
      },
      {
        name: 'STIP Letter',
        description: 'STIP letter template for Spain, Germany, UK and Australia.',
        link: 'https://docs.google.com/document/d/1EfwEZos3IT3z9smy_juhMBsst_hr-ZE1rCMABLImiS0/edit?tab=t.0',
      },
      {
        name: 'Data Protection Notice',
        description: 'Geotab Data Protection Notice - SPAIN - Art. 13 Regulation EU 2016/679 [RES].pdf',
        link: 'https://drive.google.com/file/d/1K1klfOl20eHZC8W9To6HMol3_5Q5f4fA/view?usp=sharing',
        signingInstructions: 'Please sign and date the last page and send back the entire copy for our records.',
      },
      {
        name: 'Global Geotabber Handbook',
        description: 'Global Geotabber Handbook',
        link: 'https://docs.google.com/document/d/1eHTWzjvkn6UGqhNuRLujJKbTn7bjUdriopGfim_f-8c/edit?usp=sharing',
        signingInstructions: 'Can be signed on your first day at Geotab.',
      },
      {
        name: 'Spain Geotabber Handbook',
        description: 'Spain Geotabber Handbook',
        link: 'https://docs.google.com/document/d/1ENTcVZb2NYMFeG3uCmzM7-3xhno9aKNj4e8VI_XlRv4/edit?usp=sharing',
        signingInstructions: 'Can be signed on your first day at Geotab.',
      },
    ],
    emailTemplate: `Hi [CANDIDATE NAME],

My name is [YOUR NAME] and I am a [YOUR TITLE] at Geotab, nice to e-meet you!

We are delighted to offer you full time employment at Geotab as a [JOB TITLE] starting [START DATE].

I have included the following documents for your review:

• Geotab Employment Contract: On acceptance, please sign page XX and send back the entire copy for our records within 7 days of receiving this offer
• CWIA-Confidentiality, Works and Inventions Agreement:
  - Page XX: Please sign and date it
  - Page XX: Mark with a cross (above) the option that applies
  - Page XX: Please sign and date it
  - Scan back the entire copy for our records
• Data Protection Notice: Please sign and date the last page and send back the entire copy for our records.
• Global and Spain Geotabber Handbook: These can be signed on your first day at Geotab. You will find there are some links in the handbook, these will not be accessible until you have Geotab access, though if you would like any more information in the meantime please let me know.
• STIP Letter

Please feel free to reach out to us if you have any questions at all or if you notice any discrepancies with the documents.
We look forward to hearing back from you!`,
  },
  {
    country: 'Germany',
    status: 'active',
    genderSpecific: true,
    sendMethod: 'greenhouse',
    stip: true,
    templateFolder: 'https://drive.google.com/drive/folders/13a0KmG0psWYPdPpz0z0zG8DlmOdoqQxC?usp=sharing',
    documents: [
      {
        name: 'Permanent Contract (Male)',
        description: 'TEMPLATE Geotab Employment Contract - Germany (male) [RES]',
        link: 'https://docs.google.com/document/d/1QjHN5y0jEXhoatIkHXmssPNR7Or-oysaO71TeAu1r2U/edit?usp=sharing',
        signingInstructions: 'On acceptance, please sign page XX and send back the entire copy for our records within 7 days of receiving this offer.',
      },
      {
        name: 'Permanent Contract (Female)',
        description: 'TEMPLATE Geotab Employment Contract - Germany (female) [RES]',
        link: 'https://docs.google.com/document/d/17jQMdWbxS9_YT6wLtFFDzuiwDKBTTnC8srk2tD3jcDs/edit?usp=sharing',
        signingInstructions: 'On acceptance, please sign page XX and send back the entire copy for our records within 7 days of receiving this offer.',
      },
      {
        name: 'Fixed-Term Contract (Male)',
        description: 'GER - TEMPLATE Geotab Fixed-Term Employment Contract - Germany (male) [RES]',
        link: 'https://docs.google.com/document/d/1QiieEFPPnnQ8vVXo6cGL-AYpGebCtiVeI9LvfGCdPDM/edit?usp=sharing',
      },
      {
        name: 'Fixed-Term Contract (Female)',
        description: 'GER - TEMPLATE Geotab Fixed-Term Employment Contract - Germany (female) [RES]',
        link: 'https://docs.google.com/document/d/1UF70sgKfGtToxu1bA_WM4AP3rHWFNg4qFpxMIIu81Qk/edit?usp=sharing',
      },
      {
        name: 'STIP Letter',
        description: 'STIP letter template for Spain, Germany, UK and Australia.',
        link: 'https://docs.google.com/document/d/1EfwEZos3IT3z9smy_juhMBsst_hr-ZE1rCMABLImiS0/edit?tab=t.0',
      },
      {
        name: 'Data Protection Notice',
        description: 'Geotab Data Protection Notice - Germany [INT]',
        link: 'https://drive.google.com/file/d/1DkI6yOBHcTqFVI8WGxHcGXxVXOTOKOGP/view?usp=sharing',
        signingInstructions: 'Please sign and date the last page and send back the entire copy for our records.',
      },
      {
        name: 'Global Geotabber Handbook',
        description: 'Global Geotabber Handbook',
        link: 'https://docs.google.com/document/d/1eHTWzjvkn6UGqhNuRLujJKbTn7bjUdriopGfim_f-8c/edit?usp=sharing',
        signingInstructions: 'Can be signed on your first day at Geotab.',
      },
      {
        name: 'Germany Geotabber Handbook',
        description: 'Germany Geotabber Handbook',
        link: 'https://docs.google.com/document/d/1in9cKJUsX7mnIbCy4nQMjXIQEzh5pq2etBU6I3HrO7w/edit?usp=sharing',
        signingInstructions: 'Can be signed on your first day at Geotab.',
      },
    ],
    emailTemplate: `Hi [CANDIDATE NAME],

My name is [YOUR NAME] and I am a [YOUR TITLE] at Geotab, nice to e-meet you!

We are delighted to offer you full time employment at Geotab as a [JOB TITLE], starting [START DATE].

I have included the following documents for your review:

• Geotab Employment Contract - On acceptance, please sign page XX and send back the entire copy for our records within 7 days of receiving this offer.
• Data Protection Notice - Please sign and date the last page and send back the entire copy for our records.
• Global and Germany Handbook - It can be signed on your first day at Geotab. You will find there are some links in the handbook, these will not be accessible until you have Geotab access, though if you would like any more information in the meantime please let me know.
• STIP Letter

Please feel free to reach out to us if you have any questions at all or if you notice any discrepancies with the documents.

We look forward to hearing back from you!`,
  },
  {
    country: 'Mexico',
    status: 'wip',
    note: 'This section is still in progress. Employment Contract template available via Google Docs. Training session recording and transcript available.',
    genderSpecific: false,
    sendMethod: 'email',
    stip: false,
    documents: [
      {
        name: 'Employment Contract',
        description: 'Mexico Employment Contract (Google Docs template)',
        link: 'https://docs.google.com/document/d/16du0YZCtfjuA6f84h4aJ-gLqdQW6JfSZoAMHJT7GgYM/edit?tab=t.0',
      },
      {
        name: 'Training Session Transcript',
        description: 'Training session recording and transcript for Mexico contract process',
        link: 'https://docs.google.com/document/d/10pNhdVrZMjz5UubTSUEoFygVVcEzXqWBG_I1yB0Jf5o/edit?tab=t.lgofg33jw85q',
      },
      {
        name: 'Training Session Recording',
        description: 'Video recording of Mexico contract training',
        link: 'https://drive.google.com/file/d/1c7_s2oOgXcB4nCeUrOTS_mj8eTxsoX8L/view',
      },
    ],
    emailTemplate: 'No standardized email template has been established yet for Mexico offers. Please coordinate with the team for current process.',
  },
  {
    country: 'Italy (Archived)',
    status: 'archived',
    entity: 'Geotab GmbH',
    note: 'This is the old entity — please use Geotab Italia S.r.L for all future hires.',
    genderSpecific: false,
    sendMethod: 'email',
    stip: false,
    templateFolder: 'https://drive.google.com/drive/folders/1LFhmdB21yqqeUUEQGCqOh-RdHSaVfNyx?usp=drive_link',
    documents: [
      {
        name: 'Employment Contract',
        description: 'TEMPLATE Geotab Employment Contract - Italy [RES] (GEOTAB GmbH)',
        link: 'https://docs.google.com/document/d/1tI_KPSUpTHxoY7Zj4-St-VK5NARyQ-q3aKbalmgVu6A/edit?usp=sharing',
        signingInstructions: 'On acceptance, please sign page XX and send back the entire copy for our records within 7 days of receiving this offer.',
      },
      {
        name: 'Cometa Fund (Membership Form)',
        description: 'Cometa Fund Membership Form',
        link: 'https://drive.google.com/file/d/10KWc0OweU5QT9MHqP6KltEtUpBFja1fq/view?usp=sharing',
      },
      {
        name: 'Annex C',
        description: 'Metalworkers National Collective Bargaining Agreement',
        link: 'https://drive.google.com/file/d/1oxuv-QYlWj4Miq7_XCMpw6AyIcFF9_ka/view?usp=sharing',
      },
      {
        name: 'Data Protection Notice',
        description: 'Geotab GmbH & Geotab UK Ltd Privacy Notice',
        link: 'https://drive.google.com/file/d/1QMY6jGcBY1UZzFg2lwHOgqsP2kXoqIqT/view?usp=sharing',
        signingInstructions: 'Please sign and date the last page and send back the entire copy for our records.',
      },
      {
        name: 'Global Geotabber Handbook',
        description: 'Global Geotabber Handbook',
        link: 'https://docs.google.com/document/d/1eHTWzjvkn6UGqhNuRLujJKbTn7bjUdriopGfim_f-8c/edit?usp=sharing',
      },
    ],
    emailTemplate: `Hi [CANDIDATE NAME],

My name is [YOUR NAME] and I am a [YOUR TITLE] at Geotab, nice to e-meet you!

We are delighted to offer you full time employment at Geotab as a [JOB TITLE], starting [START DATE].

I have included the following documents for your review:

• Geotab Employment Contract - On acceptance, please sign page XX and send back the entire copy for our records within 7 days of receiving this offer.
• Annex C - Cometa Fund Membership Form and Metal Workers National Collective Bargaining Agreement
• Data Protection Notice - Please sign and date the last page and send back the entire copy for our records.
• Global Handbook - It can be signed on your first day at Geotab. You will find there are some links in the handbook, these will not be accessible until you have Geotab access, though if you would like any more information in the meantime please let me know.

Please feel free to reach out to us if you have any questions at all or if you notice any discrepancies with the documents.

We look forward to hearing back from you!`,
  },
  {
    country: 'Italy (New)',
    status: 'active',
    entity: 'Geotab Italia S.r.L',
    note: 'Current entity for all new Italian hires. Process details are being established — refer to the archived Italy process for general guidance.',
    genderSpecific: false,
    sendMethod: 'email',
    stip: false,
    documents: [],
    emailTemplate: 'Contact the team for the current Italy (Geotab Italia S.r.L) process and templates.',
  },
  {
    country: 'France',
    status: 'active',
    genderSpecific: true,
    sendMethod: 'email',
    stip: false,
    templateFolder: 'https://drive.google.com/drive/folders/1qXKtRXcyvQ0aAfv97-ro94eQSrwHbdXi?usp=drive_link',
    documents: [
      {
        name: 'Employment Contract (Male)',
        description: 'TEMPLATE Geotab Employment Contract - France (male) [RES]',
        link: 'https://docs.google.com/document/d/1ls0aDBrjW7mbb8ilhWxAjVyARGYCbEl2PjXG3OeKfdM/edit?usp=sharing',
        signingInstructions: 'On acceptance, please sign page XX and send back the entire copy for our records within 7 days of receiving this offer.',
      },
      {
        name: 'Employment Contract (Female)',
        description: 'TEMPLATE Geotab Employment Contract - France (female) [RES]',
        link: 'https://docs.google.com/document/d/1ucEhDqJH63IhjfGZcUDvPbGkWGQWcGzJKh4KP8D_mqc/edit?usp=sharing',
        signingInstructions: 'On acceptance, please sign page XX and send back the entire copy for our records within 7 days of receiving this offer.',
      },
      {
        name: 'Data Protection Notice',
        description: 'Geotab EU Employee Notice GDPR (FR)',
        link: 'https://drive.google.com/file/d/1GX8CReSMeOLdrydoI0q4tkKekMqHo2Sp/view?usp=drive_link',
        signingInstructions: 'Please sign and date the last page and send back the entire copy for our records.',
      },
      {
        name: 'Global Geotabber Handbook',
        description: 'Global Geotabber Handbook',
        link: 'https://docs.google.com/document/d/1eHTWzjvkn6UGqhNuRLujJKbTn7bjUdriopGfim_f-8c/edit?usp=sharing',
      },
    ],
    emailTemplate: `Hi [CANDIDATE NAME],

My name is [YOUR NAME] and I am a [YOUR TITLE] at Geotab, nice to e-meet you!

We are delighted to offer you full time employment at Geotab as a [JOB TITLE], starting [START DATE].

I have included the following documents for your review:

• Geotab Employment Contract - On acceptance, please sign page XX and send back the entire copy for our records within 7 days of receiving this offer.
• Data Protection Notice - Please sign and date the last page and send back the entire copy for our records.
• Global Handbook - It can be signed on your first day at Geotab. You will find there are some links in the handbook, these will not be accessible until you have Geotab access, though if you would like any more information in the meantime please let me know.

Please feel free to reach out to us if you have any questions at all or if you notice any discrepancies with the documents.

We look forward to hearing back from you!`,
  },
  {
    country: 'Ireland',
    status: 'active',
    genderSpecific: false,
    sendMethod: 'greenhouse',
    stip: false,
    templateFolder: 'https://drive.google.com/drive/folders/13a0KmG0psWYPdPpz0z0zG8DlmOdoqQxC?usp=sharing',
    documents: [
      {
        name: 'Fixed Term Contract Template',
        description: 'Template Fixed Term Contract of Employment - Geotab (2025) - Master Copy',
        link: 'https://docs.google.com/document/d/1NEWYI4C9eVkADpcc4qrdZCYlBjQewNrs/edit#heading=h.y6gyb2d7ej1',
      },
    ],
    emailTemplate: 'Email sent via Greenhouse using saved template. Ensure all contract documents are attached in PDF format.',
  },
  {
    country: 'Australia',
    status: 'active',
    genderSpecific: false,
    sendMethod: 'email',
    stip: true,
    documents: [
      {
        name: 'STIP Letter',
        description: 'STIP letter template for Spain, Germany, UK and Australia.',
        link: 'https://docs.google.com/document/d/1EfwEZos3IT3z9smy_juhMBsst_hr-ZE1rCMABLImiS0/edit?tab=t.0',
      },
      {
        name: 'Employment Contract (Award Free Remote)',
        description: 'For award-free employees working remotely.',
        link: 'https://docs.google.com/document/d/1tRCBPIRJzhAPaAn3KuiQgBAXFgtNIUtL/edit#heading=h.hlf60bdncy6h',
      },
      {
        name: 'Employment Contract (Office-Based Award Free)',
        description: 'For award-free employees based in office.',
        link: 'https://docs.google.com/document/d/1Kcd7IlVH8KMbJ2Oe2DERZl3tk5dkbXWd/edit',
      },
      {
        name: 'Employment Contract (Professional Employees Award 2020 - Remote)',
        description: 'For employees covered by Professional Employees Award 2020, working remotely.',
        link: 'https://docs.google.com/document/d/1RPvtR78pse7dEje9eoYvh3q5eol3gotb/edit#heading=h.p88pa09cnpm2',
      },
      {
        name: 'Employment Contract (Professional Employees Award 2020 - Office)',
        description: 'For employees covered by Professional Employees Award 2020, working in office.',
        link: 'https://docs.google.com/document/d/1v2c_W84TzEeCqX8paZCBCp5N5NCN7flZ/edit#heading=h.su4vx6u7n1si',
      },
      {
        name: 'Maximum Term (Fixed Term) Employment Contract',
        description: 'For fixed-term employment arrangements.',
        link: 'https://docs.google.com/document/d/1F9-lqH5c8JHZQAZIhPMnBNSfIRdkCkSgtdopz6KtQsA/edit?usp=sharing',
      },
    ],
    emailTemplate: 'Use the appropriate contract template based on the employee work arrangement (award-free vs. Professional Employees Award 2020, remote vs. office). Attach STIP Letter when applicable.',
  },
  {
    country: 'United Kingdom',
    status: 'active',
    genderSpecific: false,
    sendMethod: 'greenhouse',
    stip: true,
    documents: [
      {
        name: 'STIP Letter',
        description: 'STIP letter template for Spain, Germany, UK and Australia.',
        link: 'https://docs.google.com/document/d/1EfwEZos3IT3z9smy_juhMBsst_hr-ZE1rCMABLImiS0/edit?tab=t.0',
      },
      {
        name: 'Employment Contract',
        description: 'UK Employment Contract template. Sent via Greenhouse using the Singapore/UK offer form.',
      },
    ],
    emailTemplate: 'Offer sent via Greenhouse. STIP Letter attached when applicable.',
  },
  {
    country: 'Dubai',
    status: 'wip',
    note: 'Process is currently in draft. Refer to the Dubai Process Flow Chart for guidance.',
    genderSpecific: false,
    sendMethod: 'email',
    stip: false,
    templateFolder: 'https://drive.google.com/drive/folders/1ysm8LkW7VmdsK9Z19nyzfSgiN-xKFHIF',
    documents: [
      {
        name: 'Dubai Process Flow Chart',
        description: 'Visual flow chart outlining the Dubai hiring process steps.',
        link: 'https://drive.google.com/drive/folders/1ysm8LkW7VmdsK9Z19nyzfSgiN-xKFHIF',
      },
      {
        name: 'Dubai Process - Draft',
        description: 'Detailed draft process document for Dubai contracts.',
        link: 'https://docs.google.com/document/d/1-tE5E5uA0vL1j7aN5nyOqjZwaPRJL1lMSfaSSfbYA_A/edit?tab=t.0#heading=h.lumtsioybx5o',
      },
    ],
    emailTemplate: 'Process in draft. Refer to the Dubai Process Flow Chart.',
  },
  {
    country: 'Poland',
    status: 'wip',
    note: 'This section is still a WIP. Please reach out to Nadia Harris, Alvaro Postigo Matey and Alexandra Bielecki for support before hiring. Note: previous contracts lacked probation clauses; updated versions with probation are being drafted.',
    genderSpecific: false,
    sendMethod: 'email',
    stip: false,
    documents: [
      {
        name: 'Employment Contract',
        description: 'Poland Employment Contract Template (under revision — probation clauses being added)',
      },
      {
        name: 'GDPR Notice',
        description: 'Poland GDPR data protection notice',
      },
      {
        name: 'Poland Communication Email Template',
        description: 'Email template for communicating contract details to Poland candidates.',
        link: 'https://docs.google.com/document/d/1Ab9KRW5MB3zToA1PUIQDQ2gux9srt-TBrngztd948Ow/edit?tab=t.0',
      },
    ],
    emailTemplate: 'Use the Poland Communication email template. Contact Nadia Harris, Alvaro Postigo Matey, or Alexandra Bielecki for support.',
  },
];

export const contractProcessNotes = [
  'TAP prepares documents with highlighted yellow fields filled in.',
  'Save Google Docs as PDF and review alignment before sending — PDFs can misformat tables.',
  'For Greenhouse-sent offers: upload filled PDFs to the offer form, submit for approval, then send via Greenhouse with the appropriate email template.',
  'Data Protection Notice and Employee Handbooks are saved to the Greenhouse email template and do not need manual attachment.',
  'For email-sent offers: attach all documents as PDFs and send using the email template.',
];
