import project1 from "../assets/projects/IllapelFM.png";
import project2 from "../assets/projects/CopyTube.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Developer with experience in frontend frameworks like React, React Native and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB.`;

export const ABOUT_TEXT = [
  "I am a dedicated and versatile frontend developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience, I have worked with a variety of technologies, including React, React Native, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB.",
  "My journey in web development began with a deep curiosity for how web and mobile apps are made, and it has evolved into a career where I continuously strive to learn and adapt to new challenges.",
  "I thrive in collaborative environments where different skills and perspectives are brought together.",
  "Outside of programming, I enjoy playing music, driving my motorcycle, and spending time with my friends and family.",
  "I am a native speaker of both English and Spanish languages."
];
export const EXPERIENCES = [
  {
    year: "May 2023 - May 2024",
    role: "Frontend Developer",
    company: "Orionx.com",
    description: `UI/UX designer and developer for the crypto exchange. Saw component implementation from their inception in Figma, all the way to their programming using a combination of React, Tailwind CSS and Figma. Component functionality was implemented with GraphQL.`,
    technologies: ["Javascript", "React.js", "Figma", "Storybook", "GraphQL"],
  },
  {
    year: "Jan 2022 - May 2023",
    role: "Frontend Developer",
    company: "Freelance",
    description: `Designed landing pages and web applications using React, Next.js, and Tailwind CSS.`,
    technologies: [
      "HTML",
      "CSS",
      "React.js",
      "Javascript",
      "Next.js",
      "Tailwind CSS",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Illapel FM Website",
    image: project1,
    description:
      "Commercial landing page for a radio station based in Illapel, Chile. Includes a radio player and a contact form.",
    technologies: ["HTML", "CSS", "React", "Javascript", "Bootstrap"],
    github: "https://github.com/Arckain-sys/IllapelFM",
    liveSite: "https://illapelfm.netlify.app/"
  },
  {
    title: "Youtube Clone",
    image: project2,
    description:
      "A clone of the popular YouTube web application, built with React, MaterialUI, and RapidAPI. Created to practice API integration and MaterialUI use.",
    technologies: ["HTML", "CSS", "React", "Javascript", "MaterialUI"],
    github: "https://github.com/Arckain-sys/CopyTube",
    liveSite: "http://abelcopytube.netlify.app/",
  },
  {
    title: "Mobile Cryptocurrency Tracking App",
    image: project3,
    description:
      "Mobile app for tracking cryptocurrency prices using React Native and TailwindCSS. Makes use of Coinbase's API to fetch asset prices.",
    technologies: ["HTML", "CSS", "React Native", "TailwindCSS"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "La Brabanzón 2766, Santiago de Chile ",
  phoneNo: "+569 9316 9003 ",
  email: "abelmusa.m@gmail.com",
};
