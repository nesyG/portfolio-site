const header = {
  homepage: '#',
  title: 'JS.',
}

const about = {
  name: 'Ines',
  role: 'Front End Engineer',
  description:
    "A web developer with 2 years of experience and expertise in HTML5, CSS3, JavaScript and React. I can help you create professional, sharp and responsive designs and layouts that ensure cross-browser compatibility and optimal performance on various devices and browsers, and much more. Let's get in touch!",
  social: {
    linkedin: 'https://www.linkedin.com/in/ines-radman/',
    github: 'https://github.com/nesyG'
  },
}

const projects = [
  {
    name: 'Car Market',
    description:
      'React application for browsing, filtering and sorting car data from Baasic backend. Mobx state managment.',
    stack: ['TypeScript', 'React', 'Baasic'],
    sourceCode: 'https://github.com/nesyG/car-market-react',
    livePreview: 'https://car-market-react.vercel.app/',
    image: './e-commerce-project.png' 
  },
  {
    name: 'Sports Center Managment System',
    description:
      "Full-stack web app that is used for managing a sports centre schedule and it's registered users.",
    stack: ['TypeScript', 'React', 'NodeJS', 'MogoDB'],
    sourceCode: 'https://github.com/nesyG/sport_managment',
    image: './e-commerce-project.png'
  },
  {
    name: 'E-commerce landing page',
    description:
      'This is a simple e-commerce layout built with Vanilla JavaScript, Tailwind CSS, and hosted on Vercel.',
    stack: ['JavaScript', 'Tailwind CSS'],
    sourceCode: 'https://github.com/nesyG/e-commerce-project',
    livePreview: 'https://e-commerce-project-vrow.vercel.app/',
    image: './e-commerce-project.png'
  },
]

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Mobx',
  'Tailwind',
  'Syncfusion',
  'NodeJS',
  'Git',
  'Jest',
  '.Net Core'
]

const contact = {
  email: 'johnsmith@mail.com',
}

export { header, about, projects, skills, contact }
