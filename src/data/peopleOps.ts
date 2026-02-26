export interface ProcessStep {
  owner: string;
  step: number | string;
  detail: string;
}

export interface RecruitmentSection {
  id: string;
  title: string;
  owner?: string;
  lastUpdated?: string;
  description?: string;
  notes?: string[];
  steps?: ProcessStep[];
  subsections?: RecruitmentSubsection[];
  resources?: { label: string; description?: string; url?: string }[];
}

export interface RecruitmentSubsection {
  title: string;
  owner?: string;
  lastUpdated?: string;
  description?: string;
  notes?: string[];
  steps?: ProcessStep[];
  resources?: { label: string; description?: string; url?: string }[];
}

export const recruitmentOverviewResources = [
  { label: 'Geotab Recruitment Process', description: 'External-facing document', url: 'https://docs.google.com/document/d/1ksHhnjr0ixYgOyu7L6-WlUqt1c-rJbpuQ-qzi4ij4Qg/edit#' },
  { label: 'United Kingdom Employee Handbook', description: 'External-facing document', url: 'https://docs.google.com/document/d/1rgp9UpvT4c-K_DHJU7FyWNqIJxXp2cZj4F1GvrVo8M0/edit' },
  { label: 'Recruitment Wiki', description: 'Internal wiki', url: 'https://docs.google.com/document/d/12pQFV49wljGhUQaLwuHFQMoEoCH2OniToBSvxddDdSg/edit' },
  { label: 'Internal Growth and Development Opportunities', description: 'Internal process', url: 'https://docs.google.com/document/d/1ZqqQfceUAiyQRHS2X4n5bvell71oDXwlS04qydrJqDA/edit#heading=h.dp00a46x6qyn' },
  { label: 'Campus Wiki', description: 'Campus program wiki', url: 'https://docs.google.com/document/d/1v-3gy2B5yzJ81eMT5ZeCONn1W36iJylWDgULm5qUh9w/edit?tab=t.0#heading=h.ba4cltb3tk98' },
  { label: 'Managers/HR - Internal Growth and Development Opportunities', description: 'Manager-facing resource', url: 'https://docs.google.com/document/d/1O7JA1kuHyFWKCgGED1FtTQHeec3BVa0CSBZzp0tXK_M/edit#heading=h.dp00a46x6qyn' },
];

export const recruitmentLifecycleTable: { process: string; owner: string; resource: string }[] = [
  { process: 'Job Description', owner: 'Total Rewards', resource: 'Job Description Index' },
  { process: 'Create Job Requisition', owner: 'HM', resource: 'Greenhouse Job Creation Guide for Hiring Managers 2025, Greenhouse Hiring Manager Training Recording, Greenhouse Hiring Manager Training Guide, Geotab Hiring Manager Greenhouse Training Videos' },
  { process: 'Recruitment Process (Posting, Intake, Interviews, Assessments)', owner: 'TA', resource: 'HM Playbook, Recruitment SOP, Client Group Assignments' },
  { process: 'Mobility for Talent Acquisition', owner: 'Mobility Partner', resource: 'Mobility/Immigration Support for Talent Acquisition and HR' },
  { process: 'Offers', owner: 'TA/HRS/HRBP', resource: 'External Offer Process' },
  { process: 'Internal Recruitment Process', owner: 'TA/HRBP/HRS', resource: 'Internal Recruitment Bookmarking Process' },
  { process: 'Campus Recruitment Process', owner: 'Campus', resource: 'Campus Program and Student Recruitment Wiki' },
  { process: 'Campus Recruitment Offer', owner: 'Campus/HRBP/HRS', resource: 'Campus Candidates' },
  { process: 'Consultants/Contractors - North America', owner: 'HRS/HRBP', resource: 'Consultants/Contractors - North America only' },
  { process: 'International Offer Process', owner: 'HRBP/TA', resource: 'International Offer Process' },
  { process: 'Amended Start Dates', owner: 'HRS', resource: 'HRS Process Guide' },
];

export const recruitmentSections: RecruitmentSection[] = [
  {
    id: 'new-regions',
    title: 'New Recruitment Regions',
    description: 'Process for handling requisitions in regions where Geotab has not previously hired.',
    steps: [
      { owner: 'TA or HRBP', step: 1, detail: 'When seeing a new region come through in a requisition, inform all stakeholders via Jira Ticket. Include the Pay Class of this hire in the ticket.' },
      { owner: 'HRTD', step: 2, detail: 'Create a ticket with IT/Sec to inform of the new region.' },
      { owner: 'HRTD', step: 3, detail: 'Create locations in Dayforce.' },
      { owner: 'IT', step: 4, detail: 'Provide location-specific distribution list.' },
      { owner: 'HRTD', step: 5, detail: 'Add distro to "Distro Mapping" file.' },
      { owner: 'HRTD', step: 6, detail: 'Advise TR, Payroll, Compliance & Onboarding.' },
      { owner: 'TR', step: 7, detail: 'Advise on Entitlements build to HRTD (to capture time away from work).' },
      { owner: 'Onboarding', step: 8, detail: 'Advise on Onboarding policy requirements (verbiage - GeoLaunch, employee checklist).' },
      { owner: 'HRTD', step: 9, detail: 'Build out entitlement policies and onboarding policies.' },
      { owner: 'Payroll', step: 10, detail: 'Continue with required payroll setup if applicable.' },
    ],
    notes: ['IT needs this request at minimum 1 week ahead of profile creation.'],
  },
  {
    id: 'job-descriptions',
    title: 'Job Descriptions',
    owner: 'Laura Depascal',
    lastUpdated: 'Aug 23, 2024',
    description: 'Job Descriptions provide employees with an outline of responsibilities, duties, skills and education to perform a given job. They provide compensation professionals the framework for benchmarking jobs against the external market, and create a baseline of expectations for performance reviews.',
    resources: [
      { label: 'Job Description Widget', description: 'Central index of all Geotab job descriptions', url: 'https://lookerstudio.google.com/u/0/reporting/dac879a5-89d0-4a51-92cd-8261ee0e7520/page/gpf3C' },
      { label: 'Job Description Development Guide', description: 'Guide for creating new JDs', url: 'https://docs.google.com/document/d/1_vXUgeXywKwKwf9wnewX6PKSfGugIBW42qGqrZiFwBQ/edit' },
      { label: 'Quick Reference Guide: Titling Convention Rules', description: 'Naming conventions for job titles' },
      { label: 'Job Description Template - People Leader', description: 'Template for people leader roles', url: 'https://docs.google.com/document/d/1h6OTf6gVt5fQ6m1X31vWaFiXgYvtMSNL5EfdATgbPH8/edit#' },
      { label: 'Job Description Template - Individual Contributor', description: 'Template for IC roles', url: 'https://docs.google.com/document/d/1QUnMPBAADdn4TAZqYmqlsqxe-ecHVjoviEwahK4Eu_U/edit#heading=h.ponwjedh7t1c' },
      { label: 'Job Description Review Form', description: 'Submit to Total Rewards for review and finalization', url: 'https://docs.google.com/forms/d/e/1FAIpQLSfc_iNBuFTV2fMAFfF0kOHdZhr2RXJds0-9bcsTYG8u7YzGag/viewform' },
    ],
    steps: [
      { owner: 'HRBP/HRG', step: 1, detail: 'Refer to the Job Description Widget to access a job description that already exists for the role.' },
      { owner: 'HRBP/HRG', step: 2, detail: 'If a job description is missing from the Widget, engage with Total Rewards to see if an inactive or archived version exists.' },
      { owner: 'HRBP/HRG', step: 3, detail: 'If the job is new or an existing version does not exist, access and make a copy of the template based on whether the role is an individual contributor or a people leader.' },
      { owner: 'HRBP/HRG', step: 4, detail: 'Once the job description is drafted, submit the document to Total Rewards for review and finalization by completing the Job Description Review Form.' },
      { owner: 'Total Rewards', step: 5, detail: 'Job descriptions requiring establishment of new, or confirmation of established, ranges will be done within ten (10) business days.' },
      { owner: 'HRBP/HRG, TA', step: 6, detail: 'The HRG/HRBP will share the job description with the designated TA team member and HM.' },
      { owner: 'HM', step: 7, detail: 'Create Requisition and insert the link to the job description.' },
      { owner: 'TA', step: 8, detail: 'Create Job Posting using the Greenhouse posting guide.' },
      { owner: 'TA', step: 9, detail: 'Go to "Approvals", add a note tagging @Hayley Smith and @Julie Dagostino. Mention the job posting location(s) you drafted. They will review and activate the posting(s).' },
    ],
    notes: [
      'For inquiries pertaining to Job Descriptions: consult via email with the designated HRBP for business unit-specific queries (titles, duties, career pathing). Recruitment/posting queries go to TA. Intern JD queries go to Campus Team.',
    ],
  },
  {
    id: 'internal-recruitment',
    title: 'Internal Recruitment & Offer Process',
    owner: 'Annie Mathew',
    lastUpdated: 'Jul 8, 2024',
    resources: [
      { label: 'Internal Growth and Development Opportunities for Employees: Process V3.4', description: 'Full internal recruitment reference document', url: 'https://docs.google.com/document/d/1ZqqQfceUAiyQRHS2X4n5bvell71oDXwlS04qydrJqDA/edit#heading=h.dp00a46x6qyn' },
      { label: 'Global Internal Recruitment Rejection Process Flow Chart', description: 'Rejection process flow' },
    ],
    steps: [
      { owner: 'TA', step: 1, detail: 'Job assigned to designated TA, job posted (external & internal OR internal only), applicants accepted. TA manages the full recruitment life cycle from posting in Greenhouse through to presenting verbal offers and entering offer details.' },
      { owner: 'Employee', step: 2, detail: 'Internal applicants apply through the internal careers page and answer pre-screening questions: been in current role 6-12 months (exceptions by business need/manager approval), informed their direct manager, performance in good standing (no performance issues).' },
      { owner: 'TA', step: 3, detail: 'TA gathers internal applicants, reviews resumes and pre-screening answers. If not qualified, follow rejection steps. TA emails applicant\'s current manager, relinquishing HRBP, CC receiving HRBP before moving forward. Use "Email Team" option in Greenhouse with Internal applicant eligibility confirmation template. Once eligibility confirmed by manager and HRBP, TA tags HM with recommendation.' },
      { owner: 'TA', step: 4, detail: 'TA schedules first internal applicant interview with shortlisted candidates (TA + Candidate, ask receiving HRBP if they want to join). Collect internal employee current salary from TA Lead or HRBP. Use internal application questions from the scorecard. Salary conversation recorded in private field in Greenhouse shared with HRBP. Interview must be a "private" invite in Google Calendar.' },
      { owner: 'TA', step: 5, detail: 'Share Greenhouse notes and recommendations with HM.' },
      { owner: 'TA/HM', step: 6, detail: 'Manager informs TA if they want to pursue the internal candidate. Schedule HM interview with TA, hiring team, and candidate. Internal employees applying outside their department go through the same process as an external candidate. For in-person at Waterloo, notify Waterloo Facilities. Manager and TA both complete scorecards after interview.' },
      { owner: 'TA/HM', step: 7, detail: 'Schedule additional interviews or technical assessments if required.' },
      { owner: 'TA/HM', step: 8, detail: 'Candidate evaluation meeting - TA discusses with HM to determine the right candidate. For selected candidates: TA notifies current manager, relinquishing and receiving HRBP via email, then starts salary offer discussion following the compensation guide. For not selected: HM provides rationale including training/development recommendations.' },
      { owner: 'TA/HM', step: 9, detail: 'TA books meetings with unsuccessful candidates and HM to share feedback. Send "[GLB] Internal Rejection Email - Meeting Scheduled For Feedback". Record conversation as private note in Greenhouse. Send follow-up rejection email. Do not process background check. CC current HRBP & employee\'s current manager.' },
      { owner: 'TA/HM/RM', step: 10, detail: 'For selected employees: TA sends transition planning email to both hiring manager and relinquishing manager with HRBPs CC\'d. If issues between managers on start date, TA books meeting with managers and HRBPs. Hiring Manager should not engage the employee for work until a formal offer is signed. Relinquishing Manager should not discuss offer until verbal offer given.' },
      { owner: 'TA/HM', step: 11, detail: 'Talent schedules offer meeting with successful candidate and HM to present the offer and discuss transition plan. If compensation is confirmed, it can be discussed after the manager leaves the call. If not yet approved, TA lets them know it\'s under review.' },
      { owner: 'TA', step: 12, detail: 'Once final verbal offer given, TA gathers required details for the offer letter. Refer to Greenhouse offer guide. Key differences from external: direct report names, STIP, vacation day changes. For Team Lead In Training offers: sent manually by HRBP, not through Greenhouse.' },
      { owner: 'TA', step: 13, detail: 'Prior to moving candidate to "Offer" stage, ensure candidate source type says "Internal" (triggers special internal offer form). Complete Offer Details form, generate contract using appropriate template, send approval to receiving HRBP. For HR/Confidential roles: send details to HRBP/HRG and HR Specialist to complete manually.' },
      { owner: 'Receiving HRBP', step: 15, detail: 'Review Internal Offer Details and the contract sent by TA through Greenhouse. Approve/reject. If details are incorrect, offer will be rejected for correction.' },
      { owner: 'TA/HRBP', step: 17, detail: 'TA sends contract/email to candidate\'s Geotab email, CC HRBP.' },
      { owner: 'Candidate/TA', step: 18, detail: 'Offer acceptance or decline. Talent communicates to HRBP Team, HM, and RM.' },
      { owner: 'Talent', step: 19, detail: 'Select "Yes" for Do Not Process Background Check. Move candidate to "Mark as Hired" in Greenhouse to close open headcount.' },
      { owner: 'HRS/Talent', step: 20, detail: 'Once marked as hired, HRS is automatically notified via built-in automation. HRS enters the Changelog and finishes stages in Hiring Tracker. Once offer accepted, TA notifies both HRBPs/managers to make it official.' },
      { owner: 'HRS', step: 21, detail: 'HRS tags HRBP in changelog if communication needed to affected employees (e.g., manager change).' },
      { owner: 'HRS', step: 22, detail: 'Once HRBP confirms changes communicated to employees, HRS executes changes through Change Log.' },
    ],
    notes: [
      'All internal applicants to be owned by the TA team while keeping HRBP informed.',
      'Accepting HRBPs are optional in the process.',
      'TA can reject if minimum requirements not met. HRBP can reject if not in good standing. HM can reject if not meeting role requirements.',
      'Interns are assigned to the Campus Team. Contractors/Consultants classified as "not assigned" in the Global Hiring & Onboarding Tracker.',
      'Note on manual offers: When sending manually created offers through Greenhouse, upload the PDF version. Use DocuSign for North America signatures. Use "Send with Greenhouse" for UK and Singapore. Consult HRBP for other locations.',
      'In the event of an exception outside regular vacation entitlement, log a JIRA ticket with Dayforce as it will impact automations.',
    ],
  },
  {
    id: 'compensation-requests',
    title: 'Compensation Requests for Recruitment',
    owner: 'Laura Depascal / Annie Mathew',
    lastUpdated: 'Nov 12, 2024',
    description: 'The responsibility of the compensation analysis and process falls on the party in charge of the overall recruitment process (i.e. for an internal title realignment the HRBP will be responsible, for external recruitment TA will be responsible).',
    resources: [
      { label: 'Quick Reference Guide', description: 'Guide for completing compensation review' },
      { label: 'Compensation Results Form', description: 'For HRBP to input comp results for internal movements', url: 'https://docs.google.com/forms/d/e/1FAIpQLSdsnQKden_Wn5BFXjjS9XUQ96ml97W82uP7hLS--FSMjBycRQ/viewform?gxids=7628' },
    ],
    steps: [
      { owner: 'TA/HRBP', step: 1, detail: 'Candidate moved to offer stage OR compensation change for internal movement identified.' },
      { owner: 'TA/HRBP', step: 2, detail: 'Consult the applicable compensation range. Use the Quick Reference Guide to complete the review.' },
      { owner: 'TA/HRBP', step: 3, detail: 'If compensation expectations fall within Floor to Max range, proceed to obtain approvals based on the RACI chart.' },
      { owner: 'TA/TAM or HRBP/HRL/AVP/VP + Comp Team', step: 4, detail: 'If compensation falls outside max of range: follow the RACI Chart, include all stakeholders. Include compensation@geotab.com for consultation.' },
      { owner: 'TA/HRBP', step: 5, detail: 'If appropriate offer amounts can be determined, proceed to offer to the candidate/employee.' },
      { owner: 'Division Leader/HRBP/TAL/HRL', step: 6, detail: 'Determine an appropriate sign-on bonus where applicable. Reserved for hard-to-fill or senior leadership roles.' },
      { owner: 'HRBP', step: 7, detail: 'For internal movements: input comp results into the Compensation Results Form for tracking.' },
    ],
  },
  {
    id: 'offers-external',
    title: 'Offers Processes — External Candidates (Canada/USA)',
    owner: 'Annie Mathew',
    lastUpdated: 'Jul 8, 2024',
    description: 'If a candidate is added after the hiring deadline cutoff, the HR Specialist needs to let IT, People Coordinator and Onboarding know by emailing onboardingexceptions@geotab.com. Tag the Onboarding team in the Hiring Tracker.',
    resources: [
      { label: 'Benefit at a Glance - Canada', description: 'Benefits summary for Canadian hires', url: 'https://docs.google.com/document/d/1ICdVavuK8l0VbY00bymUxZdif8MyO3MsYtoBX4eWgFs/edit' },
      { label: 'Benefit at a Glance - USA', description: 'Benefits summary for US hires', url: 'https://docs.google.com/document/d/1NbtmU0asFmgh06Tqam3peJSt9esjhCc0-tCJJcz4BCw/edit' },
      { label: 'Greenhouse Offer Guide for Talent Acquisition', description: 'Step-by-step offer form guide', url: 'https://docs.google.com/document/d/1HWNLNJKvrvjwiCVd18SByoAVGT6CSECPhlkLVPJbwig/edit?tab=t.0#heading=h.eh4ipql2hvir' },
      { label: 'Candidate Data Request Form', description: 'Collects candidate info for the offer' },
      { label: 'Offer Template Folder', description: 'All offer letter templates', url: 'https://drive.google.com/drive/folders/13JL3QZ9ljxTOxXudvYwaCwN0u0LT7ZVg' },
      { label: '2025 Offer Deadlines', description: 'Offer cut-off dates for each onboarding date', url: 'https://docs.google.com/spreadsheets/d/1iBxaJHzA4oPQzLgybbWWCRGvKdspFX1iDeQ9A7rmLGA/edit?gid=229205816#gid=229205816' },
    ],
    notes: [
      'Benefit at a Glance not applicable to intern offers.',
      'Consider the Greenhouse/Sterling Integration when completing an offer.',
      'In the event of an exception outside regular vacation entitlement, log a JIRA ticket with Dayforce.',
    ],
    steps: [
      { owner: 'TA', step: 1, detail: 'Move candidate to "Offer" stage in Greenhouse, verbally present the offer. Refer to Benefit at a Glance for Canada/USA benefits.' },
      { owner: 'TA', step: 2, detail: '1. Send Candidate Data Request Form to collect info. 2. Complete Offer Details form in Greenhouse. Refer to the Greenhouse Offer Guide. 3. For rare instances of revising standard T&C (particularly Canada): discuss with HRM, VP HR, and AVP Talent first. 4. Generate contract and select appropriate template. 5. Send to HRBP for approval.' },
      { owner: 'HRBP', step: 3, detail: '1. Review offer details and confirm correct fields selected. 2. Review generated contract — correct template, accurate info, correct clauses. 3. Approve/reject via email prompt.' },
      { owner: 'TA/HRBP', step: 4, detail: 'If revision needed before sending: view "Offer Details", click "update" to regenerate. This triggers a new approval workflow. Ensure offers are completed in time for preferred onboarding date — refer to 2025 offer deadlines.' },
      { owner: 'TA', step: 5, detail: '1. Once HRBP approves, click "Send with DocuSign", select appropriate email template, verify info and attachments. 2. Send within one (1) business day, CC HRBP. Campus: also CC academic partner(s) if affiliated with co-op program.' },
      { owner: 'TA', step: 6, detail: 'If candidate wishes to renegotiate salary: work with TL, HRBP and Compensation to determine if revision can be made.' },
      { owner: 'HRS/TA', step: 7, detail: 'If revision needed: view "Offer Details", click "update" to regenerate. This triggers a new approval workflow.' },
      { owner: 'Talent/HRS', step: 8, detail: 'Once offer signed: notification sent to Talent. Notify HRBP and HM. Select "Mark as Hired" and close the opening. This triggers automated background check and notification to PC team for the Global Hiring and Onboarding Tracker. Send onboarding email from Greenhouse. Reject all other active candidates.' },
      { owner: 'Talent/HRBP/HM', step: 9, detail: 'If offer declined: reject candidate in Greenhouse with appropriate reason, notify HRBP and HM. Log into DocuSign and mark offer as "Void" (keeps envelope for historical proof).' },
    ],
  },
  {
    id: 'visa-sponsorships',
    title: 'Visa Sponsorships for External Candidates',
    resources: [
      { label: 'Visa Sponsorship Request Form', description: 'Submit for mobility review', url: 'https://docs.google.com/forms/d/e/1FAIpQLSe44FePGj4wmK_09qdfaTJicrym7EpdYM-ML2-8tDt55vvq4g/viewform?usp=sharing' },
      { label: 'US Sponsorships Overview', description: 'Overview of US sponsorship types', url: 'https://docs.google.com/spreadsheets/d/1amyiWl0S6G_1DZF30Zj6PLI7D10ALeC1aYwLeNZ6s6g/edit?gid=0#gid=0' },
      { label: 'Sponsorship FAQs', description: 'Common questions about visa sponsorship', url: 'https://docs.google.com/document/d/1D1sCo_2Q9423wQ1SK4p7S6xGBbp0QDoOpJFaf-qWaoc/edit?tab=t.0' },
    ],
    steps: [
      { owner: 'TA', step: 1, detail: 'Prior to extending an offer for a candidate requiring visa sponsorship, complete the Visa Sponsorship Request Form. Candidates must meet eligibility requirements. Do NOT extend a verbal offer until the mobility team secures final approval.' },
      { owner: 'Mobility', step: 2, detail: 'Reviews request form and assesses visa feasibility. Facilitates meeting with leadership and HRBP before initiating approvals. Approvals expected to take at least 24 hours. Includes STEM OPT candidates requiring immediate sponsorship in the same fiscal year.' },
      { owner: 'Talent', step: 3, detail: 'Initiate and execute the contract. Allow 6-7 weeks minimum for visa process. STEM OPT candidates requiring future sponsorship can start at next GeoLaunch. Requires 1 year tenure and leadership approval. For H1B Atlanta hires: candidates must relocate to Atlanta — visa is tied to primary residential address.' },
      { owner: 'Talent', step: 4, detail: 'Advise mobility that contract has been signed. Initiate introduction via email through Greenhouse using "[GBL] Mobility Introduction" template (Kavya auto CC\'d).' },
      { owner: 'Mobility', step: 5, detail: 'Commence the visa process and advise HRBP & Talent when complete.' },
      { owner: 'Mobility', step: 6, detail: 'Inform HRBP, Talent, Onboarding, People Ops Coordinators, and End User Management if there are delays, especially if start date needs to be pushed.' },
      { owner: 'Talent', step: 7, detail: 'Inform HM if start date changed. Revise offer and communicate changes with respective teams.' },
    ],
  },
  {
    id: 'consultants-contractors',
    title: 'Consultants/Contractors — North America Only',
    owner: 'Sara Sohail',
    lastUpdated: 'Nov 8, 2023',
    description: 'Process for engaging DF Contractors and Consultants in North America. DF Contractors are individuals in place of regular Geotab roles. Consultants are business entities performing work not in place of a Geotab role.',
    resources: [
      { label: 'HR Background Check Process Overview - V2.0', description: 'Background check process for contractors', url: 'https://docs.google.com/document/d/1VKHBnP3yclqmYzKPZaVv_03Jf2HemGvCJYpspXR4wGA/edit#heading=h.eqekbfddv0z3' },
      { label: 'Geotab Employment Relationship Definitions', description: 'Definitions of employee vs. contractor/consultant' },
    ],
    subsections: [
      {
        title: 'Engaging DF Contractor(s)',
        steps: [
          { owner: 'HM', step: 1, detail: 'Identify need and advise HRBP if they require resources for a fixed period.' },
          { owner: 'HRBP/HM', step: 2, detail: 'HRBP meets HM to understand the proposed employment relationship. For DF Contractors: HM creates "unlisted" requisition in Greenhouse with scope of work, duration, business justification, hourly rate/cost, and headcount. For Consultants: HM gets written approval from Divisional Head and COO/CEO, shares with HRBP.' },
          { owner: 'HM/HRBP', step: 3, detail: 'Have discovery call with identified contractor(s) and complete the discovery template.' },
          { owner: 'HRBP/Legal', step: 4, detail: 'After requisition approved and discovery call: email Legal (hrlegal@geotab.com) to create Professional Services Agreement with full legal name, address, email, reporting manager, scope, start/end dates. Remind Legal to add mandatory background check clause.' },
          { owner: 'HRBP/HM/Legal', step: 5, detail: 'Legal emails draft agreement to HRBP. HRBP reviews and shares with HM to verify deliverables.' },
          { owner: 'HRBP', step: 6, detail: 'Once HM approves draft, download PDF and email to contractor for review.' },
          { owner: 'HRBP/Legal', step: 7, detail: 'Once contractor confirms terms: HRBP emails Legal to formalize. Legal obtains CEO/designee signatures and sends via DocuSign.' },
          { owner: 'HRBP/HRS', step: 8, detail: 'Save signed agreement in HRM\'s "to be filed" folder. Email HRSpecialists@geotab.com to initiate background check.' },
          { owner: 'HRS/ONB', step: 9, detail: 'Add to Global Hiring Tracker, fill out IT/Sec New Hire Form. Security provisions access and creates Jira ticket for HM.' },
          { owner: 'HRS/HRBP', step: 10, detail: 'If background check cleared: HRS coordinates with IT/Security for assets. If not cleared: HRS flags HRBP.' },
        ],
      },
      {
        title: 'Engaging Consultant(s)',
        steps: [
          { owner: 'HM/Legal', step: 4, detail: 'Consultants typically have their own agreement. Legal vets for confidentiality, IP rights, and background check requirement. Legal may have separate NDA.' },
          { owner: 'HRBP/HM', step: 5, detail: 'If Geotab data access needed: follow steps 8-13 from DF Contractor process. Onboarding Team acts as conduit between IT and People Coordinators. If only specific document access needed, share via non-Geotab email.' },
        ],
        notes: [
          'HM responsible for providing and removing access to documents shared with non-Geotab email addresses.',
          'HM must obtain approval from CSO/EVP/VP if consultant uses non-Geotab personal email/assets.',
        ],
      },
      {
        title: 'Extension of Professional Services Agreement',
        steps: [
          { owner: 'HRBP/HM', step: 14, detail: 'HM must let HRBP know at least three weeks prior if agreement is to be extended.' },
          { owner: 'HM/Legal/HRBP/HRS', step: 15, detail: 'Secure approval from Divisional Head and COO/CEO. Reach out to Legal for extension. Once signed, email HRSpecialists@geotab.com. Add new contract to "to be uploaded" folder.' },
        ],
      },
      {
        title: 'Offboarding DF Contractor(s)',
        steps: [
          { owner: 'HRS/HRBP', step: 17, detail: 'HM must notify at least three weeks prior if agreement is ending. HRBP emails HRSpecialists for offboarding. If ending early, HRBP connects with Legal via hrlegal@geotab.com.' },
          { owner: 'HRS', step: 18, detail: 'Save copy of end of contract email chain to contractor file in Dayforce.' },
          { owner: 'HRS', step: 19, detail: 'Submit Dayforce Termination Form. Reason codes: Ending on time = "Involuntary - End of Contract". Terminated by Geotab = "Involuntary - [reason]". Terminated by contractor = "Voluntary - [reason]".' },
          { owner: 'HRS', step: 20, detail: 'Send "End of Contract" email to contractor\'s Geotab and personal email, CC HRBP, HM, and HRSpecialists.' },
          { owner: 'HRS', step: 21, detail: 'Create offboarding ticket in Jira. Refer to HR Jira Offboarding Process Guide.' },
          { owner: 'HRS/IT', step: 22, detail: 'Use Equipment Return Separations Chat room to inform IT of separation.' },
          { owner: 'HRS', step: 23, detail: 'Once IT resolves ticket, update "completed" column in Change Log as "Pending - HRS TL Review". HRS TL marks as "Yes - Completed" after final review.' },
        ],
      },
    ],
  },
  {
    id: 'benefits-chart',
    title: 'Canada and US Benefits (Chart)',
    description: 'Quick reference for benefits eligibility by employment type.',
    subsections: [
      {
        title: 'Benefits by Employment Type',
        resources: [
          { label: 'Benefit at a Glance - Canada (CAN Benefits at Glance)', description: 'Full-time employee benefits', url: 'https://docs.google.com/document/d/1ICdVavuK8l0VbY00bymUxZdif8MyO3MsYtoBX4eWgFs/edit?usp=sharing' },
          { label: 'Benefit at a Glance - USA (USA Benefits at Glance)', description: 'Full-time employee benefits', url: 'https://docs.google.com/document/d/1wLgKKPY1_nrtBFGlQVZmE000PvpI_xsFzhEKUQViS3w/edit#heading=h.a9cwu1lyud4b' },
        ],
        notes: [
          'Employee Full-time: See Benefits at a Glance documents for Canada and USA.',
          'Employee Part-time (Canada): <20 hours = no group benefit plan and no Geotab perks.',
          'Employee Part-time (USA): <24 hours = no access to group benefit plan and no Geotab perks.',
          'Fixed-Term/Temporary (Canada): One year or more working 20+ hours eligible for Victor benefits on first day. Less than one year, consultants, interns not eligible. No Geotab Perks.',
          'Fixed-Term/Temporary (USA): All W2 employees working 24+ hours are benefit eligible. No Geotab perks.',
          'Interns (Canada): No benefits, no Geotab perks.',
          'Interns (USA): Eligible for benefits if working 24+ hours. No Geotab perks.',
          'Consultants: No medical/dental benefits or Geotab perks (Canada). No medical/dental but all Geotab perks (USA).',
          'Contractors: No medical/dental benefits or Geotab perks (Canada). No medical/dental but all Geotab perks (USA).',
        ],
      },
    ],
  },
  {
    id: 'international-candidates',
    title: 'International Candidates — EMEA Offers',
    owner: 'Ian Campbell',
    lastUpdated: 'Nov 28, 2022',
    description: 'Greenhouse is used to manage the candidate, but offers/contracts are not created or sent via Greenhouse except for UK and Singapore. UK and Singapore contracts are created and sent via Greenhouse. The process below applies to Spain, France, Italy, Germany, LATAM and APAC.',
    resources: [
      { label: 'Contracts - International', description: 'Personnel file and contract preparation steps', url: 'https://docs.google.com/document/d/16qg3HecniMOY0gm1WtGOuuvcFjqrxc5VjQ7G3YpZOik/edit?tab=t.0#heading=h.hyfrqnblqsmv' },
      { label: 'UK - Offer Email Template', description: '', url: 'https://docs.google.com/document/d/1_7oPDiT7zdo5_kT66GaDKVxNk1Ber7ECoZDK3cNgfBs/edit' },
      { label: 'FRA - Offer Email Template', description: '', url: 'https://docs.google.com/document/d/15404XqdKEgR0JVguGBi7t9pCt1_Zi2_AdWe8zgQTOUE/edit?usp=sharing' },
      { label: 'ITL - Offer Email Template', description: '', url: 'https://docs.google.com/document/d/1tZs41ppOyev-asKMWTK3RANMotjUFUJAvitWbtr0ilI/edit' },
      { label: 'SPA - Offer Email Template', description: '', url: 'https://docs.google.com/document/d/1c1kPy91hbImJO1Sykj-gHbOD7bxSjWdKMH-qi9kQg0k/edit' },
      { label: 'GER - Offer Email Template', description: '', url: 'https://docs.google.com/document/d/1UHpPHLOqc22QmKePCJ45IxlUvpUhya5cQAXcmAt21DI/edit' },
      { label: 'Europe Employee Benefits document', description: 'Benefits info for European candidates', url: 'https://docs.google.com/document/d/1gN4pO5l9WP_Xd_LvQea8G7XVw7YOjJY-MRwMAJYVZnU/edit#heading=h.sb48c8pcugy1' },
      { label: 'Offer - Candidate Data Intake Form (EU)', description: 'Data collection form for EU candidates' },
    ],
    subsections: [
      {
        title: 'Country-Specific Considerations',
        notes: [
          'Spain: Refer to the Spain offer process document.',
          'France: Key considerations include Working Time Scheme and executive status. Legal support available through Geotab (Jira) and Baker McKenzie.',
          'Italy: Proposed salary must be shared with payroll provider (Della Monica) for salary breakdown before offering.',
          'Germany: Refer to the Germany offer process document.',
          'UK: Working Time Regulations Opt Out Agreement must be shared with candidate (completing is optional).',
        ],
      },
      {
        title: 'UK and Singapore Offers (FTP)',
        steps: [
          { owner: 'TA', step: 1, detail: 'Move candidate to "Offer" stage in Greenhouse after verbally presenting the offer. Refer to Europe Employee Benefits document.' },
          { owner: 'TA', step: 2, detail: 'Send Candidate Data Intake Form (EU) to collect information.' },
          { owner: 'TA', step: 3, detail: 'Fill out offer details following the Greenhouse Offer Guide for International. Generate contract and route for HRBP approvals. Once approved, select "Send with Greenhouse" (NOT DocuSign). Send to candidate, CC HRBP. Upload signed copy and select "Mark as Hired".' },
        ],
      },
      {
        title: 'Other International Locations',
        steps: [
          { owner: 'TA', step: 4, detail: 'Prepare completed personnel file and employment contract following the Contracts - International guide. Send email with Job Offer using the appropriate country email template.' },
          { owner: 'Candidate', step: 5, detail: 'Accepts offer.' },
          { owner: 'TA', step: 6, detail: 'Review contract, ensure all signatures executed. Place in employment file, add "signed" to document name. Tag PC/HRS team for next steps.' },
          { owner: 'TA', step: 7, detail: 'Send confirmation email and country-specific Greenhouse email template (includes background check, IT equipment, and onboarding info).' },
          { owner: 'TA', step: 8, detail: 'Tag HR Specialist team (hrspecialists@geotab.com) to initiate pre-onboarding.' },
          { owner: 'HRS', step: 9, detail: 'Request new employee to fill out Geotab Onboarding Form and Geotab Payroll Form.' },
          { owner: 'HRS', step: 10, detail: 'Initiate Sterling background check, submit IT/Security Form, update Hiring/Onboarding Tracker.' },
        ],
        notes: ['Legal support available: Internal Legal (Jira ticket) or External counsel through Baker McKenzie (requires HR Manager and Legal approval).'],
      },
      {
        title: 'Offer Template Documents by Country',
        notes: [
          'Spain: Refer to the Spain offer process.',
          'Germany: Refer to the Germany offer process. As per German requirements, repeat contract signing with wet/ink signatures when employee first starts.',
          'Italy: ITL Employment Contract template + Annex C (CBA), H&S Policy, Global Geotabber Handbook.',
          'France: FRA Employment Contract template + Global Geotabber Handbook.',
          'UK: UK Employment Contract template + NEST Pension Info, WTR Opt Out, Global Geotabber Handbook, UK Geotabber Handbook, Geotab Culture Book.',
        ],
      },
    ],
  },
  {
    id: 'campus-candidates',
    title: 'Campus Candidates',
    owner: 'Tharsiga Selvathilagan',
    lastUpdated: 'Jul 12, 2024',
    resources: [
      { label: 'Campus Program Eligibility', description: 'Eligibility criteria for campus programs', url: 'https://docs.google.com/document/d/1mQpOMGhtydbCigUkcao3JZRQoWX1mtHaBFBVdhqDFb4/edit' },
      { label: 'Intern Extension Eligibility Criteria', description: 'Criteria for extending internships', url: 'https://docs.google.com/document/d/14aJna87JvtBx19N8n6xcnaw26r65b12R89rjPp7BqGM/edit#heading=h.b0clsz12oi3s' },
    ],
    description: 'Canada/United States: Follow steps under Offer Process > External Candidates.',
    subsections: [
      {
        title: 'Spain Internships',
        owner: 'TAP',
        lastUpdated: 'Aug 13, 2025',
        resources: [
          { label: 'SPA - Internship Agreement / Contract templates', description: 'All templates (fields to review highlighted in yellow)' },
          { label: 'SPA - TEMPLATE Geotab CWIA', description: 'Confidentiality, Works and Inventions Agreement', url: 'https://docs.google.com/document/d/17cKRkaDKZN_Wpd0dnGyVwWsIYooMMTZOpkeznlEUwjk/edit?usp=sharing' },
          { label: 'SPA - Geotab Data Protection Notice', description: 'Data protection document', url: 'https://drive.google.com/file/d/1K1klfOl20eHZC8W9To6HMol3_5Q5f4fA/view?usp=sharing' },
          { label: 'SPA - Intern Offer Email Template', description: 'Email template for sending offers', url: 'https://docs.google.com/document/d/1_SHVhoPQ3jJhT1OsJU9vv2ebJwvjNwEyXg1Xi7OBL78/edit?usp=sharing' },
        ],
        steps: [
          { owner: 'TAP', step: 1, detail: 'Prepare documents: Agreement/Contract, Internship Agreement (from University for active students) or Contracto Practica (graduated students), CWIA, Data Protection, Global Geotabber Handbook, SPA Geotabber Handbook.' },
          { owner: 'Candidate', step: 2, detail: 'Signs back the Agreement/Contract.' },
          { owner: 'TAP', step: 3, detail: 'Upload signed Annex to Greenhouse profile.' },
          { owner: 'TAP', step: 4, detail: 'Mark candidate as "Hired" in Greenhouse.' },
          { owner: 'TAP', step: 5, detail: 'Send background check email and include Geotab Onboarding Form and Payroll Form. Send signed Annex to hrspecialists@geotab.com (CC campusteam@geotab.com and HRBP).' },
        ],
      },
      {
        title: 'Germany Internships',
        owner: 'TAP',
        lastUpdated: 'Aug 13, 2025',
        resources: [
          { label: 'GER - TEMPLATE Time Limited Employment Contract (male)', description: '', url: 'https://docs.google.com/document/d/1QiieEFPPnnQ8vVXo6cGL-AYpGebCtiVeI9LvfGCdPDM/edit?usp=sharing' },
          { label: 'GER - TEMPLATE Time Limited Employment Contract (female)', description: '', url: 'https://docs.google.com/document/d/1UF70sgKfGtToxu1bA_WM4AP3rHWFNg4qFpxMIIu81Qk/edit?usp=sharing' },
          { label: 'GER - Geotab Data Protection Notice', description: '', url: 'https://drive.google.com/file/d/1DkI6yOBHcTqFVI8WGxHcGXxVXOTOKOGP/view?usp=sharing' },
          { label: 'GER - Intern Offer Email Template', description: '', url: 'https://docs.google.com/document/d/1is5sZz9I2K6k9VPieVdQsb7cJL9zzMjj_suI8NZUFI8/edit?usp=sharing' },
        ],
        steps: [
          { owner: 'TAP', step: 1, detail: 'Prepare documents: Fixed-Term Employment Contract (male/female version), Data Protection, Global Geotabber Handbook, GER Geotabber Handbook.' },
          { owner: 'TAP/HRBP', step: 2, detail: 'TA shares signed Agreement with HRBP for final review.' },
          { owner: 'Candidate', step: 3, detail: 'Signs back the Agreement/Contract.' },
          { owner: 'TAP', step: '4-6', detail: 'Upload signed Annex to Greenhouse profile. Mark as "Hired". Send signed Annex to hrspecialists@geotab.com and send background check email with Onboarding/Payroll forms.' },
        ],
      },
      {
        title: 'United Kingdom Internships',
        owner: 'TAP',
        lastUpdated: 'Aug 29, 2025',
        resources: [
          { label: 'UK - Fixed Term Employment Contract Template', description: '', url: 'https://docs.google.com/document/d/1Du_DI6e72wbhFG9fWWOQuBx9PyLk2-YvOJXb9Lbos9w/edit?usp=sharing' },
          { label: 'NEST Pension Information', description: '', url: 'https://drive.google.com/file/d/19ERsqFzplMDPKkU6zquInza2tNPSPtk5/view?usp=share_link' },
          { label: 'Geotab UK - WTR Opt Out', description: '', url: 'https://docs.google.com/document/d/1ngrmcycMk0t3LgVrEtjARQw15WKRtaN2/edit?usp=share_link&ouid=100598977517152378146&rtpof=true&sd=true' },
          { label: 'UK Geotabber Handbook', description: '', url: 'https://docs.google.com/document/d/1rgp9UpvT4c-K_DHJU7FyWNqIJxXp2cZj4F1GvrVo8M0/edit#heading=h.lbc1q6ua9c0c' },
        ],
        steps: [
          { owner: 'TAP', step: 1, detail: 'Prepare via Greenhouse: Fixed-Term Employment Contract + NEST Pension Info, WTR Opt Out, Global Geotabber Handbook, UK Geotabber Handbook, Geotab Culture Book.' },
          { owner: 'TAP/HRBP', step: 2, detail: 'TA shares signed Agreement with HRBP for final review.' },
          { owner: 'Candidate', step: 3, detail: 'Signs back the Fixed-Term Contract.' },
          { owner: 'TAP', step: '4-6', detail: 'Upload signed Contract to Greenhouse profile. Mark as "Hired". Send signed Contract to hrspecialists@geotab.com and send background check email.' },
        ],
      },
      {
        title: 'Italy Internships',
        owner: 'TAP',
        lastUpdated: 'Aug 29, 2025',
        steps: [
          { owner: 'TAP', step: 1, detail: 'Complete the Internship Agreement provided by the school/University. Note: Agreement is often only available in Italian.' },
          { owner: 'TAP', step: 3, detail: 'Prepare documents: Internship Agreement (from University), Data Protection, Global Geotabber Handbook.' },
          { owner: 'TAP/HRBP', step: 4, detail: 'TA shares signed Agreement with HRBP for final review.' },
          { owner: 'Candidate', step: 5, detail: 'Signs back the Agreement.' },
          { owner: 'TAP', step: '6-9', detail: 'Upload signed Annex to Greenhouse. Mark as "Hired". Send background check email with forms. Send signed Annex to hrspecialists@geotab.com.' },
        ],
      },
      {
        title: 'France Internships',
        owner: 'TAP',
        lastUpdated: 'Aug 11, 2025',
        steps: [
          { owner: 'TAP', step: 1, detail: 'Complete the Internship Agreement (Convention de stage) provided by the school. Note: Often only available in French.' },
          { owner: 'TAP/HRBP', step: 2, detail: 'TA shares signed Agreement with HRBP for final review.' },
          { owner: 'TAP', step: 3, detail: 'Prepare documents: Internship Agreement (from University), Data Protection, Global Geotabber Handbook.' },
          { owner: 'Candidate', step: 4, detail: 'Signs back the Agreement/Contract.' },
          { owner: 'TAP', step: '5-8', detail: 'Upload signed Annex to Greenhouse. Mark as "Hired". Send background check email with forms. Send signed Annex to hrspecialists@geotab.com.' },
        ],
      },
      {
        title: 'Australia Internships',
        owner: 'TAP',
        lastUpdated: 'Oct 6, 2025',
        resources: [
          { label: 'Geotab Maximum Employment Contract Template', description: '', url: 'https://docs.google.com/document/d/1F9-lqH5c8JHZQAZIhPMnBNSfIRdkCkSgtdopz6KtQsA/edit?usp=sharing' },
          { label: 'Australia Geotabber Handbook', description: '', url: 'https://docs.google.com/document/u/0/d/1o1Kn-cTzJ3vO-ot_4mANzL_QtBtXkaTFHyVtO4pPH7Y/edit' },
        ],
        steps: [
          { owner: 'TAP', step: 1, detail: 'Prepare via Greenhouse: Fixed-Term Employment Contract + Australia Geotabber Handbook, Global Geotabber Handbook.' },
          { owner: 'TAP/HRBP', step: 2, detail: 'TA shares signed Agreement with HRBP for final review.' },
          { owner: 'Candidate', step: 3, detail: 'Signs back the Fixed-Term Contract.' },
          { owner: 'TAP', step: '4-6', detail: 'Upload signed Contract to Greenhouse. Mark as "Hired". Send signed Contract to hrspecialists@geotab.com and send background check email.' },
        ],
      },
    ],
  },
  {
    id: 'temporary-staff',
    title: 'Temporary Staff',
    owner: 'Gillian Fox',
    description: 'Certain departments may want to utilize temporary placement agencies (temp agencies) for short-term needs. Follow the process in the Temporary Staff guide.',
    resources: [
      { label: 'Temporary Staff Process Guide', description: 'Full guide for engaging temp agencies' },
    ],
  },
  {
    id: 'work-authorizations',
    title: 'Collecting Work Authorizations for International Hires',
    owner: 'Kavya Jasti',
    description: 'Pre-onboarding process for collecting proof of work authorization from international hires.',
    steps: [
      { owner: 'Talent Acquisition', step: 1, detail: 'Collect relevant documents (proof of work authorization) and share with People Operations Coordinators prior to hire date. Do NOT request this information until after an offer has been made. Refer to "proof of work authorizations" tab for regional requirements. Employees cannot commence employment without valid work authorization.' },
      { owner: 'People Ops Coordinators', step: 2, detail: 'When setting up new hires, ensure every new hire has proof of valid work authorization stored under their Dayforce profile (confidential section). All work visas must have an expiry date. For UK: when new hires provide a share code, initiate right to work check through background check process.' },
      { owner: 'Mobility', step: 3, detail: 'Run monthly report and follow up with employees whose work visas are expiring.' },
    ],
  },
  {
    id: 'background-checks',
    title: 'Background Checks',
    owner: 'Kavya Jasti',
    subsections: [
      {
        title: 'Self Disclosed Obligations',
        description: 'Geotab\'s background check policies require employees to self-disclose any criminal convictions within 72 hours. Geotab may be required to share details with government customers due to contractual obligations.',
        steps: [
          { owner: 'Employee', step: 1, detail: 'Notifies HR of the Conviction (Criminal or otherwise).' },
          { owner: 'HRBP', step: 2, detail: 'Escalate information to HR Compliance.' },
          { owner: 'HR Compliance', step: 3, detail: 'Evaluate reporting obligations and work with Legal to identify next steps.' },
        ],
      },
      {
        title: 'Background Check Requirements for FedRAMP Access',
        description: 'Review the FedRAMP background check requirements document for additional information about background check requirements for FedRAMP access.',
        resources: [
          { label: 'FedRAMP Background Check Requirements', description: 'Additional requirements for FedRAMP access' },
        ],
      },
      {
        title: 'Greenhouse/Sterling Integration Process',
        owner: 'Biljana Pantic / Annie Mathew',
        lastUpdated: 'Aug 12, 2024',
        description: 'For background checks initiated through Greenhouse, ensure details are consistent for smooth integration from Greenhouse to Sterling.',
        resources: [
          { label: 'Greenhouse/Sterling Integration Guide', description: 'Detailed integration steps', url: 'https://docs.google.com/document/d/1byzZEXJvfW8c1DmOCxG0XFkgD-nRExGzhQKFq0ZxHfw/edit?pli=1#' },
        ],
        steps: [
          { owner: 'TA', step: 1, detail: 'Background checks are enabled/disabled in the offer form. If "Do Not Process Background Check" is blank (default) or No = candidate should have a background check. If "Yes" = candidate should NOT have a background check.' },
          { owner: 'TA', step: 2, detail: 'Once offer is signed, send background check/ONB email from Greenhouse, then click "Mark as Hired" — this is the automation trigger.' },
          { owner: 'HRS', step: 3, detail: 'For Canada: entire process handled automatically (unless exceptions — HRS notified by email). For candidates outside Canada: HRS immediately notified by email to process a manual background check.' },
        ],
        notes: ['If job posting name differs from actual title, let candidate know the e-consent will list the posting name — this has no bearing on the background check package.'],
      },
    ],
  },
  {
    id: 'setting-up-new-hires',
    title: 'Setting Up New Hires',
    owner: 'Biljana Pantic',
    lastUpdated: 'Sep 24, 2024',
    subsections: [
      {
        title: 'Canada/USA',
        steps: [
          { owner: 'IT/Security', step: 1, detail: 'Generate employee ID and email address 2 weeks prior to start date. Email HRS team with New User Assignment.' },
          { owner: 'HRS', step: 2, detail: 'Create new hire form in Dayforce.' },
          { owner: 'HRS', step: 3, detail: 'Send employee first time access email.' },
          { owner: 'Employee', step: 4, detail: 'In "onboarding role" in Dayforce, fill out self service forms (benefits and payroll info). Send Enrollment form via email back to HRS team.' },
          { owner: 'Benefits', step: 5, detail: 'Set up new hire in Victor Portal for benefits.' },
        ],
      },
      {
        title: 'Europe',
        description: 'Use this process for Spain, Italy, France, Germany and UK hires.',
        notes: ['Tasks must be completed at least 1 week before start date and before Payroll cut-off dates for the region.'],
        steps: [
          { owner: 'HRBP', step: 1, detail: 'Complete tasks in the Global Hiring and Onboarding Tracker (INTERNATIONAL TEAM tasks).' },
          { owner: 'HRBP', step: 2, detail: 'Share appropriate payroll and tax forms with internal finance (Emmanuelle Balthazar, Daniel Menendez) and external payroll company. Verify Start date and Salary are correct on Payroll Form.' },
          { owner: 'HRBP', step: 3, detail: 'Add new employee to the Payroll Changes Sheet.' },
          { owner: 'HRBP', step: 4, detail: 'Email external H&S provider (Juan Carlos Espada at Preving) with employee\'s full legal name, identity number, job position, and start date.' },
          { owner: 'HRBP', step: 5, detail: 'Add new employee to the EU HR Stats.' },
          { owner: 'HRBP', step: 6, detail: 'Confirm with European IT Team (José Carrillo, Fernando Redondo) that laptops have been shipped. Must be done at minimum 5 days before start date.' },
          { owner: 'HRBP', step: 7, detail: 'Send HRS team information to input into Dayforce.' },
          { owner: 'HRS', step: 8, detail: 'Input employee information into Dayforce using New Hire forms.' },
        ],
      },
    ],
  },
  {
    id: 'noc-code',
    title: 'NOC Code Process (Canada only)',
    description: 'In Canada, employees may request an employment letter with their NOC (National Occupation Code), generally for immigration purposes. Employees usually provide a NOC code, and it is our responsibility to ensure it matches their current job description.',
    resources: [
      { label: 'Government NOC Resource', description: 'Official NOC code lookup' },
      { label: 'NOC Library Sheet', description: 'Internal tracking of NOC codes issued' },
    ],
    steps: [
      { owner: 'People Ops Coordinators', step: 1, detail: 'Draft the OINP letter template & tag People Operations Specialists to review the NOC code.' },
      { owner: 'People Ops Specialists', step: 2, detail: 'Review NOC code against employee\'s current job description. Ensure at least 50-60% of duties match. If aligned, approve so Coordinators can issue the letter. Add NOC & details to the NOC library sheet.' },
      { owner: 'People Ops Specialists', step: 3, detail: 'If NOC code does not match: ask employee\'s HRBP to support. For additional support, reach out to the mobility team.' },
    ],
  },
];

export const processGuideInfo = {
  version: 'V1.0',
  lastUpdate: 'April 23, 2024',
  classification: 'RESTRICTED',
  description: 'Reference for all People Operations team members. Organized by Employee Lifecycle from Recruitment through Separations.',
};

// Keep legacy exports for backwards compatibility
export interface PeopleOpsChapter {
  number: number;
  title: string;
  sections: PeopleOpsSection[];
}

export interface PeopleOpsSection {
  title: string;
  owner?: string;
  subsections?: string[];
  notes?: string;
}

export const chapters: PeopleOpsChapter[] = [
  {
    number: 1,
    title: 'Recruitment',
    sections: recruitmentSections.map(s => ({
      title: s.title,
      owner: s.owner,
      subsections: s.subsections?.map(sub => sub.title),
    })),
  },
];
