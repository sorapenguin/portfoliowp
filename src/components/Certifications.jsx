const certCategories = [
  {
    label: 'AWS 認定',
    note: '11冠',
    accent: '#FF9900',
    fullWidth: true,
    certs: [
      'Cloud Practitioner (CLF)',
      'Solutions Architect – Associate (SAA)',
      'SysOps Administrator – Associate (SOA)',
      'Developer – Associate (DVA)',
      'Data Engineer – Associate (DEA)',
      'AI Practitioner (AIF)',
      'Solutions Architect – Professional (SAP)',
      'DevOps Engineer – Professional (DOP)',
      'Security – Specialty (SCS)',
      'Advanced Networking – Specialty (ANS)',
      'Machine Learning – Specialty (MLS)',
    ],
  },
  {
    label: 'LPIC',
    note: 'Level 3まで',
    accent: '#B8860B',
    certs: [
      'LPIC-1 Exam 101',
      'LPIC-1 Exam 102',
      'LPIC-2 Exam 201',
      'LPIC-2 Exam 202',
      'LPIC-3 Security (303)',
    ],
  },
  {
    label: 'Oracle',
    accent: '#C74634',
    certs: ['ORACLE MASTER Silver SQL 2019', 'Oracle Database Administration I (Silver DBA)'],
  },
  {
    label: '情報処理技術者試験',
    accent: '#1a6fb5',
    certs: ['応用情報技術者', '情報処理安全確保支援士（未登録）', 'ネットワークスペシャリスト'],
  },
  {
    label: 'TOEIC',
    accent: '#005BAC',
    certs: ['910点（最新 845点）'],
  },
]

const studiedCerts = [
  'LPIC-3 300',
  'ORACLE MASTER Gold DBA 2019',
  'Oracle Certified Java Programmer Silver SE 17',
  'CCNP ENARSI',
  'CCNP ENCOR',
]

import LearningHistory from './LearningHistory'

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="container">
        <h2 className="section-title">
          資格・学習 <span className="sub-title">Certifications</span>
        </h2>
        <p className="section-lead">
          インフラ・クラウド・データベース・ネットワークを一通り。TOEIC 910 点。
        </p>

        <div className="cert-grid">
          {certCategories.map((cat) => (
            <div
              key={cat.label}
              className={`cert-category${cat.fullWidth ? ' full-width' : ''}`}
              style={{ borderTopColor: cat.accent }}
            >
              <div className="cert-category-header">
                <h3 className="cert-category-label" style={{ color: cat.accent }}>
                  {cat.label}
                </h3>
                {cat.note && (
                  <span className="cert-count-badge" style={{ backgroundColor: cat.accent }}>
                    {cat.note}
                  </span>
                )}
              </div>
              <div className="cert-tags">
                {cat.certs.map((cert) => (
                  <span key={cert} className="cert-tag">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="cert-studied-section">
          <p className="cert-studied-label">受験経験あり</p>
          <div className="cert-studied-tags">
            {studiedCerts.map((cert) => (
              <span key={cert} className="cert-studied-tag">
                {cert}
              </span>
            ))}
          </div>
        </div>

        <LearningHistory />
      </div>
    </section>
  )
}
