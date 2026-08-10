import { Link } from 'react-router-dom'
import { CLASS_PRICE, classes } from '../data/classes'

const featured = classes.slice(0, 4)

export function Home() {
  return (
    <>
      <section className="hero" aria-label="Bake & Bliss introduction">
        <div className="hero__media" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=2000&q=80"
            alt=""
          />
          <div className="hero__veil" />
        </div>
        <div className="hero__content">
          <p className="hero__brand animate-rise">Bake & Bliss</p>
          <h1 className="hero__headline animate-rise delay-1">Cakes made with heart, classes taught with care.</h1>
          <p className="hero__support animate-rise delay-2">
            Order celebration cakes online, or learn baking through video sessions you can unlock anytime.
          </p>
          <div className="hero__actions animate-rise delay-3">
            <Link className="btn btn--primary" to="/order">
              Order a cake
            </Link>
            <Link className="btn btn--ghost" to="/classes">
              Browse classes
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--split" aria-labelledby="classes-intro">
        <div className="section__copy">
          <h2 id="classes-intro">Video baking classes</h2>
          <p>
            Each session is LKR {CLASS_PRICE.toLocaleString('en-LK')}/=. Pay, message us on WhatsApp, and get access to
            the class video.
          </p>
          <Link className="text-link" to="/classes">
            See all sessions
          </Link>
        </div>
        <ul className="feature-list">
          {featured.map((item, index) => (
            <li key={item.id} className="feature-list__item" style={{ animationDelay: `${0.08 * index}s` }}>
              <Link to={`/classes/${item.id}`}>
                <span className="feature-list__title">{item.title}</span>
                <span className="feature-list__meta">{item.level}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="section section--order-band" aria-labelledby="order-intro">
        <div className="order-band">
          <div className="order-band__text">
            <h2 id="order-intro">Order cakes online</h2>
            <p>Birthdays, weddings, jar cakes, cupcakes — tell us what you need and we’ll confirm on WhatsApp.</p>
            <Link className="btn btn--primary" to="/order">
              Start your order
            </Link>
          </div>
          <div className="order-band__visual" aria-hidden="true">
            <img
              src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=80"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  )
}
