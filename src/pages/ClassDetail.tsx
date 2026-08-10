import { Link, useParams } from 'react-router-dom'
import { CLASS_PRICE, WHATSAPP_DISPLAY, getClassById } from '../data/classes'
import { classAccessMessage, whatsappUrl } from '../lib/whatsapp'

export function ClassDetail() {
  const { id } = useParams()
  const cakeClass = id ? getClassById(id) : undefined

  if (!cakeClass) {
    return (
      <div className="page page--narrow">
        <h1>Class not found</h1>
        <p>That session isn’t available. Browse the full list instead.</p>
        <Link className="btn btn--primary" to="/classes">
          Back to classes
        </Link>
      </div>
    )
  }

  const buyUrl = whatsappUrl(classAccessMessage(cakeClass.title))

  return (
    <div className="page">
      <section className="class-detail">
        <div className="class-detail__visual">
          <img src={cakeClass.image} alt="" />
          <div className="video-lock" aria-hidden="true">
            <div className="video-lock__panel">
              <span className="video-lock__label">Video locked</span>
              <p>Pay LKR {CLASS_PRICE.toLocaleString('en-LK')}/= then WhatsApp for access.</p>
            </div>
          </div>
        </div>

        <div className="class-detail__content">
          <p className="eyebrow">{cakeClass.level} · {cakeClass.duration}</p>
          <h1>{cakeClass.title}</h1>
          <p className="lede">{cakeClass.description}</p>

          <div className="price-block">
            <span className="price-block__amount">LKR {CLASS_PRICE.toLocaleString('en-LK')}/=</span>
            <span className="price-block__note">One session · lifetime class access after payment</span>
          </div>

          <ol className="steps">
            <li>Choose this class and prepare payment of LKR {CLASS_PRICE.toLocaleString('en-LK')}/=.</li>
            <li>Message Bake & Bliss on WhatsApp {WHATSAPP_DISPLAY}.</li>
            <li>Share your payment proof and receive the class video link.</li>
          </ol>

          <div className="class-detail__actions">
            <a className="btn btn--primary" href={buyUrl} target="_blank" rel="noreferrer">
              Pay & get access on WhatsApp
            </a>
            <Link className="btn btn--ghost" to="/classes">
              All classes
            </Link>
          </div>

          <div className="topic-block">
            <h2>What you’ll learn</h2>
            <ul>
              {cakeClass.topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
