// import icons
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaDiscord,
} from 'react-icons/fa';
// import images
import AboutImg from '../src/assets/img/about/plate.png';
import ModelWhiteImg from '../src/assets/img/model-white.png';
import ModelBlackImg from '../src/assets/img/model-black.png';
import MenuImg1 from '../src/assets/img/menu/1.png';
import MenuImg2 from '../src/assets/img/menu/2.png';
import MenuImg3 from '../src/assets/img/menu/3.png';
import MenuImg4 from '../src/assets/img/menu/4.png';
import SignatureImg from '../src/assets/img/team/signature.png';
import ChefImg from '../src/assets/img/team/chef.png';
import Avatar1 from '../src/assets/img/testimonial/avatar1.png';
import Avatar2 from '../src/assets/img/testimonial/avatar2.png';
import Avatar3 from '../src/assets/img/testimonial/avatar3.png';

export const navData = [
  { href: '/', name: 'home' },
  { href: '/', name: 'about' },
  { href: '/', name: 'menu' },
  { href: '/', name: 'team' },
  { href: '/', name: 'testimonials' },
  { href: '/', name: 'book a table' },
  { href: '/', name: 'contact' },
];

export const heroData = {
  pretitle: 'Nothing brings together like',
  title: 'Casablanca Cafe',
  subtitle:
    'Moroccan cuisine is usually a mix of Arab, Berber, Andalusi, and Mediterranean cuisines, with minimal European (French and Spanish) and sub-Saharan influences. Like the rest of the Maghrebi cuisine, Moroccan cuisine has more in common with Middle Eastern cuisine than with the rest of Africa.',
  btnText: 'Find out more',
};

export const socialData = [
  { href: '/', icon: <FaYoutube /> },
  { href: '/', icon: <FaFacebookF /> },
  { href: '/', icon: <FaInstagram /> },
  { href: '/', icon: <FaPinterestP /> },
  { href: '/', icon: <FaDiscord /> },
];

export const aboutData = {
  pretitle: 'our story',
  title: 'who we are',
  subtitle:
    'Karima Elatchi, who initially came to America from Morocco in 1994, remembers well the first dish she cooked. She was 12, finishing a meal her mother yielded to her because her mother was not feeling well. It was called Trid, reputed to be the Prophet’s favorite dish, a poor person’s version of the famous pigeon pie laced with saffron, cinnamon, and ginger often served at Moroccan feasts. Karima rose to the occasion, and that culinary triumph sped her on her way.',
  btnText: 'find out more',
  image: AboutImg,
};

export const menuData = {
  title: 'Delicious flavour of the Mediterranean',
  subtitle: 'view all menu for tasty meal today',
  modelImg: ModelWhiteImg,
  btnText: 'view complete menu',
  menuItems: [
    {
      image: MenuImg1,
      name: 'Vegetarian Combo',
      price: '$13.95',
      description: 'A combination of falafel, hummus, baba ghanouj, tabouleh, fatoush salad, grape leaves and rice.',
    },
    {
      image: MenuImg2,
      name: 'Baklava',
      price: '$2.45',
      description: 'Filo pastry leaves filled with walnuts and aromatic spices and a special honey syrup.',
    },
    {
      image: MenuImg3,
      name: 'Chicken Kabob',
      price: '$14.95',
      description: 'Cubes of boneless chicken, marinated in special sauce and char broiled. Served with hummus, rice, vegetable salad, cucumber, yogurt sauce and one pita bread.'
    },
    {
      image: MenuImg4,
      name: 'Garlic Dip',
      price: '$5.95',
      description: 'A creamy dip mixture of garlic, soybean oil, lemon mix and salt.',
    },
  ],
};

export const teamData = {
  pretitle: 'our team',
  title: 'meet our chef',
  sub1: 'Karima Elatchi, who initially came to America from Morocco in 1994, remembers well the first dish she cooked. She was 12, finishing a meal her mother yielded to her because her mother was not feeling well.',
  sub2: 'It was called Trid, reputed to be the Prophet’s favorite dish, a poor person’s version of the famous pigeon pie laced with saffron, cinnamon, and ginger often served at Moroccan feasts. Karima rose to the occasion, and that culinary triumph sped her on her way.',
  name: 'Karima Elatchi',
  occupation: 'executive chef',
  signatureImg: SignatureImg,
  chefImg: ChefImg,
};

export const testimonialData = {
  title: "what client's say ",
  subtitle: '1500+ statisfied clients',
  modelImg: ModelWhiteImg,
  slider: [
    {
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.',
      image: Avatar1,
      name: 'Rick Thompson',
      occupation: 'CEO of Delightful',
    },
    {
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.',
      image: Avatar2,
      name: 'John Doe',
      occupation: 'CEO of Delightful',
    },
    {
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.',
      image: Avatar3,
      name: 'Henry A.',
      occupation: 'CEO of Delightful',
    },
  ],
};

export const reservationData = {
  title: 'booking form',
  subtitle:
    'Call (800) 123-4567 from 5AM - 11PM daily, or book online with OpenTable.Reservations required for parties of 6 or more.',
  modelImg: ModelBlackImg,
  btnText: 'make a reservation',
};

export const newsletterData = {
  title: 'join us for events',
  subtitle: 'Get latest events & updates in your inbox.',
  placeholder: 'Subscribe via Email ',
  btnText: 'subscribe now',
};

export const footerData = {
  contact: {
    title: 'contact location',
    address: '2266 S Colorado Blvd, Denver, CO 80222',
    phone: '(303)756-1890 / (720)600-7572',
  },
  hours: {
    title: 'working hours',
    program: [
      {
        days: 'monday - friday',
        hours: '05:00 PM - 1:00 AM',
      },
      {
        days: 'saturday - sunday',
        hours: '05:00 PM - 1:00 AM',
      },
    ],
  },
  social: {
    title: 'social network',
    icons: [
      { href: '/', icon: <FaYoutube /> },
      { href: '/', icon: <FaFacebookF /> },
      { href: '/', icon: <FaInstagram /> },
      { href: '/', icon: <FaPinterestP /> },
      { href: '/', icon: <FaDiscord /> },
    ],
  },
};
