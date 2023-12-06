/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};


const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Student Mentor",
      company: "Frontend Freaks",
      companylogo: require("./assets/images/frontendFreaks.png"),
      date: "June 2023 – Present",
      desc: "Working as a mentor for students starting with frontend development.",
      descBullets: [
        "Supported individuals through clearing doubts and catering skill acquisition.",
        "Committed to supporting potential developers and addressing learning gaps.",
        "Fostered a dynamic environment with knowledge-sharing activities."
      ]
    },
    {
      role: "Springboard Intern",
      company: "Infosys",
      companylogo: require("./assets/images/infosys.png"),
      date: "Jan 2023 – May 2023",
      desc: "Performed multiple roles primarily as a UI developer and a Scrum Master for a 6 member team.",
      descBullets: [
        "Led an Agile team in delivering an full stack education portal.",
        "Spearheaded Agile ceremonies including sprint planning, daily standups, story planning, release planning and so on.",
        "Collaborated with developers resulting in fostering a culture of code quality.",
    ]
    },
    {
      role: "Associate Software Engineer",
      company: "Virtusa",
      companylogo: require("./assets/images/virtusa.png"),
      date: "Dec 2021 – Feb 2023",
      desc: "Started the IT journey as a trainee working on web development.",
      descBullets: [
        "Actively participated in daily stand‑up meetings, contributing to sprint planning and continuous integration.",
        "Delivered a feature‑rich web application React and Node.js.",
        "Configured and optimized AWS services, resulting in a increase in application scalability.",
    ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/htllogo.png"),
      projectName: "Franklyn-Quarkus",
      projectDesc: "Franklyn is an application that provides students with a professional working environment during assessments.Teachers will be given the opportunity to create test sessions. Students can log in to a session with a PIN or by first and last name. The student client takes screenshots at regular intervals, which the teacher can view.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.htl-leonding.at/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/infosys.png"),
      projectName: "Automation System Schedulo for Monthly Schedule",
      projectDesc: "The project is a web based application that uses Angular as front-end and a database management system as the backend. The project automates the monthly scheduling process and have a central repository for unified view through a portal or standalone plug-in or SharePoint server.",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/AeromusGyan/Automation"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications"),
  subtitle:
    "Some Important Certifications that I have completed.",

  achievementsCards: [
    {
      title: "AWS AI Programming with Python Nanodegree",
      subtitle:
        "A 4-month long Nanodegree program that comprised of various hands on projects with final grading.",
      image: require("./assets/images/udacity.png"),
      imageAlt: "Udacity Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://graduation.udacity.com/confirm/ZLKLKHKS"
        },
        {
          name: "Final Project",
          url: "https://github.com/mohammedsalmanali/Udacity-AI-with-Python-Nanodegree"
        }
      ]
    },
    {
      title: "Microsoft AI Classroom Series",
      subtitle:
        "Take part in a Microsoft initiative on introduction to AI with final grading assessment",
      image: require("./assets/images/microsoft.png"),
      imageAlt: "Microsoft Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1EQqO8lf-w6clxwnUNbj0zMopcHoQxv3q/view"
        }
      ]
    },

    {
      title: "AWS Certified Developer - Associate Certification",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/infosys.png"),
      imageAlt: "Infosys Logo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1YqExXIAW6e5plNt1A7Br6IwGI6Qa5dgL/view"}
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section



// Talks Sections


// Podcast Section





// Twitter Section



const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  splashScreen,
  workExperiences,
  bigProjects,
  achievementSection,
  isHireable
};
