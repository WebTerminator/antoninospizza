export const sociaLinks = [
  {
    label: "facebook",
    link: "https://www.facebook.com/Antoninospizzaofficial",
  },
  { label: "instagram", link: "https://www.instagram.com/antoninospizzauk/" },
];

export const navItems = [
  { label: "Home", link: "/" },
  { label: "About us", link: "/about" },
  { label: "Menu", link: "/menu" },
  { label: "Events", link: "/events" },
  { label: "Contact us", link: "/contact" },
  ...sociaLinks,
];

export const PizzasMenu = [
  {
    title: "Marinara",
    price: "8.50",
    subTitle: "vegan",
    description:
      "San Marzano tomato sauce, oregano, fresh garlic. Capers, Taggiasce pitted olives fresh basil and EVO oil.",
  },
  {
    title: "Margherita",
    price: "8.00",
    subTitle: "V",
    description:
      "San Marzano tomato sauce, fior di latte mozzarella Parmesan, spicy Italian salami fresh basil and EVO oil.",
  },
  {
    title: "Lucana",
    price: "9.00",
    description:
      "San Marzano tomato sauce, fior di latte mozzarella Parmesan, spicy Italian salami fresh basil and EVO oil.",
  },
  {
    title: "Cotto",
    price: "9.50",
    description:
      "San Marzano tomato sauce, fior di latte mozzarella, parmesan Italian, roasted ham, mushrooms, fresh basil and EVO oil.",
  },
  {
    title: "Vesuviana",
    price: "10.00",
    subTitle: "V",
    description:
      "Cherry tomatoes, for di latte mozzarella, parmesan, provola affumicata, cheese, aubergine a funghetto, fresh basil and EVO oil.",
  },
  {
    title: "Nduja 'Zio Giulio'",
    price: "10.00",
    description:
      "San Marzano tomato sauce, fior di latte mozzarella, parmesan, spicy Nduja sausage, pitted Taggiasche alives fresh basil and EVO oil.",
  },
  {
    title: "Salsiccia & Friarielli",
    price: "10.00",
    description:
      "Fior di latte mozzarella, parmesan, Italian fresh sausage, wild broccoli leaves fresh basil and EVO oil.",
  },
  {
    title: "Tartufo & Funghi",
    price: "9.50",
    subTitle: "V",
    description:
      "For di latte mozzarella, parmesan, black truffle, mushrooms, fresh basil and EVO oil.",
  },
  {
    title: "Burratina",
    price: "10.00",
    description:
      "San Marzano tomato sauce, parmesan, fresh burrata, rocket, fresh basil and EVO oil.",
    subTitle: "V",
  },
  {
    title: "Parma",
    price: "10.00",
    description:
      "Cherry tomatoes, fior di latte, mozzarella, Parma ham, shaved parmesan, wild rocket, fresh basil and EVO oil.",
  },
];

export const PanuozzosMenu = [
  {
    title: "Pugliese",
    subTitle: "V",
    price: "9.00",
    description: "Home made pesto, cherry tomatoes, burrato and EVO oil.",
  },
  {
    title: "Milanese",
    price: "9.00",
    description:
      "Breaded chicken escalope served, fonting cheese, spicy mayonnaise (or not spicy) and lettuce.",
  },
  {
    title: "Umbro",
    price: "10.00",
    description:
      "Pancetta, for di latte, mozzarella, black truffle and wild rocket.",
  },
  {
    title: "Napoletano",
    price: "10.00",
    description:
      "Grilled Italian style fresh sausage, provola affumicata and friarielli.",
  },
];

export const StartersMenu = [
  {
    title: "Hallumi fries",
    price: "5.50",
    description: "Served with sweet chilli sauce.",
  },
  {
    title: "Fritturina di Calamari ",
    price: "6.50",
    description: "Fried squid served with lettuce, mayo & lemon.",
  },
  {
    title: "Home Made Arancini",
    price: "6.00",
    description: "(4 balls in total you can mix & match)",
    subList: [
      "Mushrooms Arancini with Parmesan and fior di latte mozzarella",
      "Novia sausage, parmesan, San Marzano and for di latte mozzarella Arancini",
    ],
  },
  {
    title: "Rosemary chips served with truffe mayonnaise",
    price: "4.00",
    description: "Add on £ 1.00 - Parmesan shaves",
  },
];

export const ClassiciMenu = [
  {
    title: "Aubergine Parmigiana",
    subTitle: "(V)",
    price: "7.50",
    description:
      "Fried aubergine, fior di latte mozzarella. San Marzano tomato sauce, parmesan and fresh basil.",
  },
  {
    title: "Chicken Cotoletta served with rosemary chips",
    price: "8.50",
    description:
      "Breaded chicken escalope served with rosemary, chips and mixed leaves salad.",
  },
];

export const BimbiMenu = [
  {
    title: "Margherita",
    price: "13.00",
    description:
      "San Marzano tomato sauce, oregano, fresh garlic, capers, taggiasce pitted olives fresh basil and EVO oil",
    subList: ["Add one of your favourite toppings", "Served with chips"],
  },
];

export const DessertMenu = [
  {
    title: "Home made Tiramasu",
    price: "4.00",
    description:
      "Savoiardi biscuits, coffee, whipped mixture of eggs, sugar and mascarpone cheese, flavoured with cocoa",
  },
  {
    title: "Pizza alla Nuteela",
    price: "6.50",
    description: "Mini folded pizza, stuffed with Nutella.",
  },
];

export type FormValues = {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  postcode: string;
  eventType: string;
  guests: number;
  eventDate: string;
  servingTime: string;
  additionalInfo?: string;
};

