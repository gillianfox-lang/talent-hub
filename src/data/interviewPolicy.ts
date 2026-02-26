export interface DistanceBand {
  id: string;
  label: string;
  rangeKm: string;
  rangeMiles: string;
  travelTime: string;
  inPersonRequired: boolean;
  exceptions: string;
  travelReimbursement: boolean;
}

export const distanceBands: DistanceBand[] = [
  {
    id: 'close',
    label: 'Close Range',
    rangeKm: '0–40 km',
    rangeMiles: '0–25 miles',
    travelTime: '0–1 hour',
    inPersonRequired: true,
    exceptions: 'None',
    travelReimbursement: false,
  },
  {
    id: 'mid',
    label: 'Mid Range',
    rangeKm: '41–150 km',
    rangeMiles: '25–93 miles',
    travelTime: '1–2.5 hours',
    inPersonRequired: true,
    exceptions: 'Some exceptions may be granted based on travel time to office and level of role. Exception if no one from the hiring team works from the office that is closest for the candidate to travel to.',
    travelReimbursement: false,
  },
  {
    id: 'far',
    label: 'Remote / Far',
    rangeKm: '151+ km',
    rangeMiles: '93+ miles',
    travelTime: '2.5+ hours',
    inPersonRequired: false,
    exceptions: 'Senior Leadership roles (AVP and above) mandatory for in-person final interviews. Roles with high level security access (US FedRAMP/CONUS) are mandatory for final interviews.',
    travelReimbursement: true,
  },
];

export const approvalExceptions = [
  {
    type: 'Referrals',
    description: 'If the referrer has a personal relationship with the candidate (must be a past coworker, family member, or friend).',
  },
  {
    type: 'Re-hires',
    description: 'Candidates who have previously worked at Geotab.',
  },
  {
    type: 'Intern to Full-Time',
    description: 'Interns being converted to full-time positions.',
  },
];

export const candidateExperienceGuidelines = [
  'Candidates must be informed of the interview format in the initial recruiter screening.',
  'If an in-person interview requires travel over 150 km, Geotab will provide reimbursement per the Travel Reimbursement Policy for In-Person Interviews.',
  'If a candidate requests a remote alternative due to disability or logistical hardship, work with HRBP to review the request within 24 hours.',
  'Some roles require in-person verification during the interview process even if no hiring team member is present (e.g., virtual interview from the Atlanta office). Ensure candidates are prepared for this at the onset.',
];

export const travelProcess = [
  'By Train/Plane: Reach out to the travel partner to help arrange train or plane tickets.',
];

export const exceptionApprovalRequired = 'Any deviation from the matrix requires approval from Talent Team Lead/Talent Manager + Department AVP.';

export const lastUpdated = 'January 20, 2026';
