import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function Works() {
  return (
    <section id="works">
      <div className="container">
        <h2 className="works-title">制作物 <span className="sub-title">Works</span></h2>
        <h3 className="gallery-title">ポートフォリオ一覧</h3>

        <div className="gallery">
          {projects.filter((project) => !project.hidden).map((project) => (
            <div className="gallery-item" key={project.slug}>
              <Link to={`/works/${project.slug}`} className="gallery-thumb-link">
                {project.inProgress && (
                  <span className="wip-badge">🚧 開発中</span>
                )}
                <img src={project.thumbnail} alt={project.title} />
              </Link>
              <h4 className="text-label">{project.title}</h4>
              <p className="gallery-text">{project.description}</p>
              <div className="gallery-links">
                {project.comingSoon ? (
                  <>
                    <span className="btn btn-product btn-disabled">プロダクト</span>
                    <span className="btn btn-github btn-disabled">GitHub</span>
                  </>
                ) : project.inProgress ? (
                  <>
                    <span className="btn btn-product btn-disabled">🚧 開発中</span>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-github"
                      >
                        GitHub
                      </a>
                    )}
                  </>
                ) : (
                  <>
                    {project.productUrl && (
                      <a
                        href={project.productUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-product"
                      >
                        プロダクト
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-github"
                      >
                        GitHub
                      </a>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
