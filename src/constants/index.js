import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg"
import project6 from "../assets/projects/project-6.jpeg"
import project7 from "../assets/projects/project-7.jpg"
import project8 from "../assets/projects/project-8.jpg"

export const HERO_CONTENT = `I am a passionate full stack developer from Atlanta, Georgia with a knack for crafting robust and scalable web applications. I have honed my skills in back-end programming disciplines like OOP, Data Structures and Algorthims. I have also developed my prowess in front-end technologies like React and Node.js. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Software Engineering Fellow",
    company: "TheHeadStarter",
    description: `Collaborated on interdisciplinary projects, applying computer science principles to solve real-world problems. Gained proficiency in advanced programming languages and tools, including Python, Java, and web development frameworks. Developed and implemented algorithms and data structures to optimize performance and efficiency.`,
    technologies: ["Javascript", "React.js", "Node.js", "Java", "Python"],
  },
  {
    year: "2024 - Present",
    role: "Scholar/ Mentee",
    company: "Amazon NEXT CodePath   ",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["Java", "Python", "HackerRank", "LeetCode"],
  },
  {
    year: "2023-2024",
    role: "Information Technology Intern  ",
    company: "Georgia Tech Athletic Department",
    description: `Assist with system updates, monitoring network performance, maintaining server infrastructure, and configuring new laptops for student athletes`,
    technologies: ["Terminal", "Team-Viewer",],
  },
  {
    year: "2022-2022",
    role: "Subteam Developer",
    company: "Inspirit AI Cohort",
    description: `Collaborated with a diverse team of developers to design and implement AI-driven solutions for educational platforms.Actively participated in team meetings and brainstorming sessions to innovate and refine project ideas. Gained hands-on experience with cutting-edge AI technologies and development tools.`,
    technologies: ["Logistic Regression Models", "Python", "Selenium", "Neural Networks"],
  },
];

export const PROJECTS = [
  {
    title: "Anime Library Tool",
    image: project8,
    description:
      "Used the StreamLit Python library to develop and design a web application that organized data from Kitsu API to produce an inventory of animated shows and movies. With approximately 13,000 anime titles and 11,000 manga titles, the application provides a comprehensive and organized view of available content. Users can easily search, filter, and explore detailed information about their favorite anime and manga.      ",
    technologies: ["StreamLit", "Python"],
  },
  {
    title: "Spotify Recommender Tool",
    image: project7,
    description:
      "Collaborated with a multidisciplinary team to develop a software tool for Spotify using logistic regression models to recommend music to users. Utilized advanced machine learning techniques to enhance the tool, which sorted user input data and returned personalized music recommendations. Worked closely with data scientists, software engineers, and UX designers to ensure the tool's accuracy and user-friendliness, resulting in an improved user experience and more relevant music recommendations.",
    technologies: ["Python", "Logistic Regression Model", "Neural Networks", "Machine Learning"],
  },
  {
    title: "Portfolio Website",
    image: project6,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Node.js"],
  },
  {
    title: "Jordle",
    image: project5,
    description:
      "Jordle is a project developed for my Object Oriented Programming course, incorporating various OOP concepts along with JavaFX for desktop application development. It is essentially a recreation of the popular New York Times game, Wordle, using the programming language Java. The project employs linked lists to manage the word data, ensuring the randomizer functions correctly. Unique stylistic enhancements differentiate it from the original game, enhancing user experience.",
    technologies: ["Java", "JavaFx", "Terminal"],
  },
];

export const CONTACT = {
  address: "Atlanta, Georgia",
  linkedIn: "https://www.linkedin.com/in/aymansuleman/",
  email: "aymanksuleman@gmail.com",
};
