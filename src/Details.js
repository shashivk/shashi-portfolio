// Enter all your detials in this file
// Logo images
import logogradient from "./assets/shashi_logo.png";
import logo from "./assets/shashi_logo.png";
// Profile Image
import profile from "./assets/ShashiProfile.png";
// Tech stack images
import python from "./assets/techstack/python.png";
import pytorch from "./assets/techstack/pytorch.png";
import tf from "./assets/techstack/tensorflow.png";

import java from "./assets/techstack/java.png";
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import mysql from "./assets/techstack/mysql.png";
import django from "./assets/techstack/django.png";
import aws from "./assets/techstack/aws.png";

import intellij from "./assets/techstack/intellij.png";

import express from "./assets/techstack/express.png";
import springboot from "./assets/techstack/springboot.png";

import flask from "./assets/techstack/flask.png";
import jenkins from "./assets/techstack/jenkins.png";
import nginx from "./assets/techstack/nginx.png";
import nodejs from "./assets/techstack/nodejs.png";
import postgre from "./assets/techstack/postgre.png";
import redis from "./assets/techstack/redis.png";
import insomnia from "./assets/techstack/insomnia.png";

// Project Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Shashikumar Vanga",
  tagline: "I am a Full Stack Java Developer",
  img: profile,
  about: `Full Stack Java Developer with around 5 years of experience in designing, developing, and managing high-performance web and mobile applications using Java, Spring Boot, React, and Angular. Demonstrated expertise in leveraging cloud platforms (Azure, AWS, Pivotal Cloud Foundry) and CI/CD pipelines to optimize deployment and operational workflows. Dedicated to building scalable, efficient, and cutting-edge software solutions that drive business success.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkedin: "https://www.linkedin.com/in/shashikumar-vanga/",
  github: "https://github.com/shashivk",
  twitter: "https://twitter.com/VangaShashi",
  leetcode: "https://leetcode.com/u/ShashikumarVanga/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Full Stack Java Developer",
    Company: `Molina Healthcare`,
    Location: "Irving, TX",
    Type: "Contract",
    Duration: "January 2023 - Present",
    // Description:""
  },
  {
    Position: "Full Stack Java Developer",
    Company: `Humana Inc`,
    Location: "Hyderabad, TS",
    Type: "Contract",
    Duration: "November 2020 - June 2022",
    // Description:""
  },
  {
    Position: "Java Developer",
    Company: `Capgemini`,
    Location: "Chennai, India",
    Type: "Full-time",
    Duration: "September 2019 - October 2020",
    // Description:""
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "University of Missouri-Kansas City",
    Company: "Master of Science, Computer Science",
    Location: "Kansas City, MO",
    Duration: "August 2022 - December 2023",
    // Description:""
  },
  {
    Position: "VNR Vignana Jyothi Institute of Engineering and Technology",
    Company: `Bachelor of Technology, Electronics and Communication Engineering`,
    Location: "Hyderabad, India",
    Duration: "August 2015 - May 2019",
    // Description:""
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  // pytorch: pytorch,
  aws: aws,
  mysql: mysql,
  // django,
  // django,
  java: java,
  // python: python,
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  bootstrap: bootstrap,
  vscode: vscode,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  tf: tf,

  express: express,
  springboot: springboot,
  // flask: flask,
  jenkins: jenkins,
  nginx: nginx,
  nodejs: nodejs,
  postgre: postgre,
  redis: redis,
  insomnia: insomnia,
  intellij: intellij,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "STOCK MARKET CHARTING APPLICATION",
    image: projectImage1,
    description: `Developed a robust stock market charting application using Angular for the frontend, Spring Boot microservices for the backend, and MySQL for database management. Enhanced system scalability and maintainability through the development of multiple Spring Boot microservices, achieving a 30% improvement in response time and a 20% reduction in server load. Deployed the microservices on AWS, integrating Swagger for API documentation, which boosted response accuracy by 25%.`,
    techstack: "Java, Spring boot, Type Script, Angular, MySQL",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "GRAPHICAL ADVENTURE GAME – JAVA MVC ",
    image: projectImage6,
    description: `Developed a Java MVC-based Graphical Adventure Game incorporating Kruskal's Algorithm for dynamic maze generation and adhering to SOLID principles and design patterns for a scalable, maintainable codebase. Integrated both text-based and graphical user interfaces to enhance player engagement, and ensured the game's stability and performance through comprehensive JUnit testing.`,
    techstack: "Java, DSA, HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "WEB-BASED TWITTER CLONE",
    image: projectImage3,
    description: `Developed a scalable Twitter clone engine, Implemented frontend functionalities using React.js for dynamic user interfaces, while leveraging Node.js for backend services, enabling seamless user interactions and real-time updates. Implemented a WebSocket interface with a JSON-based API and support for public key-based authentication using Diffie-Helman protocol for the secret key with 256-bit elliptic curve public keys support.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "STUDENT SERVICE PORTAL",
    image: projectImage4,
    description: `Developed an interactive web portal using Java, JavaScript, HTML/CSS, and MySQL, serving over 100 students, facilitating applications for college facilities and real-time application tracking. ● Implemented high-performance, scalable, and maintainable software for a student service portal, integrating Java, JavaScript, HTML/CSS, and MySQL.`,
    techstack: "Java, JavaScript, HTML/CSS, MySQL",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Yelp Clone: Business Discovery Reservation",
    image: projectImage5,
    description: `Developed a dynamic, responsive web application for business information retrieval using Yelp APIs, featuring search functionality, autocompletion, a reservation system, and social media sharing on Facebook and Twitter. Implemented three versions of the application with different tech stacks: Flask with JavaScript, Node.js with Angular, and an Android app in Java. All versions were hosted on Google Cloud Platform (GCP) for optimal performance.`,
    techstack: " AngularJS, NodeJS, Python, Java, GCP, MongoDB",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "TOURNAMNET BRACKET GENERATOR",
    image: projectImage2,
    description: `I developed a scalable Tournament Bracket Generator using React for the frontend and Node.js with Express for the backend. The application supports over 1,000 players and allows for dynamic entries. It features client-side routing with React Router and stores up to 75,000 unique brackets in an asynchronous MongoDB database, managed through Mongoose. The project leverages Firebase for real-time features and is deployed on Heroku for scalable hosting.`,
    techstack: "React, Node, Express, MongoDB, Firebase, Heroku",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "shashi.vanga183@gmail.com",
  phone: "+1 (816) 217-1075",
};
