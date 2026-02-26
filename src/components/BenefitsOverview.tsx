import { useState } from 'react';
import './BenefitsOverview.css';
import { benefitCategories, perksAndPrograms, planProviders, waitingPeriod, benefitsEligibility, perksEligibility, planYear } from '../data/benefits';

function BenefitCard({ category }: { category: typeof benefitCategories[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="benefit-card">
      <div className="benefit-card-header" onClick={() => setOpen(!open)}>
        <div className="benefit-card-title">
          <span className="benefit-card-icon">{category.icon}</span>
          <span className="benefit-card-name">{category.title}</span>
        </div>
        <span className={`benefit-card-chevron${open ? ' open' : ''}`}>▼</span>
      </div>
      {open && (
        <div className="benefit-card-body">
          {category.items.map((item) => (
            <div key={item.name} className="benefit-item">
              <div className="benefit-item-name">{item.name}</div>
              <ul>
                {item.details.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function BenefitsOverview() {
  return (
    <section id="benefits-overview" className="benefits-overview">
      <div className="benefits-inner">
        <h2 className="section-heading">Benefits Overview</h2>
        <p className="section-subheading">Quick-reference for US benefits, perks, and programs ({planYear}).</p>

        <div className="benefits-meta">
          <div className="benefits-meta-item">{benefitsEligibility}</div>
          <div className="benefits-meta-item">
            Salaried: {waitingPeriod.salaried}
          </div>
          <div className="benefits-meta-item">
            Hourly: {waitingPeriod.hourly}
          </div>
        </div>

        <div className="benefits-grid">
          {benefitCategories.map((cat) => (
            <BenefitCard key={cat.id} category={cat} />
          ))}
        </div>

        <div className="perks-section">
          <h3>Perks & Programs</h3>
          <p className="perks-subtitle">{perksEligibility}</p>
          <div className="perks-grid">
            {perksAndPrograms.map((perk) => (
              <div key={perk.name} className="perk-card">
                <div className="perk-name">{perk.name}</div>
                {perk.amount && <div className="perk-amount">{perk.amount}</div>}
                <div className="perk-desc">{perk.description}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="providers-section">
          <h4>Plan Providers</h4>
          <div className="providers-grid">
            <div className="provider-item"><strong>Broker:</strong> {planProviders.broker}</div>
            <div className="provider-item"><strong>Medical:</strong> {planProviders.medical}</div>
            <div className="provider-item"><strong>Dental:</strong> {planProviders.dental}</div>
            <div className="provider-item"><strong>Vision:</strong> {planProviders.vision}</div>
            <div className="provider-item"><strong>Life/AD&D/STD/LTD:</strong> {planProviders.lifeAddStdLtd}</div>
            <div className="provider-item"><strong>HSA:</strong> {planProviders.hsa}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
