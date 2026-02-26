import './GemResources.css';

const gems = [
  {
    name: 'Job Posting Generator',
    description: 'Generate formatted Greenhouse job postings from a pasted job description.',
    url: 'https://gemini.google.com/gem/1r0wPSoF-QiqkrNvUi_AgoA9eKA2XPXTs?usp=sharing',
  },
  {
    name: 'Interview Transcription Summary Q/A Style',
    description: 'Summarize interview transcriptions into a structured Q&A format.',
    url: 'https://gemini.google.com/gem/1h7GX8HWGFgKFnWv2iCiEhbHYL66YFWYF?usp=sharing',
  },
  {
    name: 'HEADHNT',
    description: 'AI-powered sourcing and candidate research assistant.',
    url: 'https://gemini.google.com/gem/1BEKkpPbMDIrReN0OAKH25ElsXUSXHEk5?usp=sharing',
  },
];

export default function GemResources() {
  return (
    <section id="gem-resources" className="gem-resources">
      <div className="gem-resources-inner">
        <h2 className="section-heading">Gemini GEMs</h2>
        <p className="section-subheading">AI-powered tools built for the Talent Acquisition team.</p>
        <div className="gem-grid">
          {gems.map((gem) => (
            <a
              key={gem.name}
              href={gem.url}
              target="_blank"
              rel="noopener noreferrer"
              className="gem-card"
            >
              <div className="gem-card-icon">✨</div>
              <h3 className="gem-card-name">{gem.name}</h3>
              <p className="gem-card-desc">{gem.description}</p>
              <span className="gem-card-link">Open in Gemini ↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
