import {
  FaFacebookSquare,
  FaGithubSquare,
  FaLine,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import {
  FiCheckCircle,
  FiLayout,
  FiPenTool,
  FiSliders,
  FiSmartphone,
  FiZap,
} from "react-icons/fi";

import companyProfileImg from "../images/d2.jpg";
import movieStreamingImg from "../images/sp1.jpg";
import mapDiscoveryImg from "../images/v1.jpg";
import deproImg from "../images/dp2.jpg";
import hotelImg from "../images/h2.jpg";
import portfolioImg from "../images/p2.jpg";

export const email = "aunkyawin2035@gmail.com";

export const cvUrl =
  "https://drive.google.com/file/d/1h711oor3MG0XCVDIQr-pQie8KTv5nici/view?usp=sharing";

export const certificateUrl =
  "https://drive.google.com/file/d/1C8HVJMtLYPf4tVNnfN8d54mA8z4XFgs7/view?usp=sharing";

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Work" },
  { id: "contact", label: "Contact" },
];

export const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aung-kyaw-win-473388287",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/ryanreynold21",
    icon: FaGithubSquare,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100026937290228",
    icon: FaFacebookSquare,
  },
  {
    label: "Telegram",
    href: "https://t.me/aungKyaw_win",
    icon: FaTelegram,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/qr/7U4FYNU5AMKLH1",
    icon: FaWhatsapp,
  },
  {
    label: "Line",
    href: "https://line.me/ti/p/aungKyaw_win",
    icon: FaLine,
  },
];

export const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Redux",
  "JavaScript",
];

export const heroBio =
  "Hi, I'm Aung Kyaw Win — a frontend developer with 4+ years of experience in React, Redux, Tailwind CSS, and Next.js. I've built responsive, user-friendly apps and I'm passionate about clean, efficient UI that works seamlessly across devices.";

export const aboutParagraphs = [
  "I'm an experienced React developer. My journey began in web development with React, and over the years I've devoted most of my working hours to mastering React and creating exceptional web applications.",
  "My specialty lies in crafting full-fledged platforms from scratch, where I transform ideas into reality. I take great pride in delivering websites and applications with a unique, outstanding, and contemporary look and feel. Thanks to my extensive knowledge of web mechanics, I excel in optimizing complex integrations to ensure minimal maintenance while ensuring they run smoothly for years to come.",
  "As a React developer, I'm passionate about building seamless user experiences and pushing the boundaries of what's possible with cutting-edge technologies.",
];

export const quickFacts = [
  // { label: "Location", value: "Ho Chi Minh City, Vietnam" },
  { label: "Location", value: "Yangon Myanmar" },
  { label: "Email", value: email, href: `mailto:${email}` },
  { label: "Freelance", value: "Available", highlight: true },
  { label: "Nationality", value: "Myanmar" },
  { label: "Education", value: "Dagon University, Myanmar" },
  { label: "Degree", value: "Master" },
];

export const skills = [
  { name: "HTML5", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 85 },
  { name: "TypeScript", level: 75 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Redux", level: 80 },
  { name: "Next.js", level: 75 },
];

export const experience = [
  {
    period: "2023 — Now",
    company: "DevelopX",
    role: "Frontend Developer",
    current: true,
  },
  {
    period: "2022 — 2023",
    company: "MMSIT",
    role: "Frontend Developer",
  },
];

export const certificate = {
  title: "React & TypeScript — Certificate of Completion",
  description:
    "Successfully completed an intensive training program in React and TypeScript, focusing on building scalable and maintainable frontend applications. The program enhanced my understanding of component-based architecture, state management with Redux and React hooks, and type-safe programming with TypeScript.",
  href: certificateUrl,
};

export const knowledge = [
  "Bootstrap, Tailwind CSS",
  "React, Vue, Laravel",
  "Stylus, Sass, Less",
  "Redux, RTK Query",
  "React Native",
  "AWS, Cloud Computing",
];

export const interests = [
  "UI/UX design",
  "Mobile apps",
  "Site optimization",
  "Custom websites",
  "E-commerce",
];

export const services = [
  {
    id: "01",
    title: "Unique Design",
    description:
      "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.",
    icon: FiPenTool,
  },
  {
    id: "02",
    title: "Different Layout",
    description:
      "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.",
    icon: FiLayout,
  },
  {
    id: "03",
    title: "Make It Simple",
    description:
      "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.",
    icon: FiZap,
  },
  {
    id: "04",
    title: "Responsiveness",
    description:
      "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.",
    icon: FiSmartphone,
  },
  {
    id: "05",
    title: "Testing for Perfection",
    description:
      "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.",
    icon: FiCheckCircle,
  },
  {
    id: "06",
    title: "Advanced Options",
    description:
      "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.",
    icon: FiSliders,
  },
];

export const stats = [
  { value: "20+", label: "Projects Completed" },
  { value: "3k+", label: "Happy Clients" },
  { value: "9k+", label: "Lines of Code" },
];

export const projects = [
  {
    id: 1,
    name: "Company Profile",
    tech: "React",
    image: companyProfileImg,
    href: "https://developx.app/",
  },
  {
    id: 2,
    name: "Movie Streaming",
    tech: "React",
    image: movieStreamingImg,
    href: "https://moviespree.netlify.app/",
  },
  {
    id: 3,
    name: "Map Discovery App",
    tech: "TypeScript",
    image: mapDiscoveryImg,
    href: "https://veteran-driver-v1.netlify.app/",
  },
  {
    id: 4,
    name: "Company Profile",
    tech: "React",
    image: deproImg,
    href: "https://depro.netlify.app/",
  },
  {
    id: 5,
    name: "Hotel Website",
    tech: "React",
    image: hotelImg,
    href: "https://hotel-project-cjahgenxu-khant-nyar-ko-ko.vercel.app/",
  },
  {
    id: 6,
    name: "Portfolio Website",
    tech: "React",
    image: portfolioImg,
    href: "https://incomparable-jalebi-c1894f.netlify.app/",
  },
];
