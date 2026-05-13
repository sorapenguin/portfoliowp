import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const providerColors = {
  AWS:   { bg: '#FF9900', text: '#fff' },
  Azure: { bg: '#0078D4', text: '#fff' },
  GCP:   { bg: '#34A853', text: '#fff' },
}

function LearningCard({ record }) {
  const color = providerColors[record.provider] ?? { bg: '#758BAF', text: '#fff' }

  return (
    <div className="lh-card">
      <div className="lh-card-header" style={{ backgroundColor: color.bg }}>
        <span className="lh-provider-badge" style={{ color: color.text }}>
          {record.provider}
        </span>
        {record.examCode && (
          <span className="lh-exam-code" style={{ color: color.text }}>
            {record.examCode}
          </span>
        )}
        {record.status === 'in-progress' && (
          <span className="lh-wip-badge">学習中</span>
        )}
      </div>
      <div className="lh-card-body">
        <h4 className="lh-exam-name">{record.exam}</h4>
        {record.description && (
          <p className="lh-description">{record.description}</p>
        )}
      </div>
      <div className="lh-card-footer">
        <Link to={`/learning/${record.id}`} className="btn btn-detail">
          詳細を見る
        </Link>
      </div>
    </div>
  )
}

export default function LearningHistory() {
  const [records, setRecords] = useState([])
  const [activeProvider, setActiveProvider] = useState('すべて')

  useEffect(() => {
    const base = import.meta.env.BASE_URL
    fetch(`${base}learning/manifest.json`)
      .then((res) => res.json())
      .then(setRecords)
      .catch(() => setRecords([]))
  }, [])

  const providers = ['すべて', ...new Set(records.map((r) => r.provider))]

  const filtered = activeProvider === 'すべて'
    ? records
    : records.filter((r) => r.provider === activeProvider)

  return (
    <section id="learning">
      <div className="container">
        <h2 className="lh-title">
          学習履歴 <span className="sub-title">Learning</span>
        </h2>
        <h3 className="gallery-title">ハンズオンラボ</h3>

        <div className="lh-filter">
          {providers.map((p) => (
            <button
              key={p}
              className={`lh-filter-btn${activeProvider === p ? ' active' : ''}`}
              onClick={() => setActiveProvider(p)}
            >
              {p}
            </button>
          ))}
        </div>

        <div className="lh-grid">
          {filtered.length > 0
            ? filtered.map((record) => (
                <LearningCard key={record.id} record={record} />
              ))
            : <p className="lh-empty">準備中です</p>
          }
        </div>
      </div>
    </section>
  )
}
