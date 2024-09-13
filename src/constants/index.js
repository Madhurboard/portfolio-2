import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a strong foundation in computer science and a specialization in Artificial Intelligence and Analytics. I excel in crafting dynamic and scalable web applications. Proficient in front-end technologies like React.js and back-end technologies such as Node.js, I also have a solid grasp of databases like MySQL and MongoDB. As an ML enthusiast, I enjoy integrating intelligent features into my applications to enhance functionality and deliver impactful user experiences. My goal is to apply my technical skills and innovative thinking to drive business growth while delivering top-tier software solutions.`;

export const ABOUT_TEXT = `Hi, I'm Madhur Patil, a third-year Computer Science Engineering student with a specialization in Artificial Intelligence and Analytics (AIA) at MIT ADT University, Pune. I'm passionate about technology and have a deep interest in machine learning, full stack development, and problem-solving.
As the president of the GeeksforGeeks MITADT Student Chapter and a technical team associate at CodeChef-MITSOE Chapter, I’ve gained valuable leadership and technical experience. My expertise spans front-end technologies like React.js, as well as back-end tools like Node.js and databases such as MySQL and MongoDB. I'm also an ML enthusiast, always looking for ways to integrate AI into real-world applications.
I’m constantly learning and challenging myself to build robust, scalable web applications that drive innovation and create exceptional user experiences. Whether working individually or in teams, I aim to leverage my skills to contribute to impactful projects and advance my career in software development.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "President",
    company: "GeeksforGeeks MITADT Student Chapter",
    description: `Leading the student chapter, overseeing events, workshops, and technical sessions to enhance coding and problem-solving skills. Managing a team to organize hackathons and competitive programming events. Collaborating with industry professionals to provide students with hands-on experience in the latest technologies.`,
    skills: ["Leadership", "Event Management", "Public Speaking", "Team Collaboration"]
  },
  {
    year: "2023 - 2024",
    role: "Technical Team Associate",
    company: "CodeChef-MITSOE Chapter",
    description: `Contributing to the development and organization of coding challenges and programming events. Assisting in creating educational content and mentoring students in competitive programming. Collaborating with the core team to manage technical resources and event logistics.`,
    skills: ["C++", "Python", "Data Structures", "Algorithms"]
  },
  {
    year: "2022 - Present",
    role: "Student - CSE (AIA)",
    company: "MIT ADT University",
    description: `Studying Computer Science And Engineering With Specialization In Artificial Intelligence and Analytics`,
  },
  
];

export const PROJECTS = [
  {
    title: "Driver Drowsiness Detection System",
    image: project1,
    description:
      "A system designed to detect drowsiness in drivers using computer vision and machine learning techniques.",
    technologies: ["Python", "OpenCV", "TensorFlow", "Keras"],
  },
  {
    title: "EEG Emotion Prediction",
    image: project2,
    description:
      "A project that uses EEG signals to predict emotions, leveraging machine learning algorithms for analysis.",
    technologies: ["Python", "Pandas", "scikit-learn", "TensorFlow"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Sickle Cell Identifier",
    image: project4,
    description:
      "A tool that identifies sickle cell disease using image processing techniques with OpenCV.",
    technologies: ["Python", "OpenCV", "Machine Learning"],
  }
];


export const CONTACT = {
  address: "Four Avenues, Loni-Kalbhor, Pune",
  phoneNo: "+91 87679 99755 ",
  email: "madhurpatil73@gmail.com",
};
