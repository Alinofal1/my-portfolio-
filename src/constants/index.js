import project1 from "../assets/projects/netflix.png";
import project2 from "../assets/projects/cruds.jpg";
import project3 from "../assets/projects/memory-game.png";
import project4 from "../assets/projects/blue-print.png";

export const HERO_CONTENT = `I'm Ali Nofal, a skilled front-end developer specializing in React.js and Next.js. With a passion for creating modern, high-performance web applications, I build user-friendly, responsive, and efficient digital experiences. My portfolio showcases a variety of projects that highlight my expertise in front-end development, UI/UX design, and performance optimization. Let's bring your ideas to life with cutting-edge web solutions!`;

export const ABOUT_TEXT = `I am a dedicated front-end developer with a passion for building modern, efficient, and user-friendly web applications. Skilled in React.js and Next.js, I focus on creating high-performance, responsive designs that enhance user experience. My journey in web development started with a curiosity for how things work, and it has grown into a career where I continuously learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I explore new technologies and stay up-to-date with the latest industry trends.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Worked on Website For BluePrint 360 Company",
    company: "BluePrint 360.",
    description: `I had the pleasure of collaborating with BluePrint 360, a company dedicated to
  providing comprehensive solutions in the construction and design industry. In this
  project, I leveraged my front-end development skills using React and Tailwind CSS to
  enhance their online presence, creating a more engaging and user-friendly website
  that effectively showcases their services and expertise. 
`,
    technologies: ["Javascript", "React.js", "Tailwind"],
  },
];

export const PROJECTS = [
  {
    title: "Netflix Clone web app",
    link: "https://netflix-react-tw-1ccad.web.app/",
    image: project1,
    description: "Netflix Clone built with React, TailwindCSS & Firebase. Features user authentication, a responsive UI & dynamic movie data fetching.",
    technologies: ["React", "Tailwind", "FireBase"],
  },
  {
    title: "CRUD PRODUCT MANAGEMENT SYSTEM",
    link: "https://prodcts-management-system.netlify.app/",
    image: project2,
    description:"Product Management System built with HTML, Bootstrap & JavaScript. It features CRUD operations to add, view, update, and delete product records with a responsive, interactive interface.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  },
  {
    title: "Memory Game",
    link: "https://memory-gamme.netlify.app/",
    image: project3,
    description:
      "The Memory Game is a fun and visually engaging project created using HTML, CSS, and React.js. It challenges players to test their memory by matching pairs of cards through a series of flips.",
    technologies: ["HTML", "CSS", "React"],
  },
  {
    title: "Blue-Print360",
    link: "https://blueprint-360.com/",
    image: project4,
    description:
      "Blueprint 360 is a responsive platform for Blueprint Company, built with React.js and Tailwind CSS. It offers a modern design showcasing their tech consulting services, optimized for all devices.",
    technologies: ["HTML", "Tailwind", "ReactJs" ],
  },
];

export const CONTACT = {
  address: "Palestine, Qalqilya",
  phoneNo: "+972 567465346 ",
  email: "alinofal405@gmail.com",
};
