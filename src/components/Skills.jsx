const skillCategories = [
  {
    label: 'インフラ・DevOps',
    accent: '#2e7d6e',
    skills: ['Docker', 'Docker Compose', 'nginx', 'Traefik', 'VPS（Linux）', 'AWS', "Let's Encrypt", 'PostgreSQL', 'GitHub Actions'],
  },
  {
    label: 'バックエンド',
    accent: '#4B52A7',
    skills: ['Python', 'Django', 'Java', 'Spring Boot', 'PHP', 'Kotlin / Ktor', 'Exposed ORM', 'JWT', 'BCrypt', 'HikariCP'],
  },
  {
    label: 'Android',
    accent: '#8B5CA7',
    skills: ['Kotlin', 'Jetpack Compose', 'MVVM', 'StateFlow', 'Coroutines', 'Hilt', 'Room', 'DataStore', 'WorkManager', 'Retrofit'],
  },
  {
    label: 'フロントエンド',
    accent: '#32839C',
    skills: ['JavaScript', 'HTML / CSS', 'React', 'Vite', 'Chart.js'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="skills-heading">
          技術スタック <span className="sub-title">Skills</span>
        </h2>
        <div className="skills-grid">
          {skillCategories.map((cat) => (
            <div
              className="skill-category"
              key={cat.label}
              style={{ borderTopColor: cat.accent }}
            >
              <h3 className="skill-category-label" style={{ color: cat.accent }}>
                {cat.label}
              </h3>
              <div className="skill-tags">
                {cat.skills.map((s) => (
                  <span className="skill-tag" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
