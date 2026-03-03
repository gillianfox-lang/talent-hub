import { benefitCategories, perksAndPrograms, planProviders, waitingPeriod, benefitsEligibility, perksEligibility } from '../data/benefits';
import { contractCountries, contractProcessNotes } from '../data/contracts';
import { distanceBands, approvalExceptions, candidateExperienceGuidelines, exceptionApprovalRequired } from '../data/interviewPolicy';
import { currentMonth, reminders } from '../data/monthlyReminders';
import { offerTypes, offerRegions, offerTemplates } from '../data/offerGuide';
import { onboardingYear, onboardingRegions } from '../data/onboarding';
import { recruitmentSections, recruitmentLifecycleTable } from '../data/peopleOps';
import { externalPostingSections, formattingRules, postingFooterText } from '../data/postingTemplate';
import { quickLinks, quickLinkCategories } from '../data/quickLinks';
import { geotabRoles, roleFamilyLabels } from '../data/roles';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
export interface IndexEntry {
  topic: string;
  source: string;
  sourceIcon: string;
  answer: string;
  bullets?: string[];
  url?: string;
  weightedKeywords: Map<string, number>;
}

export interface SearchResult {
  entry: IndexEntry;
  score: number;
}

// ---------------------------------------------------------------------------
// Tokenizer
// ---------------------------------------------------------------------------
const STOP_WORDS = new Set([
  'a','an','the','and','or','but','in','on','at','to','for','of','with','by',
  'from','is','are','was','were','be','been','being','have','has','had','do',
  'does','did','will','would','shall','should','may','might','can','could',
  'this','that','these','those','it','its','i','you','he','she','we','they',
  'me','him','her','us','them','my','your','his','our','their','what','which',
  'who','whom','how','when','where','why','if','then','than','so','as','not',
  'no','all','any','each','every','some','such','into','also','about','up',
]);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, ' ')
    .split(/\s+/)
    .filter(t => t.length > 1 && !STOP_WORDS.has(t));
}

// ---------------------------------------------------------------------------
// Build weighted keyword map
// ---------------------------------------------------------------------------
function buildKeywords(topic: string, source: string, answer: string, bullets?: string[]): Map<string, number> {
  const map = new Map<string, number>();
  const add = (tokens: string[], weight: number) => {
    for (const t of tokens) {
      map.set(t, (map.get(t) || 0) + weight);
    }
  };
  add(tokenize(topic), 4);
  add(tokenize(source), 2);
  add(tokenize(answer), 1);
  if (bullets) {
    for (const b of bullets) add(tokenize(b), 1);
  }
  return map;
}

// ---------------------------------------------------------------------------
// Build index entries
// ---------------------------------------------------------------------------
function buildIndex(): IndexEntry[] {
  const entries: IndexEntry[] = [];

  const push = (topic: string, source: string, sourceIcon: string, answer: string, bullets?: string[], url?: string) => {
    entries.push({ topic, source, sourceIcon, answer, bullets, url, weightedKeywords: buildKeywords(topic, source, answer, bullets) });
  };

  // ---- Benefits ----
  push(
    'Benefits Overview',
    'Benefits',
    '🏥',
    `${benefitsEligibility} ${perksEligibility} Plan year: ${new Date().getFullYear()}. Broker: ${planProviders.broker}. Medical/Dental/Vision provider: ${planProviders.medical}. HSA provider: ${planProviders.hsa}.`,
    [
      `Salaried waiting period: ${waitingPeriod.salaried}`,
      `Hourly waiting period: ${waitingPeriod.hourly}`,
      `Example: ${waitingPeriod.example}`,
    ],
  );

  for (const cat of benefitCategories) {
    const bullets: string[] = [];
    for (const item of cat.items) {
      bullets.push(`${item.name}: ${item.details.join('; ')}`);
    }
    push(`${cat.title} Benefits`, 'Benefits', cat.icon, `${cat.title} coverage details for Geotab employees.`, bullets);
  }

  for (const perk of perksAndPrograms) {
    push(
      `Perk: ${perk.name}`,
      'Perks & Programs',
      '🎁',
      `${perk.description}${perk.amount ? ` Amount: ${perk.amount}.` : ''}`,
    );
  }

  // ---- Contracts ----
  for (const c of contractCountries) {
    const docs = c.documents.map(d => d.name).join(', ');
    const statusLabel = c.status === 'wip' ? 'Work in Progress' : c.status === 'archived' ? 'Archived' : 'Active';
    push(
      `${c.country} Contract`,
      'International Contracts',
      '🌍',
      `Status: ${statusLabel}. Send method: ${c.sendMethod}. Gender-specific: ${c.genderSpecific ? 'Yes' : 'No'}. STIP: ${c.stip ? 'Yes' : 'No'}.${c.note ? ' ' + c.note : ''}`,
      docs ? [`Documents: ${docs}`] : undefined,
      c.templateFolder,
    );
  }

  push(
    'Contract Process Notes',
    'International Contracts',
    '🌍',
    'General process notes for preparing and sending international contracts.',
    contractProcessNotes,
  );

  // ---- Interview Policy ----
  for (const band of distanceBands) {
    push(
      `Interview Policy: ${band.label}`,
      'In-Person Interviews',
      '🤝',
      `Distance: ${band.rangeKm} (${band.rangeMiles}), travel time: ${band.travelTime}. In-person required: ${band.inPersonRequired ? 'Yes' : 'No'}. Travel reimbursement: ${band.travelReimbursement ? 'Yes' : 'No'}.`,
      [`Exceptions: ${band.exceptions}`],
    );
  }

  push(
    'Interview Exceptions & Approval',
    'In-Person Interviews',
    '🤝',
    exceptionApprovalRequired,
    approvalExceptions.map(e => `${e.type}: ${e.description}`),
  );

  push(
    'Candidate Experience Guidelines',
    'In-Person Interviews',
    '🤝',
    'Guidelines for ensuring a positive candidate experience during in-person interviews.',
    candidateExperienceGuidelines,
  );

  // ---- Monthly Reminders ----
  push(
    `Monthly Reminders (${currentMonth})`,
    'Monthly Reminders',
    '📅',
    `Current reminders for ${currentMonth}.`,
    reminders.map(r => r.text),
  );

  // ---- Offer Guide ----
  push(
    'Offer Types Overview',
    'Offer Guide',
    '📋',
    'Greenhouse offer types available for different candidate scenarios.',
    offerTypes.map(t => `${t.label}: ${t.description}`),
  );

  for (const region of offerRegions) {
    push(
      `Offers: ${region.label}`,
      'Offer Guide',
      '📋',
      region.description,
    );
  }

  push(
    'Offer Templates',
    'Offer Guide',
    '📋',
    'List of offer letter templates in Greenhouse and when to use each one.',
    offerTemplates.map(t => `${t.name}: ${t.whenToUse.join('; ')}`),
  );

  push(
    'Pre-Offer Requirements',
    'Offer Guide',
    '📋',
    'Before creating an offer, send the Candidate Data Intake form. Required fields include full legal name, address, email, and location details.',
  );

  push(
    'Internal Position Change Offers',
    'Offer Guide',
    '📋',
    'Internal position changes in Canada/USA require specific Greenhouse form fields including candidate type, employment type, STIP eligibility, and org structure. Key decision: whether Terms & Conditions need updating (original agreement before/after Nov. 1 2023).',
  );

  push(
    'Full Time / Fixed Term Offers',
    'Offer Guide',
    '📋',
    'External full-time, fixed-term, and contract extension offers for Canada/USA. Processed through Greenhouse with DocuSign. Form includes ~55 fields covering candidate info, compensation, STIP, org structure, and benefits enrollment.',
  );

  push(
    'International Offers (Singapore/UK)',
    'Offer Guide',
    '📋',
    'Singapore and UK offers are sent via Greenhouse (NOT DocuSign). Use the international offer form in Greenhouse and route for HRBP approval.',
  );

  push(
    'Intern Conversion Offers',
    'Offer Guide',
    '📋',
    'Converting interns to full-time or fixed-term positions. Use the intern conversion template in Greenhouse.',
  );

  push(
    'Manual Contract Countries',
    'Offer Guide',
    '📋',
    'Countries requiring manual contract preparation outside Greenhouse: Spain, Germany, France, Italy, and other EMEA locations. Contracts prepared as PDFs and sent via email.',
  );

  // ---- Onboarding ----
  for (const region of onboardingRegions) {
    const upcoming = region.dates
      .filter(d => new Date(d.date) >= new Date())
      .slice(0, 3)
      .map(d => {
        const dt = new Date(d.date);
        const label = dt.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        return `${label} (cutoff: ${new Date(d.cutoff).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })})${d.notes ? ' — ' + d.notes : ''}`;
      });
    push(
      `Onboarding: ${region.label}`,
      'Onboarding Schedule',
      '🚀',
      `${onboardingYear} GEO Launch dates for ${region.label}. Next upcoming dates:`,
      upcoming.length > 0 ? upcoming : ['No upcoming dates found — check the full schedule.'],
    );
  }

  push(
    'Onboarding Schedule Overview',
    'Onboarding Schedule',
    '🚀',
    `The ${onboardingYear} onboarding schedule covers 4 regions: ${onboardingRegions.map(r => r.label).join(', ')}. Each region has bi-weekly GEO Launch dates with cutoff deadlines. Interns-only dates are marked separately.`,
  );

  // ---- People Ops ----
  push(
    'Recruitment Lifecycle',
    'People Ops',
    '👥',
    'Overview of the end-to-end recruitment lifecycle showing process owners and resources.',
    recruitmentLifecycleTable.map(r => `${r.process} — Owner: ${r.owner}`),
  );

  for (const section of recruitmentSections) {
    const bullets: string[] = [];
    if (section.description) bullets.push(section.description);
    if (section.notes) bullets.push(...section.notes);
    if (section.steps && section.steps.length > 0) {
      bullets.push(`Process has ${section.steps.length} steps.`);
    }
    if (section.subsections) {
      bullets.push(`Subsections: ${section.subsections.map(s => s.title).join(', ')}`);
    }
    const resources = section.resources;
    const url = resources && resources.length > 0 ? resources[0].url : undefined;
    push(
      section.title,
      'People Ops',
      '👥',
      section.description || `Recruitment process section: ${section.title}.`,
      bullets.length > 0 ? bullets : undefined,
      url,
    );
  }

  // ---- Posting Template ----
  push(
    'Job Posting Template',
    'Posting Template',
    '📝',
    'External job postings follow a standard template with specific sections and formatting rules.',
    externalPostingSections.map(s => `${s.heading}${s.isTemplated ? ' (auto-templated)' : ''}: ${s.instructions}`),
  );

  push(
    'Posting Formatting Rules',
    'Posting Template',
    '📝',
    'Formatting standards for Greenhouse job postings.',
    formattingRules,
  );

  push(
    'Posting Sections Detail',
    'Posting Template',
    '📝',
    'The external posting has 5 main sections: ' + externalPostingSections.map(s => `"${s.heading}"`).join(', ') + '.',
    externalPostingSections.filter(s => s.template).map(s => `${s.heading}: ${s.template.slice(0, 120)}...`),
  );

  push(
    'Posting Footer & Encouragement',
    'Posting Template',
    '📝',
    postingFooterText,
  );

  // ---- Quick Links ----
  for (const cat of quickLinkCategories) {
    const links = quickLinks.filter(l => l.category === cat);
    push(
      `Quick Links: ${cat}`,
      'Quick Links',
      '🔗',
      `${links.length} links in the "${cat}" category.`,
      links.map(l => l.label),
    );
  }

  push(
    'Quick Links Overview',
    'Quick Links',
    '🔗',
    `${quickLinks.length} quick links across ${quickLinkCategories.length} categories: ${quickLinkCategories.join(', ')}.`,
  );

  // ---- Roles ----
  const families = Object.entries(roleFamilyLabels);
  for (const [key, label] of families) {
    const roles = geotabRoles.filter(r => r.family === key);
    const ics = roles.filter(r => r.type === 'Individual Contributor').length;
    const pls = roles.filter(r => r.type === 'People Leader').length;
    push(
      `Roles: ${label}`,
      'Roles Directory',
      '💼',
      `${roles.length} roles in ${label} (${ics} IC, ${pls} People Leader).`,
      roles.slice(0, 8).map(r => `${r.title} (${r.type})`),
    );
  }

  push(
    'Roles Overview',
    'Roles Directory',
    '💼',
    `Geotab has ${geotabRoles.length} roles across ${families.length} families: ${families.map(([,l]) => l).join(', ')}.`,
  );

  return entries;
}

// ---------------------------------------------------------------------------
// Module-level index (built once on import)
// ---------------------------------------------------------------------------
const INDEX = buildIndex();

// ---------------------------------------------------------------------------
// Search
// ---------------------------------------------------------------------------
export function searchChatbot(query: string): SearchResult[] {
  const tokens = tokenize(query);
  if (tokens.length === 0) return [];

  const scored: SearchResult[] = [];

  for (const entry of INDEX) {
    let score = 0;
    const topicLower = entry.topic.toLowerCase();
    const sourceLower = entry.source.toLowerCase();
    const queryLower = query.toLowerCase();

    for (const token of tokens) {
      const keywordWeight = entry.weightedKeywords.get(token) || 0;
      score += keywordWeight;

      // Bonus for topic/source substring match
      if (topicLower.includes(token)) score += 8;
      if (sourceLower.includes(token)) score += 4;
    }

    // Bonus for full query phrase match in topic
    if (topicLower.includes(queryLower)) score += 15;

    if (score > 0) {
      scored.push({ entry, score });
    }
  }

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 3);
}

// ---------------------------------------------------------------------------
// Fallback message
// ---------------------------------------------------------------------------
export const FALLBACK_MESSAGE = `I couldn't find a strong match for that query. Here are some topics I can help with:

- **Benefits** — medical, dental, vision, perks, HSA, 401(k)
- **Contracts** — Spain, Germany, France, UK, Australia, and more
- **Interview Policy** — distance bands, in-person requirements
- **Offers** — offer types, templates, form fields, regions
- **Onboarding** — GEO Launch dates by region
- **Recruitment** — lifecycle, internal hiring, compensation, visa
- **Job Postings** — template sections, formatting rules
- **Roles** — role families and titles across Geotab
- **Quick Links** — Greenhouse, templates, guides

You can also try **Cmd+K** to search the full app.`;

// ---------------------------------------------------------------------------
// Suggested queries for welcome card
// ---------------------------------------------------------------------------
export const SUGGESTION_CHIPS = [
  'What are the medical benefits?',
  'Spain contract process',
  'Upcoming onboarding dates',
  'Interview policy distance bands',
];
