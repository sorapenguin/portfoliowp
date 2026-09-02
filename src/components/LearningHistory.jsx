import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const providerColors = {
  AWS: '#FF9900',
  Azure: '#0078D4',
  GCP: '#34A853',
  CNCF: '#326CE5',
  HashiCorp: '#844FBA',
}

export default function LearningHistory() {
  const [records, setRecords] = useState([])

  useEffect(() => {
    const base = import.meta.env.BASE_URL
    fetch(`${base}learning/manifest.json`)
      .then((res) => res.json())
      .then(setRecords)
      .catch(() => setRecords([]))
  }, [])

  if (records.length === 0) return null

  return (
    <div id="learning" className="learning-strip">
      <div className="learning-strip-head">
        <h3 className="learning-strip-title">ハンズオン学習ログ</h3>
        <p className="learning-strip-note">
          資格の裏で実際に手を動かした記録です（{records.length} 試験分・クリックで詳細）
        </p>
      </div>
      <div className="learning-chips">
        {records.map((r) => (
          <Link
            to={`/learning/${r.id}`}
            className="learning-chip"
            key={r.id}
            style={{ '--chip-accent': providerColors[r.provider] ?? '#758BAF' }}
          >
            <span className="learning-chip-code">{r.examCode}</span>
            <span className="learning-chip-name">{r.exam}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
