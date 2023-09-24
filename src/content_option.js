
import kickstartup from './assets/images/kickstartup.png'; // Tell webpack this JS file uses this image
import touristapp from './assets/images/touristapp.jpg';
import kira from './assets/images/kira.svg';
import tableau from './assets/images/tableau.svg';
import profilePhoto from './assets/images/pp4.jpeg';
import { Upcoming } from '@mui/icons-material';



const logotext = "Chaitrali";
const meta = {
    title: "Chaitrali Shinde",
    description: "I’m Chaitrali Shinde  _ Full stack devloper,currently studing in USA",
};

const introdata = {
    title: "I’m Chaitrali Shinde",
    animated: {
        first: "I love coding",
        second: "I code cool applications",
        third: "I like cloud developement",
    },
    description: "A master student with some coding skills!",
    your_img_url: profilePhoto,
};

const dataabout = {
    title: "Something about me",
    aboutme: "I'm a graduate student at ASU. I have 1+ year of experience, I have worked as a software developer and a cloud developer in both front-end and back-end roles. My goal is to help companies and people, reduce their efforts by automating task and building new innovative products with the help of my software development and cloud knowledge.",
};
const worktimeline = [
    {
        jobtitle: "Cloud Developer",
        where: "Arizona State University",
        date: "2023- present",
    },
    {
        jobtitle: "Academic Tutor",
        where: "Arizona State University",
        date: "2022-2023",
    },
    {
        jobtitle: "Assistant System Engineer",
        where: "Tata Consultancy Services (TCS)",
        date: "2021- 2022",
    },
    {
        jobtitle: "Software developer (Sponsored-project)",
        where: " BOS Global India Private Limited",
        date: "2020-2021",
    },
    
];

const skills = [{
        name: "Languages",
        value: "Java, Python, C, C++, JavaScript (ES5/ES6), SQL, TypeScript, Node.js, HTML5, CSS3",
    },
    {
        name: "Frameworks",
        value: "React JS, Spring Boot, Bootstrap, Bokeh, Tableau, Material UI, Django, MySQL",
    },
    {
        name: "Tools",
        value: "GitHub , Jenkins, Jira, AWS, GCP, Postman , EC2, CloudWatch, REST API, Selenium ,Linux, Heroku, Docker, S3 , Lambda",
    },
    {
        name: "Skills",
        value: "Front-end, Agile, Back-end, Full-Stack, Micro-services, Cloud development",
    },
    {
        name: "Certification",
        value: "AWS Certified Solutions Architect - Associate (ID: TKZWZXGCVEQQ1P9Q, Valid: Jul 2023 - Jul 2026)",
    },
];

const services = [{
        title: "Arizona State University, Tempe, AZ",
        description: "Master of Information Technology",
    },
    {
        title: "Savitribai Phule Pune University, Pune, MH,India",
        description: "Bachelor of Computer Engineering",
    },
];

const dataportfolio = [{
        Pname: "KickStartUpcoming",
        img: kickstartup,
        description: "Developed a Microservices Architecture having 100+ REST APIs and 30+ microservices using React JS, Java Spring Boot,MySQL, Docker, AWS, and Route 53 and load balancer for scalibility and reliability.Deployed containerization images using Docker on AWS EC2.Utilized git version control to automating tests on 200+ dailycommits, ensuring code consistency and efficiency.",
        skills:" React JS, Java Spring Boot,MySQL, Docker, AWS EC2,Route 53 ",
        link: "https://github.com/Chaitrali-Shinde/Brute_Force_SIH.git",
    },
    {
        Pname: "Tourist Guide",
        img: touristapp,
        description: "Created an Android application using Android Studio, Firebase and Java, seamlessly integrating a Convolutional Neural Network (CNN) image classifier to pioneer advanced image recognition functionalities.Optimized and refined the image recognition system, achieving a remarkable 86% accuracy.",
        skills: "Android Studio, Firebase, Java, Convolutional Neural Network (CNN) image",
        link: "https://github.com/captivatorsHackathon",
    },
    {
        Pname: "Kira Skin Cancer predictor",
        img: kira,
        description: "Created a community health platform using React JS and integrated third-party API, resulting in a 50% traffic increase.Employed AWS services (S3, CloudFront, Lambda, Amplify, Cognito) for scalable hosting and efficient deployment.",
        skills:"React JS, AWS services (S3, CloudFront, Lambda, Amplify, Cognito)",
        link: "https://kira-skin-cancer.netlify.app/",
    },
    {

        Pname: "Dashboard for Courses analysis",
        img: tableau,
        description: "Preprocessed the data, removed the outliers of the dataset having 9,00,000, rows and 11 attributes using python bokeh library giving 95% data accuracy, obtained insights from the data on the publication, popularity, and price of the courses available on Udemy Developed custom prompts, calculations, conditions, and filters to generate various analytical reports on Udemy's course offerings. Created a visually compelling trend line visualization to analyze course prices, resulting in improved user engagement and actionable insights",
        skills: "Python Bokeh, Tableau",
        link: "https://public.tableau.com/authoring/Udemycoursesanalysis_16897366927660/Dashboard#1",
    },
];

const contactConfig = {
    YOUR_EMAIL: "chai.shinde100@gmail.com",
    YOUR_FONE: "(602)816-2209",
    description: "I am a diligent graduate student actively seeking opportunities that will challenge me, inspire me, and provide growth through rigorous learning experiences",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "",
    YOUR_TEMPLATE_ID: "",
    YOUR_USER_ID: "",
};

const socialprofils = {
    github: "https://github.com/Chaitrali-Shinde",
    //facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/chaitrali-shinde/",
    //twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};