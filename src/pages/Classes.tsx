import { Link } from 'react-router-dom'
import { CLASS_PRICE, WHATSAPP_DISPLAY, classes } from '../data/classes'

export function Classes() {
  return (
    <div className="page">
      <header className="page-hero">
        <p className="eyebrow">Video sessions</p>
        <h1>Baking classes at Bake & Bliss</h1>
        <p className="page-hero__support">
          Every class is LKR {CLASS_PRICE.toLocaleString('en-LK')}/=. After payment, WhatsApp us at {WHATSAPP_DISPLAY}{' '}
          to unlock your class video access.
        </p>
      </header>

      <section className="class-grid" aria-label="Available classes">
        {classes.map((item) => (
          <article key={item.id} className="class-row">
            <Link to={`/classes/${item.id}`} className="class-row__media">
              <img src={item.image} alt="" loading="lazy" />
            </Link>
            <div className="class-row__body">
              <div className="class-row__meta">
                <span>{item.level}</span>
                <span>{item.duration}</span>
                <span>LKR {CLASS_PRICE.toLocaleString('en-LK')}/=</span>
              </div>
              <h2>
                <Link to={`/classes/${item.id}`}>{item.title}</Link>
              </h2>
              <p>{item.short}</p>
              <Link className="btn btn--primary btn--sm" to={`/classes/${item.id}`}>
                Buy access
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}
