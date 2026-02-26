import { useState } from 'react';
import './Guides.css';
import { guideTabs } from '../data/guides';
import { contractCountries, contractProcessNotes } from '../data/contracts';

import { offerTemplates, preOfferRequirements, approvalProcess, sendingProcess, offerClauseConcerns, internConversionNotes, backgroundCheckInfo, offerFormSections } from '../data/offerGuide';
import { distanceBands, approvalExceptions, candidateExperienceGuidelines, exceptionApprovalRequired, lastUpdated } from '../data/interviewPolicy';
import { recruitmentSections, recruitmentLifecycleTable, processGuideInfo } from '../data/peopleOps';
import type { RecruitmentSubsection, ProcessStep } from '../data/peopleOps';

function Accordion({ title, badge, children, defaultOpen }: { title: string; badge?: React.ReactNode; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen ?? false);
  return (
    <div className="accordion">
      <button className="accordion-header" onClick={() => setOpen(!open)}>
        <span>{title}{badge}</span>
        <span className={`accordion-chevron${open ? ' open' : ''}`}>▼</span>
      </button>
      {open && <div className="accordion-body">{children}</div>}
    </div>
  );
}

function matchesSearch(text: string | undefined | null, search: string): boolean {
  if (!text || !search) return true;
  return text.toLowerCase().includes(search.toLowerCase());
}

function ContractsTab({ search }: { search: string }) {
  const filtered = search
    ? contractCountries.filter(c =>
        matchesSearch(c.country, search) ||
        c.documents.some(d => matchesSearch(d.name, search) || matchesSearch(d.description, search))
      )
    : contractCountries;
  return (
    <div>
      <div className="guide-note">
        {contractProcessNotes.map((n, i) => <p key={i} style={{ marginBottom: 4 }}>{n}</p>)}
      </div>
      {filtered.map((c) => (
        <Accordion
          key={c.country}
          title={c.country}
          badge={
            <span className={`accordion-badge badge-${c.status}`}>
              {c.status === 'active' ? 'Active' : c.status === 'archived' ? 'Archived' : 'WIP'}
            </span>
          }
        >
          {c.note && <div className="guide-note">{c.note}</div>}
          {c.entity && <p><strong>Entity:</strong> {c.entity}</p>}
          <p><strong>Send method:</strong> {c.sendMethod === 'greenhouse' ? 'Via Greenhouse' : 'Direct email'}</p>
          <p><strong>Gender-specific contracts:</strong> {c.genderSpecific ? 'Yes (male/female versions)' : 'No'}</p>
          <p><strong>STIP Letter required:</strong> {c.stip ? 'Yes' : 'No'}</p>
          {c.templateFolder && (
            <p>
              <a href={c.templateFolder} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 600 }}>
                All Templates Folder ↗
              </a>
            </p>
          )}
          {c.documents.length > 0 && (
            <>
              <h4>Required Documents</h4>
              <ul>
                {c.documents.map((d, i) => (
                  <li key={i}>
                    <strong>{d.link ? (
                      <a href={d.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>
                        {d.name} ↗
                      </a>
                    ) : d.name}:</strong> {d.description}
                    {d.signingInstructions && (
                      <div style={{ fontSize: '0.82rem', color: 'var(--color-gray-500)', marginTop: 2 }}>
                        Signing: {d.signingInstructions}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </>
          )}
          {c.emailTemplate && (
            <>
              <h4>Email Template</h4>
              <div className="guide-template-block">{c.emailTemplate}</div>
            </>
          )}
        </Accordion>
      ))}
    </div>
  );
}


function OffersTab({ search }: { search: string }) {
  const s = search.toLowerCase();
  const filteredTemplates = s ? offerTemplates.filter(t => matchesSearch(t.name, search) || t.whenToUse.some(u => matchesSearch(u, search))) : offerTemplates;
  const filteredFormSections = s ? offerFormSections.filter(sec => matchesSearch(sec.name, search) || sec.fields.some(f => matchesSearch(f.field, search) || matchesSearch(f.details, search))) : offerFormSections;
  const filteredConcerns = s ? offerClauseConcerns.filter(c => matchesSearch(c.topic, search) || matchesSearch(c.description, search)) : offerClauseConcerns;
  const showPreOffer = !s || preOfferRequirements.some(r => matchesSearch(r, search));
  const showApproval = !s || approvalProcess.some(r => matchesSearch(r, search));
  const showSending = !s || sendingProcess.some(r => matchesSearch(r, search));
  const showIntern = !s || internConversionNotes.some(r => matchesSearch(r, search));
  const showBgCheck = !s || matchesSearch(backgroundCheckInfo, search);

  return (
    <div>
      {showPreOffer && (
        <div className="guide-section">
          <h3>Before Creating an Offer</h3>
          <div className="guide-note">
            {preOfferRequirements.map((r, i) => <p key={i}>{r}</p>)}
          </div>
        </div>
      )}
      {filteredTemplates.length > 0 && (
        <div className="guide-section">
          <h3>Available Offer Templates</h3>
          <table className="guide-table">
            <thead>
              <tr><th>Template</th><th>When to Use</th></tr>
            </thead>
            <tbody>
              {filteredTemplates.map((t) => (
                <tr key={t.name}>
                  <td><strong>{t.name}</strong></td>
                  <td><ul>{t.whenToUse.map((u, i) => <li key={i}>{u}</li>)}</ul></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {filteredFormSections.length > 0 && (
        <div className="guide-section">
          <h3>Completing Offer Forms</h3>
          {filteredFormSections.map((section) => (
            <Accordion
              key={section.id}
              title={section.name}
              badge={<span className="accordion-badge badge-active">{section.fields.length} fields</span>}
            >
              {section.notes && section.notes.length > 0 && (
                <div className="guide-note" style={{ marginBottom: 12 }}>
                  {section.notes.map((n, i) => <p key={i} style={{ margin: '4px 0', fontWeight: 600 }}>{n}</p>)}
                </div>
              )}
              <table className="guide-table" style={{ fontSize: '0.82rem' }}>
                <thead>
                  <tr>
                    <th>Field</th>
                    <th>Required</th>
                    <th>Details</th>
                    <th>Helper Info</th>
                  </tr>
                </thead>
                <tbody>
                  {section.fields.map((f) => (
                    <tr key={f.field}>
                      <td><strong>{f.field}</strong></td>
                      <td style={{ textAlign: 'center', color: f.required ? 'var(--color-green)' : 'var(--color-gray-500)' }}>
                        {f.required ? 'Yes' : 'No'}
                      </td>
                      <td>{f.details}</td>
                      <td style={{ fontSize: '0.78rem', color: 'var(--color-gray-500)' }}>{f.helperInfo || '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div style={{ marginTop: 12 }}>
                <strong style={{ fontSize: '0.85rem' }}>Applicable Templates:</strong>
                <ul style={{ margin: '4px 0 0 0', paddingLeft: 20 }}>
                  {section.applicableTemplates.map((t, i) => (
                    <li key={i} style={{ fontSize: '0.82rem', marginBottom: 2 }}>{t}</li>
                  ))}
                </ul>
              </div>
            </Accordion>
          ))}
        </div>
      )}
      {showApproval && (
        <div className="guide-section">
          <h3>Approval Process</h3>
          <ol>{approvalProcess.map((s, i) => <li key={i} style={{ marginBottom: 4 }}>{s}</li>)}</ol>
        </div>
      )}
      {showSending && (
        <div className="guide-section">
          <h3>Sending the Offer to the Candidate</h3>
          <ol>{sendingProcess.map((s, i) => <li key={i} style={{ marginBottom: 4 }}>{s}</li>)}</ol>
        </div>
      )}
      {showIntern && (
        <div className="guide-section">
          <h3>Intern Conversion Notes</h3>
          <ul>{internConversionNotes.map((n, i) => <li key={i}>{n}</li>)}</ul>
        </div>
      )}
      {filteredConcerns.length > 0 && (
        <div className="guide-section">
          <h3>Offer Clause Common Concerns</h3>
          {filteredConcerns.map((c) => (
            <Accordion key={c.topic} title={c.topic}>
              <p>{c.description}</p>
            </Accordion>
          ))}
        </div>
      )}
      {showBgCheck && (
        <div className="guide-section">
          <h3>Background Checks</h3>
          <p>{backgroundCheckInfo}</p>
        </div>
      )}
    </div>
  );
}

function InterviewsTab({ search }: { search: string }) {
  const s = search.toLowerCase();
  const filteredBands = s ? distanceBands.filter(b => matchesSearch(b.rangeKm, search) || matchesSearch(b.rangeMiles, search) || matchesSearch(b.travelTime, search) || matchesSearch(b.exceptions, search)) : distanceBands;
  const filteredExceptions = s ? approvalExceptions.filter(e => matchesSearch(e.type, search) || matchesSearch(e.description, search)) : approvalExceptions;
  const filteredGuidelines = s ? candidateExperienceGuidelines.filter(g => matchesSearch(g, search)) : candidateExperienceGuidelines;

  return (
    <div>
      {filteredBands.length > 0 && (
        <div className="guide-section">
          <h3>Distance Matrix</h3>
          <p style={{ fontSize: '0.82rem', color: 'var(--color-gray-500)', marginBottom: 8 }}>Last updated: {lastUpdated}</p>
          <table className="guide-table">
            <thead>
              <tr>
                <th>Distance</th>
                <th>Travel Time</th>
                <th>In-Person?</th>
                <th>Exceptions</th>
                <th>Travel Covered?</th>
              </tr>
            </thead>
            <tbody>
              {filteredBands.map((b) => (
                <tr key={b.id}>
                  <td><strong>{b.rangeKm}</strong><br/><span style={{ fontSize: '0.78rem', color: 'var(--color-gray-500)' }}>{b.rangeMiles}</span></td>
                  <td>{b.travelTime}</td>
                  <td style={{ fontWeight: 600, color: b.inPersonRequired ? 'var(--color-green)' : 'var(--color-gray-500)' }}>
                    {b.inPersonRequired ? 'Yes' : 'No'}
                  </td>
                  <td style={{ fontSize: '0.82rem' }}>{b.exceptions}</td>
                  <td>{b.travelReimbursement ? 'Yes' : 'No'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {filteredExceptions.length > 0 && (
        <div className="guide-section">
          <h3>Exceptions (require approval)</h3>
          <div className="guide-note">{exceptionApprovalRequired}</div>
          <ul>
            {filteredExceptions.map((e) => (
              <li key={e.type}><strong>{e.type}:</strong> {e.description}</li>
            ))}
          </ul>
        </div>
      )}
      {filteredGuidelines.length > 0 && (
        <div className="guide-section">
          <h3>Candidate Experience Guidelines</h3>
          <ul>{filteredGuidelines.map((g, i) => <li key={i}>{g}</li>)}</ul>
        </div>
      )}
    </div>
  );
}

function StepsTable({ steps }: { steps: ProcessStep[] }) {
  return (
    <table className="guide-table" style={{ fontSize: '0.82rem' }}>
      <thead>
        <tr>
          <th style={{ width: 50 }}>Step</th>
          <th style={{ width: 120 }}>Owner</th>
          <th>Detail</th>
        </tr>
      </thead>
      <tbody>
        {steps.map((s, i) => (
          <tr key={i}>
            <td style={{ textAlign: 'center', fontWeight: 600 }}>{s.step}</td>
            <td><strong>{s.owner}</strong></td>
            <td>{s.detail}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function ResourceList({ resources }: { resources: { label: string; description?: string; url?: string }[] }) {
  return (
    <div style={{ background: '#EFF6FF', border: '1px solid var(--color-primary)', borderRadius: 'var(--radius-sm, 8px)', padding: '10px 16px', margin: '8px 0 12px' }}>
      <strong style={{ fontSize: '0.82rem', color: 'var(--color-primary)' }}>Key Resources:</strong>
      <ul style={{ margin: '4px 0 0', paddingLeft: 20 }}>
        {resources.map((r, i) => (
          <li key={i} style={{ fontSize: '0.82rem', marginBottom: 2 }}>
            {r.url ? (
              <a href={r.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 700 }}>
                {r.label} ↗
              </a>
            ) : (
              <strong>{r.label}</strong>
            )}
            {r.description ? ` — ${r.description}` : ''}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SubsectionContent({ sub }: { sub: RecruitmentSubsection }) {
  return (
    <div style={{ marginBottom: 16, paddingLeft: 8, borderLeft: '3px solid var(--color-gray-200)', paddingTop: 4 }}>
      <h4 style={{ margin: '0 0 4px', fontSize: '0.9rem' }}>{sub.title}</h4>
      {sub.owner && <span className="guide-owner">Owner: {sub.owner}{sub.lastUpdated ? ` | Updated: ${sub.lastUpdated}` : ''}</span>}
      {sub.description && <p style={{ fontSize: '0.82rem', color: 'var(--color-gray-500)', margin: '4px 0' }}>{sub.description}</p>}
      {sub.resources && sub.resources.length > 0 && <ResourceList resources={sub.resources} />}
      {sub.notes && sub.notes.length > 0 && (
        <div className="guide-note" style={{ margin: '8px 0' }}>
          <ul style={{ margin: 0, paddingLeft: 16 }}>
            {sub.notes.map((n, i) => <li key={i} style={{ fontSize: '0.82rem', marginBottom: 4 }}>{n}</li>)}
          </ul>
        </div>
      )}
      {sub.steps && sub.steps.length > 0 && <StepsTable steps={sub.steps} />}
    </div>
  );
}

function RecruitmentTab({ search }: { search: string }) {
  const s = search.toLowerCase();
  const filteredLifecycle = s ? recruitmentLifecycleTable.filter(r => matchesSearch(r.process, search) || matchesSearch(r.owner, search) || matchesSearch(r.resource, search)) : recruitmentLifecycleTable;
  const filteredSections = s
    ? recruitmentSections.filter(sec =>
        matchesSearch(sec.title, search) ||
        matchesSearch(sec.description, search) ||
        (sec.resources && sec.resources.some(r => matchesSearch(r.label, search))) ||
        (sec.notes && sec.notes.some(n => matchesSearch(n, search))) ||
        (sec.steps && sec.steps.some(st => matchesSearch(st.detail, search) || matchesSearch(st.owner, search))) ||
        (sec.subsections && sec.subsections.some(sub =>
          matchesSearch(sub.title, search) || matchesSearch(sub.description, search) ||
          (sub.resources && sub.resources.some(r => matchesSearch(r.label, search)))
        ))
      )
    : recruitmentSections;

  return (
    <div>
      <div className="guide-note">
        Recruitment processes from the People Operations Process Guide.<br/>
        <strong>Classification:</strong> {processGuideInfo.classification} | <strong>Last updated:</strong> {processGuideInfo.lastUpdate}
      </div>

      {filteredLifecycle.length > 0 && (
        <div className="guide-section">
          <h3>Recruitment Process Overview</h3>
          <table className="guide-table" style={{ fontSize: '0.82rem' }}>
            <thead>
              <tr>
                <th>Process</th>
                <th>Owner</th>
                <th>Resource(s)</th>
              </tr>
            </thead>
            <tbody>
              {filteredLifecycle.map((r, i) => (
                <tr key={i}>
                  <td><strong>{r.process}</strong></td>
                  <td>{r.owner}</td>
                  <td style={{ fontSize: '0.78rem' }}>{r.resource}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {filteredSections.map((sec) => (
        <Accordion key={sec.id} title={sec.title} badge={sec.steps ? <span className="accordion-badge badge-active">{sec.steps.length} steps</span> : undefined}>
          {sec.owner && <span className="guide-owner">Owner: {sec.owner}{sec.lastUpdated ? ` | Updated: ${sec.lastUpdated}` : ''}</span>}
          {sec.description && <p style={{ fontSize: '0.85rem', color: 'var(--color-gray-500)', margin: '6px 0 12px' }}>{sec.description}</p>}
          {sec.resources && sec.resources.length > 0 && <ResourceList resources={sec.resources} />}
          {sec.notes && sec.notes.length > 0 && (
            <div className="guide-note" style={{ margin: '8px 0 12px' }}>
              <ul style={{ margin: 0, paddingLeft: 16 }}>
                {sec.notes.map((n, i) => <li key={i} style={{ fontSize: '0.82rem', marginBottom: 4 }}>{n}</li>)}
              </ul>
            </div>
          )}
          {sec.steps && sec.steps.length > 0 && <StepsTable steps={sec.steps} />}
          {sec.subsections && sec.subsections.map((sub, i) => (
            <SubsectionContent key={i} sub={sub} />
          ))}
        </Accordion>
      ))}
    </div>
  );
}

export default function Guides() {
  const [activeTab, setActiveTab] = useState('contracts');
  const [search, setSearch] = useState('');

  return (
    <section id="guides" className="guides">
      <div className="guides-inner">
        <h2 className="section-heading">Reference Guides</h2>
        <p className="section-subheading">Searchable, structured versions of all key Talent Acquisition resources.</p>

        <div className="guides-search">
          <input
            type="text"
            placeholder="Search across all guides..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="guides-tabs">
          {guideTabs.map((t) => (
            <button
              key={t.id}
              className={`guides-tab${activeTab === t.id ? ' active' : ''}`}
              onClick={() => { setActiveTab(t.id); }}
            >
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === 'contracts' && <ContractsTab search={search} />}
        {activeTab === 'offers' && <OffersTab search={search} />}
        {activeTab === 'interviews' && <InterviewsTab search={search} />}
        {activeTab === 'recruitment' && <RecruitmentTab search={search} />}
      </div>
    </section>
  );
}
