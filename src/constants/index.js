import {
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
  googleCloud,
  data_analysts,
  flexTurism,
  threejs,
  cloudIcon,
  tnslatam,
  chingu,
  portfolio,
  chuckster,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Data analysts",
    icon: data_analysts,
  },
  {
    title: "Google Cloud",
    icon: cloudIcon,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Google Cloud",
    icon: googleCloud,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Chingu",
    icon: chingu,
    iconBg: "#383E56",
    date: "Jan 2022 - Fev 2023",
    points: [
      "Pre-work Solo Project and six-week Voyage Team Project as a Developer in Chingu Voayage 42",
      "Development of web apps using HTML, CSS, Javascript, RESTful APIs, Figma, GitHub, and Scrum.",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Team projects that refine technical skills and put them into practice while gaining new soft skills like communication, collaboration, and Agile project management.",
    ],
  },
  {
    title: "Intern Developer",
    company_name: "TNS LATAM",
    icon: tnslatam,
    iconBg: "#E6DEDD",
    date: "Fev 2023 - Present",
    points: [
      "Systems Engineering and Robotics Laboratory - (LASER)/Transaction Network Services - TNS LATAM",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I worked with Michel as I was his P.O. and I felt blessed to work with talented developers, such as Michel. He is a hungry engineer who never shied away from a challenge, and he offered me help when I most needed it. I was also impressed at how much he could accomplish in such a short period of time. I'm sure he'll be a great addition to any software team.",
    name: "Amanda Vieira",
    designation: "PO",
    company: "Chingu",
    image: "https://media.licdn.com/dms/image/C4D03AQFSQvGEhUt4eg/profile-displayphoto-shrink_800_800/0/1646085141788?e=1705536000&v=beta&t=hKuEcZe4Nm8Vy_l17ZYLlXpePc7zwqa5kqA6zN3IRr8",
  },
  {
    testimonial:
      "During the research and innovation project with the TNS Latam in collaboration with the LaSER Laboratory at the Federal University of Paraíba, I had the privilege to work with Michel. Michel is a dedicated professional. He is always willing to accept and give suggestions and help your professional colleagues. Your technical collaboration in our team was fundamental to the good progress of the project. In addition to your technical skills, Michel was able to adapt to different characteristics of your colleagues. This adaptability provided a nice work atmosphere. Thus, I recommend Michel because the good experience and because the good knowledge exchange that I had with him during the time in the project. Your technical abilities and personal skills are extremely useful in any company or project.",
    name: "Thiago Marques",
    designation: "Innovation Research Fellow",
    company: "TNS LATAM",
    image: "https://media.licdn.com/dms/image/C5603AQEXrYpYdSaK0A/profile-displayphoto-shrink_100_100/0/1636407516456?e=1706745600&v=beta&t=C-9uuszQ_YsHzRUkV3BUBz4V2g3GQDWwyED2svq6r4Q",
  },
];

const projects = [
  {
    name: "Flex Turism",
    description:
      "Web application that enables users to search for show their products.",
    tags: [
      {
        name: "javascrip",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: flexTurism,
    source_code_link: "https://michmatrix.github.io/FlexTurism/",
  },
  {
    name: "Portfolio",
    description:
      "Web application that enables users to search for show their products.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/MichMatrix/Portfolio",
  },
  {
    name: "chuckster",
    description:
      "Web application that enables users to search for show their products.",
    tags: [
      {
        name: "javascrip",
        color: "blue-text-gradient",
      },
      {
        name: "github apis",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: chuckster,
    source_code_link: "https://chingu-voyages.github.io/v42-toucans-team-01/",
  },
];

export { services, technologies, experiences, testimonials, projects, };
