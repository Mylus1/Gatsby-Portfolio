import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Bilal Leadbitter | Full Stack Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Bilal Leadbitter',
  subtitle: 'Full Stack Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a self taught Full Stack Developer with experience in using HTML, CSS, Javascript, React, Django, Node and GraphQL.',
  paragraphTwo: 'In my spare time, I enjoy looking the latest technologies and seeing if and where I can utilise them. I am also an avid gamer and have been forever. From the N64 to the Series X, I have played them all. I also enjoy football and other sports when I am not gaming',
  paragraphThree: 'I am avaliable to work asap and would love to hear from you. Please contact me if you would like to see my resume',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'pokedex.png',
    title: 'Vanilla Javascript Pokedex',
    info: 'Vanilla Javascript Pokedex using data pulled from the PokeAPI. I used this project to cement my knowledge of HTML, CSS and JS before I plan on moving on to using other frameworks and utilities',
    info2: '',
    url: 'https://bilal-pokedex.netlify.app',
    repo: 'https://github.com/Mylus1/Pokedex', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'bilal.leadbitter@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/bilal-leadbitter-b22b46192/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Mylus1',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
