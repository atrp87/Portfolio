import project1 from '../assets/home/netflix.jpg';
import project2 from '../assets/home/fife_rental.jpg';
import project3 from '../assets/home/city_skies.jpg';
import project4 from '../assets/home/omni_gym.jpg';
import project5 from '../assets/home/money_bulk.jpg';
import project6 from '../assets/home/pycp.jpg';

import article1 from '../assets/article/nf.avif';
import article2 from '../assets/article/fife-rentals.png';
import article3 from '../assets/article/cityk.png';
import article4 from '../assets/article/dom.avif';
// import article5 from '../assets/article';
import article6 from '../assets/article/agile.png';

const contentData = {
  projects: [
    {
      id: 1,
      tools: 'React · SCSS · Firebase',
      title: 'Netflix',
      summary: 'A dynamic and responsive website, with a visual design inspired by Netflix.',
      summary1: 'Users are able to sign up and sign in. When a user is logged in, they can browse films and series fetched from the TMDB API, as well as add or delete their favourites. Backed by Firestore database to store and manage user data.',
      info: 'email: andrew@admin.dev · password: 123456',
      lessons: [
        'Custom hook useFetch abstracts fetch request logic, allowing multiple components to use the same logic with different URL endpoints',
        'Context API providing user authentication state management for user authentication across multiple components without manually passing props through multiple levels of components',
        'useCollection custom hook provides a reusable solution for fetching and managing Firestore documents, collections, and subcollections across multiple components, e.g manage favorite movies that are specific to the currently logged-in user',
        'GitFlow isolating new development from finished work',
        'Client-side routing with React Router'
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
      summary: 'I developed a responsive and accessible marketing website for an award-winning, independent letting agent that showcases the services they provide, such as property rentals, property management, property valuation, and advisory services, among others.',
      summary1: 'Collaborating with the client creating an easy-to-navigate website that includes clear calls-to-action, prominent contact information and direct links to their property ads on onthemarket.com. Highlighting their awards and accomplishments, helping to build a strong brand identity to attract new clients to the business.',
      info: 'In Development',
      lessons: [
        'Reusable components',
        'Presentational components to ensure a uniform and consistent visual appearance and behavior across different parts of the website',
        'Accessibility considerations and semantic development',
        'seo - cross browser compatibility ( styles )',
        'BEM naming convention',
        'css - scss - bootstrap ( typography mixins variables DRY PSUEDO ELEMENTS PSUEDO CALLASES )'
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
          url: 'https://github.com/atrp87'
        }
      ]
    },
    {
      id: 3,
      tools: 'Javascript · CSS · HTML',
      title: 'City Skies',
      summary: 'A dynamic web application that allows users to check the current weather and weekly forecast for any city around the world.',
      summary1: 'Users can simply search for a city by name and retrieve the weather information, with the added flexibility to switch between Celsius and Fahrenheit based on their location or personal preference.',
      lessons: [
        'Handling asynchronous tasks with Promises using Async / Await',
        'Integrating third-party Web APIs, handling JSON data structures, data fields and specific formatting',
        'Multiple HTTP network requests to different API end points',
        'Data manipulation methods and techniques with ES6',
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
      summary: 'I had the opportunity to create a responsive website for a local gym that showcases the gym\'s facilities, services, and programs in a user-friendly format.',
      summary1: 'Working directly with a client incorporating their preferences and feedback to deliver a real-world solution that maintained the gym\'s branding and met the client\'s needs.',
      lessons: [
        'DOM manipulation and traversal',
        'Responsive design and layouts',
        'Client-side form validation',
        'Utilizing event delegation and event propagation',
        'Intersection Observer API ( lazy image rendering and scroll-triggered animations )',
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
      tools: 'Ruby · Sinatra · PostgreSQL',
      title: 'Money Bulk',
      summary: 'A budget finance app helps users create, track, and analyze their spending patterns, as well as set financial goals.',
      summary1: 'Users can create expense entries by entering the amount for selected categories and merchants. New entires are displayed in a table along with the total amount spent. Users have the option to edit or delete these entries, which will also update the total amount spent accordingly. Additionally, users can filter the displayed merchants and categories based on their names. Supported by a PostgreSQL database.',
      lessons: [
        'Object oriented programming ( Ruby )',
        'MVC ( Model-View-Controller ) design pattern separating the data, user interface, and application logic',
        'RESTful conventions of using HTTP methods and URLs to map to the different CRUD operations',
        'UML diagrams, Class diagrams and Wireframes'
      ],
      image: {
        src: project5,
        alt: 'Money Bulk Landing Page',
      },
      links: [
        // {
        //   type: 'live',
        //   url: 'https://atrp87.github.io/Omni_Gym/'
        // },
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
      summary: 'PYCP is a youth organisation that provided assistance and guidance to children, young adults, and their families in the local community. Working collaboratively in a team of six, we maintained and refactored an administration app for the PYCP staff. Our objective was to improve the app\'s functionality and usability, helping the staff manage day-to-day operations more efficiently.',
      summary1: 'Client experience with Agile methodologies, specifically Scrum, involved daily stand-ups, ticket status updates, Sprint reviews and retrospective meetings.',
      info: 'Source Code Under NDA',
      lessons: [
        'Rewriting class-based components to functional components using hooks for state management and other component lifecycle methods',
        'Passing, deconstructing and drilling props',
        'Modifying, passing and lifting state',
        'CSS Modules to scope CSS styles'
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
      img: article1,
      tools: 'React',
      date: '01/20/2022',
      content: 'Translating a UI design into functional code using a declarative approach / / RELEVANT AND KEY POINT',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Premiere Rentals Fife Ltd',
      img: article2,
      tools: 'React',
      date: '05/01/2023',
      content: 'client collabiration / / RELEVANT AND KEY POINT',
      readTime: '5 min read'
    },
    {
      id: 3,
      title: 'City Skies',
      img: article3,
      tools: 'Javascript',
      date: '02/12/2022',
      content: 'Exploring asynchronous JavaScript, the runtime environment, and Web APIs',
      readTime: '3 min read'
    },
    {
      id: 4,
      title: 'Omni Gym',
      img: article4,
      tools: 'Javascript',
      date: '08/29/2022',
      content: 'Traversing vanilla front-end web development fundamentals',
      readTime: '3 min read'
    },
    // {
    //   id: 5,
    //    title: 'Money bulk',
    //   img: article5,
    //   title: 'Ruby',
    //   date: '11/12/2021',
    //   content: 'I had the opportunity to approach a local gym and propose the idea of creating a website for them. They were interested in the idea and shared their',
    //   readTime: '3 min read'
    // },
    {
      id: 6,
      title: 'Pilton Youth & Children\'s Project',
      img: article6,
      tools: 'React',
      date: '06/18/2022',
      content: 'work experiacne / team / / RELEVANT AND KEY POINT',
      readTime: '5 min read'
    }
  ]
}

export default contentData;