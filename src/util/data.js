import {
    IoLogoJavascript,
    IoLogoHtml5,
    IoLogoReact,
} from "react-icons/io5";
import { FaBootstrap, FaCss3, FaNodeJs ,FaTools} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";

import holytune from "../assets/projects/holytune.jpg";
import travel from "../assets/projects/tms.jpg";
import nomad from "../assets/projects/nomad.jpg";
import plan from "../assets/projects/plan.jpg";
import chat from "../assets/projects/chat.jpg";
import dummyy from "../assets/projects/dummy.jpg";

export const PROFILE_DATA = {
    name: "Achyut Neupane",
    tagline: `A software & Web developer passionate about building engaging web applications and solving complex problems with code`,
    jobTitle: "Software Developer",
    location: "Nepal",
    yearsOfExperience: "3 years of experience in backend development (PHP) & 2 years in React",
    skills: [
        "Php (Codeigniter/Laravel)",
        "MySql",
        "React.js",
        "Vue.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Git",
        "GitHub",
        "Bootstrap",
        "TailwindCSS",
        "NodeJs",
        "Express",
        "MongoDB",
        "Linux",
        "MariaDB"
    ],
    email: "green.band66@gmail.com",
    phone: "+977-9861023479",
    website: "https://achutneupane.com.np",
};

export const SKILLS = [
    {
        title: "Frontend",
        icon : FaReact,
        skills: [
            { skill: "HTML" , persentage : '90%'},
            { skill: "CSS" , persentage : '80%' },
            { skill: "JavaScript" , persentage : '75%' },
            { skill: "React" , persentage : '76%' },
            { skill: "Bootstrap" , persentage : '76%' },
            { skill: "Vue" , persentage : '60%' },
        ]
    },
    {
        title: "Backend",
        icon : FaNodeJs,
        skills: [
            { skill: "Node.js" , persentage : '60%'},
            { skill: "Express.js" , persentage : '50%' },
            { skill: "Mongodb" , persentage : '80%' },
            { skill: "Php" , persentage : '85%' },
        ]
    },
    {
        title: "Tools",
        icon :FaTools,
        skills: [
            { skill: "Visual Studio Code" , persentage : '90%'},
            { skill: "Git & Github" , persentage : '85%' },
            { skill: "Postman" , persentage : '50%' },
            { skill: "Docker" , persentage : '60%' },
            { skill: "MongoDB" , persentage : '70%' },
            { skill: "Npm/Yarn" , persentage : '72%' },
            { skill: "Composer (PHP)" , persentage : '80%' },
            { skill: "Netlify" , persentage : '70%' },
            { skill: "AWS" , persentage : '50%' },
            { skill: "Figma" , persentage : '40%' },
            { skill: "Vite" , persentage : '60%' }
        ]
    },
    {
        title: "Soft Skills",
        icon : GiSkills ,
        skills: [
            { skill: "Problem-Solving" , persentage : '80%'},
            { skill: "Teamwork & Collaboration" , persentage : '90%' },
            { skill: "Attention to Detail" , persentage : '80%' },
            { skill: "Patience & Persistence" , persentage : '80%' },
            { skill: "Time Management" , persentage : '80%' },
            { skill: "Continuous Learning" , persentage : '80%' },
            { skill: "Giving & Receiving Feedback" , persentage : '90%' }
        ]
    },
]
// export const SKILLS2 = [
//     {
//         id: "01",
//         icon: IoLogoJavascript,
//         title: "JavaScript",
//         comment: "JavaScript simplify the development process and guarantee compatibility across browsers. JavaScript allows developers to create rich, interactive, and dynamic web apps ranging from simple scripts to complex web applications."

//     },
//     {
//         id: "02",
//         icon: IoLogoHtml5,
//         title: "HTML",
//         comment: "HTML is the foundation of every web project I work on. I have a deep understanding of its structure and semantics, ensuring my web applications are well structured and accessible."
//     },
//     {
//         id: "03",
//         icon: IoLogoReact,
//         title: "React JS",
//         comment: "I'm deeply passionate about React.js and have been using it extensively. I've built few projects in React JS"
//     },
//     {
//         id: "04",
//         icon: RiTailwindCssFill,
//         title: "Tailwind CSS",
//         comment: "Tailwind CSS has revolutionized the way I approach front-end styling. Its utility first approach allow me to rapidly build responsive and beautifully designed interfaces without writing custom CSS."
//     },
//     {
//         id: "05",
//         icon: FaBootstrap,
//         title: "Bootstrap",
//         comment: "Bootstrap offers a rich library of pre-designed user interface components, such as navigation bars, buttons, forms, modals, and more. These components come with well-defined styles and classes, making it effortless to integrate them into my web projects."
//     },
//     {
//         id: "06",
//         icon: FaCss3,
//         title: "CSS3",
//         comment: "CSS3 is a more advanced version of CSS and the successor of CSS2. CSS3 is used for the same thing as CSS, namely to style web pages and make them more attractive and user-friendly."
//     },
//     {
//         id: "07",
//         icon: FaNodeJs,
//         title: "NodeJs",
//         comment: "Node.js is a powerful JavaScript runtime built on Chrome's V8 engine. It is the successor to traditional JavaScript execution environments and is used to build fast and scalable server-side applications. Node.js allows developers to run JavaScript on the server, handle requests, and manage databases, making it an essential tool for modern web development."
//     }, {
//         id: "08",
//         icon: SiMongodb,
//         title: "Mongodb",
//         comment: "MongoDB is a NoSQL database designed for flexibility and scalability, storing data in a document-oriented format. It’s ideal for handling large, unstructured datasets in modern web apps."
//     }, {
//         id: "09",
//         icon: SiExpress,
//         title: "Express",
//         comment: "Express.js is a lightweight framework for Node.js that simplifies building web applications and APIs by handling routing, middleware, and requests efficiently."
//     },
// ];

export const Work_Experience = [
    {
        id: "01",
        company: "RBS (Rastriya Beemma Sansthan)",
        position: "Server Management",
        duration: "2017 - 2017",
        description: "Worked As An Intern In Server Handling and Reporting ",
    },
    {
        id:"02",
        company: "Nimbus Infosys",
        position: "System Support Engineer",
        duration: "2018 - 2019",
        description: "Support on development, finding issues and system installation and configuration and report to the team from on site. ",
    },
    {
        id: "03",
        company: "Business Management Services",
        position: "Web Developer",
        duration: "2020 - 2024",
        description: "Developed and maintained web applications using HTML, CSS, Php, JavaScript, React.js ,Vue.js, Node(Express). Collaborated with cross-functional teams to deliver high-quality software solutions.",
    },
    {
        id: "04",
        company: "Outsourcing",
        position: "Website Developer",
        duration: "2025 - Till",
        description: "E-commerce Fully Function Site for dropshipping business called Holytunecraft in nepal & developing the 'Travel Booking Management System' for global market targeting Nepal.",
    },
]

export const ABOUT_ME_DATA = {
    introduction: "Hi, I'm Achyut Neupane, A self-tought React (Node-Express), Developer BIM student looking for an opportunity in Web Development. Who is committed to study web development. Mindset to fullfill the life with wonderful memories and knowledge.",
    background: "I hold a Bachelor's degree in Informtion Management from National College Of Computer studies, Kathmandu. ",
    interests: "Outside of coding, I enjoy traveling to new places, capturing moments through photography, and playing indoor games.",
    careerGoals: "In the future, I aim to continue honing my skills as a developer, exploring new technologies, and contributing to meaningful projects that make a positive impact on people's lives",
    stats: {
        yearsOfExperience: "4",
        numberOfProjects: 8,
        certificationsEarned: 4,
    },
}

export const Projects = [
    
    {
        title: "E-Commerce Website",
        description: "This full-stack e-commerce platform is built using the React and Php-Laravel (React.js, Laravel,Vite,SSR).",
        GithubLink: "https://github.com/achyut66/holytune_craft",
        LiveServerLink: "https://holytunecraft.com/",
        dashImage:holytune
    },
    {
        title: "Travel Booking Management System",
        description: "A Client Management System build in React + Node (Express Server) to manage and handles all the tasks and finalize with dynamic search facilitate reports. (React.js,Node.js,MongoDB,Vite)",
        GithubLink: "https://github.com/achyut66/travelcms",
        LiveServerLink: "https://travelcms.netlify.app/",
        dashImage:travel
    },
    {
        title: "Live Chat System",
        description: "Build In Php Core for my internship program which can manage creation of users lists and can have chat live and also manage to create groups.",
        GithubLink: "https://github.com/achyut66/chatSys",
        LiveServerLink: "https://lively.netlify.app/",
        dashImage:chat
    },
    {
        title: "Travel & Tours Website",
        description: "This website build to listing the product or packages that company offers to their customers and also can place a order or book the package simply using email. (Php-Codeigniter,MySql)",
        GithubLink: "https://github.com/achyut66/nomad",
        LiveServerLink: "https://himalayanomad.com/",
        dashImage:nomad
    },
    {
        title: "Planning & Program Management System",
        description: "A system that handles the local governments fiscal years planning and commission management for the whole year (Php, MySql)",
        GithubLink: "https://github.com/achyut66/yojana-karyakram",
        LiveServerLink: "https://plan.annapurnamunmyagdi.gov.np/",
        dashImage:plan
    },
    {
        title: "Daily Tasks Management System",
        description: "Day to day tasks related to customer based inquiries in local governments. (Php, MySql,Bootstrap)",
        GithubLink: "https://github.com/bmssoftware/dhunibeshi-e-sifaris",
        LiveServerLink: "https://sifaris.jwalamukhimun.gov.np/login",
        dashImage:dummyy
    },
    {
        title: "Irrigation Management System",
        description: "System that tracks the amount of quantity should assign to how much of land for irrigation.(Php,Mysql,Bootstrap)",
        GithubLink: "https://github.com/FromWorkProjects/Sinchai",
        LiveServerLink: "https://irrigation.netlify.app/",
        dashImage:dummyy
    },
    {
        title: "School Management System",
        description: "Handles and keeps records of students,teachers and other staffs and also keep inventory record.(Php, Bootsrap, Mysql)",
        GithubLink: "https://github.com/bmssoftware/schoolmgmt",
        LiveServerLink: "https://school.netlify.app/",
        dashImage:dummyy
    },
]