import { Link } from 'react-router-dom'
import { projects, taglines, workGroups } from '../data/projects'

const bySlug = Object.fromEntries(projects.map((p) => [p.slug, p]))

function Badge({ project }) {
  if (project.offline) return <span className="work-badge off">停止中</span>
  if (project.inProgress) return <span className="work-badge wip">開発中</span>
  if (project.productUrl) return <span className="work-badge live">公開中</span>
  return null
}

function ExternalLink({ project, className }) {
  if (!project.productUrl || project.offline) return null
  const isRelease = project.productUrl.includes('github.com')
  return (
    <a
      href={project.productUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={(e) => e.stopPropagation()}
    >
      {isRelease ? 'APK を入手 ↗' : 'サービスを開く ↗'}
    </a>
  )
}

function FeaturedCard({ project }) {
  return (
    <article className="work-card featured">
      <Link to={`/works/${project.slug}`} className="work-card-thumb">
        <img src={project.thumbnail} alt={project.title} loading="lazy" />
      </Link>
      <div className="work-card-body">
        <div className="work-card-head">
          <h4 className="work-card-title">
            <Link to={`/works/${project.slug}`}>{project.title}</Link>
          </h4>
          <Badge project={project} />
        </div>
        <p className="work-card-tagline">{taglines[project.slug]}</p>
        <div className="work-card-foot">
          <ExternalLink project={project} className="work-link primary" />
          <Link to={`/works/${project.slug}`} className="work-link">
            詳しく見る
          </Link>
        </div>
      </div>
    </article>
  )
}

function CompactCard({ project }) {
  return (
    <article className="work-card compact">
      <Link to={`/works/${project.slug}`} className="work-card-thumb">
        <img src={project.thumbnail} alt={project.title} loading="lazy" />
      </Link>
      <div className="work-card-body">
        <div className="work-card-head">
          <h4 className="work-card-title">
            <Link to={`/works/${project.slug}`}>{project.title}</Link>
          </h4>
          <Badge project={project} />
        </div>
        <p className="work-card-tagline">{taglines[project.slug]}</p>
        <div className="work-card-foot">
          <ExternalLink project={project} className="work-link primary" />
          <Link to={`/works/${project.slug}`} className="work-link">
            詳しく見る
          </Link>
        </div>
      </div>
    </article>
  )
}

function ListRow({ project }) {
  return (
    <Link to={`/works/${project.slug}`} className="work-row">
      <span className="work-row-title">{project.title}</span>
      <span className="work-row-tagline">{taglines[project.slug]}</span>
      <span className="work-row-meta">
        <Badge project={project} />
        <span className="work-row-arrow" aria-hidden="true">→</span>
      </span>
    </Link>
  )
}

export default function Works() {
  return (
    <section id="works">
      <div className="container">
        <h2 className="section-title">
          制作物 <span className="sub-title">Works</span>
        </h2>
        <p className="section-lead">
          学習サービスを軸に 21 件。触れるものから順に並べています。
        </p>

        {workGroups.map((group) => {
          const items = group.slugs.map((s) => bySlug[s]).filter(Boolean)
          return (
            <div className="work-group" key={group.id}>
              <div className="work-group-head">
                <h3 className="work-group-label">
                  {group.label}
                  <span className="work-group-count">{items.length}</span>
                </h3>
                <p className="work-group-note">{group.note}</p>
              </div>

              {group.variant === 'featured' && (
                <div className="work-grid featured">
                  {items.map((p) => (
                    <FeaturedCard project={p} key={p.slug} />
                  ))}
                </div>
              )}
              {group.variant === 'compact' && (
                <div className="work-grid compact">
                  {items.map((p) => (
                    <CompactCard project={p} key={p.slug} />
                  ))}
                </div>
              )}
              {group.variant === 'list' && (
                <div className="work-list">
                  {items.map((p) => (
                    <ListRow project={p} key={p.slug} />
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
