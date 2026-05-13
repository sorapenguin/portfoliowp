import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function LearningDetail() {
  const { id } = useParams()
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const base = import.meta.env.BASE_URL
    fetch(`${base}learning/${id}.md`)
      .then((res) => {
        if (!res.ok) throw new Error('not found')
        return res.text()
      })
      .then((text) => {
        setContent(text)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [id])

  return (
    <>
      <Header />
      <div className="aws-sap-page">
        <div className="container">
          <Link to="/" className="back-link">← 学習履歴に戻る</Link>
          {loading ? (
            <p className="aws-sap-loading">読み込み中...</p>
          ) : content ? (
            <div className="aws-sap-content">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          ) : (
            <p>コンテンツを読み込めませんでした。</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}
