import mainImg from '../assets/images/main.jpg'

export default function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${mainImg})` }}
    >
      <h2 className="visually-hidden">トップ画像セクション</h2>
    </section>
  )
}
