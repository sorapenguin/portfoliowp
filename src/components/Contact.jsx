export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h3 className="contact-title">お問い合わせフォーム</h3>

        <div className="contact-form">
          <div className="form-group">
            <div className="label-row">
              <span className="required">必須</span>
              <label>名前</label>
            </div>
            <input type="text" />
          </div>

          <div className="form-group">
            <div className="label-row">
              <span className="required">必須</span>
              <label>メールアドレス</label>
            </div>
            <input type="email" />
          </div>

          <div className="form-group">
            <div className="label-row">
              <span className="required">必須</span>
              <label>年齢</label>
            </div>
            <input type="text" />
          </div>

          <div className="form-group">
            <div className="label-row">
              <span className="required">必須</span>
              <label>お問い合わせ内容</label>
            </div>
            <textarea></textarea>
          </div>
        </div>

        <button className="submit-btn">送信</button>
      </div>
    </section>
  )
}
