import {
  sivhel,
  ebgorb,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  svelte,
  sass,
  bash,
  chatgpt,
  capitalcom,
  os1845,
  stevensTr,
  threejs,
  bankist,
  forkify,
  mapty,
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Experience',
  },
  {
    id: 'tech',
    title: 'Tech',
  },
  {
    id: 'works',
    title: 'My Projects',
  },
  {
    id: 'feedbacks',
    title: 'Testimonials',
  },
  {
    id: 'contact',
    title: 'Contact Me',
  },
  {
    download: true,
    title: 'My resume',
  },
]

const services = [
  {
    title: 'React Developer',
    icon: web,
  },
  {
    title: 'Svelte Developer',
    icon: backend,
  },
  {
    title: 'NodeJS Developer',
    icon: mobile,
  },
  {
    title: 'AI & Data Enthusiast',
    icon: creator,
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  // {
  //   name: 'TypeScript',
  //   icon: typescript,
  // },
  {
    name: 'React JS',
    icon: reactjs,
  },
  // {
  //   name: 'Redux Toolkit',
  //   icon: redux,
  // },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  // {
  //   name: 'Node JS',
  //   icon: nodejs,
  // },
  // {
  //   name: 'MongoDB',
  //   icon: mongodb,
  // },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  // {
  //   name: 'docker',
  //   icon: docker,
  // },
  {
    name: 'svelte',
    icon: svelte,
  },
  {
    name: 'sass',
    icon: sass,
  },

  {
    name: 'bash',
    icon: bash,
  },
  {
    name: 'chatgpt',
    icon: chatgpt,
  },
]

const experiences = [
  // {
  //   title: 'Frontend Development Trainee',
  //   company_name: 'Capital.com',
  //   icon: capitalcom,
  //   iconBg: '#fff',
  //   date: 'August 2022',
  //   points: [
  //     'Developing and maintaining web applications using React.js and other related technologies.',
  //     'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
  //     'Implementing responsive design and ensuring cross-browser compatibility.',
  //     'Participating in code reviews and providing constructive feedback to other developers.',
  //   ],
  // },
  {
    title: 'Client Support Agent',
    company_name: 'Capital.com, Belarus',
    icon: capitalcom,
    iconBg: '#fff',
    date: 'June 2021 - August 2022',
    points: [
      `Answering questions regarding the platform, it's functionality, trading, and finance in general using the language of the inquirer`,
      `Dealing with disgruntled clients in the way that leaves them satisfied, explaining their mistakes without hinting that they are the ones who is responsible for their losses`,
      `Ensuring that company's strict KYC policies as well as GDPR, FATCA and FATF laws are followed`,
      `Made sure that thousands of my clients understand the world of investing better that they did before making their inquiry`,
      `Relayed relevant questions to compliance, client retention, finance or other departments`,
      `Solved dozens of unusual situations and close calls that might have cost clients or company real financial losses`,
    ],
  },
  {
    points: [
      `Ensuring safety compliance of proppant delivery drivers`,
      `Ensuring H2S compliance of subcontractors present on oilwell site`,
      `Cosigning safety  every delivery of HazMat shippment as an PEC safety officer`,
      `No delivery-related incidents occured during my shifts`,
      `Ensured no safety-related downtime during my shifts both for the contractors and the service company`,
    ],

    title: 'On-site safety inspector',
    company_name: '1845 Oilfield Service, USA',
    icon: os1845,
    iconBg: '#FEFEFE',
    date: 'October 2018 - November 2019',
  },
  {
    points: [
      `Ensuring steady stream of necessary deliveries`,
      `Making sure that each shift has sufficient capacity to service the work-site`,
      `Making sure that every contractor and employee has a fair share of work dispatched to them`,
      `Was in the top 25% of performers among the dispatchers for 3 months in a row`,
      `Was one of the dispatchers that drivers and contractors were trying to work with`,
      `Dispatched over $120 mln worth of oilfield related goods over the period of employment`,
    ],
    title: 'On & off-site proppant delivery dispatcher',
    company_name: 'Stevens Tanker Division, USA',
    icon: stevensTr,
    iconBg: '#FFF',
    date: 'October 2017 - October 2018',
  },
  {
    points: [
      `Delivering goods as a truck driver, including the hazardous materials`,
      `Ensuring the integrity of the shipped goods`,
      `Training new drivers out of driving school to be safe and successful and profitable`,
      `Made over 400 deliveries during the employment time`,
      `Trained 9 new drivers`,
    ],
    title: 'Long haul driver & driver trainer',
    company_name: 'Stevens Transport, USA',
    icon: stevensTr,
    iconBg: '#FFF',
    date: `September 2013 - October 2018`,
  },
]

const testimonials = [
  {
    testimonial:
      'I had the pleasure of working with Andrei for nearly a year at Capital.com, where he was a valuable member of our team. Throughout his time with us, Andrei consistently demonstrated a ',
    name: 'Edgar Archim',
    designation: 'Head of CS&R',
    company: 'Coretechs',
    image: ebgorb,
  },
  {
    testimonial:
      'I had a great pleasure of working alongside Andrei as well as mentoring him in customer support. Andrei has consistently demonstrated his sharp mind, ',
    name: 'Helen Sivitskaya',
    designation: 'CS Performance Analyst',
    company: 'Capital.com',
    image: sivhel,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
]

const projects = [
  {
    name: 'Bankist',
    description: `Client-side banking application that a bank might use for it's clients. Log in, transfer money from account to account, request loans, close accounts. Clients have locale specific currency.`,
    tags: [
      {
        name: 'HTML/CSS',
        color: 'blue-text-gradient',
      },
      {
        name: 'JavaScript',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: bankist,
    source_code_link: 'https://github.com/LIUAndrei/Bankist',
    project_link: 'https://aliubinski.us/Projects/Bankist/',
  },
  {
    name: 'Mapty',
    description: `A map app that allows you to track your running and cycling workouts. Users' location determines map position. Add a workout by clicking on the map. Workouts are saved to the local storage.`,
    tags: [
      {
        name: 'HTML/CSS',
        color: 'blue-text-gradient',
      },
      {
        name: 'JavaScript',
        color: 'green-text-gradient',
      },
      {
        name: 'LeafletJS',
        color: 'pink-text-gradient',
      },
    ],
    image: mapty,
    source_code_link: 'https://github.com/LIUAndrei/Mapty',
    project_link: `https://aliubinski.us/Projects/Mapty/`,
  },
  {
    name: 'Forkify',
    description: `Recipe app that uses 3rd party API. Use the search bar to find recipes, use page buttons to find the recipe you interested in and click on it to show the recipe, change serving size, or add your own recipe.`,
    tags: [
      {
        name: 'HTML/CSS',
        color: 'blue-text-gradient',
      },
      {
        name: 'JavaScript',
        color: 'green-text-gradient',
      },
      {
        name: '3rd party API',
        color: 'pink-text-gradient',
      },
    ],
    image: forkify,
    source_code_link: 'https://github.com/LIUAndrei/Forkify',
    project_link: 'https://aliubinski.us/Projects/Forkify/',
  },
]

const texts = {
  about: [
    `Hello!  I'm a web developer with substantial knowledge in front-end technologies and with a passion to learn more. Interested in computer tech since childhood - recently I had an amazing opportunity to acquire web programming as a hobby, yet seeking new opportunities to take me further into backend, mobile and AR/VR technologies as well.`,
    `Learning, teamwork and practical experience are my priorities at the moment. I am a fast and passionate learner, my versatile experience helps me to ramp up in new areas and domains within days. Currently I am looking for a supportive team with high ambition and healthy learning culture.`,
  ],
}

const resume = {
  file: `Andrei-Liubinski-Resume.pdf`,
}

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  texts,
  resume,
}
