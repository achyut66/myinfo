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

export const PROFILE_DATA = {
    name: "Achyut Neupane",
    tagline: `A full-stack MERN, Web developer passionate about building engaging web applications and solving complex problems with code`,
    jobTitle: "Full Stack Developer",
    location: "Nepal",
    yearsOfExperience: "6 month of internship in MERN stack",
    skills: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Git",
        "GitHub",
        "Bootstrap",
        "TailwindCSS",
        "Redux",
        "NodeJs",
        "Express",
        "MongoDB"
    ],
    email: "green.band66@gmail.com",
    phone: "+977-9861023479",
    website: "https://achyutneupane.netlify.app",
};

export const SKILLS = [
    {
        title: "Frontend",
        icon : FaReact,
        skills: [
            { skill: "HTML" , persentage : '90%'},
            { skill: "CSS" , persentage : '90%' },
            { skill: "JavaScript" , persentage : '85%' },
            { skill: "React" , persentage : '90%' }
        ]
    },
    {
        title: "Backend",
        icon : FaNodeJs,
        skills: [
            { skill: "Node.js" , persentage : '60%'},
            { skill: "Express.js" , persentage : '50%' },
            { skill: "Mongodb" , persentage : '80%' },
        ]
    },
    {
        title: "Tools",
        icon :FaTools,
        skills: [
            { skill: "Visual Studio Code" , persentage : '90%'},
            { skill: "Git & Github" , persentage : '85%' },
            { skill: "Postman" , persentage : '50%' },
        ]
    },
    {
        title: "Soft Skills",
        icon : GiSkills ,
        skills: [
            { skill: "Problem-Solving" , persentage : '80%'},
            { skill: "Collaboration" , persentage : '90%' },
            { skill: "Attention to Detail" , persentage : '80%' }
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
        company: "Business Management Services",
        position: "Web Developer",
        duration: "2019 - 2024",
        description: "Developed and maintained web applications using HTML, CSS, JavaScript, and React.js. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    },
    {
        id: "01",
        company: "Nimbus Infosys",
        position: "System Support Engineer",
        duration: "2018 - 2019",
        description: "Support on development, finding issues and system installation and configuration and report to the team from on site. ",
    }
]

export const ABOUT_ME_DATA = {
    introduction: "Hi, I'm Achyut Neupane, A self-tought Laravel(php) Developer BIM student looking for an opportunity in Web Development. Who is committed to study web development. Mindset to fullfill the life with wonderful memories and knowledge.",
    background: "I hold a Bachelor's degree in Informtion Management from National College Of Computer studies, Kathmandu. ",
    interests: "Outside of coding, I enjoy traveling to new places, capturing moments through photography, and playing indoor games.",
    careerGoals: "In the future, I aim to continue honing my skills as a developer, exploring new technologies, and contributing to meaningful projects that make a positive impact on people's lives",
    stats: {
        yearsOfExperience: "0",
        numberOfProjects: 0,
        certificationsEarned: 0,
    },
}

export const Projects = [
    {
        title: "Ecommerce Business Website (Laravel Inertia + React + Mysql)",
        description: "LiveChatApp is a real-time one-on-one messaging application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Socket.io.",
        GithubLink: "https://github.com/itzshubu/LiveChatApp",
        LiveServerLink: "https://chat-app-deploye.onrender.com"
    },
    {
        title: "E-Commerce Website (MERN Stack)",
        description: "This full-stack e-commerce platform is built using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
        GithubLink: "https://github.com/itzshubu/full-stack-ecommerce-MERN",
        LiveServerLink: "https://fullstack-ecom-mern.netlify.app/"
    },
    {
        title: "download BCA question papers",
        description: "A website providing BCA question papers, notes, and study materials with an easy interface. Clone and open index.html",
        GithubLink: "https://github.com/itzshubu/Bca-question-paper-download-website",
        LiveServerLink: "https://downloadbcaquestionpaper.netlify.app/"
    },
    {
        title: "Catering Website Using Bootstrap",
        description: "Explore our Catering Website showcasing menus, services, and event options. Discover our tailored catering solutions designed to elevate every occasion.",
        GithubLink: "https://github.com/itzshubu/Catering-Website",
        LiveServerLink: "https://parkashcaterer.netlify.app/"
    },
    {
        title: "Twitter UI Clone Using TailwindCSS",
        description: "This repository is a responsive Twitter UI clone using TailwindCSS, replicating Twitter's design for developers to learn or build modern projects.",
        GithubLink: "https://github.com/itzshubu/Twitter-UI-Clone-Using-TailwindCSS",
        LiveServerLink: "https://twitter-ui-clone-using-tailwindcss.netlify.app/"
    },
    {
        title: "Weather App",
        description: "A weather app built with HTML, CSS, and JavaScript. It fetches weather data from OpenWeather API using the Fetch API.",
        GithubLink: "https://github.com/itzshubu/weather-app",
        LiveServerLink: "https://weather-website-api-using.netlify.app/"
    },
    {
        title: "Search countries",
        description: "RestCountries API fetches country data like population, capital, languages, and currencies. Ideal for developers integrating country-specific info.",
        GithubLink: "https://github.com/itzshubu/RestCountries",
        LiveServerLink: "https://atlas-countries.netlify.app/"
    },
    {
        title: "Password Generator using React",
        description: "A React.js password generator that creates secure, random passwords. Customize length and characters with a simple, responsive interface.",
        GithubLink: "https://github.com/itzshubu/Password-Generator-using-React.js",
        LiveServerLink: "https://generatepasswordusingreact.netlify.app/"
    },
    {
        title: "currency converter using reactjs",
        description: "A React.js currency converter with real-time conversion, user-friendly interface, and live exchange rates fetched via a custom hook.",
        GithubLink: "https://github.com/itzshubu/Currency-Converter-Using-React.js",
        LiveServerLink: "https://currency-converter-using-reactjs.netlify.app/"
    },
    {
        title: "Todo list using reactjs",
        description: "Todo List app built with React and Vite. Add, edit, delete, and mark tasks complete. Great for task management and learning React.",
        GithubLink: "https://github.com/itzshubu/TodoList-using-react",
        LiveServerLink: "https://todolistbyreact03.netlify.app/"
    },
    {
        title: "My portfolio from react.js",
        description: "A personal portfolio website built with React.js, featuring a modern, responsive design, dynamic content, and smooth navigation to showcase projects and skills.",
        GithubLink: "https://github.com/itzshubu/my-portfolio-react",
        LiveServerLink: "https://shubham-portfolio-reactjs.netlify.app"
    },
    {
        title: "E-commerce cart using react.js",
        description: "E-commerce app in React using React Router, useContext, and FakeStoreAPI for product listings, detail views, and cart functionality.",
        GithubLink: "https://github.com/itzshubu/e-commerce-using-react-with-router-useContext-fakestoreapi",
        LiveServerLink: "https://e-commerce-usingreact-router.netlify.app/products/all"
    },
    {
        title: "Insta Content Downloader using -node.js",
        description: "Insta Download API lets developers fetch downloadable Instagram images and videos via post URLs, simplifying media integration into apps.",
        GithubLink: "https://github.com/itzshubu/insta-download-api",
        LiveServerLink: ""
    },
    {
        title: "Registration form using node.js and mongoDB",
        description: "This project is a simple registration form built using Node.js and Mongoose. The form collects user details and stores them in a MongoDB database.",
        GithubLink: "https://github.com/itzshubu/registration-form-using-node.js-mongoose",
        LiveServerLink: ""
    },
    {
        title: "Backend to Frontend Handling API",
        description: "A full-stack project showcasing backend and frontend communication with a RESTful API. Built with modern JavaScript frameworks for scalable data handling.",
        GithubLink: "https://github.com/itzshubu/Backend-to-Frontend-Handling-API",
        LiveServerLink: ""
    },
]