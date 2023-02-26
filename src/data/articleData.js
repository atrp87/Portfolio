import project1 from '../assets/images/home/netflix.png';
import project2 from '../assets/images/home/fife_rental.png';
import project3 from '../assets/images/home/city_skies.png';
import project4 from '../assets/images/home/omni_gym.png';


const articleData = [
  {
    image: project1,
    alt: 'Netflix React DOM',
    title: 'Netflix',
    p1: 'A dynamic and responsive Netflix clone. Users can sign up, sign in, browse films and series fetched from TMDB API, aswell as add or delete favourites for the current logged in user, stored in firestore database.',
  },
  {
    image: project2,
    alt: 'Premiere Rentals Fife Ltd',
    title: 'Premiere Rentals Fife Ltd',
    p1: 'The process of renting with Premiere Rentals Fife Ltd was very easy from start to finish. Firstly, the property they managed was of great quality when we entered; it was very clean and well maintained. The agents are also highly responsive and any small issues we had with maintenance were sorted out promptly.Overall, this was a friendly company to deal with and they exceeded our expectations.',
  },
  {
    image: project3,
    alt: 'City Skies',
    title: 'City Skies',
    p1: 'A weather forecast web app displaying the current and weekly forecast using the open weather API. The user can search city by name and select Celsius or Fahrenheit units.',
    p2: 'This project allowed me to get a deeper understanding of the Callback queue and promise priority (Microtasks queue).'
  },
  {
    image: project4,
    alt: 'Omni Gym',
    title: 'Omni Gym',
    p1: 'A responsive and accessible brochure website showing the services the gym provides (memberships, classes, equipment and more).',
    p2: 'Minimalist design using CSS (grid, flexbox) and DOM manipulation.'
  }
]


export default articleData;