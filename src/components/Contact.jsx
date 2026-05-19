export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h3 className="contact-title">お問い合わせ</h3>

        <div className="contact-body">
          <p className="contact-description">
            採用・お仕事のご連絡は、下のボタンから GitHub Issue を作成してください。
            <br />
            件名とメッセージをご記入いただければ確認次第ご返信します。
          </p>

          <a
            className="contact-github-btn"
            href="https://github.com/sorapenguin/portfoliowp/issues/new?labels=contact&title=%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Issue でお問い合わせ
          </a>
        </div>
      </div>
    </section>
  )
}
