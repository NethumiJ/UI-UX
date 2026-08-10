import { useState } from 'react'
import type { FormEvent } from 'react'
import { cakeOrderMessage, whatsappUrl } from '../lib/whatsapp'

const cakeTypes = [
  'Butter cake',
  'Chocolate cake',
  'Marble cake',
  'Ribbon cake',
  'Gateau cake',
  'Jar cakes',
  'Cupcakes',
  'Wedding cake',
  'Custom / other',
]

const sizes = ['0.5 kg', '1 kg', '1.5 kg', '2 kg', '2.5 kg', '3 kg+', 'Cupcakes (dozen)', 'Jar set']

const flavours = [
  'Vanilla',
  'Chocolate',
  'Butter',
  'Red velvet',
  'Marble',
  'Fruit',
  'Coffee',
  'Custom flavour',
]

type FormState = {
  name: string
  phone: string
  cakeType: string
  size: string
  flavour: string
  date: string
  quantity: string
  message: string
  notes: string
}

const initial: FormState = {
  name: '',
  phone: '',
  cakeType: 'Butter cake',
  size: '1 kg',
  flavour: 'Vanilla',
  date: '',
  quantity: '1',
  message: '',
  notes: '',
}

export function Order() {
  const [form, setForm] = useState<FormState>(initial)

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault()
    const url = whatsappUrl(cakeOrderMessage(form))
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="page page--order">
      <header className="page-hero">
        <p className="eyebrow">Online orders</p>
        <h1>Order cakes from Bake & Bliss</h1>
        <p className="page-hero__support">
          Fill in your cake details and send the order on WhatsApp. We’ll confirm availability, price, and delivery.
        </p>
      </header>

      <form className="order-form" onSubmit={onSubmit}>
        <div className="order-form__grid">
          <label>
            <span>Your name</span>
            <input
              required
              value={form.name}
              onChange={(e) => update('name', e.target.value)}
              placeholder="Full name"
            />
          </label>
          <label>
            <span>Phone number</span>
            <input
              required
              type="tel"
              value={form.phone}
              onChange={(e) => update('phone', e.target.value)}
              placeholder="07X XXX XXXX"
            />
          </label>
          <label>
            <span>Cake type</span>
            <select value={form.cakeType} onChange={(e) => update('cakeType', e.target.value)}>
              {cakeTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span>Size</span>
            <select value={form.size} onChange={(e) => update('size', e.target.value)}>
              {sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span>Flavour</span>
            <select value={form.flavour} onChange={(e) => update('flavour', e.target.value)}>
              {flavours.map((flavour) => (
                <option key={flavour} value={flavour}>
                  {flavour}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span>Quantity</span>
            <input
              required
              type="number"
              min="1"
              value={form.quantity}
              onChange={(e) => update('quantity', e.target.value)}
            />
          </label>
          <label>
            <span>Needed by</span>
            <input required type="date" value={form.date} onChange={(e) => update('date', e.target.value)} />
          </label>
          <label className="span-2">
            <span>Message on cake</span>
            <input
              value={form.message}
              onChange={(e) => update('message', e.target.value)}
              placeholder="Happy Birthday…"
            />
          </label>
          <label className="span-2">
            <span>Extra notes</span>
            <textarea
              rows={4}
              value={form.notes}
              onChange={(e) => update('notes', e.target.value)}
              placeholder="Colours, design ideas, delivery address, allergies…"
            />
          </label>
        </div>

        <div className="order-form__footer">
          <p>Your order opens in WhatsApp so Bake & Bliss can confirm everything personally.</p>
          <button className="btn btn--primary" type="submit">
            Send order on WhatsApp
          </button>
        </div>
      </form>
    </div>
  )
}
