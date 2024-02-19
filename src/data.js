import tourImg1 from './images/tour-1.jpeg'
import tourImg2 from './images/tour-2.jpeg'
import tourImg3 from './images/tour-3.jpeg'
import tourImg4 from './images/tour-4.jpeg'

export const pageLinks = [
  {
    id: 1,
    href: '#home',
    text: 'home',
  },
  {
    id: 1,
    href: '#about',
    text: 'about',
  },
  {
    id: 1,
    href: '#services',
    text: 'services',
  },
  {
    id: 1,
    href: '#tours',
    text: 'tours',
  },
]

export const socialLinks = [
  {
    href: 'https://www.twitter.com',
    icon: 'fa-facebook',
  },
  {
    href: 'https://www.twitter.com',
    icon: 'fa-twitter',
  },
  {
    href: 'https://www.twitter.com',
    icon: 'fa-squarespace',
  },
]

export const services = [
  {
    icon: 'fas fa-wallet fa-fw',
    title: 'Saving Money',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    icon: 'fas fa-tree fa-fw',
    title: 'Endless Hiking',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    icon: 'fas fa-socks fa-fw',
    title: 'Amazing Comfort',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
]

export const tours = [
  {
    img: tourImg1,
    title: 'Tibet Adventure',
    date: 'October 1, 2024',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'China',
    durationDays: '6',
    price: '2100',
  },
  {
    img: tourImg2,
    title: 'Best of Java',
    date: 'November 1, 2024',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'Indonesia',
    durationDays: '11',
    price: '1400',
  },
  {
    img: tourImg3,
    title: 'Explore Hong Kong',
    date: 'January 1, 2025',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'Hong Kong',
    durationDays: '8',
    price: '5000',
  },
  {
    img: tourImg4,
    title: 'Kenya Highlights',
    date: 'February 1, 2025',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'Kenya',
    durationDays: '20',
    price: '3300',
  },
]
