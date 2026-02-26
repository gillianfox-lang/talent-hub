export interface OfferTemplate {
  name: string;
  whenToUse: string[];
}

export interface OfferFormField {
  field: string;
  required: boolean;
  details: string;
  helperInfo: string;
}

export interface OfferType {
  id: string;
  label: string;
  description: string;
}

export interface OfferRegion {
  id: string;
  label: string;
  description: string;
}

export interface OfferFormSection {
  id: string;
  name: string;
  fields: OfferFormField[];
  applicableTemplates: string[];
  notes?: string[];
}

export const offerTypes: OfferType[] = [
  { id: 'internal-change', label: 'Internal Position Change', description: 'Current Geotab employee moving to a new role' },
  { id: 'full-time', label: 'Full Time / Fixed Term / Extension', description: 'New external hire or contract extension' },
  { id: 'international', label: 'International (Singapore/UK)', description: 'Full time offer for Singapore or UK candidates' },
  { id: 'intern-conversion', label: 'Intern Conversion', description: 'Converting an intern to full-time or fixed-term' },
  { id: 'manual-contract', label: 'Manual Contract Countries', description: 'Countries requiring manual contract preparation (Spain, Germany, France, etc.)' },
];

export const offerRegions: OfferRegion[] = [
  { id: 'canada-usa', label: 'Canada / USA', description: 'Offers processed through Greenhouse with DocuSign' },
  { id: 'singapore-uk', label: 'Singapore / UK', description: 'Offers sent via Greenhouse (NOT DocuSign)' },
  { id: 'manual', label: 'Manual Contract Countries', description: 'EMEA countries requiring manual contract preparation' },
];

export const offerTemplates: OfferTemplate[] = [
  { name: 'Canada Contract - Full Time Permanent', whenToUse: ['Candidate in Canada', 'Full Time Permanent position', 'External OR internal on Fixed Term moving to FTP'] },
  { name: 'Canada Contract (Customer Support)', whenToUse: ['Candidate in Canada', 'Full Time Permanent Customer Support position'] },
  { name: 'Canada Contract (Partner Support)', whenToUse: ['Candidate in Canada', 'Full Time Permanent Partner Support position'] },
  { name: 'Canada - Internal - Position Change Letter WITH Updated T&C', whenToUse: ['Candidate in Canada', 'Internal candidate', 'Original agreement OLDER than Nov. 1, 2023 and/or increase in compensation'] },
  { name: 'Canada - Internal - Position Change Letter NO Updated T&C', whenToUse: ['Candidate in Canada', 'Internal candidate', 'Original contract AFTER Nov. 1, 2023, lateral move, NO changes to compensation'] },
  { name: 'Canada Fixed Term Contract & Intern/Student', whenToUse: ['Candidate in Canada', 'Fixed Term Contract (including Internships)', 'External OR internal on FTC being extended'] },
  { name: 'USA Contract - Full Time Permanent', whenToUse: ['Candidate in USA', 'External FTP, external FTC, or internal FTC extension'] },
  { name: 'USA Contract (Customer Support) - Full Time Permanent', whenToUse: ['Candidate in USA', 'Customer Support position (FTP or FTC)'] },
  { name: 'USA Contract (Partner Support) - Full Time Permanent', whenToUse: ['Candidate in USA', 'Partner Support position (FTP or FTC)'] },
  { name: 'USA - Internal Candidate - Position Change Letter', whenToUse: ['Candidate in USA', 'Internal candidate', 'No change to pay class'] },
  { name: 'USA Contract - Intern & Fixed Term Contract (NO STIP)', whenToUse: ['Candidate in USA', 'External FTC or Internship', 'Internal FTC/Intern extension'] },
];

export const preOfferRequirements = [
  'Send the Offer - Candidate Data Intake form to the candidate before creating an offer',
  'Candidate must submit: Full Legal Name, Legal First/Middle/Last Name, Preferred Name, Primary Email, Full Address, City, State/Province, Country, Postal Code/Zip Code',
];

// ---------------------------------------------------------------------------
// Internal Position Change Fields (Canada/USA) — ~47 fields
// ---------------------------------------------------------------------------
export const internalPositionChangeFields: OfferFormField[] = [
  { field: 'Candidate Type', required: true, details: 'Select "Internal"', helperInfo: 'Internal: Already employed at Geotab immediately prior to the new position/term start date (e.g. a back-to-back position change or contract extension). External: Not employed at Geotab immediately prior to the new position start date. Note: Any gap in employment prior to the start date requires "External" classification.' },
  { field: 'Offer/Letter Type', required: true, details: 'Select "Internal Position Change"', helperInfo: 'This selection is required in order to populate the offer fields relevant to the Position Change Letter' },
  { field: 'Start Date', required: true, details: 'Select date the position change will be effective', helperInfo: 'This is the date that the managers have agreed upon to be the official transition date. If unsure, speak to the corresponding HRBP' },
  { field: 'Job Title', required: true, details: 'Select from dropdown', helperInfo: 'If you are unable to locate the Job Title in the dropdown, please reach out to the HRTD team.' },
  { field: 'Direct Manager', required: true, details: 'Select from dropdown', helperInfo: 'Who will this person report to?' },
  { field: 'Direct Manager Job Title', required: true, details: "Enter Direct Manager's job title", helperInfo: 'You can locate this information by searching for the Direct Manager in the Employee Directory' },
  { field: 'Employment Type', required: true, details: 'Select from dropdown', helperInfo: 'IMPORTANT: Select from only the new Employment Type values: Permanent Full Time, Permanent Part Time, Fixed Term Employee. Older versions may still appear in the dropdown but should not be used, as this impacts system automations and reporting.' },
  { field: 'Pay Type', required: true, details: 'Select from dropdown', helperInfo: 'If unsure, speak to the corresponding HRBP' },
  { field: 'Remuneration Details Clauses', required: true, details: 'Select from dropdown', helperInfo: 'Select the same option as selected in the "Pay Type" field' },
  { field: 'Overtime Eligibility', required: true, details: 'Select from dropdown (Canada only)', helperInfo: 'NOTE: This field will only appear for Canadian candidates. If unsure, speak to the corresponding HRBP' },
  { field: 'Overtime Paytype', required: true, details: 'Select from dropdown (Canada only)', helperInfo: 'NOTE: This field will only appear for Canadian candidates where "No NOT ELIGIBLE/EXEMPT for OT" was selected in the Overtime Eligibility Field. Select the same option as selected in the "Remuneration Details Clauses" field' },
  { field: 'Working Office Location', required: true, details: 'Select from dropdown', helperInfo: 'Employees should be assigned to their nearest Geotab physical office based on where they live. If the employee lives in a province/state with a Geotab office, assign them to their closest geographical office (e.g., lives in Mississauga, assign to Oakville). If they live in a province/state without a Geotab office, use "Country - Remote" (e.g., Canada - Remote). If unsure, speak to the corresponding HRBP' },
  { field: 'Commuting Distance Classification', required: true, details: 'Select from dropdown', helperInfo: 'Calculate the distance between the candidates primary address and Working Office Location and reference the Hybrid Work Policy to determine the classification. Within Commuting Distance: 0–40 km / 0–25 miles. Outside Commuting Distance: 40–150 km / 25–93 miles. Remote: More than 150 km / 93 miles. If unsure, speak to the corresponding HRBP' },
  { field: 'Duties and Responsibilities', required: true, details: 'Copy list from job description without double spaces between points', helperInfo: 'Duties & Responsibilities require a period (.) on the end of each bullet point to follow contract formatting. Please do not add the bullet points at the beginning of each KPA.' },
  { field: 'In the On-Call Program applicable to this role?', required: true, details: 'Select from dropdown', helperInfo: 'If applicable, ensure it is added under duties and responsibilities. If unsure, speak to the corresponding HRBP' },
  { field: 'STIP Eligibility', required: true, details: 'Select from dropdown', helperInfo: '' },
  { field: 'STIP Amount', required: true, details: 'Enter the STIP target amount and currency', helperInfo: 'NOTE: This field will only appear if "Yes" was selected in the STIP Eligibility field' },
  { field: 'STIP Eligibility Date', required: true, details: 'Enter the date the participation in STIP comes into effect', helperInfo: 'NOTE: This field will only appear if "Yes" was selected in the STIP Eligibility field. This is typically the start date of the position change unless specified otherwise. If unsure, speak with the corresponding HRBP' },
  { field: 'STIP Revenue Pool', required: true, details: 'Select the STIP Revenue Pool from the dropdown', helperInfo: 'If unsure, speak to the corresponding HRBP' },
  { field: 'STIP Clauses', required: true, details: 'Select from dropdown', helperInfo: 'NOTE: This field will only appear if "Yes" was selected in the STIP Eligibility field. Select the appropriate STIP clause based on the employee\'s location' },
  { field: 'STIP Start Year', required: true, details: "Enter the year the employee's STIP participation would start", helperInfo: 'If unsure, speak to the corresponding HRBP' },
  { field: 'Org 5 - Division', required: true, details: 'Select from dropdown', helperInfo: 'If unsure, reference the Organization Chart v5.0 or speak to the corresponding HRBP' },
  { field: 'Org 5 - Department', required: true, details: 'Select from dropdown', helperInfo: 'If unsure, reference the Organization Chart v5.0 or speak to the corresponding HRBP' },
  { field: 'Org 5 - Sub-Department', required: true, details: 'Select from dropdown (If none apply please select N/A)', helperInfo: 'If unsure, reference the Organization Chart v5.0 or speak to the corresponding HRBP' },
  { field: 'Org 5 - Team', required: true, details: 'Select from dropdown (If none apply please select N/A)', helperInfo: 'If unsure, reference the Organization Chart v5.0 or speak to the corresponding HRBP' },
  { field: 'Org 5 - Sub Team', required: true, details: 'Select from dropdown (If none apply please select N/A)', helperInfo: 'If unsure, reference the Organization Chart v5.0 or speak to the corresponding HRBP' },
  { field: 'Verbal Offer Status', required: true, details: 'Select from dropdown', helperInfo: 'If you\'ve heard informally from the candidate about their decision to accept or reject this offer, specify it here' },
  { field: 'Additional details for HR Team', required: false, details: 'Enter text OR leave blank', helperInfo: 'If necessary, this field can be used to communicate any additional information to the HRBP approving the offer. Otherwise, this field can be left blank.' },
  { field: 'Number of Shares', required: false, details: 'Enter number OR leave blank', helperInfo: 'If unsure, speak to the corresponding HRBP' },
  { field: 'HRBP', required: true, details: 'Select from dropdown', helperInfo: "Indicate the employee's HRBP for the new position they are being offered." },
  { field: 'Offer Expiration Date', required: true, details: 'Enter date the offer will expire', helperInfo: '3 business days from the date the offer letter is being created' },
  { field: 'Change in Salary (Internal Candidate)', required: true, details: 'Select from dropdown', helperInfo: '' },
  { field: 'Salary (Internal Candidate)', required: true, details: 'Select the currency and enter the new salary amount', helperInfo: 'NOTE: This field will only appear if a change in salary was indicated in the previous field. Salary may be an hourly rate or an annual base pay' },
  { field: 'Eligible for EOY Comp Participation (Internal Candidate)', required: true, details: 'Select from dropdown', helperInfo: '"Yes - Eligible for EOY Comp Participation" is typically selected for offers with a start date between October 1st - December 31st. Please confirm with the HRBP in advance, if applicable. "No - Not Eligible for EOY Comp Participation" is typically selected for all internal offers with a start date between January 1st to September 30th. If unsure, confirm with the corresponding HRBP' },
  { field: 'Change in Vacation Entitlement (Internal Candidate)', required: true, details: 'Select from dropdown', helperInfo: 'Example: Select "Yes" if an employee is moving from 15 vacation days annually to 18 vacation days annually' },
  { field: 'Vacation Days Offered (Internal Candidate)', required: true, details: 'Enter the new number of vacation days being offered', helperInfo: 'NOTE: This field will only appear if a change in vacation entitlement was indicated in the previous field.' },
  { field: 'STIP Change (Internal Candidate)', required: true, details: 'Select from dropdown', helperInfo: 'If unsure, speak to the corresponding HRBP' },
  { field: 'STIP Increase Amount (Internal Candidate)', required: true, details: 'Enter the currency and amount by which the candidate\'s annual STIP target amount will be increasing', helperInfo: 'NOTE: This field will only appear if "Yes - Increase to STIP" was indicated in the STIP Change (Internal Candidate) field. Example: If the candidate currently has a STIP target of $2,500 and is being offered a new STIP target of $7,500, enter $5,000 in this field ($7,500 - $2,500).' },
  { field: 'Current Year (Internal Candidate)', required: true, details: 'Enter the current year', helperInfo: 'NOTE: This field will only appear if "Yes - New to STIP" or "Yes - Increase to STIP" is selected in the STIP Change (Internal Candidate) field. If the position change is taking effect in the next year, put the year of the effective date of the position change.' },
  { field: 'Is This Position a People Leader (Internal Candidate)', required: true, details: 'Select from dropdown', helperInfo: 'Will this individual have direct reports in the new role they are being offered?' },
  { field: 'Names of Direct Reports', required: true, details: 'Enter the names of the employees that will be reporting to the individual', helperInfo: 'NOTE: This field will only appear if "Yes" was indicated in the Is This Position a People Leader (Internal Candidate) field. Please format as "Direct Report Full Name 1, Direct Report Full Name 2,..." Example: Peter Pan, Mickey Mouse & Snow White' },
  { field: 'Terms and Conditions (Internal Candidate)', required: true, details: 'Select from dropdown', helperInfo: 'NOTE: Remember the selection you make here. If "Option 1: No Changes in Terms and Conditions" is selected, ensure to generate the Position Change Letter using the NO Updated Terms & Conditions template. If "Option 2: Changes to Terms and Conditions" is selected, use the WITH Updated Terms & Conditions template. Option 1: Select if ONE or more apply: Original employment contract dated AFTER Nov. 1, 2023, lateral move, NO CHANGES to compensation (Salary, STIP, PTO). Option 2: Select if ALL apply: Original employment agreement OLDER than Nov. 1, 2023 and/or there is an increase in comp (Salary, STIP, PTO)' },
  { field: 'Original Employment Agreement Date (Internal Candidate)', required: true, details: "Enter the date of the employee's original employment agreement", helperInfo: 'NOTE: This field will only appear if Option 2 was selected in the Terms and Conditions (Internal Candidate) field. This is the date that the employee\'s original employment agreement was issued, not their original start date. If unsure, speak to the corresponding HRBP' },
  { field: 'Located in a province/state WITH an Office (Internal Candidate)', required: true, details: 'Select from dropdown', helperInfo: 'This field is required to populate the correct clauses related to the Hybrid Work Policy.' },
  { field: 'Hours of Work Clauses (Internal Candidate)', required: true, details: 'Select from dropdown', helperInfo: 'Select the same option as selected in the "Pay Type" field' },
  { field: 'Hours per week (Internal Candidate)', required: true, details: 'Enter minimum number of working hours per week', helperInfo: 'NOTE: This field will only appear if "Canada - Hourly" was selected in the Hours of Work Clauses (Internal Candidate) field. If unsure, confirm with the corresponding HRBP' },
  { field: 'Is this for a Support Specialist role (Internal Candidate)', required: true, details: 'Select from dropdown', helperInfo: 'NOTE: This field will only appear if "Option 2: Changes to Terms and Conditions" was selected in the Terms and Conditions (Internal Candidate) field' },
  { field: 'Has this hire previously worked for Geotab?', required: true, details: 'Select from dropdown', helperInfo: 'Select "Yes" as this candidate is a current employee' },
  { field: 'Employee ID', required: true, details: 'Enter employee ID', helperInfo: 'This is the 7 character ID associated with the employee. Example: SMCCA01. You can locate this information by searching for the employee in the Employee Directory' },
];

// ---------------------------------------------------------------------------
// Full Time / Fixed Term / Contract Extension Fields (Canada/USA) — ~55 fields
// ---------------------------------------------------------------------------
export const fullTimeFields: OfferFormField[] = [
  { field: 'Candidate Type', required: true, details: 'Select from dropdown', helperInfo: 'Internal: Already employed at Geotab immediately prior to the new position/term start date. External: Not employed at Geotab immediately prior to the new position start date. Note: Any gap in employment prior to the start date requires "External" classification.' },
  { field: 'Offer/Letter Type', required: true, details: 'Select "Full Time, Fixed Term Contract, or Contract Extension"', helperInfo: 'This selection is required in order to populate the offer fields relevant to the Position Change Letter' },
  { field: 'Start Date', required: true, details: "Select the date that will be the candidate's first day at Geotab should they accept the offer", helperInfo: 'For contract extensions, this is the date that the extension comes into effect. Take into consideration candidate availability and lead time for background check and IT set up' },
  { field: 'GeoLaunch Date', required: false, details: 'For applicable candidates, select the date they will begin attending GeoLaunch. If the candidate will not be attending GeoLaunch, leave this field blank', helperInfo: 'Check the 2025 onboarding schedule to confirm which date works best. For candidates attending GeoLaunch, it is imperative this field is filled out so that the Onboarding team can plan accordingly' },
  { field: 'Job Title', required: true, details: 'Select from dropdown', helperInfo: 'If you are unable to locate the Job Title in the dropdown, please reach out to the HRTD team via Jira.' },
  { field: 'Direct Manager', required: true, details: 'Select from dropdown', helperInfo: 'Who will this person report to?' },
  { field: 'Direct Manager Job Title', required: true, details: "Enter Direct Manager's job title", helperInfo: 'You can locate this information by searching for the Direct Manager in the Employee Directory' },
  { field: 'Contract Type', required: true, details: 'Select from dropdown', helperInfo: 'Example: For external candidates being offered a Fixed Term Contract, select "Fixed Term". For internal candidates being offered an extension on their current Fixed Term Contract, select "Extension". If unsure, speak to the corresponding HRBP' },
  { field: 'Contract Months', required: true, details: 'Enter number of months of the contract length', helperInfo: 'NOTE: This field will only appear if "Fixed Term" or "Extension" was selected in the Contract Type field. This field is used for Fixed Term Contracts and Contract Extensions (contracts with an end date), including Interns. Round down to nearest number of months for contract length.' },
  { field: 'Work Contract End Date', required: true, details: 'Enter the end date of the contract', helperInfo: 'NOTE: This field will only appear if "Fixed Term" or "Extension" was selected in the Contract Type field. This field is used for Fixed Term Contracts and Contract Extensions (including Interns)' },
  { field: 'Employment Type', required: true, details: 'Select from dropdown', helperInfo: 'IMPORTANT: Select from only the new Employment Type values: Permanent Full Time, Permanent Part Time, Fixed Term Employee, Intern/Student. Older versions may still appear in the dropdown but should not be used, as this impacts system automations and reporting.' },
  { field: 'Does this employee qualify for benefits?', required: true, details: 'Select from dropdown', helperInfo: 'NOTE: This field will only appear if "Fixed Term Employee" was selected in the Employment Type field. If unsure, speak to the corresponding HRBP' },
  { field: 'Salary', required: true, details: 'Enter the offered compensation amount, currency, and compensation frequency', helperInfo: 'For annual salary, select "Annually" for the compensation frequency. For hourly compensation, select "Hourly". NOTE: for Fixed Term Contracts, you must select either "Hourly" or "Bi-weekly". For Fixed Term Contracts, Bi-weekly is used in the scenario where an annual salary is being offered (divide annual salary by 26 to get bi-weekly period amount). For fixed term contracts of one year or longer involving specialized professional knowledge, management, or other strategic roles, we offer a salaried option paid biweekly.' },
  { field: 'Pay Type', required: true, details: 'Select from dropdown', helperInfo: 'If unsure, speak to the corresponding HRBP. NOTE: For Fixed Term Contracts, select the appropriate "Hourly" option (regardless of if you selected "Bi-weekly" for the salary)' },
  { field: 'Remuneration Details Clauses', required: true, details: 'Select from dropdown', helperInfo: 'Select the same option as selected in the "Pay Type" field for Full Time offers. For Fixed Term Contract offers, select "Fixed-Term Hourly" or "Fixed-Term Biweekly" depending on what you selected in the "Salary" field previously.' },
  { field: 'Overtime Eligibility', required: true, details: 'Select from dropdown (Canada only)', helperInfo: 'NOTE: This field will only appear for Canadian candidates. If unsure, speak to the corresponding HRBP' },
  { field: 'Overtime Paytype', required: true, details: 'Select from dropdown (Canada only)', helperInfo: 'NOTE: This field will only appear for Canadian candidates where "No NOT ELIGIBLE/EXEMPT for OT" was selected in the Overtime Eligibility Field. Select the same option as selected in the "Remuneration Details Clauses" field' },
  { field: 'Hours of Work Clauses', required: true, details: 'Select from dropdown', helperInfo: 'Select the same option as selected in the "Remuneration Details Clauses" fields' },
  { field: 'Hours per week', required: true, details: 'Enter the minimum number of working hours', helperInfo: 'NOTE: This field will only appear for Canadian candidates with an Hourly "Hours of Work" clause. If unsure, speak to the corresponding HRBP. 37.5 is the standard hours per week for Fixed Term Employees. 40 is the standard hours per week for Full Time Permanent Employees.' },
  { field: 'Average Daily Hours', required: true, details: 'Enter the average number of daily working hours', helperInfo: 'NOTE: This field will only appear for Canadian candidates with an Hourly "Hours of Work" clause. If unsure, speak to the corresponding HRBP. 7.5 is the standard daily hours.' },
  { field: 'Sign-On Bonus Eligibility (Canada)', required: true, details: 'Select from dropdown', helperInfo: 'NOTE: This field will only appear for Canadian candidates. Is this candidate being offered a signing bonus?' },
  { field: 'Sign-On Bonus', required: true, details: 'Enter the offered sign-on bonus amount and currency', helperInfo: 'NOTE: This field will only appear for Canadian candidates where "Yes" was selected in the Sign-On Bonus Eligibility (Canada) field' },
  { field: 'Bonus Clause', required: true, details: 'Select from dropdown', helperInfo: 'NOTE: This field will only appear for Canadian candidates where "Yes" was selected in the Sign-On Bonus Eligibility (Canada) field. If unsure, speak to the corresponding HRBP' },
  { field: 'Sign-On Bonus Eligibility (USA)', required: true, details: 'Select from dropdown', helperInfo: 'NOTE: This field will only appear for American candidates. Is this candidate being offered a signing bonus?' },
  { field: 'Sign-On Bonus (USA)', required: true, details: 'Enter the offered sign-on bonus amount and currency', helperInfo: 'NOTE: This field will only appear for American candidates where "Yes" was selected in the Sign-On Bonus Eligibility (USA) field' },
  { field: 'Located in a province/state WITH an Office', required: true, details: 'Select from dropdown', helperInfo: 'NOTE: for USA candidates who are required to relocate to Atlanta, Georgia, please select "N/A - Relocating to Atlanta, Georgia (USA candidates only)". Review the Hybrid Work Policy for the list of current Geotab offices.' },
  { field: 'Working Office Location', required: true, details: 'Select from dropdown', helperInfo: 'Employees should be assigned to their nearest Geotab physical office based on where they live. If the employee lives in a province/state with a Geotab office, assign them to their closest geographical office (e.g., lives in Mississauga, assign to Oakville). If they live in a province/state without a Geotab office, use "Country - Remote" (e.g., Canada - Remote). If unsure, speak to the corresponding HRBP' },
  { field: 'Commuting Distance Classification', required: true, details: 'Select from dropdown', helperInfo: 'Calculate the distance between the candidates primary address and Working Office Location and reference the Hybrid Work Policy. Within Commuting Distance: 0–40 km / 0–25 miles. Outside Commuting Distance: 40–150 km / 25–93 miles. Remote: More than 150 km / 93 miles. If unsure, speak to the corresponding HRBP' },
  { field: 'Must permanently relocate', required: true, details: 'Select from dropdown', helperInfo: 'NOTE: for USA candidates who are required to relocate to Atlanta, Georgia, please select "Yes - Relocating to Atlanta, Georgia (USA candidates only)"' },
  { field: 'Province', required: true, details: 'Enter the name of the province the candidate is required to permanently relocate to', helperInfo: 'NOTE: This field will only appear if "Yes" was selected in the Must permanently relocate field' },
  { field: 'Duties and Responsibilities', required: true, details: 'Copy list from job description without double spaces between points', helperInfo: 'Duties & Responsibilities require a period (.) on the end of each bullet point to follow contract formatting. Please do not add the bullet points at the beginning of each KPA.' },
  { field: 'Is the On-Call Program applicable to this role?', required: true, details: 'Select from dropdown', helperInfo: 'If applicable, ensure it is added under duties and responsibilities. If unsure, speak to the corresponding HRBP' },
  { field: 'Vacation Type', required: true, details: 'Select from dropdown', helperInfo: 'For Fixed Term Employees select "Vacation Day Percent". For candidates in the USA select "Vacation Hours". If unsure, speak to the corresponding HRBP. USA Fixed-Term Contracts - vacation does not apply.' },
  { field: 'Vacation Days Offered', required: true, details: 'Enter the number of vacation days being offered', helperInfo: 'NOTE: This field will only appear if "Vacation Days" was selected in the Vacation Type field. Default is 15 (days) for full time staff unless this has been negotiated' },
  { field: 'Vacation Day Percent', required: true, details: 'Enter the vacation percent being offered', helperInfo: 'NOTE: This field will only appear if "Vacation Percent" was selected in the Vacation Type field. Default for vacation pay is 4% unless this has been negotiated' },
  { field: 'Vacation Hours Offered', required: true, details: 'Enter the number of vacation hours being offered', helperInfo: 'NOTE: This field will only appear if "Vacation Hours" was selected in the Vacation Type field. Default for vacation hours is 120 unless this has been negotiated. (Calculation: 8 hours a day x 15 vacation days = 120 hours, 8 hours a day x 18 vacation days = 144 hours, 8 hours a day x 20 vacation days = 160 hours)' },
  { field: 'Entitlement Policy', required: true, details: 'Select from dropdown', helperInfo: 'CAN - HRL - Standard: Food and Beverage, Facilities, Customer and Partner Support hires (Production as well if we are still hiring). CAN - HRL - PT/Students- Vac 0: interns and Fixed Term EE. CAN - SAL - Standard: 15 days vacation (also used for customer/partner support roles). CAN - SAL - Vac 18: 18 days vacation. CAN - SAL - Vac 20: 20 days vacation. CAN - SAL - Vac 25: 25 days vacation. CAN - SAL - Vac 30: 30 days vacation. CAN - SAL - Exec - Unlimited: board members. CAN - SAL - Fleet: grandfathered from fleetcarma. CAN - SAL - PT/Students - Vac 10: no longer used - old code. If unsure, speak with the corresponding HRBP' },
  { field: 'Does this position have direct reports?', required: true, details: 'Select from dropdown', helperInfo: 'Is this position a people leader or an individual contributor?' },
  { field: 'STIP Eligibility', required: true, details: 'Select from dropdown', helperInfo: '*Fixed Term Employees are not eligible for STIP' },
  { field: 'STIP Amount', required: true, details: 'Enter the STIP target amount and currency', helperInfo: 'NOTE: This field will only appear if "Yes" was selected in the STIP Eligibility field' },
  { field: 'STIP Eligibility Date', required: true, details: 'Enter the date the participation in STIP comes into effect', helperInfo: 'NOTE: This field will only appear if "Yes" was selected in the STIP Eligibility field. This is typically the start date of employment unless specified otherwise. If unsure, speak with the corresponding HRBP' },
  { field: 'STIP Revenue Pool', required: true, details: 'Select the STIP Revenue Pool from the dropdown', helperInfo: 'If unsure, speak to the corresponding HRBP' },
  { field: 'STIP Clauses', required: true, details: 'Select from dropdown', helperInfo: 'NOTE: This field will only appear if "Yes" was selected in the STIP Eligibility field. Select the appropriate STIP clause based on the candidate\'s location' },
  { field: 'STIP Start Year', required: true, details: "Enter the year the employee's STIP participation would start", helperInfo: 'If unsure, speak to the corresponding HRBP' },
  { field: 'Is Proof of Graduation Required? (Intern conversions)', required: true, details: 'Select from dropdown', helperInfo: '' },
  { field: 'Org 5 - Division', required: true, details: 'Select from dropdown', helperInfo: 'If unsure, reference the Organization Chart v5.0 or speak to the corresponding HRBP' },
  { field: 'Org 5 - Department', required: true, details: 'Select from dropdown', helperInfo: 'If unsure, reference the Organization Chart v5.0 or speak to the corresponding HRBP' },
  { field: 'Org 5 - Sub-Department', required: true, details: 'Select from dropdown (If none apply please select N/A)', helperInfo: 'If unsure, reference the Organization Chart v5.0 or speak to the corresponding HRBP' },
  { field: 'Org 5 - Team', required: true, details: 'Select from dropdown (If none apply please select N/A)', helperInfo: 'If unsure, reference the Organization Chart v5.0 or speak to the corresponding HRBP' },
  { field: 'Org 5 - Sub Team', required: true, details: 'Select from dropdown (If none apply please select N/A)', helperInfo: 'If unsure, reference the Organization Chart v5.0 or speak to the corresponding HRBP' },
  { field: 'Verbal Offer Status', required: true, details: 'Select from dropdown', helperInfo: 'If you\'ve heard informally from the candidate about their decision to accept or reject this offer, specify it here' },
  { field: 'Additional details for HR Team', required: false, details: 'Enter text OR leave blank', helperInfo: 'If necessary, this field can be used to communicate any additional information to the HRBP approving the offer. Otherwise, this field can be left blank.' },
  { field: 'Number of Shares', required: false, details: 'Enter number OR leave blank', helperInfo: 'If unsure, speak to the corresponding HRBP' },
  { field: 'HRBP', required: true, details: 'Select from dropdown', helperInfo: "Indicate the employee's HRBP for the new position they are being offered." },
  { field: 'Offer Expiration Date', required: true, details: 'Enter date the offer will expire', helperInfo: '3 business days from the date the offer letter is being created' },
  { field: 'Has this hire previously worked for Geotab?', required: true, details: 'Select from dropdown', helperInfo: 'Select "Yes" if the candidate has previously been employed with Geotab' },
  { field: 'Employee ID', required: false, details: 'Enter employee ID OR leave blank if the candidate has not been previously employed with Geotab', helperInfo: 'This is the 7 character ID associated with the employee. Example: SMCCA01. You can retrieve this information from the corresponding HRBP' },
];

// ---------------------------------------------------------------------------
// International (Singapore/UK) Full Time Fields — ~42 fields
// ---------------------------------------------------------------------------
export const internationalFields: OfferFormField[] = [
  { field: 'Candidate Type', required: true, details: 'Select from dropdown', helperInfo: 'Internal: Already employed at Geotab immediately prior to the new position/term start date. External: Not employed at Geotab immediately prior. Note: Any gap in employment prior to the start date requires "External" classification.' },
  { field: 'Offer/Letter Type', required: true, details: 'Select "Full Time, Fixed Term Contract, or Contract Extension"', helperInfo: 'This selection is required in order to populate the relevant offer fields' },
  { field: 'Start Date', required: true, details: "Select the date that will be the candidate's first day at Geotab should they accept the offer", helperInfo: 'Take into consideration candidate availability and lead time for background check and IT set up' },
  { field: 'GeoLaunch Date', required: false, details: 'For applicable candidates, select the date they will begin attending GeoLaunch. If the candidate will not be attending GeoLaunch, leave this field blank', helperInfo: 'Check the 2025 onboarding schedule to confirm which date works best. For candidates attending GeoLaunch, it is imperative this field is filled out so that the Onboarding team can plan accordingly' },
  { field: 'Job Title', required: true, details: 'Select from dropdown', helperInfo: 'If you are unable to locate the Job Title in the dropdown, please reach out to the HRTD team.' },
  { field: 'Direct Manager', required: true, details: 'Select from dropdown', helperInfo: 'Who will this person report to?' },
  { field: 'Direct Manager Job Title', required: true, details: "Enter Direct Manager's job title", helperInfo: 'You can locate this information by searching for the Direct Manager in the Employee Directory' },
  { field: 'Contract Type', required: true, details: 'Select from dropdown', helperInfo: 'Select "Full Time Permanent"' },
  { field: 'Employment Type', required: true, details: 'Select from dropdown', helperInfo: 'IMPORTANT: Select from only the new Employment Type values: Permanent Full Time. Older versions may still appear in the dropdown but should not be used, as this impacts system automations and reporting.' },
  { field: 'Salary', required: true, details: 'Enter the offered compensation amount, currency, and compensation frequency', helperInfo: 'For UK offers, the compensation frequency is annual, so the salary amount should reflect the annual value. For Singapore offers, the compensation frequency is monthly, so the salary amount should reflect the monthly value.' },
  { field: 'Pay Type', required: true, details: 'Select from dropdown', helperInfo: 'Select "Salary - International"' },
  { field: 'Hours of Work Clauses', required: true, details: 'Select from dropdown', helperInfo: 'Select "N/A - International Use Only"' },
  { field: 'Located in a province/state WITH an Office', required: true, details: 'Select from dropdown', helperInfo: 'Review the Hybrid Work Policy for the list of current Geotab offices' },
  { field: 'Working Office Location', required: true, details: 'Select from dropdown', helperInfo: 'Employees should be assigned to their nearest Geotab physical office based on where they live. If the employee lives in a province/state with a Geotab office, assign them to their closest geographical office (e.g., lives in Mississauga, assign to Oakville). If they live in a province/state without a Geotab office, use "Country - Remote" (e.g., Canada - Remote). If unsure, speak to the corresponding HRBP' },
  { field: 'Commuting Distance Classification', required: true, details: 'Select from dropdown', helperInfo: 'Calculate the distance between the candidates primary address and Working Office Location and reference the Hybrid Work Policy. Within Commuting Distance: 0–40 km / 0–25 miles. Outside Commuting Distance: 40–150 km / 25–93 miles. Remote: More than 150 km / 93 miles. If unsure, speak to the corresponding HRBP' },
  { field: 'Must permanently relocate', required: true, details: 'Select from dropdown', helperInfo: '' },
  { field: 'Province', required: true, details: 'Enter the name of the province the candidate is required to permanently relocate to', helperInfo: 'NOTE: This field will only appear if "Yes" was selected in the Must permanently relocate field' },
  { field: 'Duties and Responsibilities', required: true, details: 'Copy list from job description without double spaces between points', helperInfo: 'Duties & Responsibilities require a period (.) on the end of each bullet point to follow contract formatting. Please do not add the bullet points at the beginning of each KPA.' },
  { field: 'Is the On-Call Program applicable to this role?', required: true, details: 'Select from dropdown', helperInfo: 'If applicable, ensure it is added under duties and responsibilities. If unsure, speak to the corresponding HRBP' },
  { field: 'Vacation Type', required: true, details: 'Select from dropdown', helperInfo: 'Select Vacation Days' },
  { field: 'Vacation Days Offered', required: true, details: 'Enter the number of vacation days being offered', helperInfo: 'If unsure, speak with the corresponding HRBP' },
  { field: 'Entitlement Policy', required: true, details: 'Select from dropdown', helperInfo: 'If unsure, speak with the corresponding HRBP' },
  { field: 'Does this position have direct reports?', required: true, details: 'Select from dropdown', helperInfo: 'Is this position a people leader or an individual contributor?' },
  { field: 'STIP Eligibility', required: true, details: 'Select from dropdown', helperInfo: '' },
  { field: 'STIP Amount', required: true, details: 'Enter the STIP target amount and currency', helperInfo: 'NOTE: This field will only appear if "Yes" was selected in the STIP Eligibility field' },
  { field: 'STIP Eligibility Date', required: true, details: 'Enter the date the participation in STIP comes into effect', helperInfo: 'NOTE: This field will only appear if "Yes" was selected in the STIP Eligibility field. This is typically the start date of employment unless specified otherwise. If unsure, speak with the corresponding HRBP' },
  { field: 'STIP Revenue Pool', required: true, details: 'Select the STIP Revenue Pool from the dropdown', helperInfo: 'If unsure, speak to the corresponding HRBP' },
  { field: 'STIP Clauses', required: true, details: 'Select from dropdown', helperInfo: 'NOTE: This field will only appear if "Yes" was selected in the STIP Eligibility field. Select "International - STIP Clause"' },
  { field: 'STIP Start Year', required: true, details: "Enter the year the employee's STIP participation would start", helperInfo: 'Reference the STIP Eligibility Date for the STIP Start Year' },
  { field: 'Is Proof of Graduation Required? (Intern conversions)', required: true, details: 'Select from dropdown', helperInfo: '' },
  { field: 'Org 5 - Division', required: true, details: 'Select from dropdown', helperInfo: 'If unsure, reference the Organization Chart v5.0 or speak to the corresponding HRBP' },
  { field: 'Org 5 - Department', required: true, details: 'Select from dropdown', helperInfo: 'If unsure, reference the Organization Chart v5.0 or speak to the corresponding HRBP' },
  { field: 'Org 5 - Sub-Department', required: true, details: 'Select from dropdown (If none apply please select N/A)', helperInfo: 'If unsure, reference the Organization Chart v5.0 or speak to the corresponding HRBP' },
  { field: 'Org 5 - Team', required: true, details: 'Select from dropdown (If none apply please select N/A)', helperInfo: 'If unsure, reference the Organization Chart v5.0 or speak to the corresponding HRBP' },
  { field: 'Org 5 - Sub Team', required: true, details: 'Select from dropdown (If none apply please select N/A)', helperInfo: 'If unsure, reference the Organization Chart v5.0 or speak to the corresponding HRBP' },
  { field: 'Verbal Offer Status', required: true, details: 'Select from dropdown', helperInfo: 'If you\'ve heard informally from the candidate about their decision to accept or reject this offer, specify it here' },
  { field: 'Additional details for HR Team', required: false, details: 'Enter text OR leave blank', helperInfo: 'If necessary, this field can be used to communicate any additional information to the HRBP approving the offer. Otherwise, this field can be left blank.' },
  { field: 'Number of Shares', required: false, details: 'Enter number OR leave blank', helperInfo: 'If unsure, speak to the corresponding HRBP' },
  { field: 'HRBP', required: true, details: 'Select from dropdown', helperInfo: "Indicate the employee's HRBP for the new position they are being offered." },
  { field: 'Offer Expiration Date', required: true, details: 'Enter date the offer will expire', helperInfo: '3 business days from the date the offer letter is being created' },
  { field: 'Has this hire previously worked for Geotab?', required: true, details: 'Select from dropdown', helperInfo: 'Select "Yes" if the candidate has previously been employed with Geotab' },
  { field: 'Employee ID', required: false, details: 'Enter employee ID OR leave blank only if the candidate has not been previously employed with Geotab', helperInfo: 'This is the 7 character ID associated with the employee. Example: SMCCA01. You can retrieve this information from the corresponding HRBP' },
];

// ---------------------------------------------------------------------------
// Intern Conversion Fields (Canada/USA) — ~55 fields
// ---------------------------------------------------------------------------
export const internConversionFields: OfferFormField[] = [
  { field: 'Candidate Type', required: true, details: 'Select "Internal" for no gap in employment, "External" for a gap in employment', helperInfo: 'A gap in employment occurs when there is a break between the internship end date and the start date of the conversion role. If the conversion role begins immediately on the next business day following the internship end date, it is considered to have no gap in employment. If unsure, please consult the People Operations Coordinators team (HRTD). More information in the People Operations Process Guide, under \'Intern Changes\'.' },
  { field: 'Offer/Letter Type', required: true, details: 'Select "Full Time, Fixed Term Contract, or Contract Extension"', helperInfo: 'This selection is required in order to populate the offer fields relevant to the conversion.' },
  { field: 'Start Date', required: true, details: 'Select the date that the new position begins', helperInfo: '' },
  { field: 'GeoLaunch Date', required: false, details: 'Not required for intern conversions', helperInfo: '' },
  { field: 'Job Title', required: true, details: 'Select from dropdown', helperInfo: 'If you are unable to locate the Job Title in the dropdown, please reach out to the HRTD team.' },
  { field: 'Direct Manager', required: true, details: 'Select from dropdown', helperInfo: 'Who will this person report to in their new position?' },
  { field: 'Direct Manager Job Title', required: true, details: "Enter Direct Manager's job title", helperInfo: 'You can locate this information by searching for the Direct Manager in the Employee Directory' },
  { field: 'Contract Type', required: true, details: 'Select from dropdown', helperInfo: 'If unsure, speak to the corresponding HRBP' },
  { field: 'Contract Months', required: true, details: 'Enter number of months of the contract length', helperInfo: 'NOTE: This field will only appear if "Fixed Term" was selected in the Contract Type field. Round down to nearest number of months for contract length.' },
  { field: 'Work Contract End Date', required: true, details: 'Enter the end date of the contract', helperInfo: 'NOTE: This field will only appear if "Fixed Term" was selected in the Contract Type field. This field is used for Fixed Term Contracts.' },
  { field: 'Employment Type', required: true, details: 'Select from dropdown', helperInfo: 'IMPORTANT: Select from only the new Employment Type values: Permanent Full Time, Permanent Part Time, Fixed Term Employee. Older versions may still appear in the dropdown but should not be used, as this impacts system automations and reporting.' },
  { field: 'Does this employee qualify for benefits?', required: true, details: 'Select from dropdown', helperInfo: 'NOTE: This field will only appear if "Fixed Term Employee" was selected in the Employment Type field. If unsure, speak to the corresponding HRBP' },
  { field: 'Salary', required: true, details: 'Enter the offered compensation amount, currency, and compensation frequency', helperInfo: 'For annual salary, select "Annually" for the compensation frequency. For hourly compensation, select "Hourly". NOTE: for Fixed Term Contracts, you must select either "Hourly" or "Bi-weekly".' },
  { field: 'Pay Type', required: true, details: 'Select from dropdown', helperInfo: 'If unsure, speak to the corresponding HRBP. NOTE: For Fixed Term Contracts, select the appropriate "Hourly" option (regardless of if you selected "Bi-weekly" for the salary)' },
  { field: 'Remuneration Details Clauses', required: true, details: 'Select from dropdown', helperInfo: 'Select the same option as selected in the "Pay Type" field for Full Time offers. For Fixed Term Contract offers, select "Fixed-Term Hourly" or "Fixed-Term Biweekly" depending on what you selected in the "Salary" field previously.' },
  { field: 'Overtime Eligibility', required: true, details: 'Select from dropdown (Canada only)', helperInfo: 'NOTE: This field will only appear for Canadian candidates. If unsure, speak to the corresponding HRBP' },
  { field: 'Overtime Paytype', required: true, details: 'Select from dropdown (Canada only)', helperInfo: 'NOTE: This field will only appear for Canadian candidates where "No NOT ELIGIBLE/EXEMPT for OT" was selected in the Overtime Eligibility Field. Select the same option as selected in the "Remuneration Details Clauses" field' },
  { field: 'Hours of Work Clauses', required: true, details: 'Select from dropdown', helperInfo: 'Select the same option as selected in the "Remuneration Details Clauses" field' },
  { field: 'Hours per week', required: true, details: 'Enter the minimum number of working hours', helperInfo: 'NOTE: This field will only appear for Canadian candidates with an Hourly "Hours of Work" clause. If unsure, speak to the corresponding HRBP. 37.5 is the standard hours per week.' },
  { field: 'Average Daily Hours', required: true, details: 'Enter the average number of daily working hours', helperInfo: 'NOTE: This field will only appear for Canadian candidates with an Hourly "Hours of Work" clause. If unsure, speak to the corresponding HRBP. 7.5 is the standard daily hours.' },
  { field: 'Sign-On Bonus Eligibility (Canada)', required: true, details: 'Select from dropdown', helperInfo: 'NOTE: This field will only appear for Canadian candidates. Is this candidate being offered a signing bonus?' },
  { field: 'Sign-On Bonus', required: true, details: 'Enter the offered sign-on bonus amount and currency', helperInfo: 'NOTE: This field will only appear for Canadian candidates where "Yes" was selected in the Sign-On Bonus Eligibility (Canada) field' },
  { field: 'Bonus Clause', required: true, details: 'Select from dropdown', helperInfo: 'NOTE: This field will only appear for Canadian candidates where "Yes" was selected in the Sign-On Bonus Eligibility (Canada) field. If unsure, speak to the corresponding HRBP' },
  { field: 'Sign-On Bonus Eligibility (USA)', required: true, details: 'Select from dropdown', helperInfo: 'NOTE: This field will only appear for American candidates. Is this candidate being offered a signing bonus?' },
  { field: 'Sign-On Bonus (USA)', required: true, details: 'Enter the offered sign-on bonus amount and currency', helperInfo: 'NOTE: This field will only appear for American candidates where "Yes" was selected in the Sign-On Bonus Eligibility (USA) field' },
  { field: 'Located in a province/state WITH an Office', required: true, details: 'Select from dropdown', helperInfo: 'NOTE: for USA candidates who are required to relocate to Atlanta, Georgia, please select "N/A - Relocating to Atlanta, Georgia (USA candidates only)". Review the Hybrid Work Policy for the list of current Geotab offices.' },
  { field: 'Working Office Location', required: true, details: 'Select from dropdown', helperInfo: 'Employees should be assigned to their nearest Geotab physical office based on where they live. If the employee lives in a province/state with a Geotab office, assign them to their closest geographical office (e.g., lives in Mississauga, assign to Oakville). If they live in a province/state without a Geotab office, use "Country - Remote" (e.g., Canada - Remote). If unsure, speak to the corresponding HRBP' },
  { field: 'Commuting Distance Classification', required: true, details: 'Select from dropdown', helperInfo: 'Calculate the distance between the candidates primary address and Working Office Location and reference the Hybrid Work Policy. Within Commuting Distance: 0–40 km / 0–25 miles. Outside Commuting Distance: 40–150 km / 25–93 miles. Remote: More than 150 km / 93 miles. If unsure, speak to the corresponding HRBP' },
  { field: 'Must permanently relocate', required: true, details: 'Select from dropdown', helperInfo: 'NOTE: for USA candidates who are required to relocate to Atlanta, Georgia, please select "Yes - Relocating to Atlanta, Georgia (USA candidates only)"' },
  { field: 'Province', required: true, details: 'Enter the name of the province the candidate is required to permanently relocate to', helperInfo: 'NOTE: This field will only appear if "Yes" was selected in the Must permanently relocate field' },
  { field: 'Duties and Responsibilities', required: true, details: 'Copy list from job description without double spaces between points', helperInfo: 'Duties & Responsibilities require a period (.) on the end of each bullet point to follow contract formatting. Please do not add the bullet points at the beginning of each KPA.' },
  { field: 'Is the On-Call Program applicable to this role?', required: true, details: 'Select from dropdown', helperInfo: 'If applicable, ensure it is added under duties and responsibilities. If unsure, speak to the corresponding HRBP' },
  { field: 'Vacation Type', required: true, details: 'Select from dropdown', helperInfo: 'For Fixed Term Employees select "Vacation Day Percent". For candidates in the USA select "Vacation Hours". If unsure, speak to the corresponding HRBP.' },
  { field: 'Vacation Days Offered', required: true, details: 'Enter the number of vacation days being offered', helperInfo: 'NOTE: This field will only appear if "Vacation Days" was selected in the Vacation Type field. Default is 15 (days) for full time staff unless this has been negotiated' },
  { field: 'Vacation Day Percent', required: true, details: 'Enter the vacation percent being offered', helperInfo: 'NOTE: This field will only appear if "Vacation Percent" was selected in the Vacation Type field. Default for vacation pay is 4% unless this has been negotiated' },
  { field: 'Vacation Hours Offered', required: true, details: 'Enter the number of vacation hours being offered', helperInfo: 'NOTE: This field will only appear if "Vacation Hours" was selected in the Vacation Type field. Default for vacation hours is 120 unless this has been negotiated. (Calculation: 8 hours a day x 15 vacation days = 120 hours, 8 hours a day x 18 vacation days = 144 hours)' },
  { field: 'Entitlement Policy', required: true, details: 'Select from dropdown', helperInfo: 'CAN - HRL - Standard: Food and Beverage, Facilities, Customer and Partner Support hires. CAN - HRL - PT/Students- Vac 0: interns and Fixed Term EE. CAN - SAL - Standard: 15 days vacation. CAN - SAL - Vac 18: 18 days vacation. CAN - SAL - Vac 20: 20 days vacation. CAN - SAL - Vac 25: 25 days vacation. CAN - SAL - Vac 30: 30 days vacation. CAN - SAL - Exec - Unlimited: board members. CAN - SAL - Fleet: grandfathered from fleetcarma. CAN - SAL - PT/Students - Vac 10: no longer used - old code. If unsure, speak with the corresponding HRBP' },
  { field: 'Does this position have direct reports?', required: true, details: 'Select from dropdown', helperInfo: 'Is this position a people leader or an individual contributor?' },
  { field: 'STIP Eligibility', required: true, details: 'Select from dropdown', helperInfo: '*Fixed Term Employees are not eligible for STIP' },
  { field: 'STIP Amount', required: true, details: 'Enter the STIP target amount and currency', helperInfo: 'NOTE: This field will only appear if "Yes" was selected in the STIP Eligibility field' },
  { field: 'STIP Eligibility Date', required: true, details: 'Enter the date the participation in STIP comes into effect', helperInfo: 'NOTE: This field will only appear if "Yes" was selected in the STIP Eligibility field. This is typically the start date of employment unless specified otherwise. If unsure, speak with the corresponding HRBP' },
  { field: 'STIP Revenue Pool', required: true, details: 'Select the STIP Revenue Pool from the dropdown', helperInfo: 'If unsure, speak to the corresponding HRBP' },
  { field: 'STIP Clauses', required: true, details: 'Select from dropdown', helperInfo: 'NOTE: This field will only appear if "Yes" was selected in the STIP Eligibility field. Select the appropriate STIP clause based on the candidate\'s location' },
  { field: 'STIP Start Year', required: true, details: "Enter the year the employee's STIP participation would start", helperInfo: 'If unsure, speak to the corresponding HRBP' },
  { field: 'Is Proof of Graduation Required? (Intern conversions)', required: true, details: 'Select from dropdown', helperInfo: '' },
  { field: 'Org 5 - Division', required: true, details: 'Select from dropdown', helperInfo: 'If unsure, reference the Organization Chart v5.0 or speak to the corresponding HRBP' },
  { field: 'Org 5 - Department', required: true, details: 'Select from dropdown', helperInfo: 'If unsure, reference the Organization Chart v5.0 or speak to the corresponding HRBP' },
  { field: 'Org 5 - Sub-Department', required: true, details: 'Select from dropdown (If none apply please select N/A)', helperInfo: 'If unsure, reference the Organization Chart v5.0 or speak to the corresponding HRBP' },
  { field: 'Org 5 - Team', required: true, details: 'Select from dropdown (If none apply please select N/A)', helperInfo: 'If unsure, reference the Organization Chart v5.0 or speak to the corresponding HRBP' },
  { field: 'Org 5 - Sub Team', required: true, details: 'Select from dropdown (If none apply please select N/A)', helperInfo: 'If unsure, reference the Organization Chart v5.0 or speak to the corresponding HRBP' },
  { field: 'Verbal Offer Status', required: true, details: 'Select from dropdown', helperInfo: 'If you\'ve heard informally from the candidate about their decision to accept or reject this offer, specify it here' },
  { field: 'Additional details for HR Team', required: false, details: 'Enter text OR leave blank', helperInfo: 'If necessary, this field can be used to communicate any additional information to the HRBP approving the offer. Otherwise, this field can be left blank.' },
  { field: 'Number of Shares', required: false, details: 'Enter number OR leave blank', helperInfo: 'If unsure, speak to the corresponding HRBP' },
  { field: 'HRBP', required: true, details: 'Select from dropdown', helperInfo: "Indicate the employee's HRBP for the new position they are being offered." },
  { field: 'Offer Expiration Date', required: true, details: 'Enter date the offer will expire', helperInfo: '3 business days from the date the offer letter is being created' },
  { field: 'Has this hire previously worked for Geotab?', required: true, details: 'Select "Yes"', helperInfo: 'Select "Yes" because the candidate has previously been or currently is employed with Geotab' },
  { field: 'Employee ID', required: true, details: 'Enter employee ID', helperInfo: 'This is the 7 character ID associated with the employee. Example: SMCCA01. You can retrieve this information by searching for the current employee in the Employee Directory or from the corresponding HRBP' },
];

// ---------------------------------------------------------------------------
// Offer Form Sections — groups each form type with templates and notes
// ---------------------------------------------------------------------------
export const offerFormSections: OfferFormSection[] = [
  {
    id: 'internal-change',
    name: 'Canada/USA: Internal Position Change Letter',
    fields: internalPositionChangeFields,
    applicableTemplates: [
      'Canada - Internal Candidate - Position Change Letter NO Updated Terms & Conditions',
      'Canada - Internal Candidate - Position Change Letter WITH Updated Terms & Conditions',
      'USA - Internal Candidate - Position Change Letter',
    ],
  },
  {
    id: 'full-time',
    name: 'Canada/USA: Full Time, Fixed Term Contract, and Contract Extension',
    fields: fullTimeFields,
    applicableTemplates: [
      'Canada Contract - Full Time Permanent',
      'Canada Contract (Partner Support)',
      'Canada Contract (Customer Support)',
      'Canada Fixed Term Contract & Intern/Student',
      'USA Contract - Full Time Permanent',
      'USA Contract (Partner Support) - Full Time Permanent',
      'USA Contract (Customer Support) - Full Time Permanent',
      'USA Contract - Intern & Fixed Term Contract (NO STIP)',
    ],
  },
  {
    id: 'international',
    name: 'International - Singapore/UK: Full Time',
    fields: internationalFields,
    applicableTemplates: [
      'UK Employment Contract - Full Time Permanent',
      'Singapore Employment Contract - Full Time Permanent',
    ],
    notes: [
      'IMPORTANT: Singapore and UK offers must be sent using Greenhouse, NOT DocuSign.',
    ],
  },
  {
    id: 'intern-conversion',
    name: 'Canada/USA: Intern Conversions (Intern to Full Time, Intern to Fixed Term Contract)',
    fields: internConversionFields,
    applicableTemplates: [
      'Canada Contract - Full Time Permanent',
      'Canada Contract (Partner Support)',
      'Canada Contract (Customer Support)',
      'Canada Fixed Term Contract & Intern/Student',
      'USA Contract - Full Time Permanent',
      'USA Contract (Partner Support) - Full Time Permanent',
      'USA Contract (Customer Support) - Full Time Permanent',
      'USA Contract - Intern & Fixed Term Contract (NO STIP)',
    ],
    notes: [
      'IMPORTANT: Before you begin, ensure to change the candidate source to "Intern Conversion" in Greenhouse. This is crucial for workflows and reporting.',
      'IMPORTANT: Generate the regular contract, NOT the internal position change letter.',
      'The definition for Candidate Type changes from what is normally expected for Intern Conversions.',
    ],
  },
];

export const approvalProcess = [
  'Click the "Generate" button under the Offer documents section of the page',
  'Select the appropriate offer letter template and select "Generate" again',
  'Review the generated PDF offer letter to ensure all details are correct. If any information is missing or needs changes, click "Update", make the necessary edits, and then click "Regenerate". Repeat as needed.',
  'Once the offer letter is accurate, scroll to the top of the page and click "Request Approval"',
  'After HR Business Support approves the offer, you will receive an email notification. NOTE: If the offer is rejected, review feedback, make adjustments, and re-submit until approved.',
];

export const sendingProcess = [
  'Click "Send with DocuSign" (for Canada and USA offers), or "Send with Greenhouse" (for Singapore and UK offers)',
  'Select the appropriate email template',
  'Review the email details for accuracy',
  'If additional documents need to be sent with the offer letter, click "Attach file" to include them',
  'Once the email is complete, click "Send email"',
];

export const internConversionNotes = [
  'Source must be changed to "Intern Conversion" in Greenhouse.',
  'If no gap in employment between intern end and FT start: classify as "Internal".',
  'If there is a gap in employment: classify as "External".',
  'Generate the regular contract, NOT the internal position change letter.',
];

export const offerClauseConcerns = [
  { topic: 'Hybrid Policy', description: 'Geotab operates under a hybrid work model. Details are outlined in the employee handbook and may vary by location and role.' },
  { topic: 'Moonlighting Policy', description: 'Geotab has a policy regarding outside employment. Employees should review the handbook for details and disclose any outside employment.' },
  { topic: 'Intellectual Property', description: 'Standard IP assignment clauses are included in the employment agreement. All work created during employment belongs to Geotab.' },
  { topic: 'Temporary Layoff Clause', description: 'The employment agreement may include provisions regarding temporary layoff. This is standard practice and aligns with employment legislation.' },
];

export const backgroundCheckInfo = 'Background checks are initiated after the offer is accepted. The process is managed through the Greenhouse/Sterling integration. FedRAMP roles require additional US Government Background Checks.';
