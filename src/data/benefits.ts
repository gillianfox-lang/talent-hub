export interface BenefitCategory {
  id: string;
  title: string;
  icon: string;
  items: BenefitItem[];
}

export interface BenefitItem {
  name: string;
  details: string[];
}

export interface PerkProgram {
  name: string;
  description: string;
  amount?: string;
}

export const benefitCategories: BenefitCategory[] = [
  {
    id: 'medical',
    title: 'Medical',
    icon: '🏥',
    items: [
      {
        name: 'Medical Plans',
        details: [
          'Choose from three different plans through UnitedHealthcare including a low-cost HDHP',
          'Tax-advantaged spending accounts available: Healthcare FSA, Limited Purpose FSA, Dependent Care FSA',
        ],
      },
      {
        name: 'Health Savings Account (HSA)',
        details: [
          'Available for HDHP enrollees',
          'Employer match: up to $27.69/pay period ($720/year) for employee-only coverage',
          'Employer match: up to $55.38/pay period ($1,440/year) with dependents',
          'HSA provider: Optum',
        ],
      },
      {
        name: 'Employee Assistance Programs (EAP)',
        details: ['Support and resources for employees going through life or work-related events'],
      },
    ],
  },
  {
    id: 'dental',
    title: 'Dental',
    icon: '🦷',
    items: [
      {
        name: 'PPO In-Network',
        details: [
          'Quarterly covered cleanings',
          '100% Preventative Services',
          '100% Basic Services',
          '80% Major Services',
        ],
      },
      {
        name: 'Orthodontia',
        details: [
          '50% coverage (adult & child)',
          'Lifetime maximum of $3,000',
        ],
      },
      {
        name: 'Other',
        details: ['Annual rollover benefit available'],
      },
    ],
  },
  {
    id: 'vision',
    title: 'Vision',
    icon: '👁',
    items: [
      {
        name: 'In-Network Coverage',
        details: [
          'Eye Exam, Lenses or Contact Lenses or Frames: once every 12 months',
          'Eye Exam copay: $10',
          'Prescription Glasses copay: $25',
          'Frames: $150 allowance + up to 30% discount over allowance',
        ],
      },
    ],
  },
  {
    id: 'life-add',
    title: 'Life & AD&D',
    icon: '🛡',
    items: [
      {
        name: 'Employee Life & AD&D',
        details: [
          '$30,000 employer-provided coverage for both Life and AD&D',
          'Voluntary additional coverage: $10,000 increments up to $500,000',
          'Evidence of Insurability (EOI) may be required over $200,000',
          'Benefits reduce 35% at age 65, 50% of original at age 70',
          'Benefits terminate at retirement or upon termination',
        ],
      },
      {
        name: 'Dependent Life',
        details: [
          'Spouse: $5,000 increments up to $250,000 (EOI may be required)',
          'Children: flat $10,000 per child',
          'EOI required if not added at initial eligibility',
        ],
      },
    ],
  },
  {
    id: 'disability',
    title: 'Disability',
    icon: '🏠',
    items: [
      {
        name: 'Short-Term Disability',
        details: [
          'Company-paid benefit',
          '1-week elimination period (commences on 8th day)',
          '60% of weekly income up to $2,500/week',
          'Benefit duration: up to 13 weeks',
        ],
      },
      {
        name: 'Long-Term Disability',
        details: [
          'Voluntary employee-paid benefit',
          '91 consecutive days elimination period',
          '60% of monthly income up to $9,000/month',
          'Duration: up to Social Security Normal Retirement Age',
        ],
      },
    ],
  },
  {
    id: 'retirement',
    title: 'Retirement',
    icon: '💰',
    items: [
      {
        name: '401(k) Plan',
        details: [
          'Company matches up to 4% of employee contributions per year',
          'Maximum employer match: $7,500 annually',
          'Eligible first of the month after completing probationary period',
        ],
      },
    ],
  },
  {
    id: 'time-off',
    title: 'Time Off',
    icon: '🌴',
    items: [
      {
        name: 'Vacation & Leave',
        details: [
          '15 days vacation per year',
          '5 paid personal emergency/health days per year',
          '11 paid holidays per year',
          'Vacation accrues from hire date, available after probation',
        ],
      },
    ],
  },
  {
    id: 'supplemental',
    title: 'Supplemental',
    icon: '➕',
    items: [
      {
        name: 'Accident, Critical Illness & Hospital Indemnity',
        details: [
          'Voluntary coverage through UnitedHealthcare',
          'Cash benefits to cover expenses not covered by medical insurance',
        ],
      },
    ],
  },
];

export const perksAndPrograms: PerkProgram[] = [
  {
    name: 'Baby Bonus',
    description: 'Pre-tax bonus for the birth of a child, adoption, or becoming a new parent through surrogacy.',
    amount: '$5,000 USD',
  },
  {
    name: 'Cell Phone',
    description: 'Company-provided phone and plan, dependent upon position and manager approval.',
  },
  {
    name: 'Electric Vehicle Program',
    description: 'Incentive for purchase or lease of electric vehicle, bicycle, or scooter. Must be purchased after hire date; eligible for reimbursement after probation.',
    amount: 'Up to $6,000 USD',
  },
  {
    name: 'Gym/Fitness Program',
    description: '50% reimbursement to a monthly or annual gym/fitness program.',
    amount: 'Up to $225 USD/year',
  },
  {
    name: 'Professional Development',
    description: '80% company reimbursement for professional development and tuition.',
  },
  {
    name: 'Home Office Equipment',
    description: 'Financial support for ergonomic home office setup. 100% reimbursement. Must be purchased after hire; eligible after probation.',
    amount: 'Up to $185 USD',
  },
  {
    name: 'Public Transportation',
    description: '100% reimbursement for public transit to and from your home to a Geotab office.',
  },
  {
    name: 'Referral Program',
    description: 'Referral bonuses for successful candidate referrals.',
    amount: 'Up to $5,000 USD',
  },
];

export const planProviders = {
  broker: 'Willis Towers Watson (WTW)',
  medical: 'UnitedHealthcare (UHC)',
  dental: 'UnitedHealthcare (UHC)',
  vision: 'UnitedHealthcare (UHC)',
  lifeAddStdLtd: 'UnitedHealthcare (UHC)',
  hsa: 'Optum',
};

export const waitingPeriod = {
  salaried: 'First of the month following hire date',
  hourly: 'First of the month following 30 days of employment',
  example: 'If hired May 5th, eligible July 1st',
};

export const benefitsEligibility = 'Benefits are available to W2 employees working 24 hours or more per week.';
export const perksEligibility = 'Perks and Programs are only available to permanent Geotabbers. Certain restrictions apply.';
export const planYear = '2024';
