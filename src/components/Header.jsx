import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  const scrollTo = (e, id) => {
    e.preventDefault()
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
    }
  }

  return (
    <header className="header">
      <div className="container">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h1 className="logo">Projects Portfolio</h1>
        </Link>
        <nav className="header-right">
          <ul>
            <li><a href="#about" onClick={(e) => scrollTo(e, 'about')}>自己紹介</a></li>
            <li><a href="#skills" onClick={(e) => scrollTo(e, 'skills')}>スキル</a></li>
            <li><a href="#works" onClick={(e) => scrollTo(e, 'works')}>制作物</a></li>
            <li><a href="#learning" onClick={(e) => scrollTo(e, 'learning')}>学習履歴</a></li>
            <li><a href="#certifications" onClick={(e) => scrollTo(e, 'certifications')}>資格</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
