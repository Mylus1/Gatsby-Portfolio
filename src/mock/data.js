import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Bilal Leadbitter | Python Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Bilal Leadbitter',
  subtitle: 'Python Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a self taught Python Developer with experience in using Django, Flask and React. While primarily being a backend developer, I also have experience with front end frameworks such as Gatsby and Next.js on top of my Python knowledge',
  paragraphTwo: 'In my spare time, I enjoy looking the latest technologies and seeing if and where I can utilise them. I am also an avid gamer and have been forever. From the N64 to the Series X, I have played them all. I also enjoy football and other sports when I am not gaming',
  paragraphThree: 'I am avaliable to work asap and would love to hear from you',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
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
