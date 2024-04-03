import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";

const tours = [
  {
    id: "01",
    title: "Westminster Bridge",
    city: "London",
    distance: 300,
    address: "Westminster Bridge, London SW1A 2JH, United Kingdom",
    price: 99,
    maxGroupSize: 10,
    desc: "Westminster Bridge is a famous road-and-foot-traffic bridge over the River Thames in London. It is well-known for its stunning views of the Houses of Parliament, Big Ben, and the London Eye.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
      {
        name: "Jane Smith",
        rating: 5,
      },
    ],
    avgRating: 4.8,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Bali, Indonesia",
    city: "Indonesia",
    address: "Bali, Indonesia",
    distance: 400,
    price: 99,
    maxGroupSize: 8,
    desc: "Bali is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches, and coral reefs. The island is also home to religious sites such as the cliffside Uluwatu Temple.",
    reviews: [
      {
        name: "Jane Smith",
        rating: 4.6,
      },
    ],
    avgRating: 4.6,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    distance: 500,
    address: "Snowy Mountains, Thailand",
    price: 99,
    maxGroupSize: 8,
    desc: "The Snowy Mountains, also known as the Alps of Thailand, offer breathtaking views and excellent trekking opportunities. Visitors can enjoy the cool climate and stunning scenery while exploring this natural wonder.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Beautiful Sunrise, Thailand",
    city: "Thailand",
    distance: 500,
    address: "Thailand",
    price: 99,
    maxGroupSize: 8,
    desc: "Experience the beauty of a Thai sunrise with this unforgettable tour. Watch as the sun rises over the horizon, casting a warm glow over the landscape and creating a magical atmosphere.",
    reviews: [
      {
        name: "Jane Smith",
        rating: 4.8,
      },
    ],
    avgRating: 4.8,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Nusa Pendia Bali, Indonesia",
    city: "Indonesia",
    distance: 500,
    address: "Nusa Pendia Bali, Indonesia",
    price: 99,
    maxGroupSize: 8,
    desc: "Nusa Penida is a beautiful island located southeast of Bali, known for its stunning beaches, rugged cliffs, and crystal-clear waters. Visitors can explore hidden caves, snorkel with manta rays, and relax on pristine white sand beaches.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.7,
      },
    ],
    avgRating: 4.7,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Cherry Blossoms Spring",
    city: "Japan",
    distance: 500,
    address: "Japan",
    price: 99,
    maxGroupSize: 8,
    desc: "Spring in Japan is a magical time when cherry blossoms (sakura) bloom across the country, transforming landscapes into a sea of pink and white flowers. Witness the beauty of cherry blossom season with this unforgettable tour.",
    reviews: [],
    avgRating: 0,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Holmen Lofoten",
    city: "Norway",
    distance: 500,
    address: "Lofoten, Norway",
    price: 99,
    maxGroupSize: 8,
    desc: "Holmen Lofoten is a picturesque fishing village located on the Lofoten archipelago in Norway. Visitors can explore charming wooden houses, enjoy fresh seafood, and take in breathtaking views of the surrounding mountains and sea.",
    reviews: [],
    avgRating: 0,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    distance: 500,
    address: "Snowy Mountains, Thailand",
    price: 99,
    maxGroupSize: 8,
    desc: "The Snowy Mountains, also known as the Alps of Thailand, offer breathtaking views and excellent trekking opportunities. Visitors can enjoy the cool climate and stunning scenery while exploring this natural wonder.",
    reviews: [],
    avgRating: 0,
    photo: tourImg03,
    featured: false,
  },
];

export default tours;
