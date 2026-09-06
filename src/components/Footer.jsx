// __SITE_LAST_UPDATED__ は vite.config.js が直近のコミット日時を埋め込む（手動更新しない）
const lastUpdated = new Date(__SITE_LAST_UPDATED__).toLocaleDateString('ja-JP', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
})

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <p className="footer-updated">サイト最終更新: {lastUpdated}</p>
        <p className="footer-text">&copy; 2026 All Rights Reserved.</p>
      </div>
    </footer>
  )
}
