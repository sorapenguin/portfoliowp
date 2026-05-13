const skillCategories = [
  {
    label: 'バックエンド',
    accent: '#4B52A7',
    skills: ['Python', 'Django', 'Java', 'Spring Boot', 'PHP'],
  },
  {
    label: 'インフラ・DevOps',
    accent: '#2e7d6e',
    skills: ['Docker', 'Docker Compose', 'nginx', 'VPS (Linux)', "Let's Encrypt", 'PostgreSQL', 'Terraform'],
  },
  {
    label: 'AWS / クラウド',
    accent: '#E8750A',
    skills: [
      'EC2 / Auto Scaling',
      'Lambda',
      'ECS (Fargate)',
      'EKS',
      'S3 / CloudFront',
      'RDS / Aurora',
      'DynamoDB',
      'API Gateway',
      'SQS / SNS / Kinesis',
      'CloudFormation',
      'CloudWatch / X-Ray',
      'IAM / KMS / WAF',
    ],
  },
  {
    label: 'フロントエンド',
    accent: '#32839C',
    skills: ['JavaScript', 'HTML / CSS', 'React', 'Chart.js'],
  },
  {
    label: 'モバイル',
    accent: '#8B5CA7',
    skills: ['Kotlin', 'Android Studio'],
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
