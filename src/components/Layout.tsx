import { Outlet, NavLink, Link } from 'react-router-dom'
import { WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from '../data/classes'
import { whatsappUrl } from '../lib/whatsapp'

export function Layout() {
  return (
    <div className="site">
      <header className="site-header">
        <div className="site-header__inner">
          <Link to="/" className="brand-mark" aria-label="Bake & Bliss home">
            <span className="brand-mark__script">Bake & Bliss</span>
          </Link>
          <nav className="site-nav" aria-label="Primary">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/classes">Classes</NavLink>
            <NavLink to="/order">Order Cakes</NavLink>
          </nav>
          <a
            className="header-wa"
            href={whatsappUrl('Hello Bake & Bliss! I have a question.')}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <div>
            <p className="site-footer__brand">Bake & Bliss</p>
            <p className="site-footer__tag">Handmade cakes & online baking classes.</p>
          </div>
          <div className="site-footer__links">
            <Link to="/classes">Video classes</Link>
            <Link to="/order">Order online</Link>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">
              {WHATSAPP_DISPLAY}
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
