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

const greeting = {
  username: "Mohammed Salman Ali",
  title: "Hi all, I'm Salman",
  subTitle: emoji(
    "A passionate Software Developer 💻 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Angular / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1VYqgZ18h5oKpV3YO_miP0IUcfF6NrXtl/edit?usp=sharing&ouid=117934868662281039128&rtpof=true&sd=true", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mohammedsalmanali",
  linkedin: "https://www.linkedin.com/in/mohammedsalmanali/",
  gmail: "salmanmohammed2098@gmail.com",
  leetcode: "https://www.leetcode.com/mohammedsalmanali",
  twitter: "https://www.twitter.com/MohdSalman015",
  
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "SASS",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab brands fa-angular"
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab brands fa-git-alt"
    },
    {
      skillName: "SQL-Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "TKM College of Engineering",
      logo: require("./assets/images/tkm.jpg"),
      subHeader: "Bachelor of Technology in Electronics and Communication Engineering",
      duration: "August 2017 - July 2021",
      desc: "Studied Electronics and Communication as main discipline and covered the basics of Computer Science and Programming.",
      
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

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



const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "salmanmohammed2098@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  twitterDetails,
  isHireable
};
