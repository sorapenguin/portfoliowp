import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import Header from '../components/Header'
import Footer from '../components/Footer'

function WorkSection({ section, index }) {
  return (
    <div className="work-section">
      <div className="work-section-images">
        {section.images.map((src, i) => (
          <div className="work-section-img-wrap" key={i}>
            <img src={src} alt={`スクリーンショット ${index + 1}-${i + 1}`} />
          </div>
        ))}
      </div>
      <p className="work-section-caption">{section.caption}</p>
    </div>
  )
}

export default function WorkDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)
  const [showDetail, setShowDetail] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) {
    return (
      <>
        <Header />
        <div className="work-detail">
          <p>プロジェクトが見つかりません。</p>
          <Link to="/" className="back-link">← 制作物一覧に戻る</Link>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <div className="work-detail">
        <Link to="/" state={{ scrollTo: 'works' }} className="back-link">← 制作物一覧に戻る</Link>
        <h2>{project.title}</h2>
        <div className="tech-tags">
          {project.tech.map((t) => (
            <span className="tech-tag" key={t}>{t}</span>
          ))}
        </div>
        <p className="project-summary">{project.description}</p>
        {project.detail && (
          <div className="detail-section">
            <button
              className={`detail-toggle${showDetail ? ' open' : ''}`}
              onClick={() => setShowDetail((v) => !v)}
            >
              {showDetail ? '閉じる ▲' : '詳細を見る ▼'}
            </button>
            {showDetail && (
              <div className="project-detail">
                <p style={{ whiteSpace: 'pre-wrap' }}>{project.detail}</p>
              </div>
            )}
          </div>
        )}
        <div className="gallery-links" style={{ justifyContent: 'flex-start', width: 'auto', margin: '32px 0 48px' }}>
          {project.productUrl ? (
            <a href={project.productUrl} target="_blank" rel="noopener noreferrer" className="btn btn-product">
              プロダクトを見る
            </a>
          ) : project.inProgress ? (
            <span className="btn btn-product btn-disabled">🚧 開発中</span>
          ) : null}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-github">
              GitHub
            </a>
          )}
        </div>

        {project.sections?.length > 0 && (
          <div className="work-sections">
            <h3 className="work-sections-title">スクリーンショット</h3>
            {project.sections.map((section, i) => (
              <WorkSection section={section} index={i} key={i} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}
