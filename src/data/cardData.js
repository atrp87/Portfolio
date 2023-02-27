import project1 from '../assets/images/home/netflix.png';
import project2 from '../assets/images/home/fife_rental.png';
import project3 from '../assets/images/home/city_skies.png';
import project4 from '../assets/images/home/omni_gym.png';
import project5 from '../assets/images/home/money_bulk.png';
import project6 from '../assets/images/home/pycp.png';

import article1 from '../assets/images/articles/netflix.png'
import article2 from '../assets/images/articles/react.png'
import article3 from '../assets/images/articles/city_skies.png'
import article4 from '../assets/images/articles/js.png'
import article6 from '../assets/images/articles/pycp.png';

const cardData = {
  projects: [
    {
      languages: 'React | SCSS | Firebase',
      title: 'Netflix',
      description: 'A dynamic and responsive Netflix clone. Users can sign up, sign in, browse films and series fetched from TMDB API, aswell as add or delete favourites for the current logged in user, stored in firestore database.',
      description1: '',
      learningLessons: [
        'useEffect, React Context API and useReducers',
        'Reusable components and custom hooks ( useFetch )',
        'Firestore Database & Firebase Authentication ( email and password )',
        'React Router v6'
      ],
      image: {
        src: project1,
        alt: 'Netflix Landing Page'
      },
      links: [
        {
          type: 'live',
          url: 'https://netflix-react-dom.netlify.app/'
        },
        {
          type: 'github',
          url: 'https://github.com/atrp87/Netflix/tree/main'
        }
      ]
    },
    {
      languages: 'React | React Bootstrap | SCSS',
      title: 'Premiere Rentals Fife Ltd ',
      description: 'A dynamic, responsive, semantic and accessible. Users can sign up, sign in, browse films and series fetched from TMDB API, aswell as add or delete favourites for the current logged in user, stored in firestore database.',
      description1: '',
      learningLessons: [
        'useEffect, React Context API and useReducers',
        'Reusable components and custom hooks ( useFetch )',
        'Firestore Database & Firebase Authentication ( email and password )',
        'React Router v6'
      ],
      image: {
        src: project2,
        alt: 'Premiere Rentals Fife Landing Page',
      },
      links: [
        {
          type: 'live',
          url: 'https://www.gatsbyjs.org/docs/mdx/writing-pages/'
        },
        {
          type: 'github',
          url: 'https://github.com/konstantinmuenster/gatsby-starter-portfolio-minimal-theme'
        }
      ]
    },
    {
      languages: 'Javascript | CSS | HTML',
      title: 'City Skies',
      description: 'A weather forecast web app displaying the current and weekly forecast using the open weather API. The user can search city by name and select Celsius or Fahrenheit units. This project allowed me to get a deeper understanding of the Callback queue and promise priority (Microtasks queue).',
      description1: 'This project allowed me to get a deeper understanding of the Callback queue and promise priority (Microtasks queue)',
      learningLessons: [
        'AJAX requests to multiple API end points',
        'Handling asynchronous tasks with Promises and Async / Await',
        'Reverse Geocoding (HTML 5 Geolocation and Google maps API)'
      ],
      image: {
        src: project3,
        alt: 'City Skies Landing Page',
      },
      links: [
        {
          type: 'live',
          url: 'https://atrp87.github.io/City_Skies/'
        },
        {
          type: 'github',
          url: 'https://github.com/atrp87/City_Skies'
        }
      ]
    },
    {
      languages: 'Javascript | CSS | HTML',
      title: 'Omni Gym',
      description: 'A responsive brochure website showing the services the gym provides (memberships, classes, equipment and more). Minimalist design using CSS (grid, flexbox) and DOM manipulation.',
      description1: 'Minimalist design using CSS (grid, flexbox) and DOM manipulation.',
      learningLessons: [
        'Event delegation utilizing event propagation',
        'Intersection Observer API ( lazy image loading & scroll trigger animations',
        'Client-side form validation'
      ],
      image: {
        src: project4,
        alt: 'Omni Gym Landing Page',
      },
      links: [
        {
          type: 'live',
          url: 'https://atrp87.github.io/Omni_Gym/'
        },
        {
          type: 'github',
          url: 'https://github.com/atrp87/Omni_Gym'
        }
      ]
    },
    {
      languages: 'Ruby | Sinatra | PostgreSQL | Bootstrap',
      title: 'Money Bulky',
      description: 'A finance tracking app where I devised a user story, focusing its use for university graduates. The user is able to view, edit, create and delete individual categories, merchants and transactions. The app is backed by PostgreSQL database.',
      description1: 'The user is able to view, edit, create and delete individual categories, merchants and transactions. The app is backed by PostgreSQL database.',
      learningLessons: [
        'Object oriented programming with Ruby using an MVC pattern',
        'CRUD functions and RESTful routes',
        'Wireframes, UML diagrams, Class diagrams'
      ],
      image: {
        src: project5,
        alt: 'Money Bulk Landing Page',
      },
      links: [
        {
          type: 'live',
          url: 'https://atrp87.github.io/Omni_Gym/'
        },
        {
          type: 'github',
          url: 'https://github.com/atrp87/Money_Bulk'
        }
      ]
    },
    {
      languages: 'React | React Router | Bootstrap',
      title: 'Pilton Youth & Childrens Project',
      description: 'Client experience using Agile methodologies (specifically Scrum) refactoring an administration app for the volunteers at PYCP. Daily stand-ups, updating the status on tickets, code reviews along with Sprint planning, Sprint review and Sprint retrospective meetings.',
      description1: 'Daily stand-ups, updating the status on tickets, code reviews along with Sprint planning, Sprint review and Sprint retrospective meetings.',
      learningLessons: [
        'Refactoring class based components to functional components introducing hooks',
        'React router to change views and move between pages',
        'What I DID',
        'CSS Modules'
      ],
      image: {
        src: project6,
        alt: 'PYCP Landing Page',
      },
      links: [
        {
          type: 'github',
          url: 'https://github.com/atrp87/PYCP/blob/main/README.md'
        }
      ]
    }
  ],

  blogs: [
    {
      id: 1,
      languages: 'React | SCSS | Firebase',
      title: 'Netflix',
      description: 'A dynamic and responsive Netflix clone. Users can sign up, sign in, browse films and series fetched from TMDB API, aswell as add or delete favourites for the current logged in user, stored in firestore database.',
      image: {
        src: article1,
        alt: 'Netflix Landing Page'
      }
    },
    {
      id: 2,
      languages: 'React | React Bootstrap | SCSS',
      title: 'Premiere Rentals Fife Ltd ',
      description: 'A dynamic, responsive, semantic and accessible. Users can sign up, sign in, browse films and series fetched from TMDB API, aswell as add or delete favourites for the current logged in user, stored in firestore database.',
      image: {
        src: article2,
        alt: 'Premiere Rentals Fife Landing Page',
      },
    },
    {
      id: 3,
      languages: 'Javascript | CSS | HTML',
      title: 'City Skies',
      description: 'A weather forecast web app displaying the current and weekly forecast using the open weather API. The user can search city by name and select Celsius or Fahrenheit units. This project allowed me to get a deeper understanding of the Callback queue and promise priority (Microtasks queue).',
      image: {
        src: article3,
        alt: 'City Skies Landing Page',
      }
    },
    {
      id: 4,
      languages: 'Javascript | CSS | HTML',
      title: 'Omni Gym',
      description: 'A responsive brochure website showing the services the gym provides (memberships, classes, equipment and more). Minimalist design using CSS (grid, flexbox) and DOM manipulation.',
      image: {
        src: article4,
        alt: 'Omni Gym Landing Page',
      },
    },
    {
      id: 5,
      languages: 'Ruby | Sinatra | PostgreSQL | Bootstrap',
      title: 'Money Bulky',
      description: 'A finance tracking app where I devised a user story, focusing its use for university graduates. The user is able to view, edit, create and delete individual categories, merchants and transactions. The app is backed by PostgreSQL database.',
      image: {
        src: project5,
        alt: 'Money Bulk Landing Page',
      },
    },
    {
      id: 6,
      languages: 'React | React Router | Bootstrap',
      title: 'Pilton Youth & Childrens Project',
      description: 'Client experience using Agile methodologies (specifically Scrum) refactoring an administration app for the volunteers at PYCP. Daily stand-ups, updating the status on tickets, code reviews along with Sprint planning, Sprint review and Sprint retrospective meetings.',
      image: {
        src: article6,
        alt: 'PYCP Landing Page',
      },
    }
  ]
}

export default cardData