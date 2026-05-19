import img01 from '../assets/images/img01.jpg'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="about-title">
          自己紹介 <span className="sub-title">Self introduction</span>
        </h2>

        <p className="example">
          本サイトは、学習の成果として制作したアプリ・Webサービスをまとめたポートフォリオです。
          現在はWebアプリ開発を中心に、バックエンド（Django / Spring Boot）からインフラ（Docker / VPS / Nginx / PostgreSQL）まで幅広く学習し、
          「実際に動くものを作る」ことを意識して開発に取り組んでいます。
          <br />
          <br />
          制作物では、ユーザー視点での使いやすさや、保守しやすい構成・設計を意識しながら改善を重ねています。
        </p>

        <div className="about-image">
          <img src={img01} alt="ポートフォリオ紹介画像" />
        </div>

        <div className="card-area">
          <div className="card left-card">
            <h3 className="card-title">得意・興味のある分野</h3>
            <h3 className="card-subtitle">Interests</h3>
            <ul className="card-list">
              <li>Webアプリ開発（Django / Spring Boot）</li>
              <li>API設計・DB設計（PostgreSQL）</li>
              <li>Dockerを用いた環境構築・デプロイ</li>
            </ul>
          </div>

          <div className="card right-card">
            <h3 className="card-title">関連リンク</h3>
            <h3 className="card-subtitle">Links</h3>
            <ul className="card-list">
              <li><a href="https://github.com/sorapenguin" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}