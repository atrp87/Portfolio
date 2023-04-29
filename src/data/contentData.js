import project1 from '../assets/home/netflix.jpg';
import project2 from '../assets/home/fife_rental.jpg';
import project3 from '../assets/home/city_skies.jpg';
import project4 from '../assets/home/omni_gym.jpg';
import project5 from '../assets/home/money_bulk.jpg';
import project6 from '../assets/home/pycp.jpg';

const contentData = {
  projects: [
    {
      id: 1,
      tools: 'React · SCSS · Firebase',
      title: 'Netflix',
      summary: 'A dynamic and responsive Netflix clone. Users can sign up, sign in, browse films and series fetched from TMDB API, aswell as add or delete favourites for the current logged in user, stored in firestore database.',
      summary1: '',
      info: 'email: andrew@admin.dev · password: 123456',
      lessons: [
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
          url: 'https://netflix-atrp87.vercel.app/'
        },
        {
          type: 'github',
          url: 'https://github.com/atrp87/Netflix/tree/main'
        }
      ]
    },
    {
      id: 2,
      tools: 'React · React Bootstrap · SCSS',
      title: 'Premiere Rentals Fife Ltd',
      summary: 'A dynamic, responsive, semantic and accessible. Users can sign up, sign in, browse films and series fetched from TMDB API, aswell as add or delete favourites for the current logged in user, stored in firestore database.',
      summary1: '',
      info: 'Work in progress',
      lessons: [
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
          url: 'https://premiere-rentals-fife-azjso5fbf-atrp87.vercel.app/'
        },
        {
          type: 'github',
          url: 'https://github.com/konstantinmuenster/gatsby-starter-portfolio-minimal-theme'
        }
      ]
    },
    {
      id: 3,
      tools: 'Javascript · CSS · HTML',
      title: 'City Skies',
      summary: 'A weather forecast web app displaying the current and weekly forecast using the open weather API. The user can search city by name and select Celsius or Fahrenheit scales.',
      summary1: 'This project allowed me to get a deeper understanding of the Callback queue and promise priority (Microtasks queue)',
      lessons: [
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
      id: 4,
      tools: 'Javascript · CSS · HTML',
      title: 'Omni Gym',
      summary: 'A responsive brochure website showing the services the gym provides (memberships, classes, equipment and more). Minimalist design using CSS (grid, flexbox) and DOM manipulation.',
      summary1: 'Minimalist design using CSS (grid, flexbox) and DOM manipulation.',
      lessons: [
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
      id: 5,
      tools: 'Ruby · Sinatra · PostgreSQL · Bootstrap',
      title: 'Money Bulk',
      summary: 'A finance tracking app where I devised a user story, focusing its use for university graduates. The user is able to view, edit, create and delete individual categories, merchants and transactions. The app is backed by PostgreSQL database.',
      summary1: 'The user is able to view, edit, create and delete individual categories, merchants and transactions. The app is backed by PostgreSQL database.',
      lessons: [
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
      id: 6,
      tools: 'React · React Router · Bootstrap',
      title: 'Pilton Youth & Children\'s Project',
      summary: 'Client experience using Agile methodologies (specifically Scrum) refactoring an administration app for the volunteers at PYCP.',
      summary1: 'Daily stand-ups, updating the status on tickets, code reviews along with Sprint planning, Sprint review and Sprint retrospective meetings.',
      info: 'Source Code Under NDA',
      lessons: [
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
      title: 'Netflix',
      tools: 'React · SCSS · Firebase',
      info: 'January 20, 2023 - 5 min read'
    },
    {
      id: 2,
      title: 'Premiere Rentals Fife Ltd ',
      tools: 'React · React Bootstrap · SCSS',
      info: 'May 1, 2023 - 4 min read'
    },
    {
      id: 3,
      title: 'City Skies',
      tools: 'Javascript · CSS · HTML',
      info: 'February 12, 2022 - 3 min read'
    },
    {
      id: 4,
      title: 'Omni Gym',
      tools: 'Javascript · CSS · HTML',
      info: 'August 29, 2022 - 3 min read'
    },
    {
      id: 5,
      title: 'Money Bulky',
      tools: 'Ruby · Sinatra · PostgreSQL · Bootstrap',
      info: 'November 12, 2021 - 4 min read'
    },
    {
      id: 6,
      title: 'Pilton Youth Project',
      tools: 'React · React Router · Bootstrap',
      info: 'June 18, 2022 - 5 min read'
    }
  ]
}

export default contentData;