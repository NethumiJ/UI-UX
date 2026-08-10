import { CLASS_PRICE, WHATSAPP_NUMBER } from '../data/classes'

export function whatsappUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export function classAccessMessage(classTitle: string): string {
  return [
    `Hello Bake & Bliss!`,
    ``,
    `I want to buy access to the video class:`,
    `• Class: ${classTitle}`,
    `• Fee: LKR ${CLASS_PRICE.toLocaleString('en-LK')}/=`,
    ``,
    `Please share payment details and unlock my class access after payment.`,
  ].join('\n')
}

export function cakeOrderMessage(details: {
  name: string
  phone: string
  cakeType: string
  size: string
  flavour: string
  date: string
  quantity: string
  message: string
  notes: string
}): string {
  return [
    `Hello Bake & Bliss! I would like to order a cake online.`,
    ``,
    `Name: ${details.name}`,
    `Phone: ${details.phone}`,
    `Cake: ${details.cakeType}`,
    `Size: ${details.size}`,
    `Flavour: ${details.flavour}`,
    `Quantity: ${details.quantity}`,
    `Needed by: ${details.date}`,
    details.message ? `Cake message: ${details.message}` : null,
    details.notes ? `Notes: ${details.notes}` : null,
    ``,
    `Please confirm availability and total price. Thank you!`,
  ]
    .filter(Boolean)
    .join('\n')
}
