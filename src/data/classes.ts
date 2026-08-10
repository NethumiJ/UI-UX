export type CakeClass = {
  id: string
  title: string
  short: string
  description: string
  duration: string
  level: string
  image: string
  topics: string[]
}

export const CLASS_PRICE = 2000
export const WHATSAPP_NUMBER = '9703456448'
export const WHATSAPP_DISPLAY = '+970 345 6448'

export const classes: CakeClass[] = [
  {
    id: 'cake-tool-introduction',
    title: 'Cake Tool Introduction',
    short: 'Know every tool before you bake.',
    description:
      'A guided walkthrough of the essential cake tools — mixers, tins, spatulas, turntables, tip sets, and how to set up a clean, efficient workspace.',
    duration: '45 min',
    level: 'Beginner',
    image:
      'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?auto=format&fit=crop&w=1200&q=80',
    topics: ['Essential tools', 'Workspace setup', 'Safety & care', 'What to buy first'],
  },
  {
    id: 'butter-cake-recipe',
    title: 'Butter Cake Recipe',
    short: 'Soft, classic butter cake from scratch.',
    description:
      'Master the foundation butter cake — cream method, batter texture, bake times, and how to get a tender crumb every time.',
    duration: '60 min',
    level: 'Beginner',
    image:
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80',
    topics: ['Creaming method', 'Ingredient ratios', 'Baking tips', 'Cooling & storage'],
  },
  {
    id: 'chocolate-cake',
    title: 'Chocolate Cake',
    short: 'Rich, moist chocolate cake you’ll remake forever.',
    description:
      'Learn a reliable chocolate sponge with deep cocoa flavour, balanced sweetness, and frosting that pairs beautifully.',
    duration: '70 min',
    level: 'Beginner',
    image:
      'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=1200&q=80',
    topics: ['Cocoa & chocolate', 'Moist crumb secrets', 'Chocolate frosting', 'Layering'],
  },
  {
    id: 'marble-cake',
    title: 'Marble Cake',
    short: 'Vanilla and chocolate swirled with style.',
    description:
      'Create elegant marble patterns without muddying the batters — swirl technique, bake control, and clean slices.',
    duration: '55 min',
    level: 'Beginner',
    image:
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=80',
    topics: ['Two batters', 'Swirl technique', 'Even baking', 'Presentation'],
  },
  {
    id: 'ribbon-cake',
    title: 'Ribbon Cake',
    short: 'Colour bands and celebration layers.',
    description:
      'Build a cheerful ribbon cake with clean colour layers, soft crumb, and finishing that looks bakery-ready.',
    duration: '75 min',
    level: 'Intermediate',
    image:
      'https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=1200&q=80',
    topics: ['Colour mixing', 'Layer stacking', 'Even slices', 'Party finishes'],
  },
  {
    id: 'gateau-cake',
    title: 'Gateau Cake',
    short: 'Elegant European-style gateau.',
    description:
      'Step into refined gateau making — light sponges, fillings, glazes, and a polished finish for special occasions.',
    duration: '90 min',
    level: 'Intermediate',
    image:
      'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1200&q=80',
    topics: ['Sponge technique', 'Fillings', 'Glaze & finish', 'Plating'],
  },
  {
    id: 'jar-cakes',
    title: 'Jar Cakes',
    short: 'Cute layered cakes in a jar.',
    description:
      'Assemble pretty jar cakes for gifts and parties — portioning, layering, sealing, and flavour combinations that travel well.',
    duration: '50 min',
    level: 'Beginner',
    image:
      'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=80',
    topics: ['Portioning', 'Layer combos', 'Packaging', 'Shelf life'],
  },
  {
    id: 'cupcakes',
    title: 'Cupcakes',
    short: 'Bakery-style cupcakes with beautiful frosting.',
    description:
      'Bake consistent cupcakes and pipe frosting like a pro — from batter to swirl, including flavour ideas and topping tips.',
    duration: '65 min',
    level: 'Beginner',
    image:
      'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?auto=format&fit=crop&w=1200&q=80',
    topics: ['Batter & bake', 'Piping swirls', 'Flavour ideas', 'Decorating'],
  },
  {
    id: 'cake-structures',
    title: 'Cake Structures',
    short: 'Build cakes that hold shape and height.',
    description:
      'Learn dowels, boards, stacking, and support systems so tall and sculpted cakes stay stable and safe.',
    duration: '80 min',
    level: 'Intermediate',
    image:
      'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=1200&q=80',
    topics: ['Dowels & boards', 'Stacking', 'Weight balance', 'Transport tips'],
  },
  {
    id: 'wedding-cake',
    title: 'Wedding Cake',
    short: 'Design and finish a wedding-worthy cake.',
    description:
      'Plan flavours, tiers, and elegant finishes for wedding cakes — from structure to décor that photographs beautifully.',
    duration: '100 min',
    level: 'Advanced',
    image:
      'https://images.unsplash.com/photo-1562440499-64c9a111f713?auto=format&fit=crop&w=1200&q=80',
    topics: ['Tier planning', 'Flavour pairing', 'Elegant décor', 'Delivery day'],
  },
  {
    id: 'all-others',
    title: 'All Other Specials',
    short: 'Seasonal flavours, themes, and custom techniques.',
    description:
      'A rotating class covering seasonal cakes, themed décor, fondant basics, drip cakes, and the special requests students ask for most.',
    duration: '70 min',
    level: 'All levels',
    image:
      'https://images.unsplash.com/photo-1557925923-cd4648e211a0?auto=format&fit=crop&w=1200&q=80',
    topics: ['Seasonal ideas', 'Themed décor', 'Fondant basics', 'Student requests'],
  },
]

export function getClassById(id: string): CakeClass | undefined {
  return classes.find((item) => item.id === id)
}
